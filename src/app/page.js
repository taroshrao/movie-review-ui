import MovieCard from "@/components/MovieCard"; 

export default function Home() {
  return (
    // Page wrapper with background and vertical padding
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">Movie List</h1>

      {/* Responsive flex container to align movie cards side by side with wrapping */}
      <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {/* Each MovieCard has movie info, poster, release date, and plot summary */}
        <MovieCard 
          movieName="Zindagi Na Milegi Dobara"
          moviePoster="/assets/images/znmd.jpg"
          movieReleaseYear="15 July 2011"
          Rating={null}
          plotSummary="Three friends embark on a road trip that turns into an opportunity to heal past wounds and face their deepest fears."
        />
        <MovieCard 
          movieName="Chak De India"
          moviePoster="/assets/images/chak-de-india.jpg"
          movieReleaseYear="10 Aug 2007"
          Rating={null}
          plotSummary="A disgraced hockey player coaches the Indian women's national team to prove his loyalty to the nation."
        />
        <MovieCard 
          movieName="Kantara"
          moviePoster="/assets/images/kantara.jpg"
          movieReleaseYear="30 Sep 2022"
          Rating={null}
          plotSummary="A tale rooted in folklore and divine beliefs, where conflict arises between tradition and law in a rural village."
        />
      </div>
    </main>
  );
}
