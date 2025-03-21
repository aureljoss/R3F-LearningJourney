import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
// import { useLoader } from '@react-three/fiber'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
// import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'
import Model from './Model'
import { Suspense } from 'react'
import { BoxGeometry, MeshBasicMaterial } from 'three'
import Placeholder from './Placeholder'
import Hamburger from './Hamburger'
import Fox from './Fox'

export default function Experience()
{

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } shadow-normalBias={0.1}/>
        <ambientLight intensity={ 1.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        <Suspense fallback={
            <Placeholder 
                scale={10}
                positionX={2}
                positionY={4}
            />
        }>
            <Hamburger scale = {0.35}/>
        </Suspense>
        <Fox/>
    </>
}