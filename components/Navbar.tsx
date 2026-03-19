"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const resources = [
    "Accessories",
    "Installation guide",
    "Maintenance tips",
    "Warranty details",
    "Product comparison",
  ];

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">

        {/* Logo */}
        <div className="text-2xl font-semibold italic font-roboto text-gray-700">
          Logo
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium font-inter">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Solar panels</li>
          <li className="hover:text-black cursor-pointer">Inverters</li>
          <li className="hover:text-black cursor-pointer">Batteries</li>
          <li className="hover:text-black cursor-pointer">Electronics</li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-black cursor-pointer">
              Resources
              <svg
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {open && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-60 py-2 z-50 font-poppins">
                {resources.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT (Desktop) */}
        <div className="hidden md:flex items-center gap-4 font-poppins">
          <button className="px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100">
            Sign up
          </button>

          <button className="px-5 py-2 bg-yellow-400 rounded-full font-medium hover:bg-yellow-500">
            Shop
          </button>

          <button className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500">
            🛒
          </button>
        </div>

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-3 md:hidden">
          
          {/* ✅ CART ICON (BEFORE MENU) */}
          <button className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500">
            🛒
          </button>

          {/* MENU ICON */}
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenu ? (
                <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden px-6 pb-6 space-y-4 font-poppins">

          <div className="space-y-3 text-gray-700 font-medium">
            <div>Solar panels</div>
            <div>Inverters</div>
            <div>Batteries</div>
            <div>Electronics</div>

            <div>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full"
              >
                Resources
                <span>{open ? "▲" : "▼"}</span>
              </button>

              {open && (
                <div className="mt-2 ml-3 space-y-2 text-sm text-gray-600">
                  {resources.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t">
            <button className="w-full py-3 border rounded-full">
              Sign up
            </button>

            <button className="w-full py-3 bg-yellow-400 rounded-full font-medium">
              Shop
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}