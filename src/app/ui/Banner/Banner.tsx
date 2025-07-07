'use client';

import { useEffect, useState } from 'react';

type BannerItem = {
  title: string;
  preTitle: string;
  postTitle: string;
  image: string;
};

export default function Banner({ bannerItems }: { bannerItems: BannerItem[] }) {
  const [current, setCurrent] = useState(0);
  const total = bannerItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image Layer (z-[-1]) */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: `url(/images/${bannerItems[current].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Foreground Content Layer (z-10) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white text-center px-6">
        <h2 className="font-bold text-[#AEE656] text-[32px] sm:text-[40px]">
          {bannerItems[current].preTitle}
        </h2>
        <h1 className="text-[60px] lg:text-[80px] font-extrabold">
          {bannerItems[current].title}
        </h1>
        <p className="mt-4 text-lg font-light">{bannerItems[current].postTitle}</p>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 right-[50px] flex gap-2">
          {bannerItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === current
                  ? 'h-3 w-6 bg-[#AEE656] scale-110 border border-[#AEE656]'
                  : 'bg-transparent border border-white h-3 w-3'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
