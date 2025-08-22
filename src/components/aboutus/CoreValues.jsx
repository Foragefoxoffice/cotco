import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};


export default function CoreValuesSection() {
  return (
    <section className="px-4 md:px-20 py-16 md:py-5 bg-white overflow-hidden">
<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[330px] corevalues-section"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.2 }}
>
  {/* 1. Core Values */}
  <motion.div
    variants={fadeInUp}
    className="relative bg-[#edf3fb] rounded-xl md:p-20 p-6 flex items-center justify-center text-center order-1"
  >
    <h2 className="text-2xl font-bold z-10 md:text-sm">CORE VALUES</h2>
  </motion.div>

  {/* 2. Image (Placed right after Core Values in mobile) */}
  <motion.div
    variants={fadeInUp}
    className="md:col-span-2 relative rounded-xl order-2 md:order-4"
  >
    <img
      src="/img/services/image5.png"
      alt="Cotton Field"
      className="w-full relative cotton-flower-image1"
    />
<div className="relative">
  <img
    src="/img/services/image6.png"
    alt="Cotton Field"
    className="w-full max-w-2xl -mt-[568px] z-10 cotton-flower-image"
  />
</div>

  </motion.div>

  {/* 3. Trust */}
  <motion.div
    variants={fadeInUp}
    className="bg-[#edf3fb] rounded-xl p-16 place-content-center order-3 core-values-box"
  >
    <h3 className="text-2xl font-bold mb-2">TRUST</h3>
    <p className="text-medium text-gray-700">
      We act with integrity, ensuring reliability in every transaction
    </p>
  </motion.div>

  {/* 4. Quality */}
  <motion.div
    variants={fadeInUp}
    className="bg-[#edf3fb] rounded-xl core-values-box p-16 place-content-center order-4 md:order-3"
  >
    <h3 className="text-2xl font-bold mb-2">QUALITY</h3>
    <p className="text-medium text-gray-700">
      We insist on premium standards for all products and services.
    </p>
  </motion.div>

  {/* 5. Service */}
  <motion.div
    variants={fadeInUp}
    className="bg-[#edf3fb] rounded-xl core-values-box p-16 place-content-center order-5"
  >
    <h3 className="text-2xl font-bold mb-2">SERVICE</h3>
    <p className="text-medium text-gray-700">
      We provide attentive, expert support from inquiry to delivery and
      beyond.
    </p>
  </motion.div>
</motion.div>

    </section>
  );
}
