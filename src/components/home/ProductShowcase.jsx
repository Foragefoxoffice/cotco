import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
const categories = [
  {
    title: "COTTON",
    description: "Global cotton sourcing to power your production",
    image: "/img/home/cotton.png",
    icon: "/img/home/icon1.png",
  },
  {
    title: "FIBER",
    description: "Eco-friendly fibers for fashion and nonwoven innovation",
    image: "/img/home/cotton1.png",
    icon: "/img/home/icon2.png",
  },
  {
    title: "MACHINES",
    description: "Advanced machinery to elevate your textile operations",
    image: "/img/home/cottonmac.png",
    icon: "/img/home/icon3.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white page-width md:pt-20 pt-6">
      <div className=" mx-auto grid md:grid-cols-6 gap-10">
     
        <div className="w-full col-span-3 place-content-center">
          <h2 className="heading mb-4">
            WHAT WE DO?
          </h2>
          <p className="text-lg text-gray-600">
            Explore our complete range of premium cotton, <br />
            sustainable fibers, and advanced textile machines
          </p>
        </div>
        <div className="relative col-span-3 h-72 rounded-2xl shadow-lg pro-img">
          <img
            src={categories[0].image}
            alt={categories[0].title}
            className=" inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30  rounded-3xl" />
          <div className="absolute top-[-10px] left-[-10px] bg-white  flex items-center justify-center z-10 pro-icon ">
            <img src={categories[0].icon} alt=""  />
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-4xl font-bold">{categories[0].title}</h3>
            <p className="text-[16px] mt-1">{categories[0].description}</p>
          </div>
        </div>
</div>
        {/* Right Grid */}
        <div className="w-full pt-12 ">
          {/* Top Large Card (COTTON) */}

          {/* Bottom Two Cards (FIBER & MACHINES) */}
          <div className="grid md:grid-cols-6 gap-10">
            {categories.slice(1).map((item, idx) => (
              <div
                key={idx}
                className="relative col-span-3 h-72 rounded-2xl shadow-lg pro-img"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/30 rounded-3xl" />
                <div className="absolute top-[-10px] left-[-10px]  bg-white rounded-full flex items-center justify-center z-10 pro-icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-4xl font-bold">{item.title}</h3>
                  <p className="text-[16px] mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}
