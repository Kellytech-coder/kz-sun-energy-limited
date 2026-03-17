import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/cta.png"
        alt="Solar products"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-16 ml-2 sm:ml-6 md:ml-20 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 md:mb-4 max-w-xl leading-tight">
          Get expert guidance today
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-5 md:mb-8 max-w-lg">
          Not sure which system fits your needs? Our team knows solar inside and out.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
            Talk to an Expert
          </button>

          <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
