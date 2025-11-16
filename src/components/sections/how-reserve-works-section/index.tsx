"use client";

import RichText from "@/components/layout/rich-text-renderer";
import { Button } from "@/components/ui/button";
import { HowReservationWorksSection as THowReservationWorksSection } from "@/types/sanity.types";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface HowReserveWorksSectionProps {
  data?: THowReservationWorksSection;
  redirectionUrl?: string | null;
  onViewChange?: () => void;
}
const HowReserveWorksSection: React.FC<HowReserveWorksSectionProps> = ({
  data,
  redirectionUrl,
  onViewChange,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      id="how-it-works"
      className="w-full relative flex flex-col items-center justify-center py-10 md:pb-20 bg-dark-blue text-white px-6 overflow-hidden"
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

      <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10 w-full max-w-7xl px-4">
        {isInView
          ? data?.cards?.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white text-black px-10 py-6 rounded-3xl w-full flex justify-center items-center gap-8 md:gap-14 font-montserrat z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <h3 className="text-[100px] font-[500] text-center md:self-start shrink-0">
                  {index + 1}
                </h3>
                <div className="text-lg text-black flex-1">
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
      <Button
        className="bg-white hover:bg-white text-black h-13 px-10 py-4 rounded-[20px] tracking-[0.2px] font-bold text-sm font-montserrat"
        onClick={() => {
          if (redirectionUrl) {
            window.open(redirectionUrl, "_blank");
          }
        }}
      >
        {data?.ctaButton}
      </Button>
    </motion.section>
  );
};

export default HowReserveWorksSection;
