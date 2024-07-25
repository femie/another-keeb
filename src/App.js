import './styles/App.css';
import './styles/general.css';
import { Link, Route, Routes } from "react-router-dom";
import  Home from './pages/Homepage';
import Quiz from './pages/Quizpage';
import React from 'react';

function App()
{
  return (
    <>
    <nav>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to= "/Quiz">Quiz</Link></li>
      </ul>
    </nav>
    
  
   
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path= "/Quiz" element = {<Quiz />} />
      </Routes>
   
    </>
  );
}



export default App;