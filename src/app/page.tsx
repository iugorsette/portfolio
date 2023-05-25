"use client";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800">
      <Header />
      <div className="flex-grow">
        <Content />
      </div>
      <Footer />
    </div>
  );
}