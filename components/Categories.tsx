"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const categories = [
  {
    title: "Solar panels",
    subtitle: "Residential",
    count: "12+",
    image: "/images/category1.png",
    bg: "bg-gray-100",
    button: "Shop panels",
  },
  {
    title: "Solar inverters",
    subtitle: "Commercial",
    count: "8+",
    image: "/images/category2.png",
    bg: "bg-[#D9ECFF]",
    button: "Shop inverters",
  },
  {
    title: "Solar batteries",
    subtitle: "Storage",
    count: "6+",
    image: "/images/category3.png",
    bg: "bg-gray-100",
    button: "Shop batteries",
  },
  {
    title: "Solar accessories",
    subtitle: "Components",
    count: "20+",
    image: "/images/category4.png",
    bg: "bg-gray-100",
    button: "Shop accessories",
  },
  {
    title: "Charge controllers",
    subtitle: "Regulation",
    count: "5+",
    image: "/images/category5.png",
    bg: "bg-gray-100",
    button: "Shop controllers",
  },
  {
    title: "Electrical appliances",
    subtitle: "Installation",
    count: "15+",
    image: "/images/category6.png",
    bg: "bg-gray-100",
    button: "Shop appliances",
  },
];

export default function ProductCategories() {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  /* ✅ Responsive items per view */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.ceil(categories.length / itemsPerView) - 1;

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="flex justify-between items-start mb-10 md:mb-14">
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-500 mb-2">
                Browse
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-900">
                Categories
              </h2>
              <p className="text-gray-500 text-sm md:text-lg">
                Pick a category and start shopping
              </p>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-100"
            >
              View all
            </button>
          </div>

          {/* ✅ Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {categories.map((item, i) => (
                <div
                  key={i}
                  className={`
                    flex-shrink-0
                    w-full
                    sm:w-[calc(50%-12px)]
                    md:w-[calc(33.333%-16px)]
                  `}
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-10 md:mt-12">

            {/* ✅ Dynamic dots */}
            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index
                      ? "bg-gray-900 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                disabled={index === 0}
                className="p-3 bg-gray-700 text-white rounded-lg disabled:opacity-30"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                disabled={index === maxIndex}
                className="p-3 bg-gray-700 text-white rounded-lg disabled:opacity-30"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-6xl rounded-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh]">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold">
                All Categories
              </h3>
              <button onClick={() => setOpenModal(false)}>
                <X />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}

/* Card */
function Card({ item }: any) {
  return (
    <div className="group">
      <div className={`h-[260px] md:h-[320px] rounded-2xl ${item.bg} relative overflow-hidden`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="flex justify-between mt-4 mb-2">
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.subtitle}</p>
        </div>
        <span className="font-bold text-green-600">{item.count}</span>
      </div>

      <button className="w-full py-3 rounded-full bg-[#FBBF24] text-blue-900 font-medium hover:opacity-90 transition">
        {item.button}
      </button>
    </div>
  );
}