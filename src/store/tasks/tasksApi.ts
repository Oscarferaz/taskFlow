import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Task } from "../../features/tasks/types/task"

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
            query: () => "/tasks",
        })
    })
})

export const { useGetTasksQuery } = tasksApi;