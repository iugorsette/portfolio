import React, { useState, useEffect } from "react";

const TypingEffect = ( text: string ) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const nextChar = text[currentIndex];
        currentIndex++;

        if (nextChar === "*") {
          return prevText + "\n";
        }

        return prevText + (nextChar ? nextChar : "");
      });

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-4xl relative" style={{ whiteSpace: "pre-line" }}>
      {displayText}
      <span className="text-4xl animate-blink">_</span>
    </div>
  );
};

export default TypingEffect;
