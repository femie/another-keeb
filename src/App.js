import './styles/App.css';
import './styles/general.css';
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
//import { OrbitControls } from '@react-three/drei'; after amb light <OrbitControls />

import Scene from './Startswitch.jsx';

function App()
{
  return (
    <div className= "App">
      <header className= "App-header">
      </header>
    

    <Canvas camera= {{fov: 64, position: [-2,2,0]}}>
      <ambientLight intensity={5} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
    </div>
  );
}

export default App;