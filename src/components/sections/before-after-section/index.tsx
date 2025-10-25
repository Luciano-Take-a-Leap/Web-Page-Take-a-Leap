"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import { BeforeAfterSection as TBeforeAfterSection } from "@/types/sanity.types";
import { Button } from "@/components/ui/button";

interface BeforeAfterSectionProps {
  data: TBeforeAfterSection;
  redirectionUrl?: string | null;
  onViewChange?: () => void;
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
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

  // Calcular el número máximo de items
  const maxItems = Math.max(
    data?.leftContent?.length || 0,
    data?.rightContent?.length || 0
  );

  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      id="conversation-section"
      transition={{ duration: 0.5 }}
      className="pt-12 md:pt-6 md:mt-6 pb-20 md relative z-30 bg-[#FAF5E8]"
    >
      <motion.div className="w-full md:w-[80%]px-5 md:px-10">
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
          {isInView && data?.leftContent && data?.rightContent ? (
            <motion.div className="w-full md:w-[80%] flex flex-col gap-10 md:gap-10 items-start justify-center h-max">
              <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 justify-center">
                <div className="w-full md:w-1/2">
                  {data?.leftTitle ? (
                    <h3 className="text-2xl md:text-3xl font-montserrat font-semibold text-center md:text-left">
                      {data.leftTitle}
                    </h3>
                  ) : null}
                </div>
                <div className="w-full md:w-1/2 hidden md:block">
                  {data?.rightTitle ? (
                    <h3 className="text-3xl font-montserrat font-semibold">
                      {data.rightTitle}
                    </h3>
                  ) : null}
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 md:hidden items-center">
                {data?.leftContent.map((item, index) => (
                  <div key={`left-${index}`} className="w-full p-4">
                    <p className="text-sm text-center">{item}</p>
                  </div>
                ))}

                {data?.rightTitle ? (
                  <h3 className="text-2xl font-semibold mt-6 mb-4 text-center">
                    {data.rightTitle}
                  </h3>
                ) : null}

                {data?.rightContent.map((item, index) => (
                  <div key={`right-${index}`} className="w-full p-4">
                    <p className="text-sm text-center">{item}</p>
                  </div>
                ))}
              </div>

              <div className="w-full hidden md:flex md:flex-col">
                {Array.from({ length: maxItems }).map((_, index) => (
                  <div key={index} className="w-full flex gap-20">
                    <div className="w-1/2 p-4">
                      {data?.leftContent?.[index] ? (
                        <p className="text-lg font-semibold">
                          {data.leftContent[index]}
                        </p>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>
                    <div className="w-1/2 p-4">
                      {data?.rightContent?.[index] ? (
                        <p className="text-lg font-semibold">
                          {data.rightContent[index]}
                        </p>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
          {data?.ctaText ? (
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow text-black h-13 px-10 py-4 rounded-[20px] tracking-[0.2px] font-bold text-sm font-montserrat"
              onClick={() => {
                if (redirectionUrl) {
                  window.open(redirectionUrl, "_blank");
                }
              }}
            >
              {data?.ctaText}
            </Button>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BeforeAfterSection;
