import React from 'react';
import { NavLink } from "react-router-dom";
import './styles/general.css'


export default function Navbar() {

  return (
  
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
    
    

  );
}