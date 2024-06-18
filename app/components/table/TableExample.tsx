import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { Tag } from "primereact/tag";

export default function TableExample() {
  const [selectedProducts, setSelectedProducts] = useState(null);

  return (
    <div className="card">
      <DataTable
        paginator
        paginatorLeft
        rows={5}
        value={[
          {
            id: 1,
            code: "A123",
            name: "Product 1",
            category: <Tag value="State 1" severity="danger" />,
            quantity: 10,
          },
          {
            id: 2,
            code: "A124",
            name: "Product 2",
            category: <Tag value="State 1" severity="success" />,
            quantity: 20,
          },
          {
            id: 3,
            code: "A125",
            name: "Product 3",
            category: <Tag value="State 1" severity="info" />,
            quantity: 5,
          },
        ]}
        selectionMode="checkbox"
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="code" header="Header A"></Column>
        <Column field="name" header="Header B"></Column>
        <Column field="category" header="Header C"></Column>
      </DataTable>
    </div>
  );
}
