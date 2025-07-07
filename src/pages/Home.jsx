import {useState, useEffect } from "react"
import Movies from "../components/Movies"
import "../css/Home.css"
import { searchMovies, getTopRatedMovies } from "../services/api"

function Home() {

const [searchQuery, setSearchQuery] = useState('')
const [movies, setMovies] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async() => {
      const data = await getTopRatedMovies()
      setMovies(data)
      setLoading(false)
    }
    fetchMovies()
  }, [])

  const handleSearch = async (e) => {
    console.log("hello")
    e.preventDefault()
    if(!searchQuery.trim()) 
      return
    if(loading) 
      return
    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      console.log(searchResults.length)
      if(searchResults.length === 0)
        setError(`No movie found for: ${searchQuery}`)
      else
        setError(null)
      setMovies(searchResults)
    } catch(e) {
      console.log(e)
      setError("Failed to search movies...")
    } finally {
      setLoading(false)
    }
  }
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

      {loading && <div className="loading">Loading...</div>}

      {!loading && error && (
        <div className="error-message">{error}</div>
      )}

      {!loading && !error &&(
        <div className="movies-grid">
          <Movies movies={movies} />
        </div>
      )}
    </div>
  )
}

export default Home