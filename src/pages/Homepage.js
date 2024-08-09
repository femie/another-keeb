

import Model from '../keeb-model/nokeeb';
import React from 'react';
import { Suspense, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';



function CamSetup(){
  const cameraRef= useRef();

  return <PerspectiveCamera makeDefault fov= {50} position={[0, 7, 7]} ref={cameraRef}/>;
}


function Homepage() {


  return(

  <Canvas className= "can" style= {{width: '100vw', height: '80vh'}}>
    <CamSetup/>
    
      <Suspense fallback={null}>
        
      <Model position={[0,7, 0]} rotation= {[1.01, 4.04, 0]} />
    </Suspense>

  </Canvas>


  );
}

export default Homepage;