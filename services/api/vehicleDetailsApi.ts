import {api} from "@/services/api/baseApi";
import {ApiResponse, VehicleSearchResponse} from "@/interfaces/interfaces";

export const vehicleDetailsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        vehicles: builder.query<ApiResponse<VehicleSearchResponse>, {
            search_type: string;
            search_query: string,
        }>({
            query: ({search_type, search_query}) => ({
                url: "vehicles/search",
                method: "GET",
                params: {
                    search_type,
                    search_query
                }

            }),
        }),
    }),
});

export const {useVehiclesQuery, useLazyVehiclesQuery} = vehicleDetailsApi;


