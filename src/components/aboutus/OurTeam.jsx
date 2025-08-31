import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "DINH KIM HUAN",
    title: "FOUNDER - DIRECTOR",
    image: "/img/services/team1.png",
  },
  {
    name: "HIEP NGO",
    title: "FINANCE DIRECTOR",
    image: "/img/services/team2.png",
  },
  {
    name: "LISA",
    title: "TRADER / PROJECT MANAGER",
    image: "/img/team/lisa.png",
  },
  {
    name: "MARIA",
    title: "YARN MANAGER",
    image: "/img/team/maria.png",
  },
  {
    name: "Memole",
    title: "TRADER",
    image: "/img/team/memole.png",
  },
  {
    name: "Tracy",
    title: "TRADER",
    image: "/img/team/tracy.png",
  },
  {
    name: "Eric",
    title: "LOGISTIC EXECUTIVE",
    image: "/img/team/eric.png",
  },
    {
    name: "giao",
    title: "EXECUTIVE",
    image: "/img/team/giao.png",
  },
  {
    name: "quan",
    title: "EXECUTIVE",
    image: "/img/team/quan.png",
  },
  {
    name: "mei",
    title: "MARKETING DESIGNER",
    image: "/img/team/mei.png",
  },
  {
    name: "Tien le",
    title: "TECHNICIAN",
    image: "/img/team/tien-le.png",
  },
];

export default function OurTeam() {
  return (
    <section className="md:pt-20 page-width pt-6 bg-white">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <div>
            <p
              style={{ display: "inline-block" }}
              className="text-sm mb-2 text-gray-700 [background-color:#74AFDF4D] display-inline-block px-3 py-1 rounded-full"
            >
              Our people
            </p>
          </div>

          <h2 className="heading mb-4">MEET OUR TEAM</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals combine deep textile industry
            knowledge with international trade expertise, ensuring seamless
            transactions and technical support for our clients.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl text-center team-members">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="py-4 px-3">
                  <h3 className="font-semibold text-xl uppercase">{member.name}</h3>
                  <p className="text-gray-600 text-md mt-2 uppercase">{member.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-4 gap-4">
          <button className="swiper-prev w-10 h-10 rounded-full border hover:cursor-pointer border-gray-300 flex items-center justify-center hover:bg-[#74AFDF4D]">
            <FaArrowLeft />
          </button>
          <button className="swiper-next w-10 h-10 rounded-full border hover:cursor-pointer border-gray-300 flex items-center justify-center hover:bg-[#74AFDF4D]">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
