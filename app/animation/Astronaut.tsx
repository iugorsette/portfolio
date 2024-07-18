'use client'
import React from 'react'
import { useLottie } from 'lottie-react'
import animationData from './../../public/animate/Astronaut.json'

export const Astronaut = () => {
  const options = {
    animationData,
    loop: true,
  }

  const { View } = useLottie(options)

  return <div className=" w-full h-full max-w-xs">{View}</div>
}
