'use client';

import { motion } from 'motion/react';

import VimeoPlayer from '@/components/layout/vimeo-player';
import SuccessCase from '@/components/layout/success-case';

interface Testimonial {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

type successCaseSectionContent = (Testimonial | string)[];

interface SuccessCaseSectionProps {
  content: successCaseSectionContent;
}

const SuccessCaseSection: React.FC<SuccessCaseSectionProps> = ({ content }) => {
  return (
    <motion.section className="py-12 px-5 md:px-10 w-full lg:w-[80vw] relative flex flex-col justify-center items-center">
      {(() => {
        let testimonialIndex = 0;
        return content.map((item, index) => {
          if (typeof item === 'string') {
            return <VimeoPlayer url="https://vimeo.com/76979871" key={index} />;
          } else {
            const imagePosition = testimonialIndex % 2 === 0 ? 'left' : 'right';
            testimonialIndex++;
            return (
              <SuccessCase
                key={index}
                imagePosition={imagePosition}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                content={item}
              />
            );
          }
        });
      })()}
    </motion.section>
  );
};

export default SuccessCaseSection;
