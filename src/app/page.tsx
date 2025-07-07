import Image from "next/image";
import Banner from "./ui/Banner/Banner";
import { bannerItems } from "./lib/data";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden mt-[-120px]">
      <Banner bannerItems={bannerItems} />
    </div>
  );
}
