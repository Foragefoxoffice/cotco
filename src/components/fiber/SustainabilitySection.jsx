import React from "react";
import { FaRecycle, FaDroplet, FaEarthAmericas } from "react-icons/fa6";

const SustainabilitySection = () => {
  return (
    <section className="bg-white pb-20 px-4 md:px-20">
      <div className="mx-auto text-center">
        <span className="text-sm font-semibold text-black px-4 py-1 bg-blue-100 rounded-full mb-4 inline-block">
          Sustainability
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
          ECO-FRIENDLY FROM PRODUCTION TO DISPOSAL
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Our viscose fibers are designed with the environment in mind at every stage of their lifecycle.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="h-full">
            <img
              src="/img/fiber/eco.jpg" // <-- replace with actual image path
              alt="Colorful Eco Fabrics"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {/* Biodegradable */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-left flex items-start gap-4 hover:shadow-sm hover:border hover:border-[#9ABFE1]">
              <FaRecycle className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Biodegradable</h4>
                <p className="text-gray-600 text-sm">
                  Naturally breaks down without leaving microplastics in the environment after disposal.
                </p>
              </div>
            </div>

            {/* Efficient Production */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm text-left flex items-start gap-4 hover:shadow-sm hover:border hover:border-[#9ABFE1]">
              <FaDroplet className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Efficient Production</h4>
                <p className="text-gray-600 text-sm">
                  Manufactured using increasingly energy- and water-efficient processes to minimize environmental impact.
                </p>
              </div>
            </div>

            {/* Sustainable Fashion */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm text-left flex items-start gap-4 hover:shadow-sm hover:border hover:border-[#9ABFE1]">
              <FaEarthAmericas className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Sustainable Fashion</h4>
                <p className="text-gray-600 text-sm">
                  Supports the global shift towards greener fashion alternatives without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
