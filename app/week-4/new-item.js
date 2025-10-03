"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 border rounded-lg p-4 shadow-sm w-fit bg-white">
        <span className="text-2xl font-semibold w-8 text-center">
          {quantity}
        </span>

        {/* Decrement Button (Pink) */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg text-white font-bold text-lg transition
            ${
              quantity === 1
                ? "bg-pink-300 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
        >
          -
        </button>

        {/* Increment Button (Blue) */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg text-white font-bold text-lg transition
            ${
              quantity === 20
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
