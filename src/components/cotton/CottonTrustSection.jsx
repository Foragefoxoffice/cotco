import React from "react";

export default function CottonTrustSection() {
  return (
    <section className="pt-20 page-width bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text + Logos */}
        <div>
          <h2 className="heading mb-4">
            GROW IN TRUST, QUALITY<br className="hidden md:block" /> AND SERVICE
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Besides marketing cotton from major production regions worldwide, COTCO enhances product value
            through stable quality control and professional logistics, ensuring efficient supply.
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-6">
            <img
              src="/img/cotton/trust/ncc.png"
              alt="National Cotton Council"
              className="w-24 h-24 object-contain border-2 border-[#74AFDF66] p-2 rounded-md"
            />
            <img
              src="/img/cotton/trust/africa.png"
              alt="Cotton Made in Africa"
              className="w-24 h-24 object-contain border-2 border-[#74AFDF66] bg-[#8A1E2D] rounded-md p-2"
            />
            <img
              src="/img/cotton/trust/afcot.png"
              alt="AFCOT"
              className="w-24 h-24 object-contain border-2 border-[#74AFDF66] p-2 rounded-md"
            />
          </div>
        </div>

        {/* Right ICA Image */}
        <div className="flex justify-center md:justify-center">
          <img
            src="/img/cotton/trust/ica.png"
            alt="International Cotton Association"
            className="w-4/7 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
