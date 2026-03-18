import Image from "next/image";

export default function Home() {
  const features = [
    {
      label: "Simple",
      title: "Compare specs side by side",
      description: "Filter by brand, price, and capacity instantly.",
      link: "Learn more",
      image: "/images/auth1.png",
    },
    {
      label: "Secure",
      title: "Checkout with confidence",
      description: "Multiple payment options. Your data stays protected.",
      button: "Buy now",
      image: "/images/auth2.png",
    },
    {
      label: "Trust",
      title: "Full warranty coverage",
      description: "Know what you're buying. Know you're covered.",
      link: "Details",
      image: "/images/auth3.png",
    },
  ];

  return (
    <main className="bg-[#f7f7f7] min-h-screen py-20 md:py-28 px-4 sm:px-6">
      
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
        <p className="font-poppins text-sm text-gray-500 mb-3 tracking-wide">
          Verified
        </p>

        <h1 className="font-inter text-5xl sm:text-6xl md:text-[68px] leading-tight font-semibold text-gray-900 mb-6">
          Authentic products, no fakes
        </h1>

        <p className="font-poppins text-gray-600 text-xl">
          Every supplier is vetted. Every panel is genuine.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300"
          >
            
            {/* CONTENT (Top) */}
            <div className="p-8 md:p-10">
              <p className="font-poppins text-base text-gray-500 mb-4">
                {item.label}
              </p>

              <h3 className="font-inter text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                {item.title}
              </h3>

              <p className="font-poppins text-gray-600 text-lg mb-8">
                {item.description}
              </p>

              {item.link && (
                <a
                  href="#"
                  className="font-poppins text-lg text-gray-800 font-medium inline-flex items-center gap-2 hover:underline"
                >
                  {item.link}
                  <span className="text-xl">›</span>
                </a>
              )}

              {item.button && (
                <button className="font-poppins mt-8 bg-[#f4b400] hover:bg-[#e0a800] text-blue-900 text-lg font-medium px-7 py-3 rounded-full w-full sm:w-auto">
                  {item.button}
                </button>
              )}
            </div>

            {/* IMAGE (Bottom) */}
            <div className="relative w-full h-[220px] md:h-[240px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

          </div>
        ))}
      </section>
    </main>
  );
}