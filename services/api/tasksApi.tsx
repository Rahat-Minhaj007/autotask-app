import {api} from "@/services/api/baseApi";
import {ApiResponse, TaskListResponseData} from "@/interfaces/interfaces";

export const tasksApi = api.injectEndpoints({
    endpoints: (builder) => ({
        tasks: builder.query<ApiResponse<TaskListResponseData>, {
            from_date: string;
            to_date: string,
            per_page: number
        }>({
            query: ({from_date, to_date, per_page}) => ({
                url: "tasks",
                method: "GET",
                params: {
                    from_date,
                    to_date,
                    per_page
                }

            }),
        }),
    }),
});

export const {useTasksQuery} = tasksApi;


