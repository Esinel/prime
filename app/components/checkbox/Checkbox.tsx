import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function CheckboxExample() {
  const categories = [
    { name: "Accounting", key: "A" },
    { name: "Marketing", key: "M" },
    { name: "Production", key: "P" },
    { name: "Research", key: "R" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };

  return (
    <div className="card flex justify-content-center">
      <div className="flex flex-column gap-3">
        {categories.map((category) => {
          return (
            <div
              key={category.key}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "9px 0",
                gap: "9px",
              }}
            >
              <Checkbox
                inputId={category.key}
                name="category"
                value={category}
                onChange={onCategoryChange}
                checked={selectedCategories.some(
                  (item) => item.key === category.key
                )}
                style={{ margin: "3px 0" }}
              />
              <label htmlFor={category.key} className="ml-2">
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
