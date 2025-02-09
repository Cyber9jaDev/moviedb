import { fetchMovieDetails } from "@/app/actions/movies";
import Link from "next/link";

export default async function MovieDetails({ params }) {
  const { id } = await params;
  const movie = await fetchMovieDetails(id);

  if (!movie) return <p className="text-center mt-10">Movie not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500">← Back to Movies</Link>
      <div className="mt-6 flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-400">{movie.tagline}</p>
          <p className="mt-4">{movie.overview}</p>
          <p className="mt-2 text-gray-500">⭐ {movie.vote_average} / 10</p>
          <p className="mt-2 text-gray-500">🎬 {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}