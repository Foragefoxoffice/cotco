import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const suppliers = [
  {
    name: "Louis Dreyfus Company (LDC)",
    logo: "/img/cotton/suppliers/louis_logo.png",
    background: "/img/cotton/suppliers/louis_bg.jpg",
    content: [
      "Founded: 1851, Netherlands",
      "Operations: Over 100 countries",
      "One of the world’s largest cotton suppliers, holding a significant share of global raw cotton exports",
      "Extensive procurement network in the USA, Brazil, India, and Africa",
      "Strong financial position and optimized logistics costs",
      "Member of the Better Cotton Initiative (BCI), committed to emission reduction and sustainable development",
    ],
  },
  {
    name: "Viterra",
    logo: "/img/cotton/suppliers/viterra_logo.png",
    background: "/img/cotton/suppliers/viterra-bg.png",
    content: [
      "Founded: 2016 (from Glencore Agriculture), Netherlands",
      "Operations: Over 37 countries",
      "Leading cotton trading group with a large market share in Asia, Europe, and North America",
      "Strong sourcing from the USA, Australia, and West Africa",
      "Integrated supply chain: warehousing, processing, modern transportation",
      "Solid finances ensuring stable supply and large delivery capacity",
      "BCI member, committed to environmental protection and community investment",
    ],
  },
  {
    name: "ECOM",
    logo: "/img/cotton/suppliers/ecom_logo.png",
    background: "/img/cotton/suppliers/ecom-bg.jpg",
    content: [
      "Founded: 1849, Switzerland",
      "Founded: 1849, Switzerland",
      "One of the oldest and most reputable companies in the international cotton industry",
      "Procures and distributes a large volume of diverse cotton from the USA, Brazil, India, and Africa",
      "Strict quality control, serving many leading global textile groups",
      "BCI member, reducing environmental impact and supporting farming communities",
    ],
  },
  {
    name: "REINHART",
    logo: "/img/cotton/suppliers/reinhart_logo.jpg",
    background: "/img/cotton/suppliers/paul-bg.jpg",
    content: [
      "Founded: 1788, Switzerland",
      "Over 230 years of experience as one of the world’s largest and oldest cotton suppliers",
      "Stable supply from the USA, West Africa, Brazil, and India",
      "Extensive logistics network, rigorous quality control",
      "Highly regarded by partners for reputation, quality, and timely delivery",
      "BCI member, focused on sustainable development and efficient resource use",
    ],
  },
  {
    name: "DEVCOT",
    logo: "/img/cotton/suppliers/devcot_logo.png",
    background: "/img/cotton/suppliers/devcot-bg.jpg",
    content: [
      "Headquarters: Le Havre, France",
      "One of Europe’s leading cotton trading companies",
      "Strong sourcing from the USA, Brazil, West Africa, and India",
      "Clients include high-end textile manufacturers in France, Germany, Italy, and Spain",
      "Strategic location in Le Havre port, optimizing delivery costs and time",
      "BCI member, committed to a green supply chain and supporting agricultural communities",
    ],
  },
  {
    name: "CAM NEGOCE",
    logo: "/img/cotton/suppliers/cam_logo.png",
    background: "/img/cotton/suppliers/cam-bg1.png",
    content: [
      "Headquarters: France",
      "A reputable cotton trading company in Europe",
      "Main sourcing from the USA, Brazil, and West Africa",
      "Clients: textile manufacturers in France, Spain, Portugal, Morocco, Tunisia",
      "Wide procurement network, professional logistics and documentation services",
      "BCI member, committed to sustainable development and supporting farming communities",
    ],
  },
];

