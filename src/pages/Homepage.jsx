import React from 'react'
import MovieCard from '../Components/MovieCard'
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from '../services/api'

const Homepage = () => {
 const [searchQuery, setsearchQuery] = useState("");
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true)
useEffect(() => {
    const loadPopularMovies = async () => {
        try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch(err){
            setError("Failed to load movies...")
        }
         finally{
            setLoading(false)
         }
    }

    loadPopularMovies()
}, [])

const handleSearch = (e) => {
e.preventDefault( )    
alert(searchQuery)
}
  return (

    <div className='home'>
    <form onSubmit={handleSearch} className='search-form'>
    <input 
    type="text" 
    placeholder='Search for movies' 
    className='search-input' 
    value={searchQuery} 
    onChange={(e) => setsearchQuery(e.target.value)} 
    />  

    <button type='submit' className='search-button'>Search</button>  
    </form> 
    
     {error && <div className='error-message'>{error}</div>}

    {loading ? <div className='loading...'></div>:     <div className='movies-grid'>
    {movies.map((movie) => 
    movie.title.toLowerCase().startsWith(searchQuery) && (
    <MovieCard movie={movie} key={movie.id}/>
    )
    )}
    </div>}

    </div>
  )
}

export default Homepage