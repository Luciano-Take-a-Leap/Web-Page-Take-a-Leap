'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

import Image from 'next/image';
import { AboutMeSection as TAboutMeSection } from '@/types/sanity.types';
import RichText from '@/components/layout/rich-text-renderer';
import { generateSanityImageUrl } from '@/utils/generate-sanity-image-url';

interface AboutMeSectionProps {
  data?: TAboutMeSection;
  onViewChange?: () => void;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ data, onViewChange }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  useEffect(() => {
    if (isInView && onViewChange) {
      onViewChange();
    }
  }, [isInView, onViewChange]);

  const variants = {
    initial: {
      y: 80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      id="about-me"
      transition={{ duration: 0.5 }}
      className="py-12 w-full relative bg-gradient-to-b from-orange to-orange-gradient"
    >
      <motion.div
        className="mt-12 flex w-full justify-evenly gap-8 items-stretch flex-col lg:flex-row md:w-[80vw] mx-auto"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isInView && (
          <motion.div className="lg:w-[60%] px-10 md:px-14 flex flex-col justify-center font-work-sans text-sm text-white">
            <motion.h2
              className="text-xl md:text-[50px] mb-4 font-archivo-black-400 tracking-[0.2px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {data?.title}
            </motion.h2>
            <RichText value={data?.content} />
          </motion.div>
        )}
        <motion.div className="relative w-[40%] hidden aspect-[4/3] lg:flex">
          <Image
            src={generateSanityImageUrl(data?.image)}
            alt={data?.image?.alt || 'About Me Image'}
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div className="relative w-full aspect-[4/3] lg:hidden">
          <Image
            src={generateSanityImageUrl(data?.mobileImage)}
            alt={data?.mobileImage?.alt || 'About Me Image'}
            fill
            className="object-cover rounded-[20px]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMeSection;
