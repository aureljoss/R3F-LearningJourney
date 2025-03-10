import {OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial} from '@react-three/drei'
import {useRef} from 'react'
import { MeshNormalMaterial } from 'three'

export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()

    return <>

    <OrbitControls makeDefault/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

    {/* <TransformControls object={cube} mode="translate"/> */}
    <PivotControls anchor={[0,0,0]}depthTest={false} lineWidth={2} scale={2} >
         <mesh ref={cube} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html wrapperClass="label" position={[1,1,0]} center distanceFactor={8} occlude={true}>
                Here's a sphere
            </Html>
        </mesh>
    </PivotControls>


    {/* <TransformControls object={sphere} mode="rotate"/> */}
    <PivotControls anchor={[0,0,0]}depthTest={false} lineWidth={2} scale={2} >
        <mesh ref={sphere} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    </PivotControls >

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial color="greenyellow" resolution={512} blur={[1000,1000]} mixBlur={1} mirror={0.75}/>
        </mesh>

        <PivotControls anchor={[0,0,0]}depthTest={false} lineWidth={2} >
            <Float speed={5} floatIntensity={5}>
                <Text font="./bangers-v20-latin-regular.woff" fontSize={1} color="salmon" position-y={3} maxWidth={3} textAlign="center" >
                    I LOVE R3F
                </Text>
            </Float>
        </PivotControls >
   
    </>
}