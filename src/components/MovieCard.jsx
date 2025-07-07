import React from 'react'
import MovieImages from './MovieImages'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({movie}) {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id)
  function favoriteHandler(e){
    e.preventDefault()
    if(favorite) 
      removeFromFavorites(movie.id)
    else
      addToFavorites(movie)
  }

  return (
    <div className='movie-card'>
      <div className = "movie-poster">
        <MovieImages movieID={movie.id} movieTitle ={movie.title}></MovieImages>
        <div className='movie-overlay'>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={favoriteHandler}>
            ♡
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
