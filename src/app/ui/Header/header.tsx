"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useEffect, useRef, useState } from "react";

// ------------- Structures ---------------
type SocialMediaItem = {
    Icon: string;
    Link: string;
    Title: string;
};
type navItem = {
    title: string;
    dropdown: string[];
};

// -------- Promotion Banner --------
function HeaderPromotion({
    isVisible,
    promotionData,
    promotionLink,
}: {
    isVisible: boolean;
    promotionData: string;
    promotionLink: string;
}) {
    return (
        <div
            className={`${isVisible ? "flex" : "hidden"
                } flex-row max-sm:flex-col items-center justify-center gap-2 bg-[#00304D] py-[10px] text-white`}
        >
            <p className="text-center">{promotionData}</p>
            <Link
                href={promotionLink}
                className="flex items-center gap-2 text-[#AEE656]"
                aria-label="Learn more about promotion"
            >
                Learn More
                <Image
                    src="/svg/arrowRight.svg"
                    alt="Arrow Right"
                    width={18}
                    height={18}
                />
            </Link>
        </div>
    );
}

// -------- Sub Header (Top Bar) --------
function SubHeader({
    SocialMediaLinks,
    isMobileView
}: {
    SocialMediaLinks: SocialMediaItem[];
    isMobileView: Boolean;
}) {
    return (
        <div className={`flex items-center justify-between  ${isMobileView ? 'bg-[#fff] px-3' : 'bg-[#0D1219] px-1 md:px-[60px]'} gap-2 md:gap-0  py-[10px] flex-col md:flex-row`}>
            <SocialMedia socialMediaList={SocialMediaLinks} isMobileView={isMobileView} />
            <div className="relative flex justify-end gap-2 md:gap-[32px] items-center flex-col md:flex-row">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search"
                        aria-label="Search site"
                        className={` rounded-2xl outline-none ${isMobileView ? 'bg-[#000] pl-5 py-[5px]' : 'bg-[#FFFFFF1A] pl-8 pr-4 py-[7px]'} text-white`}
                    />
                    <Image
                        src="/svg/search.svg"
                        alt="Search icon"
                        width={18}
                        height={18}
                        className={`absolute  ${isMobileView ? 'left-1 top-[8px]' : 'left-2 top-[7px]'}`}
                    />
                </div>
                <Link
                    href="/Locations"
                    className={` border-b border-b-transparent ${isMobileView ? 'text-black hover:border-b-black' :'text-white hover:border-b-white'}`}
                >
                    Locations
                </Link>
                <Link
                    href="/Careers"
                    className={` border-b border-b-transparent ${isMobileView ? 'text-black hover:border-b-black' :'text-white hover:border-b-white'}`}
                >
                    Careers
                </Link>
            </div>
        </div>
    );
}

// -------- Main Header --------
export default function Header({
    promotionData,
    promotionLink,
    socialMediaList,
    navItems
}: {
    promotionData: string;
    promotionLink: string;
    socialMediaList: SocialMediaItem[];
    navItems: navItem[];
}) {
    const pathname = usePathname();
    const isPromotionVisible = pathname === "/";
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mobileOpen) {
            setDrawerVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setTimeout(() => setDrawerVisible(false), 300); // delay unmount for animation
        }
    }, [mobileOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
            if (mobileOpen && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileOpen]);

    return (
        <header>
            <HeaderPromotion
                isVisible={isPromotionVisible}
                promotionData={promotionData}
                promotionLink={promotionLink}
            />
            <div className="max-sm:hidden">

            <SubHeader SocialMediaLinks={socialMediaList} isMobileView={false} />
            </div>
            <nav className=" text-white w-full mt-[30px] relative px-[20px] md:px-[60px] py-[10px]">
                <div className="mx-auto flex items-center justify-between py-[2px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-4">
                        <Image src='/svg/logo.svg' alt="Logo" width={100} height={42} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-2  w-[90%] gap-5 justify-end" ref={dropdownRef}>
                        <div className="flex items-center gap-5 max-w-[1024px]:gap-10">
                            {navItems.map((item) => (
                                <div key={item.title} className="relative">
                                    <button
                                        onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                                        className="flex items-center gap-1 cursor-pointer text-base md:text-lg"
                                    >
                                        {item.title}
                                        <Image src='/svg/dropdownArrow.svg' alt="Dropdwon Arrow" width={24} height={24} />
                                    </button>

                                    {openMenu === item.title && (
                                        <div className="absolute top-full left-0 bg-white text-black rounded shadow mt-2 z-10 animate-dropdown">
                                            {item.dropdown.map((option) => (
                                                <a key={option} href="#" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                                                    {option}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="border border-white  hover:bg-white hover:text-black px-8 py-3 rounded-xl transition cursor-pointer">
                            Contact
                        </button>

                        <div className="cursor-pointer flex items-center gap-2">
                            <div className="bg-[#0F151E4D] px-[16px] py-[16px] rounded-full">

                                <Image src='/svg/user.svg' alt="User" className="" width={24} height={24} />
                            </div>
                            <span>My Account</span>
                            <Image src='/svg/dropdownArrow.svg' alt="Dropdwon Arrow" width={24} height={24} />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button className="text-white text-2xl" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                            <Image  src='/svg/menu.svg' alt="Menu" width={24} height={24}/>
                        </button>
                    </div>
                </div>

                {/* Mobile Sidebar Drawer */}
                {drawerVisible && (
                    <div className="fixed inset-0 z-50 bg-[#00000064] bg-opacity-40 flex items-center justify-between">
                        <div
                            ref={drawerRef}
                            className={`ml-auto bg-white text-black w-64 h-full p-6 overflow-y-auto relative transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >
                            <button
                                className="absolute top-4 right-4 text-black"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                            >
                                Close
                            </button>

                            <div className="mt-8 space-y-6">

                                <SubHeader SocialMediaLinks={socialMediaList} isMobileView={true} />
                                {navItems.map((item) => (
                                    <div key={item.title}>
                                        <div className="cursor-pointer font-semibold flex items-center gap-1">
                                            {item.title}
                                            <Image src='/svg/dropdownArrow.svg' alt="Dropdwon Arrow" className="invert-100" width={24} height={24} />
                                        </div>
                                        <ul className="pl-4 mt-1 space-y-1">
                                            {item.dropdown.map((option) => (
                                                <li key={option}>
                                                    <a href="#" className="text-sm block cursor-pointer">
                                                        {option}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <button className="w-full border border-[#005B94] text-[#005B94] px-4 py-2 rounded-full hover:bg-[#005B94] hover:text-white transition">
                                    Contact
                                </button>

                                <div className="cursor-pointer flex items-center gap-2">
                                    <div className="bg-[#0F151E4D] px-[16px] py-[16px] rounded-full">

                                        <Image src='/svg/user.svg' alt="Dropdwon Arrow" width={24} height={24} />
                                    </div>
                                    <span>My Account</span>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
