'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HoverCardsBg({
    image,
    title,
    description,
    link,
}: {
    image: string;
    title: string;
    description: string;
    link: string;
}) {
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCards(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`relative w-[315px] h-[500px] rounded-md overflow-hidden group transform transition-all duration-700 ease-out
        ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:scale-[1.03] hover:shadow-xl`}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-105"
                style={{
                    background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5)), url(/images/${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}

            />

            {/* Initial text */}
            <div className="absolute bottom-4 left-4 z-10 text-white text-[32px] font-bold group-hover:opacity-0 transition-opacity duration-300">
                {title}
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-[#AEE65680] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 p-6 flex flex-col justify-end text-[#fff] gap-[20px]">
                <div>
                    <h2 className="text-[32px] font-bold mb-[20px]">{title}</h2>
                    <p className="text-[16px">{description}</p>
                </div>
                <Link
                    href={link}
                    className="bg-white text-[#0D1219] px-4 py-2 rounded flex items-center gap-[12px] w-fit font-medium"
                >
                    Discover
                    <Image src={'/svg/arrowRightBlack.svg'} width={22} height={22} alt='Arrow Right' />
                </Link>
            </div>
        </div>
    );
}
