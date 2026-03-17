import Image from "next/image";

export default function BuiltSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-28 px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-24">
        <p className="text-xs md:text-[13px] text-gray-500 mb-3 md:mb-4">Built</p>

        <h2 className="text-3xl sm:text-4xl md:text-[60px] leading-tight md:leading-[1.1] font-semibold text-gray-900 mb-4 md:mb-6">
          For installers and homeowners
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-[18px] px-2 sm:px-0">
          One platform handles both retail and bulk orders.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        
        {/* LARGE CARD */}
        <div className="col-span-1 sm:col-span-2 bg-white border border-gray-200 rounded-2xl md:rounded-[20px] p-5 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[360px] gap-6">
          
          {/* TEXT */}
          <div className="max-w-full md:max-w-[320px]">
            <p className="text-xs md:text-[13px] text-gray-500 mb-2 md:mb-3">Retail</p>

            <h3 className="text-xl sm:text-2xl md:text-[30px] font-semibold text-gray-900 mb-3 md:mb-4 leading-snug">
              Shop individual items
            </h3>

            <p className="text-gray-600 text-sm md:text-[15px] mb-5 md:mb-8">
              Find the right equipment for your home or small business.
            </p>

            <button className="w-full sm:w-auto bg-[#f5b21c] hover:bg-[#e0a315] px-6 py-3 rounded-full text-sm md:text-[15px] font-medium flex items-center justify-center gap-2">
              Browse <span>›</span>
            </button>
          </div>

          {/* IMAGE RIGHT */}
          <div className="flex items-end justify-center md:justify-end w-full md:w-auto">
            <Image
              src="/images/install1.png"
              alt="Solar products"
              width={280}
              height={280}
              className="object-contain max-h-[180px] md:max-h-none"
            />
          </div>
        </div>

        {/* SMALL CARD 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl md:rounded-[20px] p-5 md:p-6 flex flex-col justify-between h-auto md:h-[360px]">
          
          {/* TEXT */}
          <div>
            <p className="text-xs md:text-[13px] text-gray-500 mb-2">Bulk</p>

            <h3 className="text-lg md:text-[22px] font-semibold text-gray-900 mb-2">
              Request quotes fast
            </h3>

            <p className="text-gray-600 text-sm md:text-[14px] mb-4 md:mb-6">
              Contractors and installers get pricing that works.
            </p>

            <button className="w-full sm:w-auto border border-gray-300 rounded-full px-4 py-2 text-sm md:text-[14px] font-medium">
              Get Quote
            </button>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/install2.png"
            alt="Request quote"
            width={300}
            height={120}
            className="w-full h-[100px] md:h-[110px] object-cover rounded-lg mt-4"
          />
        </div>

        {/* SMALL CARD 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl md:rounded-[20px] overflow-hidden flex flex-col justify-between h-auto md:h-[360px]">
          
          {/* TEXT */}
          <div className="p-5 md:p-6">
            <p className="text-xs md:text-[13px] text-gray-500 mb-2">Delivery</p>

            <h3 className="text-lg md:text-[22px] font-semibold text-gray-900 mb-2">
              Nationwide coverage
            </h3>

            <p className="text-gray-600 text-sm md:text-[14px] mb-3 md:mb-4">
              We ship across Nigeria. Fast. Reliable. Tracked.
            </p>

            <a
              href="#"
              className="text-sm md:text-[14px] font-medium text-gray-900 inline-flex items-center gap-1"
            >
              Track orders <span>›</span>
            </a>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/install3.png"
            alt="Solar roof"
            width={300}
            height={120}
            className="w-full h-[100px] md:h-[120px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
