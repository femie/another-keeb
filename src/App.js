import './styles/App.css';
import './styles/general.css';
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';

import Model from './4-button-key.jsx';

function CamSetup(){
  const cameraRef= useRef();
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(5, -2, 5);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <perspectiveCamera ref={cameraRef} near={0.1} far={1000} />;
}

function App()
{
  return (
    <div className= "App">
      <header className= "App-header">
      </header>
    

    <body>
    <Canvas style= {{width: '100vw', height: '80vh'}}>
      <CamSetup/>
      <ambientLight/> {/* Ambient light to illuminate the scene */}
      <directionalLight position={[5, 5, 5]} intensity={3.5} /> {/* Directional light for shadows and highlights */}
      <Suspense fallback={null}>
        <Model position={[0, 0, -2.5]} rotation= {[1, -1, 0]} />
      </Suspense>
    </Canvas>
    </body>
    </div>
  );
}



export default App;