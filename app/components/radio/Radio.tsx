import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function Radio() {
  const categories = [
    { name: "Accounting", key: "A" },
    { name: "Marketing", key: "M" },
    { name: "Production", key: "P" },
    { name: "Research", key: "R" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

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
              <RadioButton
                inputId={category.key}
                name="category"
                value={category}
                onChange={(e) => setSelectedCategory(e.value)}
                checked={selectedCategory.key === category.key}
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
