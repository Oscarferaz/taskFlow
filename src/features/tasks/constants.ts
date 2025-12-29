export const TASK_STATUS = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
} as const;

export const TASK_STATUSES = [
  TASK_STATUS.TODO,
  TASK_STATUS.DOING,
  TASK_STATUS.DONE,
] as const;

export type TaskStatus = typeof TASK_STATUSES[number];
