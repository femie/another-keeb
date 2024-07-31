
import Model from '../keeb-model/fixed-keeb';
import React from 'react';
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

function CamSetup(){
  const cameraRef= useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 2, 0);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera makeDefault fov= {50} position={[0, 7, 7]}/>;
}

function Homepage() {

  return(

  <Canvas style= {{width: '100vw', height: '80vh'}}>
    <CamSetup/>
    <ambientLight intensity= {0.5}/> {/* Ambient light to illuminate the scene */}
    <directionalLight position={[-5, 5, 5]} intensity={3} /> {/* Directional light for shadows and highlights */}
    <Suspense fallback={null}>
      <Model position={[0, 6.3, 1]} rotation= {[.6, 4.04, 0]} />
    </Suspense>

  </Canvas>


  );
}

export default Homepage;