import '../../../styles/istp-styles.css';
import ISTPKeeb from './split-keeb';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from "react";



function CamSetup(){

  return <PerspectiveCamera makeDefault fov= {50} position={[0, 8, 17]} />;
}


function ISTPPage() {


  return(

    <>
     <h1 className= "msg">Split Ergo</h1>
  <Canvas className= "can" style= {{width: '100vw', height: '60vh'}}>
    <CamSetup/>

      <Suspense fallback={null}>
        
      <ISTPKeeb position={[-3.5,9, 6]} rotation= {[0, 4.7, -1]}/>
    </Suspense>

  </Canvas>
</>

  );
}

export default ISTPPage;


