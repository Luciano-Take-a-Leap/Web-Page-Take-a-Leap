'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

interface SuccessCaseProps {
  imagePosition?: 'left' | 'right';
  imageSrc: string;
  imageAlt: string;
  content: {
    title: string;
    subtitle?: string;
    paragraphs: string[];
  };
}

const SuccessCase: React.FC<SuccessCaseProps> = ({
  imagePosition = 'left',
  imageSrc,
  imageAlt,
  content,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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

  const ImageComponent = () => (
    <motion.div className="relative md:sticky top:0 md:top-40 w-full lg:w-[40%] aspect-[4/3] flex justify-center items-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={200}
        className="object-contain"
      />
    </motion.div>
  );

  const ContentComponent = () => (
    <motion.div className="w-full lg:w-[60%] flex flex-col justify-start font-work-sans text-sm md:max-w-[560px]">
      <motion.h2
        className="mb-6 font-bold text-md md:text-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
      >
        {content.title}
      </motion.h2>

      {content.subtitle && (
        <motion.p
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
        >
          {content.subtitle}
        </motion.p>
      )}

      {content.paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8 + index * 0.1,
            duration: 0.7,
          }}
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );

  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="py-12 px-5 md:px-0 w-full lg:w-[70vw] relative flex justify-center items-center"
    >
      <motion.div
        className={`mt-12 flex w-full justify-start items-start lg:items-start gap-8 flex-col lg:flex-row ${
          imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
        }`}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ImageComponent />
        {isInView && <ContentComponent />}
      </motion.div>
    </motion.section>
  );
};

export default SuccessCase;
