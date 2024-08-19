import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';

const AlphakeyMat = () => (
  <MeshTransmissionMaterial
  color={"white"}
  transmission={0}
  clearcoat={0.4}
  clearcoatRoughness={1}
  thickness={1.5}
  roughness={0.3}
  ior={1.8}
  chromaticAberration={.2}
  />
);

export default AlphakeyMat;  


