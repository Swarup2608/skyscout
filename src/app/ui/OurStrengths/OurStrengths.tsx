import HoverCardReveal from "../HoverCards/HoverCardsBg";
import { SubTitle, Title } from "../Title/Title";

// Structure Type
type StrengthStructure = {
    title : string,
    image : string,
    description : string,
    link : string
}

export default function OurStrengths(
    {
        strengthsList
    }:{
        strengthsList : StrengthStructure[]
    }
){
    return(
        <div className="bg-[#0D1219] lg:px-[60px] py-[80px] space-y-2 ">
            <Title isDark={true} title="OUR STRENGTHS" />
            <SubTitle isDark={true} subtitle={
                (
                    <div className="w-[100%] md:w-[50%]">
                        Customized <span className="text-[#84B23B]">Agricultural Solutions</span> 
                    </div>
                )
            } />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {
                    strengthsList.map((strength,idx)=>(
                        <div key={idx}>
                            <HoverCardReveal title={strength.title} image={strength.image} description={strength.description} link={strength.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}