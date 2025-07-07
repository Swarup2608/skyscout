'use client';
import Image from "next/image";
import { motion } from "framer-motion";

type UpdateCardProps = {
  image: string;
  title: string;
  date: string;
};

export default function UpdateCard({ image, title, date }: UpdateCardProps) {
  return (
    <motion.div
      className="shadow-md overflow-hidden rounded-lg bg-[#1A1F29] hover:scale-[1.02] transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="relative w-full h-48">
        <Image
          src={`/images/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="py-[24px] px-[16px]">
        <p className="text-sm text-[#AEE656]">{date}</p>
        <h2 className="text-lg font-semibold text-white leading-tight mt-[12px]">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}
