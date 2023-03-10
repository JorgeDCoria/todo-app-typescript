import { useState } from "react";
import Todos from "./components/Todo/Todos";

const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];
function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleCompleted = (id: string, completed: boolean): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed };
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center gap-4 bg-gray-100 w-96 p-4 min-h-[300px]">
        <h1 className="text-2xl text-red-500 ">Hola mundo</h1>
        <Todos
          onRemoveTodo={handleRemove}
          todos={todos}
          onToggleCompletedTodo={handleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
