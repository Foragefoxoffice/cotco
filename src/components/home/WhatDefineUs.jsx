import React from "react";
import { TbCheckbox } from "react-icons/tb";

const WhatDefineUs = () => {
  const ITEMS = [
    {
      title: "Integrity & Transparency",
      desc:
        "We are committed to building long-term trust through transparency in every transaction and partnership.",
    },
    {
      title: "Sustainable Collaboration",
      desc:
        "Fostering strong relationships with partners and clients based on trust and long-term development.",
    },
    {
      title: "Exceptional Quality",
      desc:
        "Ensuring our products and services meet the highest standards to satisfy the most demanding global markets.",
    },
    {
      title: "Dedicated Service",
      desc:
        "Ensuring our products and services meet the highest standards to satisfy the most demanding global markets.",
    },
    {
      title: "Innovation & Flexibility",
      desc:
        "Continuously improving solutions, technology, and processes to deliver distinctive value to our customers.",
    },
    {
      title: "Sustainable Responsibility",
      desc:
        "Prioritizing sustainable material solutions that protect the environment and contribute to the community.",
    },
  ];

  return (
    <section className=" page-width bg-white rounded-md md:pt-20 pt-6 ">
      <div className="bg-[var(--secondary)] rounded-2xl md:py-16 p-6 md:px-22">
        <h2 className="text-center heading mb-8 " style={{color:'white'}}>
          WHAT DEFINES US
        </h2>

        <div className="grid gap-5 sm:gap-6 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {ITEMS.map((item, i) => (
            <article
              key={i}
              className="rounded-xl bg-white text-slate-900 shadow-[0_6px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 px-5 py-6"
            >
              <div className="flex items-center gap-3">
                <TbCheckbox className="h-12 w-12" />
                <div>
                  <h3 className="text-sm sm:text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDefineUs;
