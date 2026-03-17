"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const resources = [
    "Accessories",
    "Installation guide",
    "Maintenance tips",
    "Warranty details",
    "Product comparison",
  ];

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Left Logo */}
        <div className="text-2xl font-semibold italic">
          Logo
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Solar panels</li>
          <li className="hover:text-black cursor-pointer">Inverters</li>
          <li className="hover:text-black cursor-pointer">Batteries</li>
          <li className="hover:text-black cursor-pointer">Electronics</li>

          {/* Resources Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-black cursor-pointer">
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-60 py-2 z-50">
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

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Sign up */}
          <button className="px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100">
            Sign up
          </button>

          {/* Shop */}
          <button className="px-5 py-2 bg-yellow-400 rounded-full font-medium hover:bg-yellow-500">
            Shop
          </button>

          {/* Cart Icon */}
          <button className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13L5.4 5M16 20a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
}