
import React, {useState, useEffect, use} from 'react'

function MovieImages({movieID, movieTitle}) {
  const [posterPath, setPosterPath] = useState([])
  const url = `https://api.themoviedb.org/3/movie/${movieID}/images`;
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
      if(data.posters && data.posters.length >0)
        setPosterPath(data.posters[0].file_path)
    })
    .catch(err => console.error(err));
  }, [movieID])

  if (!posterPath) {
    alert(`No poster found for movie: ${movieTitle}`)
  }

  return (
    <div>
      {posterPath ? (
        <img
          src = {`https://image.tmdb.org/t/p/w200/${posterPath}`}
          alt = {`${movieTitle} poster`}
        ></img>
      ) : (
        <p>No poster available</p>
      )
    }
    </div>
  )
}

export default MovieImages
