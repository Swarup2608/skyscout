"use client"

import Banner from "./ui/Banner/Banner";
import WhoWeAre from "./ui/WhoWeAre/WhoWeAre";
import OurStrengths from "./ui/OurStrengths/OurStrengths";
import OurFacts from "./ui/OurFacts/OurFacts";
import Difference from "./ui/Difference/TheDifference";
import Carrers from "./ui/Carrers/Carrers";
import UpdatesSection from "./ui/Updates/Updates";
import FeatureCarousel from "./ui/Commitment/Commitment";
import { useEffect, useState } from "react";

// Type Structures
type BannerItem = {
  title: string;
  preTitle: string;
  postTitle: string;
  image: string;
};

type CommitementType = {
  title: string;
  desc: string;
  image: string;
};

type StrengthStructure = {
  title: string;
  image: string;
  description: string;
  link: string;
};

type difflisttype = {
  title: string;
  image: string;
  descriription: string;
};

type ItemType = {
  date: string;
  image: string;
  title: string;
  category: string;
};

type CarrersListType = {
  title: string;
  description: string;
};

type FactListType = {
  text: string,
  postText: string,
  title: string,
  description: string
}

export default function Home() {
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([
    {
      title: '',
      preTitle: '',
      postTitle: '',
      image: ''
    }
  ]);
  const [Commitments, setCommitments] = useState<CommitementType[]>([
    {
      title: '',
      desc: '',
      image: '',
    }
  ]);
  const [Strengths, setStrengths] = useState<StrengthStructure[]>([
    {
      title: '',
      image: '',
      description: '',
      link: '',
    }
  ]);
  const [difference, setDifference] = useState<difflisttype[]>([
    {
      title: '',
      image: '',
      descriription: '',
    }
  ]);
  const [updatesData, setUpdatesData] = useState<ItemType[]>([
    {
      date: '',
      image: '',
      title: '',
      category: '',
    }
  ]);
  const [carrer, setCarrer] = useState<CarrersListType[]>([
    {
      title: '',
      description: '',
    }
  ]);
  const [Facts, setFacts] = useState<FactListType[]>([
    {
      text: '',
      postText: '',
      title: '',
      description: ''
    }
  ]);
  const [catrgories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data"); 
        const data = await res.json();
        setBannerItems(data.bannerItems);
        setCommitments(data.Commitments);
        setStrengths(data.Strengths);
        setDifference(data.difference);
        setUpdatesData(data.updatesData.items);
        setCategories(data.updatesData.categories)
        setFacts(data.Facts)
        setCarrer(data.carrer)
      } catch (err) {
        console.error("Error fetching banner items", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden mt-[-120px]">
      <Banner bannerItems={bannerItems} />
      <WhoWeAre />
      <OurStrengths strengthsList={Strengths} />
      <FeatureCarousel items={Commitments} />
      <OurFacts FactsList={Facts} />
      <Difference differenceList={difference} />
      <UpdatesSection
        categories={catrgories}
        items={updatesData}
      />
      <Carrers CarrersList={carrer} />
    </div>
  );
}
