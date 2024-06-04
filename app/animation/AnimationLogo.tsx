'use client'
import React from 'react'
import { useLottie } from 'lottie-react'
import animationData from './../../animation-dev.json'

export const AnimateLogo = () => {
  const options = {
    animationData,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <div className="lg:flex md:flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 lg:h-1/2 md:w-full md:h-full flex items-center ">
        {View}
      </div>
      <div className=" lg:w-1/2 lg:h-1/2 md:w-full md:h-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center dark:text-white text-black typewriter text-purple-600 electrolize-regular">
          FullStack Developer
        </h2>
        <h2 className="text-2xl font-bold text-center typewriter-with-delay">
          <span className="text-sky-600 electrolize-regular">UI</span>/
          <span className="text-sky-600 electrolize-regular">UX</span>
          <span className="text-purple-600"> Designer</span>
        </h2>
      </div>
    </div>
  )
}
