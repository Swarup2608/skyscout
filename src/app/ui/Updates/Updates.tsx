'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SubTitle, Title } from '../Title/Title';
import UpdateCard from './UpdateCards';

// Structure Type
type ItemType = {
  date: string;
  image: string;
  title: string;
  category: string;
};

export default function UpdatesSection({
  categories,
  items
}: {
  categories: string[];
  items: ItemType[];
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [viewAll, setViewAll] = useState(false);

  const filteredItems = viewAll ? items : items.filter(item => item.category === activeCategory);
  useEffect(()=>{
    setActiveCategory(categories[0])
  },[categories])

  return (
    <div className='bg-[#0D1219] lg:px-[60px] py-[80px] space-y-2 px-2'>
      <Title title='UPDATES' isDark={true} />
      <div className='flex items-center justify-between flex-col md:flex-row gap-10 lg:gap-[140px]'>
        <SubTitle
          isDark={true}
          subtitle={
            <>
              News, Events and <span className='text-[#AEE656]'>Noteworthy</span> Stories
            </>
          }
        />
        <div>
          <p className='text-[#FFFFFFCC] text-[16px] mb-[20px]'>
            Landus leverages global reach, community focus, sustainability, and advanced agronomy to drive success from farm to consumer.
          </p>
          <button
            onClick={() => setViewAll(true)}
            className="mt-[20px] text-black bg-[#AEE656] px-[20px] py-[12px] flex items-center justify-center gap-[12px] rounded cursor-pointer hover:scale-105 transition-all duration-700"
          >
            View All
            <Image src='/svg/arrowRightBlack.svg' alt="Right Arrow" width={22} height={22} />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className='border-b border-[#FFFFFF33] mt-[60px] flex items-center justify-start overflow-auto'>
        {categories?.map((category, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveCategory(category);
              setViewAll(false); 
            }}
            className={`rounded-t px-[20px] w-full md:w-[134px] text-center py-[12px] text-[18px] cursor-pointer transition-all duration-300 ${
              category === activeCategory && !viewAll
                ? 'text-black bg-white'
                : 'text-white hover:text-[#AEE656]'
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Filtered Cards */}
      <div className='mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]'>
        {filteredItems?.map((item, idx) => (
          <UpdateCard
            key={idx}
            date={item.date}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
