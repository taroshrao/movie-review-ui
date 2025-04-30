// components/AllMovies.js
"use client";
import MovieCard from "./MovieCard";

export default function AllMovies({ movies, onRate }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-center mb-6">🎬 All Movies</h2>
      <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRate={onRate}
            showAddRating={true}
          />
        ))}
      </div>
    </div>
  );
}

