import {api} from "@/services/api/baseApi";
import {ApiResponse, LoginResponse} from "@/interfaces/interfaces";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ApiResponse<LoginResponse>, { email: string; password: string }>({
            query: ({email, password}) => ({
                url: "auth/login",
                method: "POST",
                headers: {Authorization: ""}, // override
                params: {
                    email,
                    password
                }
            }),
        }),
    }),
});

export const {useLoginMutation} = authApi;

