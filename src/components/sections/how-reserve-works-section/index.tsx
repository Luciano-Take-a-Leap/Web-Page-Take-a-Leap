'use client';

import RichText from '@/components/layout/rich-text-renderer';
import { Button } from '@/components/ui/button';
import { HowReservationWorksSection as THowReservationWorksSection } from '@/types/sanity.types';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

interface HowReserveWorksSectionProps {
  data?: THowReservationWorksSection;
  redirectionUrl?: string | null;
  onViewChange?: () => void;
}
const HowReserveWorksSection: React.FC<HowReserveWorksSectionProps> = ({ data, redirectionUrl, onViewChange }) => {
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const desktopFallAnimation1 = useTransform(scrollYProgress, [0.5, 1], [0, 1600]);
  const desktopFallAnimation2 = useTransform(scrollYProgress, [0.5, 1], [0, 1600]);
  const rotateAnimation1 = useTransform(scrollYProgress, [0.5, 1], [-66, -20]);
  const rotateAnimation2 = useTransform(scrollYProgress, [0.5, 1], [-66, -120]);
  const scaleAnimation1 = useTransform(scrollYProgress, [0.5, 1], [1, 0.6]);

  return (
    <motion.section
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      id="how-it-works"
      className="w-full relative flex flex-col items-center justify-center py-10 md:pb-20 bg-dark-blue text-white px-6"
    >
      <motion.h2
        className="text-center text-[30px] md:text-[40px] mt-10 mb-6 font-montserrat font-bold px-6 md:max-w-[80%]"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {data?.title}
      </motion.h2>

      <motion.div className="flex flex-col lg:flex-row gap-6 py-10 md:w-[70vw] items-center justify-center">
        {isInView
          ? data?.cards?.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white text-black px-10 py-6 rounded-3xl w-full md:max-w-[460px] md:min-w-[380px] h-max flex justify-center items-center gap-8 md:gap-14 font-montserrat z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              <h3 className="text-[100px] font-[500] text-center md:self-start">
                {index + 1}
              </h3>
              <div className="text-lg text-black w-[70%]">
                <p className="mb-2">{card.content}</p>
              </div>
            </motion.div>
          ))
          : null}
      </motion.div>
      <RichText
        value={data?.bottomText}
        className="md:max-w-[40vw] text-center mb-10"
        animate
        delayStart={0.5}
        delayIncrement={0.05}
      />
      <Button className="bg-yellow hover:bg-yellow text-black h-13 px-10 py-4 rounded-[20px] tracking-[0.2px] font-bold text-sm font-montserrat"
        onClick={() => {
          if (redirectionUrl) {
            window.open(redirectionUrl, '_blank');
          }
        }
        }>
        {data?.ctaButton}
      </Button>
      <motion.figure
        className="w-26 h-26 rounded-2xl bg-orange absolute bottom-0 right-0 hidden md:block transform -translate-x-20 -translate-y-80"
        style={{
          y: desktopFallAnimation1,
          rotate: rotateAnimation1,
          scale: scaleAnimation1,
        }}
      />
      <motion.figure
        className="w-32 h-32 rounded-2xl bg-yellow absolute top-0 left-0 hidden md:block transform translate-x-20 translate-y-4"
        style={{
          y: desktopFallAnimation2,
          rotate: rotateAnimation2,
        }}
      />
    </motion.section>
  );
};

export default HowReserveWorksSection;
