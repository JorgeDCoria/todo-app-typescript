import { type Todo as TodoType } from "../../types";
interface Props extends TodoType {
  onRemoveTodo: (id: string) => void;
}
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
}) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => {}} />
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
