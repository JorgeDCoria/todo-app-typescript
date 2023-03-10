import { type FilterValue } from "../../types";
import Filters from "./components/Filters";

interface Props {
  activeCount: number;
  onClearCompleted: () => void;
  completedCount: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
}
export const Footer: React.FC<Props> = ({
  activeCount = 0,
  onClearCompleted,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
}) => {
  return (
    <footer>
      <span>
        {" "}
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="bg-blue-300 p-2" onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  );
};
