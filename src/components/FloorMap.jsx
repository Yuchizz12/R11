// import './styles.css'
import React, { useRef, useState } from 'react'
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


const Scene = (props) => {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)

  useFrame(() => {
    if (hover) {
     ref.current.rotation.y += 0.02
    }
  })
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01))
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')  
  const obj = useLoader(OBJLoader, 'KG128PL1_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  console.log(obj)
  return (
    <group ref={ref} position={props.position}>
      <primitive
        {...props}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        // onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        object={obj}
        position={[-200, 100, 0]}
      />
    </group>
  )
}

const Scenes = (props) => {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)

  useFrame(() => {
    if (hover) {
      ref.current.rotation.y += 0.02
    }
  })
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL10_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
  return (
    <group ref={ref} position={props.position}>
      <primitive
        {...props}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        // onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        object={obj}
        position={[-200, 200, 0]}
      />
    </group>
  )
}

const Scenes2 = (props) => {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)

  useFrame(() => {
    if (hover) {
      ref.current.rotation.y += 0.02
    }
  })
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL11_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
  return (
    <group ref={ref} position={props.position}>
      <primitive
        {...props}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        // onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        object={obj}
        position={[-200, 1, 0]}
      />
    </group>
  )
}

const FloorMap = ()=> {
  return (

    <Canvas style={{ background: '#99999' }}>
      <ambientLight intensity={1} color={'#42a5f5'} />
      <spotLight intensity={0.5} angle={0.1} penumbra={100} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <directionalLight color="#f3e5f5" position={[0, 0, 500]} />
        {/* <gridHelper args={[900, 100]} position={[-200, 200, 0]} /> */}
        <Ball color="red" scale={10} position={[-10, 210, 100]} />
        <Ball scale={10} position={[-20, 210, 50]} />
        <Ball scale={10} position={[-40, 210, 70]} />
        <Ball scale={10} position={[-80, 210, 90]} />
        <Scene style={{ background: '#171717' }} />
        <Scenes />
        <OrbitControls />

        <Scenes />
        <OrbitControls />
        <Scenes2 />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
export default FloorMap