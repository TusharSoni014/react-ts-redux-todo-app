import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    todoSlice: todoSlice,
  },
});

export interface RootState {
  todoSlice: ReturnType<typeof todoSlice>;
}
