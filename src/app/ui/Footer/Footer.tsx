import Link from "next/link";
import FooterHeader from "./FooterHeader";
import Image from "next/image";

// ------------- Structures ---------------
type SocialMediaItem = {
    Icon: string;
    Link: string;
    Title: string;
};

export default function Footer() {
    return (
        <footer className="p-[10px] sm:p-[60px] sm:pb-0 bg-[#0D1219] ">
            <FooterHeader />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white pt-[48px] pb-[68px] gap-2">
                <div className="flex flex-col gap-[12px]">
                    <h1 className="text-white text-[16px] font-semibold">Company</h1>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px]">
                        Our Story
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Leadership
                    </Link>
                    <Link href='/' className="text-white text-[15px] font-[500] px-[11px] border-l border-white">
                        Carrers and Culture
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Overview
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Student Opportunities
                    </Link>
                    <Link href='/' className="text-white text-[15px] font-[500] px-[11px] border-l border-white">
                        Community
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Overview
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Foundation
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Scholarships
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Events
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Membership
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        News, Blogs, & Podcasts
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Locations
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        My Account
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Contact Us
                    </Link>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <h1 className="text-white text-[16px] font-semibold">Our Businesses</h1>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px]">
                        Energy
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Health
                    </Link>
                    <Link href='/' className="text-white text-[15px] font-[500] px-[11px] border-l border-white">
                        Grain
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Overview
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Sell Grain Now
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Locations
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Grain Marketing
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Grain Country Marketing
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Supply Chain Solutions
                    </Link>
                    <Link href='/' className="text-white text-[15px] font-[500] px-[11px] border-l border-white">
                        Agronomy
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Overview
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        AcreEdge®
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Financing
                    </Link>
                    <Link href='/' className="text-white text-[15px] font-[500] px-[11px] border-l border-white">
                        Landus Soybean Crush
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Overview
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        Ralston Bean Processing Plant
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] px-[11px]">
                        SoyPlus®
                    </Link>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <h1 className="text-white text-[16px] font-semibold">Innovation</h1>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px]">
                        LANDWERX
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Innovation Connector
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        LandusOne
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Technologies
                    </Link>
                    <h1 className="text-white text-[16px] font-semibold mt-[30px]">Sustainability</h1>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px]">
                        Overview
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Landus Sustainability Leaders
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Sustainable Sourcing
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500]">
                        Soy Processing
                    </Link>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <h1 className="text-white text-[16px] font-semibold">Get In Touch</h1>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px] flex items-center justify-start gap-1">
                        <Image src='svg/phone.svg' alt="Phone" width={16} height={24} /> (515) 817-2100
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px] flex items-center justify-start gap-1">
                        <Image src='svg/email.svg' alt="Mail" width={16} height={24} /> communications@landus.ag
                    </Link>
                    <Link href='/' className="text-[#B2B2B2] text-[13px] font-[500] mt-[8px] flex items-center justify-start gap-1">
                        <Image src='svg/location.svg' alt="Phone" width={16} height={24} /> 220 SW 9th Street, Suite 300, Des Moines, IA 50309-4320
                    </Link>

                </div>
            </div>
            <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
            <div className="px-[20px] py-[25px] flex items-center justify-between flex-col md:flex-row">
                <div>

                    <Link href={'/'} className="text-[11px] font-[500] text-[#B2B2B2]">
                        Privacy Policy
                    </Link>
                    <Link href={'/'} className="text-[11px] font-[500] text-[#B2B2B2] ml-[32px]">
                        Terms & Conditions
                    </Link>
                    <Link href={'/'} className="text-[11px] font-[500] text-[#B2B2B2] ml-[32px]">
                        Canadian Privacy Policy
                    </Link>
                </div>
                <div className="flex items-start md:items-center justify-start md:justify-center gap-[10px] mt-[10px] md:mt-0">
                    <Link href={'/'} className="text-[11px] font-[500] text-[#B2B2B2]">
                        <Image src='/svg/appStore.svg' alt="App Store" width={125} height={38} />
                    </Link>
                    <Link href={'/'} className="text-[11px] font-[500] text-[#B2B2B2]">
                        <Image src='/svg/playstore.svg' alt="App Store" width={125} height={38} />
                    </Link>
                    
                </div>
            </div>
            <div className="bg-[#060B12] py-[12px] text-center text-white text-[12px]">
                Copyright © 2025 Landus®. All Rights Reserved.
            </div>
        </footer>
    )
}