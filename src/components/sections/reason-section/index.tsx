"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

import Image from "next/image";
import { ReasonSection as TReasonSection } from "@/types/sanity.types";
import RichText from "@/components/layout/rich-text-renderer";
import { generateSanityImageUrl } from "@/utils/generate-sanity-image-url";
import { splitLastWords } from "./split-last-words";
import { vercelStegaSplit } from "@vercel/stega";

interface ReasonSectionProps {
  data?: TReasonSection;
  onViewChange?: () => void;
}

const ReasonSection: React.FC<ReasonSectionProps> = ({
  data,
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

  const cleanText = vercelStegaSplit(data?.extraTitle || "").cleaned;

  const { mainText, lastWords } = useMemo(
    () => splitLastWords(cleanText, 2),
    [cleanText]
  );

  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      id="reasons"
      transition={{ duration: 0.5 }}
      className="py-12 mb-20 lg:mb-12 relative bg-white flex flex-col items-center justify-center w-full mx-auto px-6 md:px-0 overflow-x-hidden"
      style={{
        minHeight: "auto",
        contain: "layout",
      }}
    >
      <div className="w-full md:w-[80%] z-10 relative overflow-hidden">
        <motion.h2
          className="text-2xl md:text-[40px] pb-10 lg:pb-4 lg:mb-4 font-lora font-bold tracking-[0.2px] w-full lg:w-[85%]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {data?.title && <>{data.title} </>}
          {mainText && <p className="mt-4">{mainText} </p>}
          <span className="relative inline-block">
            {lastWords}
            <Image
              src="/assets/images/UI-elements/subrayado.png"
              alt=""
              width={390}
              height={180}
              className="absolute left-1/2 top-full -translate-x-1/2 mt-1 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[390px] h-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(47%) sepia(98%) saturate(2618%) hue-rotate(222deg) brightness(91%) contrast(97%)",
              }}
              priority={false}
              loading="lazy"
            />
          </span>
        </motion.h2>

        <motion.div
          className="mt-12 flex w-full justify-between gap-8 items-start flex-col lg:flex-row relative"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="lg:w-[50%] flex flex-col justify-center text-sm text-black gap-8 relative z-20">
            {isInView ? (
              <RichText
                value={data?.content}
                animate
                delayStart={0.3}
                className="flex flex-col justify-center text-sm text-black lg:pt-20 gap-8 z-20"
              />
            ) : (
              <div className="h-[300px]" />
            )}
          </div>

          <motion.div className="lg:w-[50%] relative hidden lg:flex lg:items-end lg:justify-end pb-20 z-20">
            {data?.image ? (
              <Image
                src={generateSanityImageUrl(data.image)}
                alt="Luciano"
                width={450}
                height={300}
                className="object-contain rounded-t-[250px] rounded-b-[80px]"
                priority={false}
                loading="lazy"
              />
            ) : null}
          </motion.div>

          <motion.div className="relative w-full aspect-[4/3] lg:hidden z-20">
            {data?.image ? (
              <Image
                src={generateSanityImageUrl(data.image)}
                alt="Luciano"
                fill
                className="object-cover rounded-[20px]"
                priority={false}
                loading="lazy"
              />
            ) : null}
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* <Image
          src="/assets/images/UI-elements/arrow-2.png"
          alt=""
          width={390}
          height={180}
          className="absolute bottom-0 left-0 transform translate-x-[5%] translate-y-[10%] hidden lg:block scale-75 rotate-60"
          style={{
            filter:
              'brightness(0) saturate(100%) invert(47%) sepia(98%) saturate(2618%) hue-rotate(222deg) brightness(91%) contrast(97%)',
          }}
          priority={false}
          loading="lazy"
        /> */}
      </div>
    </motion.section>
  );
};

export default ReasonSection;
