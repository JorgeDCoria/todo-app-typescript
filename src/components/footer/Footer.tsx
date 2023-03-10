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
    </footer>
  );
};
