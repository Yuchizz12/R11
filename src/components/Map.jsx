import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import Gif from './atoms/Gif'


const Box = (props) => {
  const boxRef = useRef()
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)

  useFrame(() => {
    if (hover) {
      boxRef.current.rotation.y += 0.05
    }
  })

  return (
    <group ref={boxRef} position={props.position}>
      <mesh
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
    </group>
  )
}

const Map = ()=> {
  return (
    <>
      {/* <NavBar /> */}
      {/* <div>Test</div> */}
      {/* <Model /> */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.8, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Box position={[4.2, 0, 0]} />
        {/* <Gif /> */}
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Map