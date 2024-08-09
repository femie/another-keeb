import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';

const KeyMaterial = () => (
  <MeshTransmissionMaterial
    color="#98D2EB"
    transmission={0.9}
    clearcoat={0.3}
    clearcoatRoughness={0.5}
    thickness={0.1}
    roughness={0.2}
    ior={1.4}
    opacity={0.8}
  />
);

export default KeyMaterial;  