import { alumni_sans, interTight } from "@/app/lib/font";
import ItemImageCombo from "../ItemImageCombination/ItemImageCombo";
import Image from "next/image";

export default function WhoWeAre() {
    return (
        <div>
            <ItemImageCombo
                isDark={false}
                title="WHO WE ARE"
                subtitle={
                    <>
                        Transforming Agriculture Through <span className="text-[#84B23B]">Innovation</span> and <span className="text-[#84B23B]">Community Commitment</span> 
                    </>
                }
                data = {
                    <div className="mt-[40px] max-sm:mt-0">
                        <h1 className={`text-[100px] font-extrabold leading-[100px] ${alumni_sans.className}` }>100<sup className="text-[64px] font-light">+</sup></h1>
                        <p className={`${interTight.className} font-bold text-[32px]`}>136 years of Agricultural Heritage</p>
                        <p className="text-[#000000CC] text-[16px]">A legacy rooted in over a century of experience, evolving from traditional farming practices to modern agriculture solutions.</p>
                    </div>
                }
                isLeft = {false}

                images={
                    <div className="flex items-center gap-3 flex-col md:flex-row">
                        <div className="w-full md:w-[240px] h-[300px] md:h-[480px] object-cover">
                            <Image src='/images/whoweare-1.jpg' alt="Who we Are 1" className="object-cover object-center w-full h-full" />
                        </div>
                        
                        <div className="w-full md:w-[240px] h-[300px] md:h-[480px] mt-0 md:mt-[-100px]">
                            <Image src='/images/whoweare-2.jpg' alt="Who we Are 1" className="object-cover object-center w-full h-full" />
                        </div>
                    </div>
                }
            />

        </div>
    )
}