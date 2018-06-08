import React from 'react';

export function renderSplitString(
  string: string, refHandle: (ref: HTMLSpanElement, index?: number) => void, letterClassName?: string) {
  return (
    <>
      { string.split('').map((letter: string, index: number) => (
        <span key = { index } className = { letterClassName } ref = { ref => refHandle(ref, index) } >{ letter }</span>
      )) }
    </>
  );
}
