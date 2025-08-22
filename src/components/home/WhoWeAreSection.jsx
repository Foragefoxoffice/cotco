import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
const WhoWeAreSection = () => {
  return (
    <section className="w-full md:px-20 pt-6 md:pt-20 bg-white">
      <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
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
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            WHO WE ARE<span className="text-black">?</span>
          </h2>
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
