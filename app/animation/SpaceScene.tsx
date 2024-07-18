'use client'
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stars } from '@react-three/drei'
import { Planet } from './Planet'
import PlanetControls from './PlanetControls'
import StarControls from './StarControls'
import { Astronaut } from './Astronaut'

const Space: React.FC = () => {
  const { scene } = useGLTF('/exoplanet.glb')
  return <primitive object={scene} scale={1} />
}

const createRandomPlanet = (id: number) => {
  const randomAxis = Math.floor(Math.random() * 10)
  const randomDisplacement = Math.floor(Math.random() * 5)
  const randomRadius = Math.random() * 0.1 + 0.05
  const colorArray = ['yellow', 'green', 'red', 'blue', 'purple']
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
  const randomSpeed = Math.random() * 0.02 + 0.01

  return (
    <Planet
      key={id}
      axis={randomAxis}
      displacement={randomDisplacement}
      radius={randomRadius}
      color={randomColor}
      speed={randomSpeed}
    />
  )
}

const SpaceScene: React.FC = () => {
  const [planets, setPlanets] = useState<JSX.Element[]>([])
  const [stars, setStars] = useState<any>({
    radius: 200,
    depth: 50,
    count: 5000,
    factor: 4,
    saturation: 0,
    fade: true,
    speed: 1,
  })

  const handleCreatePlanet = () => {
    setPlanets([...planets, createRandomPlanet(planets.length)])
  }

  const clean = () => {
    setPlanets([])
    setStars({
      radius: 200,
      depth: 50,
      count: 5000,
      factor: 4,
      saturation: 0,
      fade: true,
      speed: 1,
    })
  }

  return (
    <div className="relative w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Space />
          {planets.map((planet) => planet)}
          <Planet
            radius={0.07}
            color="green"
            displacement={1}
            axis={2}
            speed={0.025}
          />
          <Planet />
          <Planet axis={3} radius={0.09} color="red" speed={0.01} />
        </Suspense>
        <Stars
          radius={stars.radius}
          depth={stars.depth}
          count={stars.count}
          factor={stars.factor}
          saturation={stars.saturation}
          fade={stars.fade}
          speed={stars.speed}
        />
        <OrbitControls />
      </Canvas>
      <div className="absolute top-4 left-4 w-full flex justify-center">
        <PlanetControls handleCreatePlanet={handleCreatePlanet} clean={clean} />
      </div>
      <div className="absolute bottom-4 left-4">
        <StarControls stars={stars} setStars={setStars} />
      </div>
    </div>
  )
}

export default SpaceScene