export default function SuppliersSection() {
  const [index, setIndex] = useState(0);

  // Refs to avoid stale closures inside event listeners
  const sectionRef = useRef(null);
  const touchStartYRef = useRef(null);
  const lockRef = useRef(false);
  const indexRef = useRef(0);

  // Keep indexRef in sync with state
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const clampIndex = (next) => {
    if (next < 0) return 0;
    if (next > suppliers.length - 1) return suppliers.length - 1;
    return next;
  };

  const isSectionPinned = () => {
    const el = sectionRef.current;
    if (!el) return false;
    const b = el.getBoundingClientRect();
    return b.top <= 0 && b.bottom >= window.innerHeight;
  };

  useEffect(() => {
    const SNAP_LOCK_MS = 600;
    const SWIPE_THRESHOLD = 30; // px

    const lock = () => {
      lockRef.current = true;
      setTimeout(() => {
        lockRef.current = false;
      }, SNAP_LOCK_MS);
    };

    const goNext = () => {
      const next = clampIndex(indexRef.current + 1);
      if (next !== indexRef.current) {
        setIndex(next);
        indexRef.current = next;
      }
    };

    const goPrev = () => {
      const prev = clampIndex(indexRef.current - 1);
      if (prev !== indexRef.current) {
        setIndex(prev);
        indexRef.current = prev;
      }
    };

    const onWheel = (e) => {
      if (lockRef.current) return;
      if (!isSectionPinned()) return;

      // prevent page scroll while snapping
      e.preventDefault();
      lock();

      if (e.deltaY > 0) goNext();
      else if (e.deltaY < 0) goPrev();
    };

    const onTouchStart = (e) => {
      if (!isSectionPinned()) return;
      touchStartYRef.current = e.touches[0].clientY;
      // don't prevent default here
    };

    const onTouchMove = (e) => {
      if (lockRef.current) return;
      if (!isSectionPinned()) return;
      if (touchStartYRef.current == null) return;

      const currentY = e.touches[0].clientY;
      const dy = touchStartYRef.current - currentY; // swipe up = positive

      if (Math.abs(dy) < SWIPE_THRESHOLD) return;

      // prevent the page from scrolling while we snap
      e.preventDefault();
      lock();

      if (dy > 0) goNext(); // swipe up → next
      else goPrev();        // swipe down → prev

      // reset anchor so continuous swipe can progress item by item
      touchStartYRef.current = currentY;
    };

    // Desktop: wheel on window so it catches scroll while pinned
    window.addEventListener("wheel", onWheel, { passive: false });

    // Mobile: touch on the section itself
    const sec = sectionRef.current;
    if (sec) {
      sec.addEventListener("touchstart", onTouchStart, { passive: true });
      sec.addEventListener("touchmove", onTouchMove, { passive: false }); // must be false to use preventDefault
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (sec) {
        sec.removeEventListener("touchstart", onTouchStart);
        sec.removeEventListener("touchmove", onTouchMove);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh]"
      style={{
        touchAction: "pan-y",           // allow vertical gesture; we manually prevent when snapping
        overscrollBehavior: "contain",  // stop scroll chaining on mobile
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Backgrounds */}
        {suppliers.map((supplier, i) => (
          <motion.img
            key={supplier.name}
            src={supplier.background}
            alt={`${supplier.name} background`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ willChange: "opacity" }}
            animate={{ opacity: index === i ? 1 : 0 }}
          />
        ))}

        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div
          className={clsx(
            "relative z-10 h-full p-6 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center page-width gap-6 md:gap-0"
          )}
          style={{ alignItems: "flex-start" }}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mt-28 md:mt-0 suppliers-content"
            style={{ paddingTop: "100px" }}
          >
            <h2 className="heading mb-12" style={{color:"white"}}>SUPPLIERS</h2>

            <div className="bg-white text-black rounded-full inline-block px-5 py-2 mb-4 font-medium shadow-lg">
              {suppliers[index].name}
            </div>

            <img
              src={suppliers[index].logo}
              alt="Logo"
              className="w-40 h-auto mb-6 md:hidden suppliers-logo"
            />

            <hr className="border-white w-4/6 my-4 border-1" />

            <ul className="space-y-2 pt-4 text-white/90 leading-relaxed text-base md:text-lg">
              {suppliers[index].content.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>
          </motion.div>

          {/* Logo List (desktop) */}
          <div className="hidden my-auto md:flex flex-col gap-4 items-end p-6 bg-white/30 rounded-lg shadow-lg backdrop-blur-md">
            {suppliers.map((supplier, i) => (
              <div
                key={supplier.name}
                onClick={() => setIndex(i)}
                className={clsx(
                  "p-2 bg-white rounded-md w-40 shadow-md cursor-pointer transition-all duration-300",
                  i === index ? "scale-105 ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
                )}
              >
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: mobile next/prev affordances */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden z-10">
          {suppliers.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={clsx(
                "w-2.5 h-2.5 rounded-full",
                i === index ? "bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
