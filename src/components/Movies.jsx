
import React from 'react'
import "../css/MovieCard.css"
import MovieCard from './MovieCard';

function Movies({movies}) {

  return (

    <div className = "movies-grid">
        {movies.map(movie => (
          (<div key = {movie.id}>
            <MovieCard movie = {movie}></MovieCard>
          </div>)
        ))}
    </div>
  )
}

export default Movies

