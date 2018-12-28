import React from "react";

export function renderSplitString(string: string, letterClassName?: string) {
  return (
    <>
      {string.split("").map((letter: string, index: number) => (
        <span key={index} className={letterClassName}>
          {letter}
        </span>
      ))}
    </>
  );
}
