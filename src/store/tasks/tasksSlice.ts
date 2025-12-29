import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { Task } from "../../features/tasks/types/task";
import { TASK_STATUS } from "../../features/tasks/constants";

interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: [],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: {
            reducer: (state, action: PayloadAction<Task>) => {
                state.items.push(action.payload);
            },
            prepare: (title: string, description?: string) => ({
                payload: {
                id: nanoid(),
                title,
                description,
                status: TASK_STATUS.TODO,
                createdAt: Date.now(),
                } as Task,
            }),
        }
    }
})

export const {  addTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;