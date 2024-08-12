import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';

const SpaceMaterial = () => (
  <MeshTransmissionMaterial
    color={"EFAAC4"}
    transmission={0.9}
    clearcoat={0.3}
    clearcoatRoughness={0.5}
    thickness={0.2}
    roughness={0.2}
    ior={1.4}
    opacity={0.8}
  />
);

export default SpaceMaterial;  


