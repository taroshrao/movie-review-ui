"use client";
import { useState } from "react";
import AllMovies from "@/components/AllMovies";
import RatedMovies from "@/components/RatedMovies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [allMovies, setAllMovies] = useState([
    {
      id: 1,
      movieName: "Zindagi Na Milegi Dobara",
      moviePoster: "/assets/images/znmd.jpg",
      movieReleaseYear: "15 July 2011",
      plotSummary:
        "Three friends embark on a road trip that turns into an opportunity to heal past wounds and face their deepest fears.",
      Rating: null,
    },
    {
      id: 2,
      movieName: "Chak De India",
      moviePoster: "/assets/images/chak-de-india.jpg",
      movieReleaseYear: "10 Aug 2007",
      plotSummary:
        "A disgraced hockey player coaches the Indian women's national team to prove his loyalty to the nation.",
      Rating: null,
    },
    {
      id: 3,
      movieName: "Kantara",
      moviePoster: "/assets/images/kantara.jpg",
      movieReleaseYear: "30 Sep 2022",
      plotSummary:
        "A tale rooted in folklore and divine beliefs, where conflict arises between tradition and law in a rural village.",
      Rating: null,
    },
  ]);

  const [ratedMovies, setRatedMovies] = useState([]);

  const handleRateMovie = (id, rating) => {
    const ratedMovie = allMovies.find((movie) => movie.id === id);
    ratedMovie.Rating = rating;

    setRatedMovies((prev) => [...prev, ratedMovie]);
    setAllMovies((prev) => prev.filter((movie) => movie.id !== id));

    toast.success(`You rated "${ratedMovie.movieName}" with ${rating} stars!`);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">🎬 Movie Review App</h1>

      <section className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">All Movies (No Rating Yet)</h2>
        <AllMovies movies={allMovies} onRate={handleRateMovie} />
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">⭐ Rated Movies</h2>
        <RatedMovies movies={ratedMovies} />
      </section>
    </main>
  );
}
