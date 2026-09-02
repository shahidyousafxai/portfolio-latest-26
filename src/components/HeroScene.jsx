import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function DistortedBlob() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={[2.6, 0.2, 0]} scale={1.5}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.15}
          metalness={0}
          emissive="#065f46"
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
      <pointLight position={[-4, -2, 2]} intensity={2} color="#34d399" />
      <Suspense fallback={null}>
        <DistortedBlob />
      </Suspense>
    </Canvas>
  )
}
