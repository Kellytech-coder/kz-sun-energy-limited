import Image from "next/image";
import { Search, ShoppingCart, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#0F3E57] text-white py-12 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 md:mb-4">
            How it works
          </h2>
          <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-300">
            Follow this simple steps to get started.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-none">
            <Image
              src="/images/howitwork.png"
              alt="Solar installation"
              width={600}
              height={600}
              className="object-cover w-full h-[240px] sm:h-[320px] md:h-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-6 md:space-y-10">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-yellow-400 mt-1">
                <Search size={22} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="font-inter text-lg sm:text-xl font-semibold mb-1 md:mb-2">
                  Find what you're looking for
                </h3>
                <p className="font-poppins text-gray-300 text-sm md:text-base">
                  Search by product type, filter by specs, compare brands side by side.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-yellow-400 mt-1">
                <ShoppingCart size={22} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="font-inter text-lg sm:text-xl font-semibold mb-1 md:mb-2">
                  Add to cart or request a quote
                </h3>
                <p className="font-poppins text-gray-300 text-sm md:text-base">
                  Retail buyers checkout instantly. Bulk buyers submit a quote request for custom pricing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-yellow-400 mt-1">
                <CheckCircle size={22} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="font-inter text-lg sm:text-xl font-semibold mb-1 md:mb-2">
                  Receive and install with confidence
                </h3>
                <p className="font-poppins text-gray-300 text-sm md:text-base">
                  Tracked delivery. Full warranty. Technical support when you need it.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2 md:pt-4">
              
              {/* Primary */}
              <button className="font-poppins w-full sm:w-auto bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-base font-medium hover:bg-yellow-300 transition">
                Get Started
              </button>

              {/* Secondary */}
              <button className="font-poppins flex items-center gap-2 text-white text-base hover:underline">
                Guide <span>›</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}