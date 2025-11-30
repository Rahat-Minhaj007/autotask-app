import axios from "axios";
import {baseUrl} from "@/config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

//make an axios instance
const axiosAuthInstance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    timeoutErrorMessage: "It's took too long to get response from server!"
});


// Request interceptor
axiosAuthInstance.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem("token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (e) {
            console.log("Error reading token:", e);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error.response || error.message);
    }
);

// Response interceptor

axiosAuthInstance.interceptors.response.use(
    (response) => {
        return response;
    },

    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401) {
            originalRequest._retry = true;
            await AsyncStorage.removeItem("token");
            console.log(error);
        }

        return Promise.reject(error.response || error.message);
    }
)



