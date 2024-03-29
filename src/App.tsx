import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import Todos from "./components/Todo/Todos";
import { TODO_FILTERS } from "./consts";
import { type Todo, type FilterValue } from "./types";

const mockTodos: Todo[] = [
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
  const [input, setInput] = useState("");
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newTodo: Todo = {
      title: input,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center gap-4 bg-gray-100 w-96 p-4 min-h-[300px]">
        <h1 className="text-2xl text-red-500 ">Hola mundo</h1>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            placeholder="Ingrese Tarea"
            value={input}
            name=""
            id=""
          />
          <input type="submit" value="Agregar" />
        </form>
        <Todos
          onRemoveTodo={handleRemove}
          todos={filteredTodos}
          onToggleCompletedTodo={handleCompleted}
        />
      </div>
      <Footer
        activeCount={activeCount}
        onClearCompleted={handleRemoveAllCompleted}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
