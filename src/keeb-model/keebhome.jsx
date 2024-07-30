import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('./keebhome.glb')
  

  const handleClick = (event) => {
    const meshName= event.object.name;
    switch(meshName) {
      case 'Esc':
        window.location.href= '/About';
        break;
      
      case 'Enter':
        window.location.href= '/Personas';
        break;

        
      default:
        break;
    }
  };

  useEffect(() => {
    const currentGroup = group.current;

    currentGroup.children.forEach((child) => {
      child.addEventListener('click', handleClick);

    });

    return () => {
      currentGroup.children.forEach((child) => {
        child.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <group ref= {group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Board.geometry}
        material={materials.Board}
        position={[0.205, 0.387, -0.197]}
        rotation={[0, 0.677, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key1.geometry}
        material={materials.Esc}
        position={[-1.648, 1.933, 3.677]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key2.geometry}
        material={materials.Keys}
        position={[-2.227, 1.924, 2.958]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key3.geometry}
        material={materials.Keys}
        position={[-2.811, 1.92, 2.23]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key4.geometry}
        material={materials.Keys}
        position={[-3.398, 1.924, 1.501]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key5.geometry}
        material={materials.Enter}
        position={[-1.608, 0.925, -1.131]}
        rotation={[0, 0.677, 0]}
        scale={[0.568, 0.341, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key6.geometry}
        material={materials.Keys}
        position={[-1.058, 1.907, 2.996]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key7.geometry}
        material={materials.Keys}
        position={[-1.645, 1.897, 2.266]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key8.geometry}
        material={materials.Keys}
        position={[-2.226, 1.894, 1.543]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spacebar.geometry}
        material={materials.Spacebar}
        position={[-0.264, 1.889, 2.574]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Start.geometry}
        material={materials.text}
        position={[0.879, 1.058, -0.884]}
        rotation={[-Math.PI, 0.901, -Math.PI]}
        scale={[0.294, 0.225, 0.328]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Personas.geometry}
        material={materials.text}
        position={[-0.691, 1.047, -1.331]}
        rotation={[-Math.PI, 0.891, -Math.PI]}
        scale={0.273}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.About.geometry}
        material={materials.text}
        position={[0.879, 1.053, 1.965]}
        rotation={[-Math.PI, 0.908, -Math.PI]}
        scale={0.19}
      />
    </group>
  )
}

useGLTF.preload('/keebhome.glb')
