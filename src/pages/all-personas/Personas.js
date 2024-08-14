import React from 'react';
import '../../styles/allpersonas.css';
import { Outlet, NavLink } from "react-router-dom";

function Personas() {


  return(

    <div className="personas-container">
     {/* Persona Menu & Routing */}

     <div className= "persona-menu">
     <h3 className="persona-menu-title">
       All Personas
     </h3>

     <ul>
       <li>
         <NavLink to="istp">ISTP</NavLink>
       </li>


     </ul>

</div>

    <div className="persona-content">
      <Outlet />
    </div>
</div>

  );
}


export default Personas;
