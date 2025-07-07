
const API_KEY = "api-key";
const API_READ_ACCESS = "api-read-access";
const BASE_URL = "https://api.themoviedb.org/3"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_READ_ACCESS}`
  }
};

export const getTopRatedMovies = async() => {
  try {
    const res = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, options);
    const data = await res.json();
    console.log(data.results);
    return data.results; 
  } catch (err) {
    console.error(err);
    return []; 
  }
}

export const searchMovies = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, options);
    const data = await res.json();
    console.log(data.results);
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
} 

export const getMovieImage = async (movieID) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/${movieID}/images`, options);
    const data = await res.json();
    if (data.posters && data.posters.length > 0) {
      return data.posters[0].file_path; 
    }
    return null; 
  } catch (err) {
    console.error(err);
    return null;
  }
}