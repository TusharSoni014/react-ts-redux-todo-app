import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import TodoItem from "./TodoItem";
import { FormEvent, useState } from "react";
import { addTodo } from "./redux/slices/todoSlice";
import EditModal from "./EditModal";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const editState = useSelector(
    (state: RootState) => state.todoSlice.editState
  );
  const dispatch = useDispatch();

  // e is form event inside react
  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  const allTodos = useSelector((state: RootState) => state.todoSlice.allTodos);
  return (
    <div className="bg-slate-600 text-white min-h-screen p-3 relative">
      <form
        onSubmit={handleAddTodo}
        className="p-2 flex justify-center items-center gap-2"
      >
        <input
          className="outline-none p-2 rounded border-none text-black"
          type="text"
          required
          placeholder="Type your note here..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className="p-2 rounded bg-slate-800 transition active:bg-slate-900"
          type="submit"
        >
          + Add
        </button>
      </form>
      <div className="__all_todos_container flex flex-col gap-3">
        {allTodos?.map((todo, index) => {
          return <TodoItem key={index} index={index} todo={todo} />;
        })}
      </div>
      {editState && <EditModal />}
    </div>
  );
}

export default App;
