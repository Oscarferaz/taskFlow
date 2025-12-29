import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType = "addTask" | null;

interface UIState {
  modal: ModalType;
}

const initialState: UIState = {
  modal: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.modal = action.payload;
    },
    closeModal: (state) => {
      state.modal = null;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;