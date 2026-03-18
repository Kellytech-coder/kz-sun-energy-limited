import Image from "next/image";

export default function BuiltSection() {
  return (
    <section className="bg-[#f5f5f5] py-28 md:py-36 px-4 sm:px-6 relative z-10 border-t border-gray-200">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32">
        <p className="font-poppins text-base text-gray-500 mb-5 tracking-wide uppercase">
          Built
        </p>

        <h2 className="font-inter text-5xl sm:text-6xl md:text-[72px] leading-tight md:leading-[1.05] font-semibold text-gray-900 mb-8">
          For installers and homeowners
        </h2>

        <p className="font-poppins text-gray-600 text-xl md:text-2xl">
          One platform handles both retail and bulk orders.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
        
        {/* LARGE CARD */}
        <div className="col-span-1 sm:col-span-2 bg-white border border-gray-200 rounded-[32px] 
        flex flex-col md:flex-row h-[500px]
        shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
          
          {/* TEXT */}
          <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
            <p className="font-poppins text-base text-gray-500 mb-4">
              Retail
            </p>

            <h3 className="font-inter text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              Shop individual items
            </h3>

            <p className="font-poppins text-gray-600 text-lg md:text-xl mb-10">
              Find the right equipment for your home or small business.
            </p>

            <button className="font-poppins w-full sm:w-auto bg-[#f5b21c] hover:bg-[#e0a315] px-8 py-4 rounded-full text-blue-900 text-lg font-medium flex items-center justify-center gap-2 transition">
              Browse <span>›</span>
            </button>
          </div>

          {/* IMAGE HOLDER */}
          <div className="relative w-full md:w-[45%] h-[220px] md:h-full">
            <Image
              src="/images/install1.png"
              alt="Solar products"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SMALL CARD 1 */}
        <div className="bg-white border border-gray-200 rounded-[32px] 
        flex flex-col h-[500px]
        shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
          
          {/* CONTENT */}
          <div className="p-8 md:p-10 flex-1">
            <p className="font-poppins text-base text-gray-500 mb-4">
              Bulk
            </p>

            <h3 className="font-inter text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Request quotes fast
            </h3>

            <p className="font-poppins text-gray-600 text-lg mb-8">
              Contractors and installers get pricing that works.
            </p>

            <button className="font-poppins w-full sm:w-auto border border-gray-300 rounded-full px-6 py-3 text-lg text-gray-900 font-medium hover:bg-gray-100 transition">
              Get Quote
            </button>
          </div>

          {/* IMAGE HOLDER */}
          <div className="relative w-full h-[200px]">
            <Image
              src="/images/install2.png"
              alt="Request quote"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SMALL CARD 2 */}
        <div className="bg-white border border-gray-200 rounded-[32px] 
        flex flex-col h-[500px]
        shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
          
          {/* CONTENT */}
          <div className="p-8 md:p-10 flex-1">
            <p className="font-poppins text-base text-gray-500 mb-4">
              Delivery
            </p>

            <h3 className="font-inter text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Nationwide coverage
            </h3>

            <p className="font-poppins text-gray-600 text-lg mb-6">
              We ship across Nigeria. Fast. Reliable. Tracked.
            </p>

            <a
              href="#"
              className="font-poppins text-lg font-medium text-gray-900 inline-flex items-center gap-2 hover:underline"
            >
              Track orders <span>›</span>
            </a>
          </div>

          {/* IMAGE HOLDER */}
          <div className="relative w-full h-[220px]">
            <Image
              src="/images/install3.png"
              alt="Solar roof"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}