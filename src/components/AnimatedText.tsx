import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface WordProps {
  word: string;
  wordStartIndex: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, wordStartIndex, totalChars, progress }) => {
  return (
    <span className="inline-block whitespace-nowrap">
      {word.split('').map((char, charIdx) => {
        const charGlobalIdx = wordStartIndex + charIdx;
        const start = charGlobalIdx / totalChars;
        const end = Math.min(1, (charGlobalIdx + 1) / totalChars);
        return (
          <Character
            key={charIdx}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </span>
  );
};

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let currentTotal = 0;

  return (
    <p
      ref={containerRef}
      className={`relative inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em] ${className}`}
    >
      {words.map((word, index) => {
        const wordStartIndex = currentTotal;
        currentTotal += word.length + 1; // +1 for space
        return (
          <Word
            key={index}
            word={word}
            wordStartIndex={wordStartIndex}
            totalChars={totalChars}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
