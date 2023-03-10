import { type ListOfTodos } from "../../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: string) => void;
}
const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
