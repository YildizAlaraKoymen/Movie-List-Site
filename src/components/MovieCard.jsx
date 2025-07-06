
import React from 'react'

function MovieCard({movie}) {

  function favoriteHandler(){
    alert('clicked')
  }
  return (
    <div className = 'movie-card'>
      <div className = 'movie-poster'>
        <img src = {movie.url} alt = {movie.title}></img>
        <div className='movie-overlay'>
          <button className='favorite-btn' onClick={favoriteHandler}>
            ♡
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <>{movie.release_date}</>
      </div>

    </div>
  )
}

export default MovieCard
