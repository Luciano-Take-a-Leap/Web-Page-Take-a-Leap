'use client';

import { motion } from 'motion/react';

import VimeoPlayer from '@/components/layout/vimeo-player';
import SuccessCase from '@/components/layout/success-case';
import { SuccessCaseSection as TSuccessCaseSection } from '@studio/sanity.types';
import { generateSanityImageUrl } from '@/utils/generate-sanity-image-url';

interface SuccessCaseSectionProps {
  data?: TSuccessCaseSection;
}

const SuccessCaseSection: React.FC<SuccessCaseSectionProps> = ({ data }) => {
  return (
    <motion.section className="py-12 px-5 md:px-10 w-full lg:w-[80vw] relative flex flex-col justify-center items-center">
      {(() => {
        let testimonialIndex = 0;
        return data?.cases?.map((item, index) => {
          if (item._type === 'video') {
            return <VimeoPlayer url="https://vimeo.com/76979871" key={index} />;
          } else {
            const imagePosition = testimonialIndex % 2 === 0 ? 'left' : 'right';
            testimonialIndex++;
            return (
              <SuccessCase
                key={index}
                imagePosition={imagePosition}
                imageSrc={generateSanityImageUrl(item.image)}
                imageAlt={item.title || 'Success Case Image'}
                title={item.title}
                content={item.content}
              />
            );
          }
        });
      })()}
    </motion.section>
  );
};

export default SuccessCaseSection;
