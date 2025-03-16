import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows, 
  Html, 
  Text
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <PresentationControls global rotation={[0.13, 0.1,0]} polar={[-0.4,0.4]} azimuth={[-1.5, 0.75]} config={{mass:2, tension:400}} snap={{mass:4, tension:400}}>
        <Float rotationIntensity={0.4}>
        <rectAreaLight
        width={ 2.5 }
        height={ 1.65 }
        intensity={ 65 }
        color={ '#0017ff' }
        rotation={ [ - 0.1, Math.PI, 0 ] }
        position={ [ 0, 0.55, - 1.15 ] }
    />
          <primitive object={computer.scene} position-y={-1.2} >
            <Html position={[0,1.56,-1.4]} rotation-x={-0.256} textAlign="center" distanceFactor={1.17} transform wrapperClass="htmlScreen"><iframe src="https://www.aureliejosserand.com"></iframe></Html>
          </primitive>
          <Text position={[2,0.75,0.5]}rotation-y={-1.25} maxWidth={2} font='./bangers-v20-latin-regular.woff' fontSize={0.5}>AURELIE JOSSERAND</Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.6} scale={5} blue={2.4}/>
    </>
  );
}
