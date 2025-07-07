import Image from "next/image";
import Banner from "./ui/Banner/Banner";
import { bannerItems, Strengths } from "./lib/data";
import WhoWeAre from "./ui/WhoWeAre/WhoWeAre";
import OurStrengths from "./ui/OurStrengths/OurStrengths";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden mt-[-120px]">
      <Banner bannerItems={bannerItems} />
      <WhoWeAre />
      <OurStrengths strengthsList={Strengths} />
    </div>
  );
}
