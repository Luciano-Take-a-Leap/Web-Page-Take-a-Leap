'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimatePresence, motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { CurrentEditionPeopleSection as TCurrentEditionSection } from '@studio/sanity.types';
import RichText from '@/components/layout/rich-text-renderer';
import { generateSanityImageUrl } from '@/utils/generate-sanity-image-url';

interface CurrentEditionPeopleSectionProps {
  data?: TCurrentEditionSection;
}

const CurrentEditionPeopleSection: React.FC<CurrentEditionPeopleSectionProps> = ({
  data,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [cardExpandedIndex, setCardExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      className="w-full relative flex flex-col items-center justify-center overflow-x-hidden"
    >
      <div className="bg-[#222] w-full flex flex-col items-center justify-center text-white mb-16">
        <motion.h2
          className="text-center text-[30px] md:text-[40px] mt-10 mb-6 font-montserrat font-bold px-6 max-w-full md:max-w-[80%]"
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

        <motion.span
          className="text-center mb-10 font-montserrat text-lg max-w-full md:max-w-[60%] tracking-[0.2px] px-5"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <RichText value={data?.subtitle} />
        </motion.span>
        <motion.div className="flex flex-col gap-6 px-4 py-10 w-full max-w-full md:max-w-[70%]">
          {isInView
            ? data?.cards?.map((card, index) => (
                <motion.div
                  key={index}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  onClick={() => {
                    if (cardExpandedIndex === index) {
                      setCardExpandedIndex(null);
                    } else {
                      setCardExpandedIndex(index);
                    }
                  }}
                  className="bg-yellow rounded-3xl text-black font-montserrat flex flex-col items-center justify-center text-center py-8 md:py-12 px-8 md:px-16 relative z-0 w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                >
                  <motion.button
                    className="absolute top-4 right-4 text-black cursor-pointer"
                    onClick={() => {
                      if (cardExpandedIndex === index) {
                        setCardExpandedIndex(null);
                      } else {
                        setCardExpandedIndex(index);
                      }
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ rotate: cardExpandedIndex === index ? 180 : 0 }}
                  >
                    <ChevronDownIcon className="mx-auto" size={30} />
                  </motion.button>
                  <p className="absolute font-bold text-sm md:text-md top-2">
                    {card.name}
                  </p>
                  <h3 className="font-[900] italic text-[40px] w-full text-center md:self-start mb-8">
                    {`Fase ${(index + 1).toString().padStart(2, '0')}`}
                  </h3>
                  <div className="text-lg text-black flex flex-col w-full tracking-[0.001px] leading-6">
                    <h4 className="font-bold font-lora text-2xl md:text-[30px] leading-tight">
                      {card.subtitle}
                    </h4>

                    <AnimatePresence>
                      {cardExpandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 pt-4">
                            <RichText value={card.content} smallFont />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            : null}
          <motion.h5
            className="w-full text-center font-bold mb-10 md:px-0 font-montserrat text-md md:text-xl tracking-[0.2px]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            {data?.postCardsText}
          </motion.h5>
        </motion.div>
      </div>
      <motion.h4
        className="text-center font-bold mb-10 px-4 md:px-0 font-montserrat text-xl md:text-5xl w-full max-w-full md:max-w-[70%] tracking-[0.2px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        {data?.titleGuidanceCards}
      </motion.h4>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start my-10 w-full max-w-[80%] mx-auto">
        {data?.processGuidanceCards?.map((action, index) => (
          <motion.div
            key={index}
            className="basis-1/3 max-w-[300px] w-full font-work-sans text-sm flex flex-col justify-start items-center gap-4 shadow-2xl rounded-4xl p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
          >
            <motion.div className="relative mx-auto flex justify-center items-center">
              <Image
                src={generateSanityImageUrl(action.icon)}
                alt={`Icon for ${action.title}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>

            <p className="text-center uppercase md:text-sm lg:text-lg w-[90%] font-montserrat font-extrabold">
              {action.title}
            </p>
            <p className="text-center md:text-xs lg:text-md w-[80%] text-gray-500">
              {action.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex flex-col gap-6 px-4 py-10 w-full max-w-full lg:max-w-[70%]">
        <motion.h4
          className="text-center font-bold mb-4 px-4 md:px-0 font-montserrat text-xl md:text-5xl w-full max-w-full tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {data?.bonusTitle}
        </motion.h4>
        <motion.h5
          className="text-center font-bold px-4 md:px-0 font-montserrat text-md md:text-2xl tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {data?.bonusSubtitle}
        </motion.h5>
        <>
          {data?.bonuses
            ? data.bonuses?.map((bonus) => {
                return (
                  <motion.div
                    key={bonus._key}
                    className="my-10 w-full max-w-[1200px] flex flex-col items-center justify-center mx-auto shadow-2xl rounded-4xl py-4 px-2 gap-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-start w-full">
                      <div className="flex flex-col justify-start items-start p-6 w-full">
                        <h6 className="font-extrabold font-lora text-4xl mb-6">
                          {bonus.title}
                        </h6>
                        <RichText value={bonus.description} className="font-[500]" />
                      </div>
                      <div className="flex flex-col justify-start items-center p-6 w-full relative h-64 md:h-full">
                        <Image
                          src={generateSanityImageUrl(bonus.image)}
                          alt={bonus.title || ''}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <figure className="h-[2px] w-[85%] bg-orange block" />
                    <p className="font-archivo-black-400 text-2xl">{bonus.cost}</p>
                  </motion.div>
                );
              })
            : null}
        </>

        <motion.h4
          className="text-center font-bold mb-4 px-4 md:px-0 font-montserrat text-xl md:text-5xl w-full max-w-full tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {data?.extraBonusesTitle}
        </motion.h4>
        <motion.h5
          className="text-center font-bold px-4 md:px-0 font-montserrat text-md md:text-2xl tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {data?.extraBonusesSubtitle}
        </motion.h5>
        {data?.extraBonuses?.map((bonus, index) => (
          <motion.div
            key={index}
            className="my-10 w-full max-w-[1200px] flex flex-col items-center justify-center mx-auto shadow-2xl rounded-4xl py-4 px-2 gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-start w-full">
              <div className="flex flex-col justify-start items-start p-6 w-full">
                <h6 className="font-extrabold font-lora text-4xl mb-6">{bonus.title}</h6>
                <RichText value={bonus.description} className="font-[500]" />
              </div>
              <div className="flex flex-col justify-start items-center p-6 w-full relative h-64 md:h-full">
                <Image
                  src={generateSanityImageUrl(bonus.image)}
                  alt={bonus.title || ''}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <figure className="h-[2px] w-[85%] bg-orange block" />
            <p className="font-archivo-black-400 text-2xl">{bonus.cost}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="relative bg-blue text-white px-4 md:px-10 py-10 md:py-6 w-full flex flex-col justify-start items-center gap-14 font-montserrat overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 w-full h-max text-center items-center">
          <div className="flex justify-center items-center gap-2">
            <span className="text-3xl md:text-4xl">👇</span>
            <h3 className="font-[900] italic text-3xl md:text-[40px] text-center tracking-[0.1px]">
              {data?.warningTitle}
            </h3>
            <span className="text-3xl md:text-4xl">👇</span>
          </div>
          <div className="text-sm tracking-[0.1px] flex flex-col justify-between gap-8 mt-2 w-full max-w-full md:max-w-[40%]">
            <b className="text-2xl md:text-3xl">{data?.warningSubtitle}</b>
            <RichText value={data?.warningText} />
          </div>
        </div>
        <Carousel
          setApi={setApi}
          className="w-full max-w-[1200px] md:py-2 relative min-h-108"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {data?.testimonials?.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-start md:p-1 basis-full md:basis-1/3 text-white font-montserrat"
              >
                <div className="min-h-60 border-8 border-amber-50 bg-amber-50 rounded-3xl flex items-center w-full">
                  <Image
                    src={generateSanityImageUrl(testimonial)}
                    alt={`Testimonial ${index + 1}`}
                    width={350}
                    height={80}
                    className="object-contain p-2 w-full h-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="link"
            className="absolute left-2 md:-left-12 hidden md:block md:top-1/2 transform -translate-y-1/2 scale-150 cursor-pointer text-white z-10"
          />
          <CarouselNext
            variant="link"
            className="absolute right-2 md:-right-12 hidden md:block md:top-1/2 transform -translate-y-1/2 scale-150 cursor-pointer text-white z-10"
          />
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  current === idx + 1 ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default CurrentEditionPeopleSection;
