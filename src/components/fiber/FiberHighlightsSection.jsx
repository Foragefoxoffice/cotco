import React, { useState, useEffect } from "react";

const sections = [
  {
    title: "Birla Viscose",
    lines: [
      "Standard viscose fiber,produced from wood pulp using a closed-loop process",
      "100%plant-based (wood)",
      "Breathable,soft,skin-friendly,natural drape",
    ],
    image: "/img/fiber/products/birla.png",
  },
  {
    title: "Liva Eco",
    lines: [
      "Enhanced viscose - eco-friendly with traceability",
      "100% plant-based (FSC-certified)",
      "Lower environmental impact, soft, easy to design with",
    ],
    image: "/img/fiber/products/liva.png",
  },
  {
    title: "birla Modal",
    lines: [
      "Premium fiber, softer than viscose, glossy, produced in closed-loop system",
      "100% plant-based",
      "Ideal for high-end fabrics, strong when wet, good crease recovery",
    ],
    image: "/img/fiber/products/model.png",
  },
  {
    title: "Birla Excel",
    lines: [
      "Next-gen fiber, made with NMMO solvent, 99.7% recovered, nearly zero waste",
      "100% plant-based (with molecular marker)",
      "Glossy, durable in both dry & wet states, highly absorbent, biodegradable",
    ],
    image: "/img/fiber/products/excel.png",
  },
  {
    title: "Spunshades<sup>TM</sup>",
    lines: [
      "Pre-dyed viscose, excellent color fastness, no post-dyeing needed",
      "100% plant-based",
      "Uniform color, pollution-free, cost-saving",
    ],
    image: "/img/fiber/products/spun.png",
  },
  {
    title: "Liva Reviva",
    lines: [
      "Recycled from pre-/post-consumer textile waste (up to 30%), uses both viscose & Excel",
      "Wood + recycled fabric (FSC-certified)",
      "Promotes circularity, eco-friendly, good drape and breathability",
    ],
    image: "/img/fiber/products/reviva.png",
  },
  {
    title: "EcoSoft",
    lines: [
      "Viscose derived from bamboo - fast growth, low resource use",
      "100% bamboo pulp",
      "Soft, light, breathable, good moisture control",
    ],
    image: "/img/fiber/products/birla.png",
  },
  {
    title: "SaFR",
    lines: [
      "Natural flame-retardant cellulose fiber, meets ISO 15025 standard",
      "100% plant-based (wood)",
      "Used in PPE, firefighting gear, OEKO-TEX certified, does not emit toxic gas when burning",
    ],
    image: "/img/fiber/products/birla.png",
  },
  {
    title: "Intellicolor",
    lines: [
      "Dyed using cationic or alkaline dyes, no post-rinsing needed",
      "Dye additives on viscose base",
      "Efficient dyeing, vibrant colors, less salt and environmental impact",
    ],
    image: "/img/fiber/products/birla.png",
  },
];

export default function FiberInfoBlocks() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index); // toggle on click
    } else {
      setActiveIndex(index); // always show on hover for desktop
    }
  };

  return (
    <section className="w-full divide-y divide-gray-200">
      {sections.map((section, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={idx}
            className={`group relative bg-white ${isActive ? "active" : ""}`}
            onClick={() => handleInteraction(idx)}
            onMouseEnter={() => !isMobile && handleInteraction(idx)}
          >
            {/* Floating Image */}
            <div
              className={`absolute bottom-[-60px] right-0 transform -translate-x-1/2 z-30 w-48 rounded-lg shadow-lg transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={section.image} alt="fiber" className="w-full h-auto hidden md:block" />
            </div>

            <div className="overflow-hidden relative">
  {/* Top Half (opens downward) */}
  <div
    className={`absolute top-0 left-0 w-full h-1/2 bg-[#0A4A78] z-0 transition-transform duration-700 ease-in-out origin-bottom
      ${isActive ? "translate-y-0" : "-translate-y-full"}`}
  />

  {/* Bottom Half (opens upward) */}
  <div
    className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#0A4A78] z-0 transition-transform duration-700 ease-in-out origin-top
      ${isActive ? "translate-y-0" : "translate-y-full"}`}
  />

  {/* Main Content */}
  <div
    className={`relative z-10 page-width py-20 transition-all duration-500 grid md:grid-cols-4 gap-10 md:gap-20 ${
      isActive ? "text-white" : "text-black"
    }`}
  >
    <h3
      className="text-4xl md:col-span-2 md:text-6xl font-extrabold uppercase tracking-wide min-w-[180px] outlined-text flex items-center"
      dangerouslySetInnerHTML={{ __html: section.title }}
    />

    <ul className="space-y-3 md:col-span-2 text-sm md:text-base leading-relaxed">
      {section.lines.map((line, i) => (
        <li
          key={i}
          className="relative pl-6 before:absolute before:left-0 before:top-1 before:content-['--']"
        >
          {line}
        </li>
      ))}
    </ul>
  </div>
</div>

          </div>
        );
      })}
      <div
                className="relative z-10 page-width pt-10 md:pt-26 transition-all duration-500 grid gap-8  "
              >
              <p className="text-xl text-center">If you are looking for a raw material solution that combines performance with
environmental responsibility, viscose fiber is the ideal choice. With its advantages in
quality, cost-effectiveness, and sustainability, viscose is increasingly favored by
manufacturers and fashion brands worldwide.</p>
             <a className="bg-[#143A59] w-60 text-center rounded-xl m-auto text-white p-3" href="/contact">Contact Our Team</a>

              </div>
    </section>
  );
}
