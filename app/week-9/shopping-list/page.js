"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // 🔒 Protect the page
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // redirect to login
    }
  }, [user, router]);

  if (!user) {
    return <p className="p-6">Redirecting...</p>;
  }

  // --- Your original code below this line ---
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    if (!item || !item.name) return;

    let cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-sky-400 mb-6 text-center md:text-left">
        Shopping List
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
