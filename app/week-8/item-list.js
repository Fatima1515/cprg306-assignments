"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of items (immutably)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Sort Buttons */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-semibold text-gray-800">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded font-semibold transition ${
            sortBy === "name"
              ? "bg-sky-400 text-white"
              : "bg-pink-300 text-gray-800 hover:bg-pink-400"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded font-semibold transition ${
            sortBy === "category"
              ? "bg-sky-400 text-white"
              : "bg-pink-300 text-gray-800 hover:bg-pink-400"
          }`}
        >
          Category
        </button>
      </div>

      {/* Item List */}
      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)} // 👈 pass item when clicked
          />
        ))}
      </ul>
    </div>
  );
}
