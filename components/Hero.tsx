"use client";
import { useEffect, useRef } from "react";

function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      el.textContent = Math.round(ease * target).toLocaleString();

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration]);

  return ref;
}

export default function Hero() {
  const ref1000 = useCountUp(1000, 10000);
  const ref50 = useCountUp(50, 10000);
  const ref500 = useCountUp(500, 10000);

  return (
    <section className="relative min-h-[520px] md:min-h-[560px] flex flex-col justify-between px-4 sm:px-6 md:px-10 pt-10 md:pt-12 pb-32 md:pb-40 font-sans overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1423]/90 to-[#0A1423]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl md:max-w-2xl">

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight mb-4 md:mb-5">
          Reliable Solar Equipment for Homes & Businesses
        </h1>

        <p className="text-white/80 text-sm sm:text-base md:text-[15px] leading-relaxed max-w-md md:max-w-lg mb-6 md:mb-8">
          Browse authentic panels, inverters, and batteries from verified suppliers.
          Whether you're powering a home or stocking your business, find what you
          need with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto bg-[#F5C518] text-black font-semibold text-sm md:text-[15px] px-6 md:px-7 py-3 rounded-full hover:bg-yellow-300 transition-colors">
            Shop Products
          </button>

          <button className="w-full sm:w-auto text-white font-medium text-sm md:text-[15px] px-6 md:px-7 py-3 rounded-full border border-white/55 hover:bg-white/10 transition-colors">
            Request Quote
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 border-t border-white/15 mt-10 md:mt-12">

        {[
          { ref: ref1000, suffix: "+", label: "Products in stock" },
          { ref: ref50, suffix: "+", label: "Verified suppliers" },
          { static: "Lagos", label: "Serving Nigeria" },
          { ref: ref500, suffix: "+", label: "Trusted by installers" },
        ].map((stat, i) => (
          <div
            key={i}
            className={`py-5 md:py-7 px-2 sm:px-4 ${
              i % 2 !== 0 ? "sm:border-l border-white/15" : ""
            } md:border-l md:border-white/15 ${i === 0 ? "md:border-l-0" : ""}`}
          >
            <div className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-[44px] font-bold tracking-tight leading-none">
              {stat.static ?? (
                <>
                  <span ref={stat.ref}>0</span>
                  {stat.suffix}
                </>
              )}
            </div>

            <div className="text-white/70 text-xs sm:text-sm mt-1 md:mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
