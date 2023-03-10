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
  const [todos] = useState(mockTodos);
  return (
    <div className="App">
      <h1 className="text-2xl text-red-500">Hola mundo</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
