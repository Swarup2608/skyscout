import Image from "next/image"
import { SubTitle, Title } from "../Title/Title"
import NumbersCards from "../NumbersCards/NumbersCards"

type FactListType = {
    text: string,
    postText : string,
    title : string,
    description : string
}

export default function OurFacts(
    {
        FactsList
    }:{
        FactsList : FactListType[]
    }
){
    return (
        <div className="bg-[#0D1219] lg:px-[60px] py-[80px] space-y-2 px-2">
            <Title title="QUICK FACTS" isDark={true} />
            <div className="flex items-center justify-between flex-col sm:flex-row">
                <div className="w-full sm:w-[30%]">
                    <SubTitle isDark={true} subtitle={
                        <>
                            Our <span className="text-[#AEE656]">Impact</span> In Numbers
                        </>
                    } />
                </div> 
                <div className="w-full sm:w-[70%] sm:mt-[32px]">
                    <p className="text-white text-[16px] font-[400]">Landus drives significant influence with 1.5 million farmer acres, operations across 34 states and 16 countries, $2.4 billion in revenue and substantial investments in infrastructure and community.</p>
                    <button className="mt-[20px] text-black bg-[#AEE656] px-[20px] py-[12px] flex items-center justify-center gap-[12px] rounded cursor-pointer hover:scale-105 transition-all duration-700">About Us <Image src='/svg/arrowRightBlack.svg' alt="Right Arrow" width={22} height={22} /></button>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] mt-[60px]">
                {
                    FactsList?.map((facts,idx)=>(
                        <div key={idx}>
                            <NumbersCards PostText={facts.postText} Title={facts.title} description={facts.description} image="" isDark={true} isNumbers={true} text={facts.text} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}