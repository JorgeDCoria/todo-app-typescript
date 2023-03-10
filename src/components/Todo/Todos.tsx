import { type ListOfTodos } from "../../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: string) => void;
  onToggleCompletedTodo: (id: string, completed: boolean) => void;
}
const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onRemoveTodo={onRemoveTodo}
          onToggleCompletedTodo={onToggleCompletedTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
