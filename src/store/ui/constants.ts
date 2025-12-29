export const MODAL = {
  ADD_TASK: "addTask",
} as const;

export type ModalValue = typeof MODAL[keyof typeof MODAL];
export type ModalType = ModalValue | null;
