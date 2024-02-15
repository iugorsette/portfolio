'use client'
import { useState, useEffect, useRef } from "react";
import { SocialMedias } from "./SocialMedia";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const [typedText, setTypedText] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const targetText = "Iugor Sette";

    const typeWriter = (text: string, index: number) => {
      if (index < text.length) {
        setTypedText((prevText) => prevText + text.charAt(index));
        intervalRef.current = setTimeout(() => typeWriter(text, index + 1), 300) as unknown as number;
      } else {
        setCursorVisible((prev) => !prev);
        setInterval(() => setCursorVisible((prev) => !prev), 500);
      }
    };

    intervalRef.current = setTimeout(() => typeWriter(targetText, 0), 300) as unknown as number;

    return () => {
      if (intervalRef.current !== null) {
        clearTimeout(intervalRef.current);
      }
    };
  }, []); 

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        <h1 >
          {typedText}
          <span className={cursorVisible ? "opacity-100" : "opacity-0"}>_</span>
        </h1>
      </div>
      <SocialMedias />
    </div>
  );
}
