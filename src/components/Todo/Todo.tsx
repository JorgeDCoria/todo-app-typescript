import { type Todo as TodoType } from "../../types";
interface Props extends TodoType {
  onRemoveTodo: (id: string) => void;
  onToggleCompletedTodo: (id: string, completed: boolean) => void;
}
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          onToggleCompletedTodo(id, e.target.checked);
        }}
      />
      <label htmlFor="">{title}</label>
      <button
        onClick={() => {
          onRemoveTodo(id);
        }}
      >
        x
      </button>
    </div>
  );
};
