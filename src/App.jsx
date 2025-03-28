import Navbar from './Components/Navbar'
import Favorites from './pages/Favorites'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div>
  <Navbar/>
  <main className='main-content'>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
  </main>
    </div>
  )
}

export default App
