import React from "react";
import Image from "next/image";
import { Waves, BadgeCheck, CreditCard, Truck } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="/images/fet1.png" // replace with your image
            alt="Solar panels"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#123F5A] text-white px-8 md:px-16 py-16 flex flex-col justify-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Feature 1 */}
            <div>
              <Waves className="text-yellow-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold mb-2">
                Genuine equipment
              </h3>
              <p className="text-gray-300 leading-relaxed">
                All equipment comes with full manufacturer warranty
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <BadgeCheck className="text-yellow-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold mb-2">
                Every product verified
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Encrypted payments with trusted providers
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <CreditCard className="text-yellow-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold mb-2">
                Protected checkout
              </h3>
              <p className="text-gray-300 leading-relaxed">
                All solar equipment comes with full manufacturer warranty coverage.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <Truck className="text-yellow-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold mb-2">
                Fast Lagos delivery
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Bulk pricing for installers and contractors available on request.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-12">
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Learn more
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}