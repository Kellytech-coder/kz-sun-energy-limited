import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] text-black px-4 sm:px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          {/* Left */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Logo</h3>

            <div className="mb-3 md:mb-4">
              <p className="font-semibold text-sm md:text-base">Location</p>
              <p className="text-gray-700 text-sm md:text-base">
                Lagos, Nigeria. Expanding nationwide soon.
              </p>
            </div>

            <div className="mb-5 md:mb-6">
              <p className="font-semibold text-sm md:text-base">Reach</p>
              <p className="text-gray-700 text-sm md:text-base">+234 (0) 123 4567</p>
              <p className="text-gray-700 text-sm md:text-base">hello@solarcommerce.ng</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Facebook size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
              <Youtube size={18} />
            </div>
          </div>

          {/* Middle */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>Solar panels</li>
              <li>Inverters</li>
              <li>Batteries</li>
              <li>Accessories</li>
              <li>Electrical tools</li>
            </ul>

            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>Bulk orders</li>
              <li>How it works</li>
              <li>Track orders</li>
              <li>Delivery info</li>
              <li>Payment methods</li>
            </ul>
          </div>

          {/* Right Spacer */}
          <div className="hidden md:block" />
        </div>

        {/* Big Company Name */}
        <div className="mt-12 md:mt-16">
          <h1 className="text-3xl sm:text-5xl md:text-[120px] font-bold leading-tight md:leading-none break-words">
            KZ SUN ENERGY LIMITED
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6 md:my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs sm:text-sm text-gray-700">
          <p>© 2026 SolarCommerce Platform. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
