export async function movieLists (){
  const url = 'https://api.themoviedb.org/3/movie/now_playing';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results;

  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}


export async function fetchMovieDetails(id){
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
};



try {
  
  const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    return await response.json();

  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}