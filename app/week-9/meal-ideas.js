"use client";

import { useState, useEffect } from "react";

// Fetch list of meals for an ingredient
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  async function loadMealIdeas() {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
  }

  return (
    <div className="bg-pink-100 p-6 rounded-lg max-w-md mx-auto shadow-md">
      <h2 className="text-2xl font-bold text-sky-500 mb-4">
        Meal Ideas for "{ingredient}"
      </h2>

      {meals.length > 0 ? (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="w-full text-left font-semibold text-gray-800 bg-white p-3 rounded-lg border border-gray-200 hover:bg-sky-50 transition"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 italic">
          Select an ingredient to see meal ideas.
        </p>
      )}
    </div>
  );
}
