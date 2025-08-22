import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: "Aditya Birla Group", image: "/img/partners/logo1.png" },
  { name: "Viterra", image: "/img/partners/logo2.png" },
  { name: "LDC", image: "/img/partners/logo3.png" },
  { name: "LMW", image: "/img/partners/logo4.png" },
  { name: "Devcot", image: "/img/partners/logo5.png" },
  // Optional: Duplicate to make the loop smoother
  { name: "Aditya Birla Group", image: "/img/partners/logo1.png" },
  { name: "Viterra", image: "/img/partners/logo2.png" },
];

export default function PartnerSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0, // key to smooth continuous scroll
    cssEase: "linear", // smooth motion
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="pb-12 px-4 md:px-20 bg-white rounded-md partner-section mt-16">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-8">
        PROUD PARTNERS OF GLOBAL LEADERS
      </h2>

      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="px-4">
            <div className="flex justify-center items-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
