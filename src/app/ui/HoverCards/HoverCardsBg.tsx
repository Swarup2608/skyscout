'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HoverCardReveal({
  image,
  title,
  description,
  link,
  isActive,
  onMobileClick,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  isActive: boolean;
  onMobileClick: () => void;
}) {
  return (
    <div
      onClick={onMobileClick}
      className={`relative w-full h-full min-h-[500px] rounded-md overflow-hidden group transform transition-all duration-700 ease-out 
        ${isActive ? 'scale-[1.03] shadow-xl' : ''} 
         md:hover:shadow-xl cursor-pointer`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-500 scale-100"
        style={{
          background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5)), url(/images/${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      {/* Title when overlay is hidden */}
      <div
        className={`absolute bottom-4 left-4 z-10 text-white text-[32px] font-bold 
          transition-opacity duration-300 
          ${isActive ? 'opacity-0' : 'opacity-100'} 
          md:group-hover:opacity-0`}
      >
        {title}
      </div>

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-[#AEE656CC] transition-opacity duration-500 z-20 p-6 
          flex flex-col justify-end text-white gap-[20px]
          ${isActive ? 'opacity-100' : 'opacity-0'} 
          md:group-hover:opacity-100
        `}
      >
        <div>
          <h2 className="text-[32px] font-bold mb-[20px]">{title}</h2>
          <p className="text-[16px]">{description}</p>
        </div>
        <Link
          href={link}
          className="bg-white text-[#0D1219] px-4 py-2 rounded flex items-center gap-[12px] w-fit font-medium"
        >
          Discover
          <Image src="/svg/arrowRightBlack.svg" width={22} height={22} alt="Arrow Right" />
        </Link>
      </div>
    </div>
  );
}
