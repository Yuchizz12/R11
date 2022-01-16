import './styles.css'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { DDSLoader } from 'three-stdlib'
import { Suspense } from 'react'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

const Scene = () => {
  const materials = useLoader(MTLLoader, 'Poimandres.mtl')
  const obj = useLoader(OBJLoader, 'KG128PL1_Reviced.svg.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  console.log(obj)
  return <primitive object={obj} scale={0.9} />
}

export default function Apps() {
  return (
    <div className="Apps">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Scene />
          <OrbitControls />
          <gridHelper args={[20, 100]} />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}
