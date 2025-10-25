import RichText from "@/components/layout/rich-text-renderer";
import { Button } from "@/components/ui/button";
import { PriceComparisonSection as TPriceComparisonSection } from "@/types/sanity.types";
import { generateSanityImageUrl } from "@/utils/generate-sanity-image-url";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface PriceComparationSectionProps {
  data?: TPriceComparisonSection;
  redirectionUrl?: string | null;
  onViewChange?: () => void;
}

const PriceComparationSection: React.FC<PriceComparationSectionProps> = ({
  data,
  redirectionUrl,
  onViewChange,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTableInView = useInView(tableRef, { once: true, margin: "-50px" });
  const isMobileInView = useInView(mobileRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && onViewChange) {
      onViewChange();
    }
  }, [isInView, onViewChange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tableRowVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white flex justify-center items-center z-20 overflow-hidden relative"
    >
       <Image
        src="/assets/images/UI-elements/arrow-1.png"
        alt=""
        style={{
            filter:
              'brightness(0) saturate(100%) invert(47%) sepia(98%) saturate(2618%) hue-rotate(222deg) brightness(91%) contrast(97%)',
          }}
        width={250}
        height={450}
        className="absolute top-0 left-0 transform translate-x-[10%] translate-y-[450%] hidden lg:block z-0"
      />
       <Image
        src="/assets/images/UI-elements/curl-1.png"
        alt=""
        style={{
            filter:
              'brightness(0) saturate(100%) invert(47%) sepia(98%) saturate(2618%) hue-rotate(222deg) brightness(91%) contrast(97%)',
          }}
        width={450}
        height={450}
        className="absolute top-0 right-0 transform -translate-x-[10%] translate-y-[100%] hidden lg:block z-0"
      />
      <motion.div
        className="flex flex-col gap-4 md:gap-6 px-4 py-6 md:py-10 w-full max-w-full lg:max-w-[70%]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h4
          className="text-center font-bold mb-2 md:mb-4 px-2 md:px-4 font-montserrat text-lg sm:text-xl md:text-3xl lg:text-4xl w-full max-w-full tracking-[0.2px]"
          variants={itemVariants}
        >
          {data?.title}
        </motion.h4>

        <motion.h5
          className="text-center font-bold px-2 md:px-4 font-montserrat text-sm sm:text-base md:text-xl lg:text-2xl tracking-[0.2px]"
          variants={itemVariants}
        >
          {data?.subtitle}
        </motion.h5>

        <motion.div
          className="my-4 md:my-10 w-full max-w-[1200px] flex flex-col items-center justify-center mx-auto shadow-lg md:shadow-2xl rounded-2xl md:rounded-4xl py-4 md:py-6 px-2 md:px-4 gap-4 md:gap-6 z-10 bg-white"
          variants={itemVariants}
        >
          <motion.div
            className="flex gap-4 md:gap-8 justify-items-center items-start w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {data?.tableDescription && data?.tableTitle ? (
              <div className="flex flex-col justify-start items-start p-3 md:p-6 w-full">
                <h6 className="font-extrabold font-lora text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-6">
                  {data?.tableTitle}
                </h6>
                <RichText
                  value={data?.tableDescription}
                  className="font-[500] text-sm md:text-base"
                />
              </div>
            ) : null}
          </motion.div>

          {data?.comparisonItems?.length ? (
            <>
              <motion.div
                ref={tableRef}
                className="hidden md:block w-full max-w-[1200px] mx-auto overflow-x-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isTableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <table className="w-full border-collapse">
                  <thead>
                    <motion.tr
                      initial={{ opacity: 0, y: -10 }}
                      animate={
                        isTableInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -10 }
                      }
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <th className="p-4"></th>
                      <th className="p-4 text-center font-bold font-montserrat text-lg md:text-xl">
                        {data?.firstColTitle?.image ? (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={
                              isTableInView
                                ? { scale: 1, opacity: 1 }
                                : { scale: 0.8, opacity: 0 }
                            }
                            transition={{ delay: 0.7, duration: 0.4 }}
                          >
                            <Image
                              src={generateSanityImageUrl(
                                data.firstColTitle.image
                              )}
                              className="mx-auto"
                              alt="first column image"
                              width={120}
                              height={120}
                            />
                          </motion.div>
                        ) : (
                          <p>{data?.firstColTitle?.text}</p>
                        )}
                      </th>
                      <th className="p-4 text-center font-bold font-montserrat text-lg md:text-xl">
                        {data?.secondColTitle?.image ? (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={
                              isTableInView
                                ? { scale: 1, opacity: 1 }
                                : { scale: 0.8, opacity: 0 }
                            }
                            transition={{ delay: 0.8, duration: 0.4 }}
                          >
                            <Image
                              src={generateSanityImageUrl(
                                data.secondColTitle.image
                              )}
                              className="mx-auto"
                              alt="second column image"
                              width={120}
                              height={120}
                            />
                          </motion.div>
                        ) : (
                          <p>{data?.secondColTitle?.text}</p>
                        )}
                      </th>
                    </motion.tr>
                  </thead>
                  <tbody>
                    {data?.comparisonItems.map((row, index) => (
                      <>
                        <tr key={`divider-${index}`}>
                          <td colSpan={3} className="p-0">
                            <motion.figure
                              className="h-[2px] w-full bg-gray-200 block"
                              initial={{ scaleX: 0 }}
                              animate={
                                isTableInView ? { scaleX: 1 } : { scaleX: 0 }
                              }
                              transition={{
                                delay: 0.9 + index * 0.05,
                                duration: 0.3,
                              }}
                              style={{ originX: 0 }}
                            />
                          </td>
                        </tr>
                        <motion.tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                          custom={index}
                          initial="hidden"
                          animate={isTableInView ? "visible" : "hidden"}
                          variants={tableRowVariants}
                          whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <td className="p-4 font-semibold font-montserrat text-sm md:text-md">
                            <RichText value={row.title} />
                          </td>
                          <td className="p-4 text-center text-lg">
                            {row.withoutTakeALeap}
                          </td>
                          <td className="p-4 text-center text-lg">
                            {row.withTakeALeap}
                          </td>
                        </motion.tr>
                      </>
                    ))}
                    <tr>
                      <td colSpan={3} className="px-0">
                        <motion.figure
                          className="h-[2px] w-[100%] bg-orange block"
                          initial={{ scaleX: 0 }}
                          animate={
                            isTableInView ? { scaleX: 1 } : { scaleX: 0 }
                          }
                          transition={{ delay: 1.2, duration: 0.4 }}
                          style={{ originX: 0 }}
                        />
                      </td>
                    </tr>
                    <motion.tr
                      key="pricing"
                      className="hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isTableInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 1.3, duration: 0.5 }}
                    >
                      <td className="p-4 font-semibold font-montserrat text-sm md:text-md"></td>
                      <td className="p-4 text-center text-lg">
                        {data?.regularPrice}
                      </td>
                      <td className="p-4 text-center text-lg font-bold">
                        <motion.span
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ delay: 1.5, duration: 0.6 }}
                        >
                          {data?.price}
                        </motion.span>
                      </td>
                    </motion.tr>
                  </tbody>
                </table>
              </motion.div>

              <motion.div
                ref={mobileRef}
                className="md:hidden w-full space-y-4"
                initial="hidden"
                animate={isMobileInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.div
                  className="grid grid-cols-2 gap-3 mb-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="text-center font-bold font-montserrat text-sm p-3 bg-gray-50 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {data?.firstColTitle?.image ? (
                      <Image
                        src={generateSanityImageUrl(data.firstColTitle.image)}
                        className="mx-auto mb-2"
                        alt="first column image"
                        width={60}
                        height={60}
                      />
                    ) : (
                      <p className="text-xs">{data?.firstColTitle?.text}</p>
                    )}
                  </motion.div>
                  <motion.div
                    className="text-center font-bold font-montserrat text-sm p-3 bg-gray-50 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {data?.secondColTitle?.image ? (
                      <Image
                        src={generateSanityImageUrl(data.secondColTitle.image)}
                        className="mx-auto mb-2"
                        alt="second column image"
                        width={60}
                        height={60}
                      />
                    ) : (
                      <p className="text-xs">{data?.secondColTitle?.text}</p>
                    )}
                  </motion.div>
                </motion.div>

                {data?.comparisonItems.map((row, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                    custom={index}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="bg-gray-50 p-3 font-semibold font-montserrat text-sm">
                      <RichText value={row.title} />
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 items-center">
                      <div className="p-3 text-center text-base">
                        {row.withoutTakeALeap}
                      </div>
                      <div className="p-3 text-center text-base">
                        {row.withTakeALeap}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="bg-orange/10 border-2 border-orange rounded-lg overflow-hidden mt-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={
                    isMobileInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.9, opacity: 0 }
                  }
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 15px 40px rgba(255,130,0,0.2)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="grid grid-cols-2 divide-x divide-orange">
                    <div className="p-4 text-center text-lg font-semibold">
                      {data?.regularPrice || "$25.000"}
                    </div>
                    <div className="p-4 text-center text-lg font-bold text-orange">
                      <motion.span
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          delay: 1,
                          duration: 0.8,
                          repeat: 0,
                        }}
                      >
                        {data?.price || "$1.700"}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Button
              className="mt-4 bg-yellow hover:bg-yellow text-black h-12 md:h-13 px-6 md:px-10 py-3 md:py-4 rounded-[20px] tracking-[0.2px] font-bold text-xs sm:text-sm font-montserrat w-full sm:w-auto"
              onClick={() => {
                if (redirectionUrl) {
                  window.open(redirectionUrl, "_blank");
                }
              }}
            >
              {data?.ctaButton}
            </Button>
          </motion.div>
     
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PriceComparationSection;
