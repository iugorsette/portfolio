import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, MeshStandardMaterial } from 'three'

type PlanetProps = {
  axis?: number
  displacement?: number
  radius?: number
  color?: string
  speed?: number
}
export const Planet: React.FC<PlanetProps> = ({
  axis = 4,
  displacement = 2,
  radius = 0.19,
  color = 'yellow',
  speed = 0.005,
}) => {
  const meshRef = useRef<Mesh>(null!)
  const theta = useRef(0)
  useFrame(() => {
    theta.current += speed
    const minorAxis = axis / 2
    const x = axis * Math.cos(theta.current) + displacement
    const z = minorAxis * Math.sin(theta.current)
    if (meshRef.current) {
      meshRef.current.position.set(x, 0, z)
      meshRef.current.rotation.y += 0.1
    }
  })

  const material = new MeshStandardMaterial({
    color,
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}
