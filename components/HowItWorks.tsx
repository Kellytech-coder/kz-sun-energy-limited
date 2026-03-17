import Image from "next/image";
import { Search, ShoppingCart, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#0F3E57] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-300">
            Follow this simple steps to get started.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/howitwork.png" // replace with your image
              alt="Solar installation"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="text-yellow-400">
                <Search size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Find what you're looking for
                </h3>
                <p className="text-gray-300">
                  Search by product type, filter by specs, compare brands side by side.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="text-yellow-400">
                <ShoppingCart size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Add to cart or request a quote
                </h3>
                <p className="text-gray-300">
                  Retail buyers checkout instantly. Bulk buyers submit a quote request for custom pricing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="text-yellow-400">
                <CheckCircle size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Receive and install with confidence
                </h3>
                <p className="text-gray-300">
                  Tracked delivery. Full warranty. Technical support when you need it.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6 pt-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
                Get Started
              </button>
              <button className="flex items-center gap-2 text-white hover:underline">
                Guide <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
