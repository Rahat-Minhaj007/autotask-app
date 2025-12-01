import {api} from "@/services/api/baseApi";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({email, password}) => ({
                url: "/api/v1/auth/login",
                method: "POST",
                data: {
                    email,
                    password
                }
            }),
        }),
    }),
});

export const {useLoginMutation} = authApi;

