import { extend,useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.js'
import * as THREE from 'three'

extend({OrbitControls})

export default function Experience() {

    const {camera, gl}=useThree()
    const cubeRef = useRef()
    const groupeRef = useRef()

    useFrame ((state,delta)=>{
        const angle = state.clock.elapsedTime
        state.camera.position.x = Math.sin(angle)*10
        state.camera.position.z = Math.cos(angle)*10
        state.camera.lookAt(0,0,0)


        cubeRef.current.rotation.y += delta
        // groupeRef.current.rotation.y += delta
    })

  return (
    <>

    <orbitControls args={[camera, gl.domElement]}/>

    <directionalLight position={[1,2,3]} intensity={3.5}/>
    <ambientLight intensite={1.5}/>

    <group ref={groupeRef}>
        <mesh ref={cubeRef}scale={1.5} position-x={2} rotation-y={Math.PI*0.25}>
            {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple" wireframe="false" />
        </mesh>

        <mesh position-x={-2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange"/>
        </mesh>
    </group>


        <mesh rotation-x={-Math.PI*0.5} position-y={-2} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide}/>
        </mesh>
        
        <CustomObject/>
    </>
  );
}
