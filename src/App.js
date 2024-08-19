import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/general.css';
import Nav from './Navbar';
import Home from './pages/Homepage';
import Quiz from './pages/Quizpage';
import Personas from './pages/all-personas/Personas';
import About from './pages/About';
import ISTP from './pages/all-personas/ISTP/istp-page';


function App()
{
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path= "/" element= {<Home />}/>
        <Route path= "/Quiz" element = {<Quiz />} />
        <Route path= "/Personas" element = {<Personas />}>
          <Route path="istp" element={<ISTP />}/>
            
        </Route>
        <Route path= "/About" element = {<About />} />
      </Routes>
      </div>
  );
}



export default App;