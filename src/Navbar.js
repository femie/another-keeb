import React from 'react';
import Home from './pages/Homepage';
import Quiz from './pages/Quizpage';
import Personas from './pages/Personas';
import About from './pages/About';
import { Route, Routes, Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className= "nav-bar">
      <a href="/" className="site-title">
        Keeb Persona
      </a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/Personas">Personas</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>

      </ul>

      

      <Routes>
        <Route path= "/" element= {<Home />}/>
        <Route path= "/Quiz" element = {<Quiz />} />
        <Route path= "/Personas" element = {<Personas />} />
        <Route path= "/About" element = {<About />} />
        
      </Routes>
      </div>

  
  

  )
}