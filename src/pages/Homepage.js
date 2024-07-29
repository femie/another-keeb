
import Model from '../4-button-key';
import React from 'react';
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';


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

function Homepage() {

  return(

  <Canvas style= {{width: '100vw', height: '70vh'}}>
    <CamSetup/>
    <ambientLight/> {/* Ambient light to illuminate the scene */}
    <directionalLight position={[5, 5, 5]} intensity={3.5} /> {/* Directional light for shadows and highlights */}
    <Suspense fallback={null}>
      <Model position={[0, 0, -1]} rotation= {[1, -1, 0]} />
    </Suspense>
  </Canvas>

  );
}

export default Homepage;