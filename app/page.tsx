'use client'
import { StrictMode } from 'react'
import { AnimateLogo } from './animation/AnimationLogo'
import { About } from './components/About'
import { Background } from './components/Background'
import { Header } from './components/Header'
import LazyLoadSection from './components/LazyLoadSection'
import { Technologies } from './components/Technologies'
import SpaceScene from './animation/SpaceScene'
import { ArrowUp } from '@phosphor-icons/react'

export default function Home() {
  return (
    <StrictMode>
      <LazyLoadSection>
        <div
          id="top"
          className="flex flex-col items-center p-4 h-screen w-full"
        >
          <Header />
          <Background />
          <AnimateLogo />
        </div>
      </LazyLoadSection>
      <LazyLoadSection>
        <div className="flex flex-col items-center p-4 w-full">
          <About />
        </div>
      </LazyLoadSection>
      <LazyLoadSection>
        <div className="flex flex-col items-center justify-between p-4">
          <Technologies />
        </div>
      </LazyLoadSection>
      <h1 className="text-3xl font-bold text-center dark:text-white text-black  electrolize-regular">
        Here I will show you a 3D model using threejs
      </h1>
      <LazyLoadSection>
        <div className="flex flex-col items-center p-4 h-screen w-full">
          <SpaceScene />
        </div>
      </LazyLoadSection>
    </StrictMode>
  )
}
