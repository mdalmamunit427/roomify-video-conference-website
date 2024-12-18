
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'

function App() {


  return (
    <div className='max-w-screen-2xl container mx-auto px-4'>
     <Navbar/>
     <Home/>
    </div>
  )
}

export default App
