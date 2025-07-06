
import MovieCard from "../components/MovieCard"
import {useState} from "react"
function Home() {

const [searchQuery, setSearchQuery] = useState('')

  const movies = [
    {id: 1, title: "aaaaaaa", release_date: 2020},
    {id: 2, title: "bbbbbbb", release_date: 2021},
    {id: 3, title: "ccccccc", release_date: 2022},
    {id: 4, title: "ddddddd", release_date: 2023},
    {id: 5, title: "eeeeeee", release_date: 2024}
  ]
  const handleSearch = () => {}
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type = "text" 
          placeholder = "Search for movies..." 
          className = "search-input"
          value = {searchQuery}  
          onChange = {e => setSearchQuery(e.target.value)}
        ></input>
        <button type = "submit" className="search-button">Search</button>
      </form>
      
      <div className="movies-grid"></div>
      {movies.map(movie => <MovieCard movie = {movie} key = {movie.id}></MovieCard>)}
  </div>
  )
}

export default Home