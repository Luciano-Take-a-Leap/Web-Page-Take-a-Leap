'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/utils/twMerge';
import { FAQSection as TFAQSection } from '@/types/sanity.types';
import RichText from '@/components/layout/rich-text-renderer';

interface FAQSectionProps {
  data?: TFAQSection;
}

export default function FAQSection({ data }: FAQSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full relative flex flex-col items-center justify-center py-10 md:pb-20 bg-white text-black px-6"
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
        className="w-full md:w-[50%]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {data?.faqs?.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full justify-between items-center my-2 py-4 text-left text-sm font-medium rounded-md transition-all outline-none hover:underline decoration-white bg-blue px-2 cursor-pointer"
              >
                <p className="text-white">{item.question}</p>
                <ChevronDownIcon
                  className={cn(
                    'transition-transform duration-300 text-white',
                    isOpen ? 'rotate-180' : 'rotate-0'
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
                  overflow: 'hidden',
                  transition: 'height 0.3s ease',
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
    </motion.section>
  );
}
