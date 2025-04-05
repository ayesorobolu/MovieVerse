import React from 'react'
import MovieCard from '../Components/MovieCard'
import { useState, useEffect } from 'react'
import { FaSearch} from "react-icons/fa";
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
    <header className='header'>
        <div className="header-content">
          <h2>Discover Your Favorite Movies</h2>
          <p>Explore trending movies and more.</p>
          <br />
          <form onSubmit={handleSearch} className='search-form'>
    <input 
    type="text" 
    placeholder='Search for movies' 
    className='search-input' 
    value={searchQuery} 
    onChange={(e) => setsearchQuery(e.target.value)} 
    />  

    <button type='submit' className='search-button'> <FaSearch /></button>  
    </form> 
        </div>
      </header>

      <br />

     <div className='movie-display'>
     <div> <h1>TRENDING MOVIES</h1> </div>
  <br />
    
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

      <br />
      <br />

<footer className="footer">
  <div className="footer-header">
    <h4>Connect with Us</h4>
  </div>

  <div className="social-links">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
  </div>

  <div className="footer-text">
    <p>Explore the world of movies and enjoy endless entertainment.</p>
  </div>

  <div className="copyright">
    <p>© 2025 MovieVerse. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Homepage