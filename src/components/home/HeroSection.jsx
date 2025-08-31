import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SlideButton from "../common/SlideButton";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={scrolled ? { scale: 0.95, opacity: 0.9 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden hero min-h-screen transition-all duration-500 ease-out ${
        scrolled ? "rounded-2xl shadow-2xl" : ""
      }`}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video/hero.mp4"
      />

      {/* Dark overlay */}
       <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute md:bottom-0 bottom-10 md:px-12 p-6 pb-20 text-white max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Your Trusted Partner in Quality Cotton, Fibers & Textile Machinery
        </h1>
        <p className="mt-4 text-lg">
          Empowering Vietnam’s Textile Industry Since 2016
        </p>
        <div className="mt-6">
          <SlideButton
            bgColor="#fff"
            textColor="#143A59"
            hoverBgColor="#143A59"
            hoverTextColor="#fff"
          >
           Explore Products
          </SlideButton>
        </div>
      </div>
    </motion.div>
  );
}
