"use client";

import { motion, useReducedMotion } from "motion/react";

type StaggerWordsProps = {
  words: string[];
  className?: string;
};

/**
 * On-load headline entrance: each line rises out from a clipped mask
 * with a slight stagger. Collapses to static under reduced motion.
 */
export function StaggerWords({ words, className }: StaggerWordsProps) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={word} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.15 + i * 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
