import type { TaskStatus } from "../constants";

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    createdAt: number;
}