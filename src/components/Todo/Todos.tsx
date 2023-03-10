import { type ListOfTodos } from "../../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
}
const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default Todos;
