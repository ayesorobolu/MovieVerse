import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../Components/MovieCard'
import "../css/Favorites.css";
const Favorites = () => {
  const {favorites} = useMovieContext();

  if(favorites){
    return (
    <div className='favorites'>
      <h2>Favorites</h2>
    <div className="movies-grid">
      {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id} />)
    )}
  </div>
  </div>
    );
  }
  return (
    <div className='favorites-empty'>
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites