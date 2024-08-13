import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';

const EscMaterial = () => (
  <MeshTransmissionMaterial
    color={'#c5d9fc'}
    transmission={0.9}
    clearcoat={0.3}
    clearcoatRoughness={0.5}
    thickness={0.2}
    roughness={0.2}
    ior={1.4}
    chromaticAberration={.2}
    />
);

export default EscMaterial;  


