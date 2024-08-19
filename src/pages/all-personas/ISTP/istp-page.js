import '../../../styles/istp-styles.css';
import ISTPKeeb from './split-keeb';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from "react";



function CamSetup(){

  return <PerspectiveCamera makeDefault fov= {50} position={[0, 8, 14]} />;
}


function ISTPPage() {


  return(

  <Canvas className= "can" style= {{width: '100vw', height: '60vh'}}>
    <CamSetup/>
 

      <Suspense fallback={null}>
        
      <ISTPKeeb position={[-3.5,8, -2]} rotation= {[.5, 4.7, -.6]}/>
    </Suspense>

  </Canvas>


  );
}

export default ISTPPage;


