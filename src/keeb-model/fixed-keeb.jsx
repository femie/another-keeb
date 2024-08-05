/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three';



export default function Model(props) {

    const group = useRef();
    const { nodes, materials } = useGLTF('/fixed-keeb.gltf')    
    
    const jellyBoard= new MeshPhysicalMaterial({
        color: '#372549',
        roughness: 0.2,
        metalness: 0.2,
        reflectivity: .3,
        IOR: 1.4,
        opacity: 0.8,
        transmission: 0.9,
        thickness: 1,
        clearcoat: .3,
        clearcoatRoughness: .2,
    });

    const jellyMaterialEsc= new MeshPhysicalMaterial({
      color: '#774C60',
      roughness: 0.2,
      metalness: 0.2,
      reflectivity: .3,
      IOR: 1.4,
      opacity: 0.8,
      transmission: 0.9,
      thickness: 1,
      clearcoat: .3,
      clearcoatRoughness: .2,
        
    });

    const jellyMaterialKeys= new MeshPhysicalMaterial({
      color: '#EACDC2',
        roughness: 0.2,
        metalness: 0.2,
        reflectivity: .3,
        IOR: 1.4,
        opacity: 0.8,
        transmission: 0.9,
        thickness: 1,
        clearcoat: .3,
        clearcoatRoughness: .2,

    });

    const jellyEnter= new MeshPhysicalMaterial({
      color: '#ffafa8',
        roughness: 0.2,
        metalness: 0.2,
        reflectivity: .3,
        IOR: 1.4,
        opacity: 0.8,
        transmission: 0.9,
        thickness: 1,
        clearcoat: .3,
        clearcoatRoughness: .2,
        
    });
    
    const jellySpace= new MeshPhysicalMaterial({
      color: '#975565',
        roughness: 0.2,
        metalness: 0.2,
        reflectivity: .3,
        IOR: 1.4,
        opacity: 0.8,
        transmission: 0.9,
        thickness: 1,
        clearcoat: .3,
        clearcoatRoughness: .2,
        


    });



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
    <group ref = {group} {...props} dispose={null}>
      <directionalLight
        name="DirectionalLight"
        intensity={2.5}
        decay={2}
        position={[4.34, 5.625, 2.139]}
      />
      <directionalLight
        name="DirectionalLight_2"
        intensity={2.5}
        decay={2}
        position={[-2.709, 4.245, -4.818]}
      />
      <directionalLight
        name="DirectionalLight_4"
        intensity={2.5}
        decay={2}
        position={[-5.465, 0.791, 4.717]}
      />
      <mesh
        name="Board"
        geometry={nodes.Board.geometry}
        material={jellyBoard}
        position={[0.205, 0.387, -0.197]}
        rotation={[0, 0.677, 0]}
      />
      <mesh
        name="Esc"
        onClick={handleClick}
        geometry={nodes.Key1.geometry}
        material={jellyMaterialEsc}
        position={[-1.648, 1.933, 3.677]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Key2"
        geometry={nodes.Key2.geometry}
        material={jellyMaterialKeys}
        position={[-2.246, 1.924, 2.958]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Key3"
        geometry={nodes.Key3.geometry}
        material={jellyMaterialKeys}
        position={[-2.82, 1.92, 2.23]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Key4"
        geometry={nodes.Key4.geometry}
        material={jellyMaterialKeys}
        position={[-3.398, 1.95, 1.501]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.687, 1]}
      />
      <mesh
        name="Enter"
        onClick={handleClick}
        geometry={nodes.Key5.geometry}
        material={jellyEnter}
        position={[-1.608, 0.931, -1.131]}
        rotation={[0, 0.677, 0]}
        scale={[0.568, 0.341, 1]}
      />
      <mesh
        name="Key6"
        geometry={nodes.Key6.geometry}
        material={jellyMaterialKeys}
        position={[-1.058, 1.907, 2.996]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Key7"
        geometry={nodes.Key7.geometry}
        material={jellyMaterialKeys}
        position={[-1.645, 1.897, 2.266]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Key8"
        geometry={nodes.Key8.geometry}
        material={jellyMaterialKeys}
        position={[-2.226, 1.894, 1.543]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Spacebar"
        geometry={nodes.Spacebar.geometry}
        material={jellySpace}
        position={[-0.264, 1.889, 2.574]}
        rotation={[0, 0.677, 0]}
        scale={[1, 0.686, 1]}
      />
      <mesh
        name="Start"
        geometry={nodes.Start.geometry}
        material={materials.text}
        position={[0.879, 1.058, -0.884]}
        rotation={[-Math.PI, 0.901, -Math.PI]}
        scale={[0.294, 0.225, 0.328]}
      />
      <mesh
        name="Personas"
        geometry={nodes.Personas.geometry}
        material={materials.text}
        position={[-0.691, 1.047, -1.331]}
        rotation={[-Math.PI, 0.891, -Math.PI]}
        scale={0.273}
      />
      <mesh
        name="About"
        geometry={nodes.About.geometry}
        material={materials.text}
        position={[0.879, 1.053, 1.965]}
        rotation={[-Math.PI, 0.908, -Math.PI]}
        scale={0.19}
      />
      <PerspectiveCamera
        name="Camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={30.219}s
        position={[8.126, 10.447, -6.423]}
        rotation={[-2.034, 0.513, 2.365]}
      />
    </group>
  )
}

useGLTF.preload('/fixed-keeb.glb')
