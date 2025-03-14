import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useHelper, BakeShadows, SoftShadows, Sky, useFaceControls, Environment, Stage} from '@react-three/drei'
import { useRef, useEffect } from 'react'
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

    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
        envMapIntensity: { value: 7, min: 0, max: 12 },
        envMapHeight: { value: 7, min: 0, max: 100 },
        envMapRadius: { value: 28, min: 10, max: 1000 },
        envMapScale: { value: 100, min: 10, max: 1000 }
    })

    const scene = useThree(state=>state.scene)
    useEffect(()=>{
        scene.environmentIntensity=envMapIntensity
    },[envMapIntensity])

    return <>

        {/* <Environment 
        // background 
        // files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
        preset="sunset"
        resolution={32}
        ground={{
            height:envMapHeight, 
            radius:envMapRadius,
            scale:envMapScale
        }}
        /> */}

        {/* <BakeShadows/> */}
        <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } position={0,0,0}/>
        <color args={['ivory']} attach="background"/>


        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight position={ sunPosition } intensity={ 4.5 } ref={directionalLight} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-top={5} shadow-camera-bottom={-5} shadow-camera-right={5} shadow-camera-left={-5}
            shadow-camera-near={1} shadow-camera-far={10}/>
        <ambientLight intensity={ 1.5 } />

        <Sky sunPosition={sunPosition}/> */}

        <Stage 
            shadows={{
                type:'contact',
                opacity: 0.2,
                blur:3
            }}
            environment="sunset"
            preset="portrait"
            
            >
            <mesh position-x={ - 2 } castShadow position-y={1}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity}/>
            </mesh>

            <mesh ref={ cube } position-x={ 2 } scale={ 1.5 } castShadow position-y={1}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity}/>
            </mesh>
        </Stage>

        {/* <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 } receiveShadow>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity}/>
        </mesh> */}

    </>
}