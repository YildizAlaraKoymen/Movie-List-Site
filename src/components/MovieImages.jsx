
import React, {useState, useEffect, use} from 'react'
import { getMovieImage } from '../services/api'

function MovieImages({movieID, movieTitle}) {
  const [posterPath, setPosterPath] = useState([])

  useEffect(() => {
    const fetchImages = async() => {
      const data = await getMovieImage(movieID)
      setPosterPath(data)
    }
    fetchImages()
  }, [movieID])


  return (
    <div>
      {posterPath ? (
        <img
          src = {`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt = {`${movieTitle} poster`}
        ></img>
      ) : (
        <p className='no-poster'>No poster available</p>
      )
    }
    </div>
  )
}

export default MovieImages
