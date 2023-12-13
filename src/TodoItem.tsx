import { useDispatch } from "react-redux";
import {
  deleteNote,
  updateCurrentIndex,
  updateEditState,
} from "./redux/slices/todoSlice";

export default function TodoItem({
  todo,
  index,
}: {
  todo: string;
  index: number;
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" p-3 bg-slate-400 flex justify-between rounded">
        <p>{todo}</p>
        <div className="__btn_container flex gap-1">
          <button
            onClick={() => dispatch(deleteNote(index))}
            className="p-2 bg-red-500 shadow-md rounded transition"
          >
            Delete
          </button>
          <button
            onClick={() => {
              dispatch(updateCurrentIndex(index));
              dispatch(updateEditState(true));
            }}
            className="p-2 bg-green-700 rounded shadow-md transition"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
