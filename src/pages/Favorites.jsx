
import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import Movies from '../components/Movies'

function Favorites() {
  const {favorites} = useMovieContext()
  console.log(favorites)
  if (favorites) {
    return (
      
      <Movies movies = {favorites}></Movies>
    )
  }
  return (
    <div className = "favorites-empty">
      <h2>No favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites
