'use client';

import HoverCardReveal from "../HoverCards/HoverCardsBg";
import { SubTitle, Title } from "../Title/Title";
import { useState, useEffect } from 'react';

// Structure Type
type StrengthStructure = {
  title: string;
  image: string;
  description: string;
  link: string;
};

export default function OurStrengths({
  strengthsList
}: {
  strengthsList: StrengthStructure[];
}) {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (!isMobile) return; 
    setActiveCardIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#0D1219] lg:px-[60px] py-[80px] space-y-2 px-[30px]">
      <Title isDark={true} title="OUR STRENGTHS" />
      <SubTitle
        isDark={true}
        subtitle={
          <div className="w-[100%] md:w-[50%]">
            Customized <span className="text-[#84B23B]">Agricultural Solutions</span>
          </div>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[60px] gap-[20px]">
        {strengthsList?.map((strength, idx) => (
          <HoverCardReveal
            key={idx}
            {...strength}
            isActive={activeCardIndex === idx}
            onMobileClick={() => handleCardClick(idx)}
          />
        ))}
      </div>
    </div>
  );
}
