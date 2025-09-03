import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import TitleAnimation from "../common/AnimatedTitle";
const WhoWeAreSection = () => {
  return (
    <section className="w-full  bg-white page-width md:pt-20 pt-6">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/img/home/who.png"
            alt="Textile Process"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2  md:text-left">
          <TitleAnimation
            text={"WHO WE ARE?"}
            className="heading"
            align="left"
            delay={0.1}
        stagger={0.05}   // slower/faster per letter
        once={true}
      />

          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            From Raw Materials to Technology<br />
            Our Journey to Elevate the Value of Textiles<br />
            Partnering with you to create quality, sustainability, and innovation.
          </p>

          <button className="px-5 py-2 rounded-full flex gap-2 items-center border border-gray-400 hover:bg-black hover:text-white transition-all text-sm font-semibold">
            SEE MORE <FiArrowDownRight/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
