'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

import Image from 'next/image';
import { ConversationSection as TConversationSection } from '@/types/sanity.types';
import { generateSanityImageUrl } from '@/utils/generate-sanity-image-url';
import RichText from '@/components/layout/rich-text-renderer';

interface ConversationSectionProps {
  data: TConversationSection;
  onViewChange?: () => void;
}

const ConversationSection: React.FC<ConversationSectionProps> = ({
  data,
  onViewChange,
}) => {
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
      transition={{ duration: 0.5 }}
      className="pt-12 pb-40 px-5 md:px-10 w-full relative z-30 bg-background"
    >
      <motion.div
        className="mt-12 flex w-full justify-center items-center gap-8 flex-col"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-[40px] font-bold mb-4 font-montserrat tracking-[0.2px] text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {data?.title}
        </motion.h2>
        {data?.image ? (
          <motion.div className="relative w-full lg:max-w-[45%] aspect-[4/3]">
            <Image
              src={generateSanityImageUrl(data?.image)}
              alt={data?.image?.alt || ''}
              fill
            />
          </motion.div>
        ) : null}
        {isInView && data?.content ? (
          <motion.div className="w-full flex flex-col justify-center font-work-sans text-sm md:max-w-[70vw] text-center">
            <motion.h2
              className="text-[40px] font-bold mb-4 font-montserrat tracking-[0.2px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {data?.conversationTitle}
            </motion.h2>
            <RichText
              className="text-white px-4 text-center flex flex-col gap-6"
              value={data.content}
              animate
              delayStart={0.2}
            />
          </motion.div>
        ) : null}
      </motion.div>
      <Image
        src="/assets/images/UI-elements/curl-1.png"
        alt="Curl"
        width={390}
        height={180}
        className="absolute bottom-0 left-0 transform translate-x-[15%] translate-y-[15%] hidden md:block"
      />
    </motion.section>
  );
};

export default ConversationSection;
