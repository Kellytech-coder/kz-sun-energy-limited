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
    fit: "cover",
    button: "Shop panels",
  },
  {
    title: "Solar inverters",
    subtitle: "Commercial",
    count: "8+",
    image: "/images/category3.png",
    bg: "bg-[#D9ECFF]",
    fit: "contain",
    button: "Shop inverters",
    label: "Inverter",
  },
  {
    title: "Solar batteries",
    subtitle: "Storage",
    count: "6+",
    image: "/images/category3.png",
    bg: "bg-gray-100",
    fit: "contain",
    button: "Shop batteries",
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Browse</p>
            <h2 className="text-[48px] leading-tight font-bold text-gray-900 mb-3">
              Categories
            </h2>
            <p className="text-gray-500 text-lg">
              Pick a category and start shopping
            </p>
          </div>

          <button className="px-6 py-2 border border-gray-300 rounded-full text-sm bg-white text-gray-900">
            View all
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, i) => (
            <div key={i}>

              {/* Image Container */}
              <div className={`h-[340px] rounded-2xl ${item.bg} relative overflow-hidden flex items-center justify-center p-6`}>

                {/* Optional top label */}
                {item.label && (
                  <h3 className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-xl font-semibold">
                    {item.label}
                  </h3>
                )}

                {/* Image */}
                <div className="relative w-full h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={
                      item.fit === "cover"
                        ? "object-cover object-center"
                        : "object-contain"
                    }
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex justify-between mt-5 mb-3">
                <div>
                  <h3 className="text-[18px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[18px] font-bold text-green-600">
                  {item.count}
                </span>
              </div>

              {/* Button */}
              <button className="w-full py-3 rounded-full bg-[#FBBF24] text-blue-900 font-medium hover:opacity-90 transition">
                {item.button}
              </button>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-12">

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
            <button className="p-3 border-white border-white rounded-lg bg-gray-700">
              <ChevronLeft size={18} />
            </button>
            <button className="p-3 border border-white rounded-lg bg-gray-700">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}