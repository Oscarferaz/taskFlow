import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../features/tasks/types/task";

interface TasksState {
  items: Task[];
}

const initialState = {
    items: [] as Task[]
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.items = action.payload;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.items.push(action.payload);
        },
    }
})

export const { setTasks, addTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;