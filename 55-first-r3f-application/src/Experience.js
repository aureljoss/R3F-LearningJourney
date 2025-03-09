import { extend,useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

extend({OrbitControls})

export default function Experience() {

    const {camera, gl}=useThree()
    const cubeRef = useRef()
    const groupeRef = useRef()

    useFrame ((state,delta)=>{
        cubeRef.current.rotation.y += delta
        // groupeRef.current.rotation.y += delta
    })

  return (
    <>

    <orbitControls args={[camera, gl.domElement]}/>

    <group ref={groupeRef}>
        <mesh ref={cubeRef}scale={1.5} position-x={2} rotation-y={Math.PI*0.25}>
            {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
            <boxGeometry/>
            <meshBasicMaterial color="mediumpurple" wireframe="false" />
        </mesh>

        <mesh position-x={-2}>
            <sphereGeometry/>
            <meshBasicMaterial color="orange"/>
        </mesh>
    </group>


        <mesh rotation-x={-Math.PI*0.5} position-y={-2} scale={10}>
            <planeGeometry/>
            <meshBasicMaterial color="greenyellow"/>
        </mesh>
    </>
  );
}
