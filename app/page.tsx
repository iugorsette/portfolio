"use client";
import { AnimateLogo } from "./animation/AnimationLogo";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Technologies } from "./components/Technologies";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <Header />
        <Background />
        <AnimateLogo />
      </main>
      <div className="flex min-h-screen flex-col items-center justify-between p-4">
        <About />
        <Technologies />
      </div>
    </>
  );
}
