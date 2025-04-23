//This component allows the user to select a rating, and it informs the parent component about the selected rating using a callback.

"use client";
import { useState } from "react";

export default function AddRating({ onRate }) {
  const [selectedRating, setSelectedRating] = useState(null); //selectedRating is the rating the user just picked in this component.

  const handleRating = (rating) => {
    setSelectedRating(rating);
    onRate(rating); // onRate is a function passed from the parent (MovieCard) to receive the new rating.
  };

  return (
    <div className="flex gap-2 mt-2">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => handleRating(num)}
          className={`w-8 h-8 rounded-full text-white font-bold ${
            selectedRating === num ? "bg-yellow-500" : "bg-gray-400"
          } hover:bg-yellow-400 transition`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
