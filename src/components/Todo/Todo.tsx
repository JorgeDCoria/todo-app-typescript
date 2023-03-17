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
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo(id, e.target.checked);
  };
  return (
    <div
      className={`h-10 p-2 w-full flex justify-between rounded-md ${
        completed ? "bg-gray-400 line-through " : "bg-gray-700"
      }  text-white`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          handleCheck(e);
        }}
      />
      <label htmlFor="">{title}</label>
      <button
        className="bg-red-600 w-8 hover:bg-red-500"
        onClick={() => {
          onRemoveTodo(id);
        }}
      >
        x
      </button>
    </div>
  );
};
