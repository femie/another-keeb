import React from 'react';
import Home from './pages/Homepage';
import Quiz from './pages/Quizpage';
import { Route, Routes } from "react-router-dom";

export default function Navbar() {

  return (
    <div className= "nav-bar">
    <nav className= "nav">
      <a href="/" className="site-title">
        Keeb Persona
      </a>
      <ul>
        <li>
          <a href= "/Home">Home</a>
        </li>
        <li>
          <a href= "/Quiz">Quiz</a>
        </li>
        <li>
          <a href="/Personas">Personas</a>
        </li>
        <li>
          <a href="/Creator">Creator</a>
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