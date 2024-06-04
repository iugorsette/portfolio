"use client";
import { AnimateLogo } from "./animation/AnimationLogo";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Technologies } from "./components/Technologies";

export default function Home() {
  return (
    <>
      <div className="flex  flex-col items-center p-4 h-screen w-full">
        <Header />
        <Background />
        <AnimateLogo />
      </div>
      <div className="flex  flex-col items-center p-4 h-screen w-full">
        <About />
      </div>
      <div className="flex flex-col items-center justify-between p-4 h-screen">
        <Technologies />
      </div>
    </>
  );
}
