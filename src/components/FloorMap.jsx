// import './styles.css'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { DDSLoader } from 'three-stdlib'
import { Suspense } from 'react'
import { zhCN } from 'date-fns/locale'
import NavBar from './NavBar'
import Ball from './Ball'
import { DoubleSide } from 'three'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())


const Scene = () => {
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')  
  const obj = useLoader(OBJLoader, 'KG128PL1_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
    return <primitive object={obj} scale={1.3} position={[-200, 100, 0]} />
}

const Scenes = () => {
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL10_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
  return <primitive object={obj} scale={1.1} position={[-200, 200, 0]} />
}

const Scenes2 = () => {
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL11_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
  return <primitive object={obj} scale={1.5} position={[-200, 1, 0]} />
}

const FloorMap = ()=> {
  return (
    // <div className="Apps">
    //   <NavBar />
    <Canvas style={{ background: '#171717' }}>
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <ambientLight intensity={0.06} />
        <directionalLight color="red" position={[0, 0, 500]} />
        {/* <gridHelper args={[900, 100]} position={[-200, 200, 0]} /> */}
        <Ball scale={1} position={[-10, 200, 110]} />
        <Scene />
        {/* <Scenes /> */}
        <OrbitControls />

        {/* <Environment preset="sunset" background /> */}
        <ambientLight intensity={0.09} />
        {/* <Scene /> */}
        <Scenes />
        <OrbitControls />
        {/* <gridHelper args={[900, 100]} position={[-200, 100, 0]} /> */}
        <ambientLight intensity={0.09} />
        {/* <Scene /> */}
        <Scenes2 />
        <OrbitControls />
        {/* <gridHelper args={[900, 100]} position={[0, 0, 0]} /> */}
      </Suspense>
    </Canvas>
    // </div>
  )
}
export default FloorMap