import Banner from "./ui/Banner/Banner";
import { bannerItems, carrer, Commitments, difference, Facts, Strengths, updatesData } from "./lib/data";
import WhoWeAre from "./ui/WhoWeAre/WhoWeAre";
import OurStrengths from "./ui/OurStrengths/OurStrengths";
import OurFacts from "./ui/OurFacts/OurFacts";
import Difference from "./ui/Difference/TheDifference";
import Carrers from "./ui/Carrers/Carrers";
import UpdatesSection from "./ui/Updates/Updates";
import FeatureCarousel from "./ui/Commitment/Commitment";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden mt-[-120px]">
      <Banner bannerItems={bannerItems} />
      <WhoWeAre />
      <OurStrengths strengthsList={Strengths} />
      <FeatureCarousel items={Commitments} />
      <OurFacts FactsList={Facts} />
      <Difference differenceList={difference} />
      <UpdatesSection categories={updatesData.categories} items={updatesData.items} />
      <Carrers CarrersList={carrer} />
    </div>
  );
}
