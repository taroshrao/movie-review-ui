"use client";
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { useState } from "react";
import MovieRating from './MovieRating';
import AddRating from './AddRating';

export default function MovieCard(props) {
  const [userRating, setUserRating] = useState(props.Rating);
  const [showDetails, setShowDetails] = useState(false);

  // This function updates the user rating when a button is clicked
  const handleNewRating = (rating) => {
    setUserRating(rating);
  };

  return (
    <div className="w-full sm:w-[300px] max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white p-4 transform transition hover:scale-105 hover:shadow-2xl duration-300">
      
      {/* Movie Poster */}
      <div className="overflow-hidden rounded-xl">
        <Image 
          src={props.moviePoster} 
          alt={props.movieName}
          width={300}
          height={450}
          className="rounded-xl transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-4 space-y-2">
        {/* Movie Name */}
        <h2 className="text-2xl font-bold text-gray-900">{props.movieName}</h2>

        {/* Star Rating */}
        <MovieRating rating={userRating} />

        {/* Release Date */}
        <div className="flex items-center text-gray-700">
          <Calendar className="w-5 h-5 mr-1 text-blue-500" />
          Release: {props.movieReleaseYear}
        </div>

        {/* Review Placeholder */}
        <p className="italic text-sm text-gray-500">
          {props.hasReview ?? "No reviews yet, be the first!"}
        </p>

        {/* Rating Buttons */}
        <AddRating onRate={handleNewRating} />

        {/* View/Hide Details Button */}
        <button 
          className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {/* Plot Summary - Toggleable */}
        {showDetails && (
          <p className="mt-2 text-gray-700 text-sm">
            {props.plotSummary}
          </p>
        )}
      </div>
    </div>
  );
}
