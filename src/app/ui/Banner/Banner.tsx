'use client';

import { useState } from 'react';

type BannerItem = {
  title: string;
  preTitle: string;
  postTitle: string;
  image: string;
};

export default function Banner({ bannerItems }: { bannerItems: BannerItem[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Preload all background slides, only show the active one */}
      <div className="absolute inset-0 z-[-1]">
        {bannerItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out
              ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              backgroundImage: `url(/images/${item.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Foreground content */}
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
