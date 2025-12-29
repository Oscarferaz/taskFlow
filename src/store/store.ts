import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/tasksSlice";
import { tasksApi } from "./tasks/tasksApi";
import { uiReducer } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        [tasksApi.reducerPath]: tasksApi.reducer, 
        ui: uiReducer,
    },
    middleware: (getDefault) => getDefault().concat(tasksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;