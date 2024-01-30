'use client'
import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./../../animation-dev.json";

export const AnimateLogo = () => {
  const options = {
    animationData,
    loop: true
    
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};
