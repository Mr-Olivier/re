import React from "react";
import { categories } from "../../App";

interface Props {
  onSelecteCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelecteCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelecteCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
