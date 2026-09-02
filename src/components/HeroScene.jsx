import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function DistortedBlob() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={[2.6, 0.2, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#aa3bff"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.15}
          metalness={0}
          emissive="#5b0fb8"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <pointLight position={[-4, -2, 2]} intensity={2} color="#c084fc" />
      <Suspense fallback={null}>
        <DistortedBlob />
      </Suspense>
    </Canvas>
  )
}
