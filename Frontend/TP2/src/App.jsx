import './App.css'

// Vistas
import Home from './views/Home'
import Recognized from './views/Breeds/Recognized'
import CreateRecog from './views/Breeds/CreateRecog'
import Expermental from './views/Breeds/Experimental'
import CreateExper from './views/Breeds/createExper'
import Details from './views/Breeds/Details'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import NotFound from './views/NotFound'

import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-primary text-negro py-6 px-4 mb-10 flex justify-between fixed top-0 left-0 right-0">
        <div className="mx-5 flex justify-between w-full">
          <h1 className='text-2xl font-bold'><NavLink to="/">Michi rest</NavLink></h1>
        
          <ul className='flex justify-evenly items-end w-1/3'>
            <li><NavLink to="/reconocidos">Reconocidos</NavLink></li>
            <li><NavLink to="/experimental">Experimentales</NavLink></li>
            <li><NavLink to="/login">Iniciar sesión</NavLink></li>
            <li><NavLink to="/registro">Registrate</NavLink></li>
          </ul>
        </div>

      </div>
      
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/reconocidos" element={ <Recognized /> } />
          <Route path="/reconocidos/create" element={ <CreateRecog /> } />
          <Route path="/experimental" element={ <Expermental /> } />
          <Route path="/experimental/create" element={ <CreateExper /> } />
          <Route path="/details/:id" element={ <Details /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/registro" element={ <Register /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
    </>
  )
}

export default App
