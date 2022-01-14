import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Nodes, Node } from './Nodes'

const Box = (props) => {
  const boxRef = useRef()
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
  // const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef))

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
      <mesh position={[-5, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
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
      <gridHelper />
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
        <Box position={[-20, 0, 0]} />
        <Box position={[1, 0, 0]} />
        <Box position={[30, 0, 0]} />
        <OrbitControls />
        <gridHelper args={[100, 100]} />
      </Canvas>
    </>
  )
}

export default Map