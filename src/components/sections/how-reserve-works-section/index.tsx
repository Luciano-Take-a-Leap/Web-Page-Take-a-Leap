'use client';

import RoundedSquare from '@/components/layout/rounded-square';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const HowReserveWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const CARDS = [
    {
      title: '1',
      description:
        'Agendas un espacio 1-1 para verificar conmigo si ésta metodología es para tí y resolver tus dudas',
    },
    {
      title: '2',
      description: 'Te explico al detalle como vamos a hacerlo',
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
      className="w-full relative flex flex-col items-center justify-center py-10 md:pb-20 bg-dark-blue text-white px-6"
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
        ¿Cómo funciona la reserva?
      </motion.h2>

      <motion.div className="flex flex-col md:flex-row gap-6 py-10 md:w-[70vw] items-center justify-center">
        {isInView
          ? CARDS.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white text-black px-10 py-6 rounded-3xl w-full md:max-w-[460px] md:min-w-[380px] h-max flex justify-center items-center gap-8 md:gap-14 font-montserrat"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <h3 className="text-[100px] font-[500] text-center md:self-start">
                  {card.title}
                </h3>
                <div className="text-lg text-black w-[70%]">
                  <p className="mb-2">{card.description}</p>
                </div>
              </motion.div>
            ))
          : null}
      </motion.div>
      <motion.h4
        className="text-center font-semibold mb-10 font-montserrat text-lg md:max-w-[60vw]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Seamos sinceros.
      </motion.h4>
      <motion.h4
        className="text-center font-semibold mb-10 font-montserrat text-lg md:max-w-[40vw]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Solo quiero dentro a emprendedores a los que ayudar de verdad y que me devuelvan
        más testimonios.
      </motion.h4>
      <Button className="bg-white text-black h-13 px-10 py-4 rounded-[20px] tracking-[0.2px] font-bold text-sm font-montserrat">
        RESERVA TU PLAZA
      </Button>
      <RoundedSquare className="absolute top-25 left-20 z-20 hidden md:block -rotate-[66deg] bg-yellow" />
      <RoundedSquare className="absolute top-[50%] right-20 z-20 hidden md:block -rotate-[66deg] bg-orange" />
    </motion.section>
  );
};

export default HowReserveWorksSection;
