import React from 'react';
import Home from './pages/Homepage';
import Quiz from './pages/Quizpage';
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
          <NavLink to="/Home">Home</NavLink>
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
        <Route path= "/Home" element= {<Home />}/>
        <Route path= "/Quiz" element = {<Quiz />} />
        
      </Routes>
      </div>

  
  

  )
}