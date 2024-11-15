import './App.css'

// Vistas
import Home from './views/Home'
import Recognized from './views/Breeds/Recognized'
import Expermental from './views/Breeds/Experimental'
import Login from './views/auth/Login'
import Register from './views/auth/Register'

import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-primary text-negro py-6 px-4 mb-10 flex justify-between">
        <div className="mx-5 flex justify-between w-full">
          <h1 className='text-2xl font-bold'><NavLink to="/">Michi rest</NavLink></h1>
        
          <ul className='flex justify-between items-end w-1/3'>
            <li><NavLink to="/reconocidos">Reconocidos</NavLink></li>
            <li><NavLink to="/experimental">Experimentales</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </div>

      </div>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reconocidos" element={ <Recognized /> } />
        <Route path="/experimental" element={ <Expermental /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/registro" element={ <Register /> } />
      </Routes>

      {/* footer */}
      <div className="bg-black w-full min-h-10 p-4">
        <p className='text-white'>Mariana reynaga - DWM4AP - Aplicaciones Hibridas</p>
      </div>
    </>
  )
}

export default App
