"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialMedia from "../SocialMedia/SocialMedia";

// ------------- Structures ---------------
type SocialMediaItem = {
  Icon: string;
  Link: string;
  Title: string;
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
      className={`${
        isVisible ? "flex" : "hidden"
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
}: {
  SocialMediaLinks: SocialMediaItem[];
}) {
  return (
    <div className="flex items-center justify-between bg-[#0D1219] gap-2 md:gap-0 px-1 md:px-[60px] py-[10px] flex-col md:flex-row">
      <SocialMedia socialMediaList={SocialMediaLinks} />
      <div className="relative flex justify-end gap-2 md:gap-[32px] items-center flex-col md:flex-row">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search site"
            className="pl-8 pr-4 py-[5px] rounded-2xl outline-none bg-[#FFFFFF1A] text-white"
          />
          <Image
            src="/svg/search.svg"
            alt="Search icon"
            width={18}
            height={18}
            className="absolute left-2 top-[7px]"
          />
        </div>
        <Link
          href="/Locations"
          className="text-white border-b border-b-transparent hover:border-b-white"
        >
          Locations
        </Link>
        <Link
          href="/Careers"
          className="text-white border-b border-b-transparent hover:border-b-white"
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
}: {
  promotionData: string;
  promotionLink: string;
  socialMediaList: SocialMediaItem[];
}) {
  const pathname = usePathname();
  const isPromotionVisible = pathname === "/";

  return (
    <header>
      <HeaderPromotion
        isVisible={isPromotionVisible}
        promotionData={promotionData}
        promotionLink={promotionLink}
      />
      <SubHeader SocialMediaLinks={socialMediaList} />
    </header>
  );
}
