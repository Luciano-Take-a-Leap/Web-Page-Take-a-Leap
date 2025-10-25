'use client';

import RichText from '@/components/layout/rich-text-renderer';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { WarrantySection as TWarrantySection } from '@/types/sanity.types';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface WarrantySectionProps {
  data?: TWarrantySection;
  redirectionUrl?: string | null;
  onViewChange?: () => void;
}

const WarrantySection: React.FC<WarrantySectionProps> = ({ data, redirectionUrl, onViewChange }) => {
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

  const formatButtonText = (text: string | undefined) => {
    if (!text) return '';

    const words = text.split(' ');
    const midPoint = Math.ceil(words.length / 2);
    return (
      words.slice(0, midPoint).join(' ') +
      ' <br class="sm:hidden" /> ' +
      words.slice(midPoint).join(' ')
    );
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
      id="warranty"
      className="w-full relative flex flex-col items-center justify-center py-10 bg-gradient-to-b from-orange to-orange-gradient text-black px-6"
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
      <RichText
        value={data?.subtitle}
        className="text-center mb-10 md:max-w-[60vw]"
        animate
        delayIncrement={0.01}
      />

      <motion.h3 className="text-center text-xl md:text-2xl font-bold my-3 font-montserrat px-6 md:max-w-[80%]">
        {data?.Carousel?.title}
      </motion.h3>
      <Carousel
        className="md:w-[70vw] py-10 w-full relative"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data?.Carousel?.people?.map((card, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center p-6 basis-full md:basis-1/3 text-white font-montserrat"
            >
              <div className="flex flex-col items-start justify-center gap-6 w-[75%] ml-4 md:ml-0">
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <p className="text-md uppercase">{card.role}</p>
                {card.linkedIn ? (
                  <Link href={card.linkedIn} target="_blank" className="cursor-pointer" title='LinkedIn'>
                    <Image
                      src="/assets/images/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={22}
                      height={23}
                    />
                  </Link>
                ) : null}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="link"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 scale-150 cursor-pointer text-white z-10"
        />
        <CarouselNext
          variant="link"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 scale-150 cursor-pointer text-white z-10"
        />
      </Carousel>

      <Button
        className="bg-white hover:bg-white text-orange h-auto md:h-13 w-full md:w-auto md:px-10 py-4 rounded-[20px] tracking-[0.2px] font-bold text-xs md:text-sm font-montserrat uppercase"
        dangerouslySetInnerHTML={{ __html: formatButtonText(data?.ctaButton) }}
        onClick={() => {
          if (redirectionUrl) {
            window.open(redirectionUrl, '_blank');
          }
        }
        }
      ></Button>
      {/* <motion.figure
        className="w-18 h-18 rounded-2xl bg-yellow absolute top-0 right-0 hidden md:block transform -translate-x-20 translate-y-12"
        initial={{
          y: 0,
          rotate: -66,
          opacity: 1,
        }}
        animate={{
          y: 0,
          rotate: -426,
          opacity: 1,
        }}
        transition={{
          bounce: 1,
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      /> */}
    </motion.section>
  );
};

export default WarrantySection;
