// components/RatedMovies.js
"use client";
import MovieCard from "./MovieCard";

export default function RatedMovies({ movies }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">⭐ Rated Movies</h2>
      <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showAddRating={false}
          />
        ))}
      </div>
    </div>
  );
}
