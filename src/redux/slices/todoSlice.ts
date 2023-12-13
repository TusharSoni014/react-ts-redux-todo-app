import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  allTodos: Array<string>;
  editState: boolean;
  currentIndex: number;
}

const initialState: InitialStateType = {
  allTodos: [],
  editState: false,
  currentIndex: 0,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.allTodos.push(action.payload);
    },
    updateEditState: (state, action: PayloadAction<boolean>) => {
      state.editState = action.payload;
    },
    updateCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    updateTodo: (
      state,
      action: PayloadAction<{ text: string | undefined; index: number }>
    ) => {
      state.allTodos[action.payload.index] = action.payload.text ?? "";
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.allTodos = state.allTodos.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const {
  addTodo,
  updateEditState,
  updateCurrentIndex,
  updateTodo,
  deleteNote,
} = todoSlice.actions;
export default todoSlice.reducer;
