import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';

const BoardMaterial = () => (
  <MeshTransmissionMaterial
  color={"#e6f2ff"}
  transmission={.95}
  clearcoat={0.3}
  clearcoatRoughness={0.5}
  thickness={.5}
  roughness={0}
  ior={1.4}
  chromaticAberration={.7}
  />
);

export default BoardMaterial;  


