import React from "react";
import { FILTERS_BUTTONS } from "../../../consts";
import { type FilterValue } from "../../../types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const aux = Object.entries(FILTERS_BUTTONS);
  console.log("🚀 ~ file: Filters.tsx:12 ~ aux:", aux);

  return (
    <ul>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
