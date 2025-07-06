
import React, {useState, useEffect} from 'react'
import MovieImages from './MovieImages';

function Movies() {
  const [movies, setMovies] = useState([])
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer -authentication-'
    }
  };
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      })
      .catch(err => console.error(err))
    }, [])

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key = {movie.id}>
            {movie.original_title}
            <MovieImages movieID={movie.id} movieTitle ={movie.original_title}></MovieImages>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies

