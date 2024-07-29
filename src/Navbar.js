import React from 'react';
import Home from './pages/Homepage';
import Quiz from './pages/Quizpage';
import Personas from './pages/Personas';
import About from './pages/About';
import { Route, Routes, NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <div className= "nav-bar">
      <nav className= "nav">
      <a href="/" className="site-title">
        Keeb Persona
      </a>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/Quiz">Quiz</NavLink>        
        </li>

        <li>
          <NavLink to="/Personas">Personas</NavLink>        
        </li>

        <li>
          <NavLink to="/About">About</NavLink>        
        </li>

      </ul>

      </nav>
      

      <Routes>
        <Route path= "/" element= {<Home />}/>
        <Route path= "/Quiz" element = {<Quiz />} />
        <Route path= "/Personas" element = {<Personas />} />
        <Route path= "/About" element = {<About />} />
      </Routes>
      </div>

  
  

  )
}