import React from "react";
import Image from "next/image";

export default function BestsellerSection() {
  return (
    <section className="w-full bg-[#F5F7F6] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">Featured</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Best sellers this month
          </h2>
          <p className="text-gray-600 text-base md:text-lg px-2 sm:px-0">
            Quality equipment trusted by installers and homeowners alike.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-5 sm:p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* LEFT IMAGE */}
          <div className="relative w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-[420px]">
            <Image
              src="/images/best1.png"
              alt="Solar kit"
              fill
              className="object-contain"
              priority
            />

            {/* Badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-green-500 text-white text-xs md:text-sm px-2 py-1 md:px-3 md:py-1 rounded-md font-semibold rotate-[-15deg] md:rotate-[-20deg]">
              1560W
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <p className="text-xs md:text-sm text-gray-500 mb-2">Popular</p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 md:mb-4">
              1560W monocrystalline solar panel
            </h3>

            <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
              High efficiency. Proven durability. Ships within 48 hours.
              Perfect for residential systems.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6">
              <button className="w-full sm:w-auto bg-[#FBBF24] text-gray-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                Add to cart
              </button>

              <button className="flex items-center gap-2 text-gray-700 font-medium hover:underline">
                View
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
