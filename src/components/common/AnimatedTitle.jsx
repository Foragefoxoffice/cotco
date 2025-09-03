"use client";
import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * LetterRevealTitle
 * Props:
 *  - text: string | string[]  (use "\n" for new lines)
 *  - as: "h1" | "h2" | "h3" | "div" (default: h1)
 *  - align: "left" | "center" | "right"
 *  - delay: number  (initial delay in seconds)
 *  - stagger: number (per-letter delay in seconds)
 *  - once: boolean  (animate only first time; default true)
 *  - className: string (Tailwind classes for size/style)
 */
export default function TitleAnimation({
  text,
  as: Tag = "h2",
  align = "left",
  delay = 0,
  stagger = 0.06,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  // Normalize to array of lines
  const lines = useMemo(
    () => (Array.isArray(text) ? text : String(text).split("\n")).filter(Boolean),
    [text]
  );

  const alignClass =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  const baseTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

  // global counter so letters reveal in natural reading order across lines
  let order = 0;

  return (
    <Tag
      ref={ref}
      className={[
        "font-semibold leading-[1.05] tracking-tight",
        "motion-reduce:transform-none motion-reduce:transition-none",
        alignClass,
        className,
      ].join(" ")}
    >
      {lines.map((line, li) => {
        // keep spaces as separate tokens so alignment never shifts
        const tokens = line.split(/(\s+)/);
        return (
          <span key={li} className="block">
            {tokens.map((tok, i) => {
              if (/^\s+$/.test(tok)) {
                // render spaces (not animated)
                return (
                  <span key={`${li}-sp-${i}`} className="inline-block">
                    &nbsp;
                  </span>
                );
              }
              // animate each grapheme in the word
              return Array.from(tok).map((ch, ci) => {
                const idx = order++;
                return (
                  <span
                    key={`${li}-${i}-${ci}`}
                    className="inline-block overflow-hidden align-baseline"
                  >
                    <motion.span
                      initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
                      animate={
                        inView
                          ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                          : { y: "110%", opacity: 0, filter: "blur(6px)" }
                      }
                      transition={{ ...baseTransition, delay: delay + idx * stagger }}
                      className="inline-block will-change-transform"
                    >
                      {ch}
                    </motion.span>
                  </span>
                );
              });
            })}
          </span>
        );
      })}
    </Tag>
  );
}
