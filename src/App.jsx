import Navbar from './Components/Navbar'
import Favorites from './pages/Favorites'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import "./css/App.css";
function App() {

  return (
  <MovieProvider>
  <Navbar/>
  <main className='main-content'>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
  </main>
  </MovieProvider>
  )
}

export default App
