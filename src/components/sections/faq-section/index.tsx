"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/utils/twMerge";
import { FAQSection as TFAQSection } from "@/types/sanity.types";
import RichText from "@/components/layout/rich-text-renderer";

interface FAQSectionProps {
  data?: TFAQSection;
  onViewChange?: () => void;
}

export default function FAQSection({ data, onViewChange }: FAQSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>();
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

   const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const desktopFallAnimation2 = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 1500]
  );
  // const desktopFallAnimation3 = useTransform(scrollYProgress, [0.5, 1], [0, 500]);
  const desktopFallAnimation4 = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 150]
  );
  // const desktopFallAnimation5 = useTransform(scrollYProgress, [0.5, 1], [0, 800]);
  const mobileFallAnimation1 = useTransform(
    scrollYProgress,
    [0.4, 1],
    [0, 500]
  );
  // const mobileFallAnimation2 = useTransform(scrollYProgress, [0.4, 1], [0, 100]);
  const mobileFallAnimation3 = useTransform(
    scrollYProgress,
    [0.4, 1],
    [0, 900]
  );

  const rotateAnimation1 = useTransform(scrollYProgress, [0.5, 1], [-66, -20]);
  const rotateAnimation2 = useTransform(scrollYProgress, [0.5, 1], [-66, -120]);
  const rotateAnimation3 = useTransform(scrollYProgress, [0.5, 1], [-66, -60]);
  // const rotateAnimation4 = useTransform(scrollYProgress, [0.5, 1], [66, -30]);
  // const rotateAnimation5 = useTransform(scrollYProgress, [0.5, 1], [75, 66]);
  const rotateAnimation6 = useTransform(scrollYProgress, [0.5, 1], [35, 40]);

  // const scaleAnimation1 = useTransform(scrollYProgress, [0.5, 1], [1, 0.6]);
  const scaleAnimation2 = useTransform(scrollYProgress, [0.5, 1], [1, 2.6]);
  const scaleAnimation3 = useTransform(scrollYProgress, [0.5, 1], [1, 0.7]);


  useEffect(() => {
    if (isInView && onViewChange) {
      onViewChange();
    }
  }, [isInView, onViewChange]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full relative flex flex-col items-center justify-center py-10 md:pb-20 bg-white text-black px-6 overflow-hidden"
      id="faq"
    >
      <motion.h2
        className="text-center text-[30px] md:text-[40px] mt-10 mb-6 font-montserrat font-bold px-6 md:max-w-[80%]"
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {data?.title}
      </motion.h2>

      <motion.div
        className="w-full md:w-[50%] z-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {data?.faqs?.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full justify-between items-center my-2 py-4 text-left text-md font-medium rounded-md transition-all outline-none hover:underline decoration-white bg-blue px-2 cursor-pointer"
              >
                <p className="text-white">{item.question}</p>
                <ChevronDownIcon
                  className={cn(
                    "transition-transform duration-300 text-white",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                style={{
                  height:
                    isOpen && contentRefs.current[index]
                      ? contentRefs.current[index].scrollHeight
                      : 0,
                  overflow: "hidden",
                  transition: "height 0.3s ease",
                }}
              >
                <div className="mt-2 mb-4 px-2 p-1 border">
                  <RichText value={item.answer} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.figure
        className="w-20 h-20 rounded-2xl bg-orange absolute bottom-0 left-0 md:hidden transform -translate-x-4 -translate-y-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: mobileFallAnimation1,
          rotate: rotateAnimation1,
          scale: scaleAnimation3,
        }}
      />
      <motion.figure
        className="w-24 h-24 rounded-3xl bg-orange absolute top-0 right-0 md:hidden transform translate-x-2 translate-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: mobileFallAnimation3,
          rotate: rotateAnimation6,
        }}
      />
      <motion.figure
        className="w-26 h-26 rounded-2xl bg-orange absolute top-0 right-0 hidden md:block transform -translate-x-16 translate-y-14 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation2,
          rotate: rotateAnimation2,
          scale: scaleAnimation2,
        }}
      />
      <motion.figure
        className="w-40 h-40 rounded-2xl bg-orange absolute bottom-0 left-0 hidden md:block transform -translate-x-8 translate-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation4,
          rotate: rotateAnimation3,
          scale: scaleAnimation3,
        }}
      />
    </motion.section>
  );
}
