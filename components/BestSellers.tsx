import React from "react";
import Image from "next/image";

export default function BestsellerSection() {
  return (
    <section className="w-full bg-[#F5F7F6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-3">Featured</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best sellers this month
          </h2>
          <p className="text-gray-600 text-lg">
            Quality equipment trusted by installers and homeowners alike.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[420px]">
            <Image
              src="/images/best1.png" // replace with your image
              alt="Solar kit"
              fill
              className="object-contain"
              priority
            />

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-green-500 text-white text-sm px-3 py-1 rounded-md font-semibold rotate-[-20deg]">
              1560W
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">

            <p className="text-sm text-gray-500 mb-2">Popular</p>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              1560W monocrystalline solar panel
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              High efficiency. Proven durability. Ships within 48 hours.
              Perfect for residential systems.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="bg-[#FBBF24] text-gray-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
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