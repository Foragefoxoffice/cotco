import React from "react";

export default function AboutUsSection() {
  return (
    <section className="bg-white">
      <div className=" mx-auto grid grid-cols-12 gap-8 md:gap-18 items-start px-6 md:px-20 py-6 md:py-16">
        {/* LEFT: Image */}
        <div className="col-span-12 md:col-span-5">
          <div className="aspect-square w-full max-w-[420px] md:max-w-full rounded-[24px] overflow-hidden ring-1 ring-black/5 shadow-sm">
            <img
              src="/img/services/image1.png" // <-- replace with your image path
              alt="COTCO partners wall"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="col-span-12 md:col-span-7 grid h-full place-content-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-slate-900 uppercase">
            About Us
          </h2>

          <div className="mt-4 space-y-4 text-slate-700 leading-relaxed max-w-2xl">
            <p className="font-medium">
              COTCO — Your Trusted Partner in Vietnam’s Textile Industry
            </p>

            <p>
              We are not merely an agency promoting high-quality cotton sourced
              from around the world—including the USA, Australia, Africa, and
              more—to textile mills across Vietnam.
            </p>

            <p>
              We are committed to upholding the highest quality standards for
              our customers’ yarn products globally. Furthermore, we have
              expanded our operations into the field of spinning machinery
              through our exclusive partnership with LMW—a trusted brand in the
              manufacturing of spinning equipment in India.
            </p>

            <p>
              Let COTCO accompany you on the journey from raw materials to
              advanced technology, helping you achieve excellence and success in
              the textile and spinning machinery industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
