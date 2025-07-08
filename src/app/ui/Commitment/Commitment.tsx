'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { SubTitle, Title } from '../Title/Title';
import { motion } from 'framer-motion';

type CommitementType = {
  title: string;
  desc: string;
  image: string;
};

export default function FeatureCarousel({ items }: { items: CommitementType[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const pages = Math.ceil(items.length / cardsPerView);
    setTotalPages(pages);
    setCurrentPage(0);
  }, [cardsPerView, items.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

    setCurrentPage((prev) =>
      direction === 'left'
        ? Math.max(prev - 1, 0)
        : Math.min(prev + 1, totalPages - 1)
    );
  };

  const goToPage = (pageIndex: number) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * pageIndex;
    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
    setCurrentPage(pageIndex);
  };

  return (
    <div className="lg:px-[60px] py-[80px] space-y-2 px-2">
      <Title title="OUR COMMITMENT" isDark={false} />
      <SubTitle
        isDark={false}
        subtitle={
          <div className="w-full md:w-[60%]">
            Innovative <span className="text-[#84B23B]">Solutions</span> For Tomorrow's{' '}
            <span className="text-[#84B23B]">Agricultural</span>
          </div>
        }
      />
      <p className="mt-[40px] w-full md:w-[90%]">
        Landus delivers advanced, sustainable solutions to optimize agricultural efficiency and
        drive long-term growth, empowering farmers with innovative tools and practices that meet
        the demands of a changing industry.
      </p>

      <div className="relative w-full mx-auto mt-[40px]">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar snap-x snap-mandatory"
        >
          {items?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="snap-start w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0 overflow-hidden bg-white rounded-lg cursor-pointer  transform hover:scale-[0.95] transition-all duration-300"
            >
              <Image
                src={`/images/${item.image}`}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-[300px] object-cover"
              />
              <div className="py-[24px]">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-[12px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mt-[60px]"
        >
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages })?.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`h-3 rounded-full transition-colors border cursor-pointer ${
                  idx === currentPage
                    ? 'w-6 bg-[#AEE656] border-[#AEE656]'
                    : 'w-3 bg-transparent border-[#00000080]'
                }`}
              ></button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scroll('left')}
              className="cursor-pointer transition-opacity"
            >
              <img
                src={
                  currentPage === 0
                    ? '/svg/arrow-left.svg'
                    : '/svg/arrow-right.svg'
                }
                alt="Left"
                width={40}
                height={40}
                className={`object-contain transition-transform ${
                  currentPage === 0 ? '' : 'rotate-180'
                }`}
              />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scroll('right')}
              className="cursor-pointer transition-opacity"
            >
              <img
                src={
                  currentPage === totalPages - 1
                    ? '/svg/arrow-left.svg'
                    : '/svg/arrow-right.svg'
                }
                alt="Right"
                width={40}
                height={40}
                className={`object-contain transition-transform ${
                  currentPage === totalPages - 1 ? 'rotate-180' : ''
                }`}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
