import Image from 'next/image';

const movie = {
  movieName: "Zindagi Na Milegi Dobara",
  moviePoster: "/assets/images/znmd.jpg",
  movieReleaseYear: {date: "15 July", year: 2011},
  Rating: 8.2,
  hasReview: null
 }
export default function MovieCard() {
  //  const myName = "Tarosh";

   return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <Image 
        src={movie.moviePoster} 
        alt={movie.movieName}
        width={300}
        height={450}
        className="rounded"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">Movie Name: {movie.movieName}</h2>
        <p className="text-gray-700">Movie Rating: {movie.Rating}</p>
        <p className="text-gray-700">Release Year: {movie.movieReleaseYear.year}</p>
      </div>
    </div>
  );
};

// HTML -> Not HTML something like HTML
//JSX ->  Javascript XML
//Building the UI