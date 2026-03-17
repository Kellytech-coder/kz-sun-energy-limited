import React from "react";
import Image from "next/image";
import { Waves, BadgeCheck, CreditCard, Truck } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative h-[260px] sm:h-[350px] md:h-[600px] order-1 md:order-none">
          <Image
            src="/images/fet1.png"
            alt="Solar panels"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#123F5A] text-white px-4 sm:px-6 md:px-16 py-10 sm:py-12 md:py-16 flex flex-col justify-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">

            {/* Feature 1 */}
            <div>
              <Waves className="text-yellow-400 mb-3 md:mb-4" size={24} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Genuine equipment
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                All equipment comes with full manufacturer warranty
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <BadgeCheck className="text-yellow-400 mb-3 md:mb-4" size={24} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Every product verified
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Encrypted payments with trusted providers
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <CreditCard className="text-yellow-400 mb-3 md:mb-4" size={24} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Protected checkout
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                All solar equipment comes with full manufacturer warranty coverage.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <Truck className="text-yellow-400 mb-3 md:mb-4" size={24} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Fast Lagos delivery
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Bulk pricing for installers and contractors available on request.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-8 md:mt-12">
            <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Learn more
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
