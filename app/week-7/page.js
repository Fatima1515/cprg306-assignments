"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-center md:justify-start mb-6">
        <h1
          className="text-3xl font-bold text-sky-300"
          style={{ marginLeft: "20px" }}
        >
          Shopping List
        </h1>
      </div>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
