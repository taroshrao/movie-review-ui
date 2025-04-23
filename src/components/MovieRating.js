// this shows the rating at the top out of 5 stars
import { Star } from "lucide-react";

export default function MovieRating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((num) => (
        <Star
          key={num}
          className={`w-5 h-5 ${
            rating >= num ? "fill-yellow-500" : "fill-none stroke-yellow-500"
          }`}
        />
      ))}
    </div>
  );
}
