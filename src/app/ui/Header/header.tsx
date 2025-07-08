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
      className={`${isVisible ? "flex" : "hidden"} flex-row max-sm:flex-col  items-center justify-center gap-2 bg-[#00304D] py-[10px] text-white`}
    >
      <p className="text-center text-sm sm:text-base">{promotionData}</p>
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
  isMobileView,
}: {
  isMobileView: Boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 gap-2 ${isMobileView ? "bg-white flex-col min-[1024px]:hidden" : "bg-[#0D1219] md:px-[60px] flex-col md:flex-row"}`}
    >
      <SocialMedia isMobileView={isMobileView} />
      <div className="w-full flex flex-col lg:flex-row justify-end items-center gap-2 lg:gap-[32px] mt-2 sm:mt-0">
        <div className="relative flex items-center justify-center w-full max-w-xs">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search site"
            className={`rounded-2xl outline-none w-full ${isMobileView ? "bg-black text-white py-2 pl-10 pr-4" : "bg-[#FFFFFF1A] text-white py-2 pl-10 pr-4"}`}
          />
          <Image
            src="/svg/search.svg"
            alt="Search icon"
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <Link
          href="/Locations"
          className={`border-b border-b-transparent ${isMobileView ? "text-black hover:border-b-black" : "text-white hover:border-b-white"}`}
        >
          Locations
        </Link>
        <Link
          href="/Careers"
          className={`border-b border-b-transparent ${isMobileView ? "text-black hover:border-b-black" : "text-white hover:border-b-white"}`}
        >
          Careers
        </Link>
      </div>
    </div>
  );
}

// -------- Main Header --------
export default function Header() {
  const pathname = usePathname();
  const isPromotionVisible = pathname === "/";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [promotionData,setpromotionData] = useState('');
  const [promotionLink,setpromotionLink] = useState('');
  const [navItems,setnavItems] = useState<navItem[]>([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch("/data");
        const data = await res.json();
        setpromotionData(data.promotionData);
        setpromotionLink(data.promotionLink);
        setnavItems(data.navItems)
      } catch (err) {
        console.error("Error fetching banner items", err);
      }
    };

    fetchData();
  },[])


  useEffect(() => {
    if (mobileOpen) {
      setDrawerVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => setDrawerVisible(false), 300);
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
    <header className="z-30">
      <HeaderPromotion
        isVisible={isPromotionVisible}
        promotionData={promotionData}
        promotionLink={promotionLink}
      />

      <div className="hidden lg:block">
        <SubHeader isMobileView={false} />
      </div>

      <nav className="text-white w-full mt-[30px] relative px-[20px] md:px-[60px] py-[10px] z-20">
        <div className="mx-auto flex items-center justify-between py-[2px]">
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/svg/logo.svg" alt="Logo" width={100} height={42} />
          </Link>

          {/* Desktop Nav hidden on 1024px and below */}
          <div className="hidden 2xl:flex items-center w-[90%] gap-5 justify-end" ref={dropdownRef}>
            <div className="flex items-center gap-5">
              {navItems?.map((item) => (
                <div key={item.title} className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                    className="flex items-center gap-1 cursor-pointer text-lg"
                  >
                    {item.title}
                    <Image src="/svg/dropdownArrow.svg" alt="Dropdown Arrow" width={20} height={20} />
                  </button>
                  {openMenu === item.title && (
                    <div className="absolute top-full left-0 bg-white text-black rounded shadow mt-2 z-10 animate-dropdown text-sm">
                      {item.dropdown?.map((option) => (
                        <a key={option} href="#" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                          {option}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-xl transition cursor-pointer text-sm">
              Contact
            </button>

            <div className="cursor-pointer flex items-center gap-2 text-sm">
              <div className="bg-[#0F151E4D] px-[12px] py-[12px] rounded-full">
                <Image src="/svg/user.svg" alt="User" width={20} height={20} />
              </div>
              <span>My Account</span>
              <Image src="/svg/dropdownArrow.svg" alt="Dropdown Arrow" width={20} height={20} />
            </div>
          </div>

          {/* Mobile Menu Button shown on 1024px and below */}
          <div className="2xl:hidden">
            <button
              className="text-white text-2xl"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Image src="/svg/menu.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Drawer */}
        {drawerVisible && (
          <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
            <div
              ref={drawerRef}
              className={`w-full max-w-[280px] h-full bg-white text-black p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                Close
              </button>

              <div className="mt-6 space-y-5 text-sm">
                <SubHeader  isMobileView={true} />
                {navItems?.map((item) => (
                  <div key={item.title}>
                    <div className="cursor-pointer font-semibold flex items-center gap-1">
                      {item.title}
                      <Image src="/svg/dropdownArrow.svg" alt="Dropdown Arrow" className="invert-100" width={24} height={24} />
                    </div>
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.dropdown?.map((option) => (
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
                    <Image src="/svg/user.svg" alt="User" width={24} height={24} />
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
