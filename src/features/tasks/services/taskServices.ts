import { Task } from "../types/task";

export const taskService = {

    getAll: () : Task[] => {
        const data = localStorage.getItem("tasks");
        return data ? JSON.parse(data) : [];
    },

    saveAll: (tasks: Task[]): void => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}