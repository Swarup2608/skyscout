import NumbersCards from "../NumbersCards/NumbersCards";
import { SubTitle, Title } from "../Title/Title";

type difflisttype = {
  title: string;
  image: string;
  descriription: string;
};

export default function Difference({
  differenceList, 
}: {
  differenceList: difflisttype[]; 
}) {
  return (
    <div className="lg:px-[60px] py-[80px] space-y-2 px-[30px]">
      <Title title="THE DIFFERENCE" isDark={false} />
      <SubTitle
        isDark={false}
        subtitle={
          <div className="w-full sm:w-[70%]">
            Empowering Agriculture Through{" "}
            <span className="text-[#84B23B]">Innovation</span> and{" "}
            <span className="text-[#84B23B]">Community</span>
          </div>
        }
      />
      <p className="mt-[40px] text-[16px] font-medium">
        Landus leverages global reach, community focus, sustainability, and
        advanced agronomy to drive success from farm to consumer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[60px] mt-[60px]">
        {differenceList?.map((dif, idx) => (
          <div key={idx}>
            <NumbersCards
              PostText={''}
              Title={dif.title}
              description={dif.descriription}
              image={dif.image}
              isDark={false}
              isNumbers={false}
              text={''}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
