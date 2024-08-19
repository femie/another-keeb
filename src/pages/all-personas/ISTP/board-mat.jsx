import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';

const BoardMat = () => (
  <MeshTransmissionMaterial
  color={"#080554"}
  opacity={1}
  transmission={.6}
  roughness={.2}
  metalness={.9}
  ior={1.3}
  reflectivity={.3}
  sheen={.2}
  sheenRoughness={1}
  clearcoat={.4}
  clearcoatRoughness={.5}
  specularIntensity={1}
  />
);

export default BoardMat;  


