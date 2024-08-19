import React from 'react';
import '../../styles/allpersonas.css';
import { Outlet, NavLink, useLocation } from "react-router-dom";


function Personas() {

  const location= useLocation();

  const showMenu= location.pathname === '/Personas';

  return(

    <div className="personas-container">

    {/* Persona Menu */}
    {showMenu && (
     <div className= "persona-menu">
      <h3 className= "persona-menu-title">All Personas</h3>

     <ul>
       <li>
         <NavLink to="istp">ISTP</NavLink>
       </li>

       <li>
       <NavLink to="istj">ISTJ</NavLink>
       </li>

     </ul>
     </div>
    )}
    <div className= "persona-content">
    <Outlet/>
    </div>

  </div>

  );
}


export default Personas;
