export async function movieLists (){
  const url = 'https://api.themoviedb.org/3/movie/now_playing';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
  };

  const results = await fetch(url, options);
  const movies = await results.json();

  return movies.results
}


export async function singleMovie(id){
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
};

  const results = await fetch(url, options);
  const movies = await results.json()

  return movies.results
}