import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const cardRef = useRef(null);

  // Scroll-driven micro-interaction (like your previous hero):
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const radius = useTransform(scrollYProgress, [0, 1], [20, 28]);

  return (
    <section className="bg-white hero">
      {/* Local styles for gradient + shine animations */}
      <style>{`
        .animated-gradient{
          background: linear-gradient(180deg, #4CA6C7 0%, #0B5FA1 100%);
          background-size: 100% 200%;
          animation: gradShift 6s ease-in-out infinite alternate;
        }
        @keyframes gradShift {
          0% { background-position: 50% 0%; }
          100% { background-position: 50% 100%; }
        }
        .shine::after{
          content:'';
          position:absolute; inset:0;
          pointer-events:none;
          border-radius: inherit;
          background: linear-gradient(115deg,
            rgba(255,255,255,0) 30%,
            rgba(255,255,255,0.14) 50%,
            rgba(255,255,255,0) 70%);
          background-size: 300% 300%;
          animation: sweep 3.6s ease-in-out infinite;
        }
        @keyframes sweep {
          0%   { background-position: -200% 0%; }
          100% { background-position:  200% 0%; }
        }
      `}</style>

      <motion.div
        ref={cardRef}
        style={{ scale, borderRadius: radius }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="
          relative w-full
          h-[220px] md:h-[80vh]
          shadow-[0_8px_24px_rgba(0,0,0,0.12)]
          animated-gradient shine
        "
      >
        <motion.h1
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="absolute left-16 bottom-16 text-white font-extrabold tracking-wide text-6xl md:text-8xl"
        >
          CONTACT
        </motion.h1>
      </motion.div>
    </section>
  );
}
