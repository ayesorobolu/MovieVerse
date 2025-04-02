import React from 'react'
import MovieCard from '../Components/MovieCard'
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from '../services/api'
import "../css/Home.css";

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
    };

    loadPopularMovies()
}, []);

const handleSearch = async (e) => {
e.preventDefault( );   
if(!searchQuery.trim()) return
if(loading) return

setLoading(true)
try {
const searchResults = await searchMovies(searchQuery);
setMovies(searchResults);
setError(null);
}catch (err) {
console.log(err) 
setError("Failed to search movies...")
} finally{
  setLoading(false)
}
};
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


     {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Homepage