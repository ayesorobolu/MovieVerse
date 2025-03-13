import Navbar from './Components/Navbar'
import MovieCard from './Components/MovieCard'
function App() {

  return (
    <>
  <Navbar/>
  <MovieCard movie={{title: "xdfghj", release_date:"123"}}/>
    </>
  )
}

export default App
