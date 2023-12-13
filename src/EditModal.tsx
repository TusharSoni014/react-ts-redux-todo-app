import { useDispatch, useSelector } from "react-redux";
import { updateEditState, updateTodo } from "./redux/slices/todoSlice";
import { RootState } from "./redux/store";
import { FormEvent, useState } from "react";

export default function EditModal() {
  const dispatch = useDispatch();
  const activeIndex = useSelector(
    (state: RootState) => state.todoSlice.currentIndex
  );
  const allTodos = useSelector((state: RootState) => state.todoSlice.allTodos);
  const [updatedTodo, setUpdateTodo] = useState<string | undefined>(
    allTodos.find((_, index) => index === activeIndex)
  );

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateTodo({ index: activeIndex, text: updatedTodo }));
    dispatch(updateEditState(false));
  };

  return (
    <div className="__edit_modal absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#00000070] w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleEdit}
        className="bg-slate-700 p-5 rounded flex gap-2"
      >
        <input
          className="p-3 text-black rounded outline-none"
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdateTodo(e.target.value)}
          placeholder="type the update value"
        />
        <button className="p-3 rounded bg-green-700" type="submit">
          Edit Note
        </button>
        <button
          onClick={() => dispatch(updateEditState(false))}
          className="p-3 rounded bg-red-500"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
