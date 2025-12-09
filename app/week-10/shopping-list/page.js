"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

import { getItems, addItem } from "./_services/shopping-list-service";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  //  Protect page — redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-10"); // landing page
    }
  }, [user, router]);

  if (!user) {
    return <p className="p-6">Redirecting...</p>;
  }

  // -----------------------------
  //  WEEK 10 FIRESTORE VERSION
  // -----------------------------
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  async function loadItems() {
    const data = await getItems(user.uid);
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, []);

  // Add new item to Firestore + local state
  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    newItem.id = id;
    setItems([...items, newItem]);
  }

  // Handle selecting an item
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
        {/* LEFT SIDE */}
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
