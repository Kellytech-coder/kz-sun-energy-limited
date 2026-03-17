import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function ProductCategories() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:mb-14">
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

          <button className="px-5 py-2 border border-gray-300 rounded-full text-sm bg-white text-gray-900 hover:bg-gray-100 transition">
            View all
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((item, i) => (
            <div key={i} className="group">

              {/* Image Container */}
              <div
                className={`h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl ${item.bg} relative overflow-hidden`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover w-full h-full
                    transition-transform duration-300 ease-in-out
                    group-hover:scale-105
                    active:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="flex justify-between mt-4 mb-2">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-base md:text-lg font-bold text-green-600">
                  {item.count}
                </span>
              </div>

              {/* Button */}
              <button className="w-full py-3 rounded-full bg-[#FBBF24] text-blue-900 font-medium hover:opacity-90 active:scale-95 transition text-sm md:text-base">
                {item.button}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 md:mt-12">

          {/* Dots */}
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button className="p-2 md:p-3 rounded-lg bg-gray-700 text-white hover:bg-gray-800 active:scale-95 transition">
              <ChevronLeft size={18} />
            </button>
            <button className="p-2 md:p-3 rounded-lg bg-gray-700 text-white hover:bg-gray-800 active:scale-95 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}