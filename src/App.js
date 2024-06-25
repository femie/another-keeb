import './styles/App.css';
import './styles/general.css';
import { Link, Route, Routes } from "react-router-dom";
import  Home from './pages/Homepage';


function App()
{
  return (
    <>
    <nav>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to= "/quiz">Quiz</Link></li>
      </ul>
    </nav>
    
  
   
      <Routes>
        <Route path= "/" element= {<Home />} />
      </Routes>
   
    </>
  );
}



export default App;