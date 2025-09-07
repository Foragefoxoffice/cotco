"use client";
import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * TitleAnimation
 * Props:
 *  - text: string | string[]  (use "\n" for new lines)
 *  - as: "h1" | "h2" | "h3" | "div" (default: h2)
 *  - align: "left" | "center" | "right" | "text-left md:text-center ..."
 *  - mdAlign?: "left" | "center" | "right"
 *  - lgAlign?: "left" | "center" | "right"
 *  - xlAlign?: "left" | "center" | "right"
 *  - delay: number (default 0)
 *  - stagger: number (default 0.06)
 *  - once: boolean (default true)
 *  - direction: "ltr" | "rtl"  (default "ltr")  // NEW
 *  - offsetY: number (default 30)               // NEW (start a little below)
 *  - offsetX: number (default 8)                // NEW (small lateral slide)
 *  - className: string
 */
export default function TitleAnimation({
  text,
  as: Tag = "h2",
  align = "left",
  mdAlign,
  lgAlign,
  xlAlign,
  delay = 0,
  stagger = 0.06,
  once = true,
  direction = "ltr",
  offsetY = 30,
  offsetX = 8,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  // Normalize to array of lines
  const lines = useMemo(
    () => (Array.isArray(text) ? text : String(text).split("\n")).filter(Boolean),
    [text]
  );

  // map "left|center|right" or pass-through Tailwind text-* classes
  const mapAlign = (val, pref = "") => {
    if (!val) return "";
    if (typeof val === "string" && /text-(left|center|right)/.test(val)) return val;
    const map = { left: "text-left", center: "text-center", right: "text-right" };
    return pref + (map[val] || "text-left");
  };

  const alignClasses = [
    mapAlign(align),
    mdAlign && mapAlign(mdAlign, "md:"),
    lgAlign && mapAlign(lgAlign, "lg:"),
    xlAlign && mapAlign(xlAlign, "xl:"),
  ]
    .filter(Boolean)
    .join(" ");

  const baseTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

  /**
   * Build a flat list of glyphs with metadata so we can compute a global index.
   * This lets us reverse the reveal order globally for RTL.
   */
  const glyphs = useMemo(() => {
    const out = [];
    lines.forEach((line, li) => {
      const tokens = line.split(/(\s+)/);
      tokens.forEach((tok, ti) => {
        if (/^\s+$/.test(tok)) {
          out.push({ type: "space", key: `${li}-sp-${ti}` });
        } else {
          Array.from(tok).forEach((ch, ci) => {
            out.push({ type: "char", ch, key: `${li}-${ti}-${ci}`, li, ti, ci });
          });
        }
      });
    });
    return out;
  }, [lines]);

  // Assign a sequence index (stagger order). Reverse for RTL.
  const indexedGlyphs = useMemo(() => {
    const indices = glyphs
      .map((g, idx) => ({ ...g, idx }))
      // keep spaces in the array so structure renders correctly, but don't count them in totalChars
      .map((g) => g);

    const totalChars = indices.filter((g) => g.type === "char").length;

    let running = 0;
    return indices.map((g) => {
      if (g.type === "space") return { ...g, seq: null };
      const seq = direction === "rtl" ? totalChars - 1 - running : running;
      running += 1;
      return { ...g, seq };
    });
  }, [glyphs, direction]);

  return (
    <Tag
      ref={ref}
      className={[
        "font-semibold leading-[1.05] tracking-tight",
        "motion-reduce:transform-none motion-reduce:transition-none",
        alignClasses,
        className,
      ].join(" ")}
    >
      {/* Reconstruct lines while using precomputed indices */}
      {lines.map((line, li) => {
        // get the slice for this line to render structure (spaces included)
        const lineSlice = indexedGlyphs.filter(
          (g) => g.li === li || g.type === "space" // spaces have no li; we’ll place them inline as encountered below
        );

        // But simpler: re-tokenize line and pull from the global array in order.
        const tokens = line.split(/(\s+)/);
        let cursor = 0; // move through global list to match this line's glyphs

        return (
          <span key={li} className="block">
            {tokens.map((tok, ti) => {
              if (/^\s+$/.test(tok)) {
                return (
                  <span key={`${li}-sp-${ti}`} className="inline-block">
                    &nbsp;
                  </span>
                );
              }

              return Array.from(tok).map((ch, ci) => {
                // Find the next char glyph with matching key
                const g = glyphs.find((gg) => gg.key === `${li}-${ti}-${ci}`);
                const withSeq = indexedGlyphs.find((ig) => ig.key === g.key);

                // subtle lateral slide: from right if rtl, else from left=0
                const startX = direction === "rtl" ? offsetX : 0;

                return (
                  <span key={withSeq.key} className="inline-block overflow-hidden align-baseline">
                    <motion.span
                      initial={{ y: `${offsetY}%`, x: startX, opacity: 0, filter: "blur(3px)" }}
                      animate={
                        inView
                          ? { y: "0%", x: 0, opacity: 1, filter: "blur(0px)" }
                          : { y: `${offsetY}%`, x: startX, opacity: 0, filter: "blur(3px)" }
                      }
                      transition={{ ...baseTransition, delay: delay + (withSeq.seq ?? 0) * stagger }}
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
