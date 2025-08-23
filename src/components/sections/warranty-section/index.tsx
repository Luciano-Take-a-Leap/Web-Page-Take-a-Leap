'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const WarrantySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const CARDS = [
    {
      title: 'Nombre y apellido',
      description: 'Creative Strategist & Group Facilitator',
    },
    {
      title: 'Nombre y apellido',
      description: 'Accountability Coach & Solopreneur',
    },
    {
      title: 'Nombre y apellido',
      description: 'Mindset Coach & Community Builder',
    },
    {
      title: 'Nombre y apellido',
      description: 'Business Consultant & Growth Strategist',
    },
    {
      title: 'Nombre y apellido',
      description: 'Digital Marketing Specialist & Content Creator',
    },
    {
      title: 'Nombre y apellido',
      description: 'Leadership Coach & Team Development Expert',
    },
  ];

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
        ¿Quieres una garantía?
      </motion.h2>

      <motion.h4
        className="text-center font-semibold mb-10 font-montserrat text-lg md:max-w-[60vw]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Ahí va una: Si sigues haciendo lo mismo que hasta ahora, vas a perder un año de tu
        tiempo. O peor aún: Verás como otros emprendedores empiezan a monetizar mientras
        tu sigues rompiéndote la cabeza con tu idea Mi garantía es esta: Si aplicas lo que
        te enseño, te aseguro que te ahorrarás muchos meses y vas a empezar a vender de
        una vez
      </motion.h4>
      <Carousel
        className="md:w-[70vw] py-10 w-full relative"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {CARDS.map((card, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center p-6 basis-full md:basis-1/3 text-white font-montserrat"
            >
              <div className="flex flex-col items-start justify-center gap-6 w-[75%] ml-4 md:ml-0">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-md uppercase">{card.description}</p>
                <Link href="#" target="_blank" className="cursor-pointer">
                  <Image
                    src="/assets/images/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={22}
                    height={23}
                  />
                </Link>
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

      <Button className="bg-white hover:bg-white text-orange h-auto md:h-13 w-full md:w-auto md:px-10 py-4 rounded-[20px] tracking-[0.2px] font-bold text-xs md:text-sm font-montserrat uppercase">
        Basta de Experimentos. <br className="sm:hidden" /> Voy con Luciano
      </Button>
      <motion.figure
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
      />
    </motion.section>
  );
};

export default WarrantySection;
