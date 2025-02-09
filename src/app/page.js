import Link from "next/link";
import { movieLists } from "./actions/movies";

export default async function Home() {
  const movies = await movieLists();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Movies</h1>
      <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link key={movie.title} href={`/movie/${movie.id}`} className="block">
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
              <p className="text-gray-400 text-sm">⭐ {movie.vote_average}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
