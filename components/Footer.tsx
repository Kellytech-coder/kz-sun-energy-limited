import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] text-black px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Logo</h3>

            <div className="mb-4">
              <p className="font-semibold">Location</p>
              <p className="text-gray-700">
                Lagos, Nigeria. Expanding nationwide soon.
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold">Reach</p>
              <p className="text-gray-700">+234 (0) 123 4567</p>
              <p className="text-gray-700">hello@solarcommerce.ng</p>
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
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-3">
              <li>Solar panels</li>
              <li>Inverters</li>
              <li>Batteries</li>
              <li>Accessories</li>
              <li>Electrical tools</li>
            </ul>

            <ul className="space-y-3">
              <li>Bulk orders</li>
              <li>How it works</li>
              <li>Track orders</li>
              <li>Delivery info</li>
              <li>Payment methods</li>
            </ul>
          </div>

          {/* Right Spacer (optional for layout balance) */}
          <div className="hidden md:block" />
        </div>

        {/* Big Company Name */}
        <div className="mt-16">
          <h1 className="text-[80px] md:text-[120px] font-bold leading-none">
            KZ SUN ENERGY LIMITED
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-700">
          <p>© 2026 SolarCommerce Platform. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
