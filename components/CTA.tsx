import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full h-[400px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/cta.png" // replace with your image
        alt="Solar products"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl ml-6 md:ml-20 px-6 md:px-16 text-white">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Get expert guidance today
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl">
          Not sure which system fits your needs? Our team knows solar inside and out.
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
            Talk to an Expert
          </button>

          <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
