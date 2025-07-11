import React, { useRef } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Scene = () => {
  const tex = useTexture("/tex2.webp")
  const cyl = useRef()

  useFrame((state, delta) => {
      cyl.current.rotation.y -= delta * 0.2
  })

  return (
    <group rotation={[0.1, 0, 0.2]}>
      <mesh ref={cyl} position={[0, 0.1, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 2, 60, 60, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} transparent />
      </mesh>
    </group>
  )
}

export default Scene
