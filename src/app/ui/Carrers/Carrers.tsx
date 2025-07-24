import Image from "next/image";
import ItemImageCombo from "../ItemImageCombination/ItemImageCombo";

type CarrersListType = {
  title: string;
  description: string;
};

export default function Carrers({
  CarrersList,
}: {
  CarrersList: CarrersListType[];
}) {
  return (
    <ItemImageCombo
      isDark={false}
      isLeft={false}
      title="CARRERS"
      subtitle={
        <>
          Your <span className="text-[#84B23B]">Next Path</span> Starts Here
        </>
      }
      data={
        <div className="mt-[40px]">
          <p className="text-[#000000CC] text-[16px] font-light">
            We&#39;re changing the way farmers live and work. At Landus, we understand that happy, fulfilled employees are the driving force behind our success in engaging with customers.
          </p>

          <div className="w-full md:w-[60%] mt-[40px]">
            {CarrersList?.map((carrer, idx) => (
              <div key={idx} className="pb-[12px] mb-[12px] border-b border-[#00000033]">
                <h2 className="text-[20px] font-bold">{carrer.title}</h2>
                <p className="text-[16px] font-light text-[#000000CC] mt-[8px]">
                  {carrer.description}
                </p>
              </div>
            ))}
            <button className="bg-[#AEE656] px-[20px] gap-[12px] py-[12px] flex rounded mt-[40px]">Explore <Image src={'/svg/arrowRightBlack.svg'} alt="Right Arrow" width={22} height={22} /></button>
          </div>
        </div>
      }
      images={
        <div
          className="md:w-[528px] md:h-[548px] w-full h-full min-w-[300px] min-h-[300px] bg-cover bg-no-repeat rounded-md"
          style={{
            backgroundImage: `url('/images/Carrers.png')`,
            backgroundPosition: `-150px center`,
          }}
        />
      }
    />
  );
}
