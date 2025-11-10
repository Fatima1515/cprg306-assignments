"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Handle adding a new shopping list item
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Handle clicking on a shopping list item
  function handleItemSelect(item) {
    if (!item || !item.name) return;

    // Clean up the item name (remove commas, quantities, emojis, etc.)
    let cleanedName = item.name
      .split(",")[0] // remove anything after comma
      .replace(/[^\p{L}\p{N}\s]/gu, "") // remove emojis & special chars
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-sky-400 mb-6 text-center md:text-left">
        Shopping List
      </h1>

      {/* Flex layout: Shopping list on the left, meal ideas on the right */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: NewItem form and ItemList */}
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side: Meal Ideas */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
