import React, { useState, useEffect } from "react";

const TypingEffect = (text: string) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const nextChar = text[currentIndex];
        currentIndex++;
        return prevText + (nextChar ? nextChar : "");
      });

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-4xl relative">
      <p>{displayText}<span className="text-4xl animate-blink">_</span></p>
    </div>
  );
};

export default TypingEffect;