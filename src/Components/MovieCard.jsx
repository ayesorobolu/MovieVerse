import React from 'react'

const MovieCard = ({movie}) => {
    const onFvaoriteClick = async  () => {
        alert("clicked")
    }
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movie.url} alt="" />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onFvaoriteClick}> 🤍</button>
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