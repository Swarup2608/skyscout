import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";




export default function FooterHeader() {
    return (
        <div className="flex items-center justify-between flex-col lg:flex-row border-b border-[#FFFFFF33] pb-[48px]">
            <div className="flex items-center justify-center gap-[18px] flex-col sm:flex-row max-sm:mb-4">

                <Link href="/" className="flex items-center space-x-4">
                    <Image src="/svg/logo.svg" alt="Logo" width={150} height={61} />
                </Link>
                <div className="bg-[#dedfe3b1] w-[0.4px] h-[32px] mt-[5px] max-sm:hidden"></div>
                <div className="mt-[5px]">

                <SocialMedia isMobileView={false} />
                </div>
            </div>
            <div className="flex items-center justify-center text-white gap-[18px]">
                <p className="text-[16px] font-[400]">Subscribe to Grow on the Go NewsLetter</p>
                <button className="bg-[#AEE656] text-black flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded hover:scale-105 duration-700 cursor-pointer transition-all">Subscribe <Image src='svg/arrowRightBlack.svg' alt="Arrow Right" width={22} height={22} /></button>
            </div>
        </div>
    )
}