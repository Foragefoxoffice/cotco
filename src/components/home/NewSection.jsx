import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxArrowTopRight } from "react-icons/rx";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const NEWS = [
  { img: "/img/home/news1.jpg", title: "Now the pain is very important, and the teaching is consistent.", excerpt: "Reflections on process and value: behind our latest milestone and community gathering.", href: "#" },
  { img: "/img/home/news3.png", title: "Workshop highlights: sharing, learning, and building together.", excerpt: "Collaborative sessions focused on practical skills and long-term impact.", href: "#" },
  { img: "/img/home/news2.jpg", title: "Campus event recap: momentum for the next quarter.", excerpt: "A quick look at what’s next and how we’re aligning teams around goals.", href: "#" },
  { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop", title: "Design talks: systems, patterns, and velocity.", excerpt: "From components to culture—notes from our latest internal meetup.", href: "#" },
];

export default function NewsSection() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",             // center the active slide
    containScroll: "trimSnaps",
    dragFree: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <section className="bg-white overflow-x-hidden">
           <div className="grid grid-cols-12 gap-10 items-start page-width mr-0 md:pr-0 md:py-20 pb-10 " style={{paddingRight:0,marginRight:0}}>
        {/* Left column */}
        <div className="col-span-12 md:col-span-4 h-full grid place-content-center">
          <h2 className="heading text-center md:text-left ">NEWS</h2>
          <p className="mt-4 text-slate-600 text-center md:text-left leading-relaxed max-w-sm">
            Conveniently located and surrounded by natural beauty, it's the perfect spot for our celebration.
          </p>
        </div>

        {/* Right: dark panel + slider */}
        <div className="col-span-12 md:col-span-8 overflow-x-hidden relative">
          <div className="absolute inset-y-0 right-0 w-[92%] bg-[#0E2F47] rounded-l-[36px] md:rounded-l-[48px]" />

          <div className="relative py-12 pl-2 pr-2 md:pl-6 md:pr-10">
            {/* Arrows */}
            {/* <div className="absolute -top-6 right-6 flex gap-2 z-10">
              <button
                onClick={scrollPrev}
                disabled={!canPrev}
                className={`h-10 w-10 rounded-full bg-white shadow ring-1 ring-black/5 grid place-items-center
                ${!canPrev ? "opacity-40 cursor-not-allowed" : "hover:shadow-md"}`}
                aria-label="Previous"
              >
                <HiOutlineChevronLeft className="text-xl" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                className={`h-10 w-10 rounded-full bg-white shadow ring-1 ring-black/5 grid place-items-center
                ${!canNext ? "opacity-40 cursor-not-allowed" : "hover:shadow-md"}`}
                aria-label="Next"
              >
                <HiOutlineChevronRight className="text-xl" />
              </button>
            </div>

            {/* Embla viewport */}
            <div ref={emblaRef} className="">
              {/* Container: gap-0 ensures the side slides show **exactly half** */}
              <div className="flex md:gap-0">
                {NEWS.map((n, i) => (
                  <div
                    key={i}
                    // 50% basis => center slide full, neighbors each show half
                    className="basis-1/2 shrink-0 md:w-[200px]"
                  >
                    <article
                      className={` bg-white ring-1 ring-black/5 rounded-2xl overflow-hidden transition-all duration-300 p-4
                                  ${selectedIndex === i ? "scale-100 shadow-2xl" : "scale-[0.8] md:mx-[-30px] opacity-95 shadow-lg"}`}
                    >
                      <img src={n.img} alt={n.title} className=" w-full h-40 md:h-60 object-cover rounded-xl" />
                      <div className="py-4">
                        <h3 className="text-[18px] font-semibold text-slate-900 leading-snug">
                          {n.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{n.excerpt}</p>
                        <a href={n.href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0F3A56]">
                          <span className="h-8 w-8 rounded-full bg-[#1276BD] text-white grid place-items-center text-[16px]">
                            <RxArrowTopRight />
                          </span>
                          Learn More
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex gap-2 justify-end pr-2">
              {NEWS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all
                  ${selectedIndex === i ? "w-6 bg-white" : "w-3 bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
