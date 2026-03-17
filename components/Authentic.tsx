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
    <main className="bg-[#f7f7f7] min-h-screen py-12 md:py-20 px-4 sm:px-6">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
        <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3 tracking-wide">
          Verified
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-[56px] leading-tight font-semibold text-gray-900 mb-4 md:mb-6">
          Authentic products, no fakes
        </h1>

        <p className="text-gray-600 text-base md:text-lg px-2 sm:px-0">
          Every supplier is vetted. Every panel is genuine.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col justify-between h-auto md:h-[420px] hover:shadow-md transition"
          >
            <div>
              <p className="text-xs md:text-sm text-gray-500 mb-2">
                {item.label}
              </p>

              <h3 className="text-lg md:text-[22px] font-semibold text-gray-900 leading-snug mb-2 md:mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 md:mb-5">
                {item.description}
              </p>

              {item.link && (
                <a
                  href="#"
                  className="text-sm md:text-[15px] text-gray-800 font-medium inline-flex items-center gap-1 hover:underline"
                >
                  {item.link}
                  <span className="text-lg">›</span>
                </a>
              )}

              {item.button && (
                <button className="mt-4 bg-[#f4b400] hover:bg-[#e0a800] text-black text-sm font-medium px-5 py-2 rounded-full w-full sm:w-auto">
                  {item.button}
                </button>
              )}
            </div>

            <div className="mt-5 md:mt-6">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="rounded-xl object-cover w-full h-[120px] sm:h-[140px]"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
