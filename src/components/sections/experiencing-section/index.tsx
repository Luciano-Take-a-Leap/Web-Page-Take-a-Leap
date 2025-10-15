"use client";

import RichText from "@/components/layout/rich-text-renderer";
import { Button } from "@/components/ui/button";
import useMediaquery from "@/utils/use-get-mediaquery";
import { ExperiencingSection as TExperiencingSection } from "@/types/sanity.types";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ExperiencingSectionProps {
  data?: TExperiencingSection;
  redirectionUrl?: string | null;
  onViewChange?: () => void;
}

const ExperiencingSection: React.FC<ExperiencingSectionProps> = ({
  data,
  redirectionUrl,
  onViewChange,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useMediaquery();

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const areCardsInView = useInView(firstCardRef, {
    once: true,
    margin: "-75px",
  });

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
      id="experiencing-section"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      className="w-full relative bg-gradient-to-b from-orange to-orange-gradient flex flex-col items-center justify-center px-5 md:py-20"
    >
      <motion.div
        className="px-6 md:max-w-[80%] mt-10 mb-6"
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
        <RichText
          className="text-center text-2xl md:text-3xl font-archivo-black-400"
          value={data?.title}
        />
      </motion.div>
      <Image
        src="/assets/images/UI-elements/arrow-1.png"
        alt="UI-element: arrow"
        className="absolute top-48 left-0 transform translate-x-6 scale-200 hidden md:block"
        width={52}
        height={150}
      />
      <motion.div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-12 px-4 py-10 max-w-[1200px] w-full items-center justify-items-center justify-center md:justify-center">
        {data?.cards?.map((card, index) => (
          <motion.div
            key={index}
            className={twMerge(
              "bg-white text-text mx-2 px-10 py-9 rounded-[20px] md:rounded-[40px] shadow-lg w-[330px] h-[390px] flex flex-col justify-start items-start gap-4 font-montserrat col-span-2",
              index === 0 ? "lg:col-start-2" : "",
              index === 2 ? "bg-dark-blue text-white" : ""
            )}
            ref={index === 0 ? firstCardRef : null}
            initial={index === 2 ? { scale: 0, rotate: -80 } : { scale: 1 }}
            animate={
              index === 2
                ? areCardsInView
                  ? { scale: 1, rotate: isTablet || isMobile ? 0 : -8 }
                  : { scale: 0 }
                : { scale: 1 }
            }
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-center mb-2 tracking-[0.1px] min-h-[45%] flex items-center">
              {card?.topText}
            </h3>
            <motion.figure
              className="h-1 bg-orange self-center"
              initial={{ width: 0 }}
              animate={areCardsInView ? { width: "25%" } : { width: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
            />
            <div className="text-md tracking-[0.1px] text-center">
              {card?.bottomText}
            </div>
          </motion.div>
        ))}
      </motion.div>
      {data?.bottomText ? (
        <RichText
          className="text-center font-montserrat text-lg md:max-w-[60vw] tracking-[0.2px]"
          value={data?.bottomText}
          animate
          delayStart={0.7}
        />
      ) : null}
      <Button
        className="bg-dark-blue text-white font-montserrat font-bold px-8 py-4 rounded-[20px] h-13 mb-10 w-full md:w-auto"
        onClick={() => {
          if (redirectionUrl) {
            window.open(redirectionUrl, "_blank");
          }
        }}
      >
        {data?.ctaButton}
      </Button>
      <Image
        src="/assets/images/UI-elements/arrow-2.png"
        alt="UI-element: arrow"
        className="absolute bottom-0 right-40 transform translate-y-[-10%] hidden md:block"
        width={280}
        height={230}
      />
    </motion.section>
  );
};

export default ExperiencingSection;
