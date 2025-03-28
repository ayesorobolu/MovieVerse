import React from 'react'
import MovieCard from '../Components/MovieCard'
import { useState } from 'react'

const Homepage = () => {
 const [searchQuery, setsearchQuery] = useState("");

const movies = [
    {id:1, title:"john wick", release_date:"2024"},
    {id:2, title:"spenser confidential", release_date:"2020"},
    {id:3, title:"naruto", release_date:"2006"},
]

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

    <div className='movies-grid'>
    {movies.map((movie) => 
    movie.title.toLowerCase().startsWith(searchQuery) && (
    <MovieCard movie={movie} key={movie.id}/>
    )
    )}
    </div>
    </div>
  )
}

export default Homepage