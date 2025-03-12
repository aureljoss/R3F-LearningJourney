import { useFrame } from '@react-three/fiber'
import { OrbitControls, useHelper, BakeShadows, SoftShadows, Sky, useFaceControls} from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import {useControls} from 'leva'

export default function Experience()
{
    const directionalLight= useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const cube = useRef()
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    const {sunPosition}=useControls('sky',{
        sunPosition:{value:[1,2,3]}
    })

    return <>
        {/* <BakeShadows/> */}
        <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } />
        <color args={['ivory']} attach="background"/>


        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={ sunPosition } intensity={ 4.5 } ref={directionalLight} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-top={5} shadow-camera-bottom={-5} shadow-camera-right={5} shadow-camera-left={-5}
            shadow-camera-near={1} shadow-camera-far={10}/>
        <ambientLight intensity={ 1.5 } />

        <Sky sunPosition={sunPosition}/>

        <mesh position-x={ - 2 } castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 } castShadow>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 } receiveShadow>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}