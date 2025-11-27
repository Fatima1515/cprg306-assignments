"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-pink-200 p-6 rounded-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
        />

        {/* Quantity and Category */}
        <div className="flex gap-4 items-center">
          {/* Quantity Box with buttons */}
          <div className="flex items-center bg-white border rounded-lg px-4 py-2 space-x-3">
            <span className="font-mono text-lg w-14 text-left">{quantity}</span>

            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`w-10 h-8 flex justify-center items-center font-bold text-white rounded-md transition
                ${
                  quantity === 1
                    ? "bg-pink-300 cursor-default opacity-80"
                    : "bg-pink-500 hover:bg-pink-600 cursor-pointer"
                }`}
              onFocus={(e) => e.target.blur()}
            >
              -
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 99}
              className={`w-10 h-8 flex justify-center items-center font-bold text-white rounded-md transition
                ${
                  quantity === 99
                    ? "bg-sky-300 cursor-default opacity-80"
                    : "bg-sky-400 hover:bg-sky-500 cursor-pointer"
                }`}
              onFocus={(e) => e.target.blur()}
            >
              +
            </button>
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-3 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded transition"
        >
          +
        </button>
      </form>
    </div>
  );
}
