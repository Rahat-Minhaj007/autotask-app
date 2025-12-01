import axiosAuthInstance from "@/helpers/axiosAuthInstance";
import {BaseQueryFn, createApi} from "@reduxjs/toolkit/query/react";

interface AxiosArgs {
    url: string;
    method: string;
    data?: any;
    params?: any;
};

const axiosBaseQuery = (): BaseQueryFn<AxiosArgs, unknown, unknown> => async ({url, method = "GET", data, params}) => {
    try {
        const result = await axiosAuthInstance({url, method, data, params});
        return {data: result?.data};
    } catch (error: any) {
        return {
            error: {
                status: error?.response?.status,
                message: error?.response?.message || error,
            }
        }
    }
};

export const api = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({}),
});