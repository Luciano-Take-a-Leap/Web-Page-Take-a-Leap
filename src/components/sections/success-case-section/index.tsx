"use client";

import { motion, useInView } from "motion/react";

import VimeoPlayer from "@/components/layout/vimeo-player";
import SuccessCase from "@/components/layout/success-case";
import { SuccessCaseSection as TSuccessCaseSection } from "@/types/sanity.types";
import { generateSanityImageUrl } from "@/utils/generate-sanity-image-url";
import { useEffect, useRef } from "react";

interface SuccessCaseSectionProps {
  data?: TSuccessCaseSection;
  onViewChange?: () => void;
}

const SuccessCaseSection: React.FC<SuccessCaseSectionProps> = ({
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

  return (
    <motion.section
      className="py-12 px-5 md:px-10 w-full lg:w-[80vw] relative flex flex-col justify-center items-center"
      id="success-cases"
      ref={sectionRef}
    >
      {(() => {
        let testimonialIndex = 0;
        return data?.cases?.map((item, index) => {
          if (item._type === "video") {
            return item.url ? <VimeoPlayer url={item.url} key={index} /> : null;
          } else {
            const imagePosition = testimonialIndex % 2 === 0 ? "left" : "right";
            testimonialIndex++;
            return (
              <SuccessCase
                key={index}
                imagePosition={imagePosition}
                imageSrc={generateSanityImageUrl(item.image)}
                imageAlt={item.title || "Success Case Image"}
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
