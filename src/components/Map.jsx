import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import NearMeIcon from '@mui/icons-material/NearMe'
import FloorMap from './FloorMap'
import { useLoader } from '@react-three/fiber'
// import { Environment, OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { DDSLoader } from 'three-stdlib'
// import { Suspense } from 'react'
import NavBar from './NavBar'

// THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

const Scene = () => {
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL1_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
  return <primitive object={obj} scale={0.05} />
}

const Box = (props) => {
  const boxRef = useRef()
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
  const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef))
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL1_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  useFrame(() => {
    if (hover) {
      boxRef.current.rotation.y += 0.05
    }
  })

  return (
    <group ref={boxRef} position={props.position}>
      {/* <mesh
        onClick={() => {
          setActive(!active)
        }}
        onPointerOver={() => {
          setHover(true)
        }}
        onPointerOut={() => {
          setHover(false)
        }}>
        <boxGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={active ? 'green' : 'gray'} />
      </mesh>
      <mesh position={[-5, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh> */}
      <mesh position={[-5, 0, 0]}>
        <mesh object={obj} scale={0.05} />
        <meshNormalMaterial attach="material" />
      </mesh>
      {/* <mesh position={[1, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <mesh position={[10, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh> */}

      <OrbitControls />
      <gridHelper args={[20, 100]} />
    </group>
  )
}

const Map = ()=> {
  return (
    <>
      {/* <NavBar /> */}
      {/* <div>Test</div> */}
      {/* <Model /> */}
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-20, 0, 0]} />
        <Box position={[1, 0, 0]} />
        <Box position={[30, 0, 0]} />
        <OrbitControls />
        <gridHelper args={[100, 100]} />
      </Canvas> */}
      <>
        <FloorMap />
      </>
    </>
  )
}

export default Map