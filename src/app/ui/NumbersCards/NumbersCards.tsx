import Image from "next/image";

export default function NumbersCards(
    {
        isNumbers,
        text,
        PostText,
        Title,
        description,
        image,
        isDark,
    }: {
        isNumbers: boolean;
        text: string;
        PostText: string;
        Title: string;
        description: string;
        image: string;
        isDark : boolean;

    }
) {
    return (
        <div className={`rounded hover:bg-[#ffffff46] cursor-pointer ${isDark ? 'px-2 py-3' : ''} `}>
            {
                isNumbers ? 
                <h1 className="text-[64px] font-bold text-[#AEE656] leading-[64px]">
                    {text}
                    <span className="text-[25px] ml-1 font-light text-white">{PostText}</span>
                </h1>
                :
                <Image src={`/svg/${image}`} width={Title==='LandusOne' ? 34 : 60} height={Title==='LandusOne' ? 34 : 60} alt={Title} className={`${Title === 'LandusOne' ? 'mt-[26px] mr-[26px]' : ''}`} />
            }
            <h1 className={`${isNumbers ? '' : 'mt-[12px]'} ${isDark ? 'text-white' : 'text-black'} text-[20px] font-bold`}>
                {Title}
            </h1>
            <p className={`mt-[8px] ${isDark ? 'text-white' : 'text-black'} text-[16px] font-light`}>
                {description}
            </p>
        </div>
    )
} 