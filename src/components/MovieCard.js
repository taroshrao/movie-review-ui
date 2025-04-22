import Image from 'next/image';
import { Star, Calendar } from 'lucide-react'; // optional: install lucide-react for nice icons

// const movie = {
//   movieName: "Zindagi Na Milegi Dobara",
//   moviePoster: "/assets/images/znmd.jpg",
//   movieReleaseYear: { date: "15 July", year: 2011 },
//   Rating: 8.2,
//   hasReview: null
// }

export default function MovieCard(props) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white p-4 transform transition hover:scale-105 hover:shadow-2xl duration-300 mx-auto">
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
        <h2 className="text-2xl font-bold text-gray-900">{props.movieName}</h2>

        <div className="flex items-center text-yellow-600 font-semibold">
          <Star className="w-5 h-5 mr-1" />
          {props.Rating} / 10
        </div>

        <div className="flex items-center text-gray-700">
          <Calendar className="w-5 h-5 mr-1 text-blue-500" />
          Release: {props.movieReleaseYear}
        </div>

        <p className="italic text-sm text-gray-500">
          {props.hasReview ?? "No reviews yet, be the first!"}
        </p>

        <button className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
