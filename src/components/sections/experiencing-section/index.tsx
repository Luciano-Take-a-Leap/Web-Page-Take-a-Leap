'use client';

import { Button } from '@/components/ui/button';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const ExperiencingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const CARDS = [
    {
      title: (
        <p>
          En lugar de re pensar decenas de veces mi idea o gastarme 6 meses construyendo
          un producto
        </p>
      ),
      description: (
        <p>
          Me enfoco en encontrar un target al que le pueda vender desde el día 1. Nada de
          escondernos detrás de un producto durante meses.
        </p>
      ),
    },
    {
      title: (
        <p>
          Al contrario de otros expertos, no invierto mi tiempo en estrategias carísimas
          que son para cuando estés escalando
        </p>
      ),
      description: (
        <p>
          Me centro en secuencias ridículamente efectivas para lanzar y conseguir primeros
          clientes.
        </p>
      ),
    },
    {
      title: (
        <p>
          No me como el cuento de que para tener éxito, hay que fracasar varias veces{' '}
        </p>
      ),
      description: (
        <p>
          En cambio, construyo Evidencia Progresiva de Market Fit en todas las capas para
          saber si mi idea vale la pena en cuestión de días.{' '}
        </p>
      ),
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
      className="w-full relative bg-orange flex flex-col items-center justify-center px-5 md:py-20"
    >
      <motion.h2
        className="text-center text-[30px] md:text-[40px] text-white mt-10 mb-6 font-archivo-black-400 px-6 md:max-w-[80%]"
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
        Puedes tardar 2 años y meter la pata cientos de veces... <br /> <br />
        ... O puedes hacerlo con mi acompañamiento y cerrar tus primeras ventas en 6
        semanas.{' '}
      </motion.h2>
      <Image
        src="/assets/images/UI-elements/arrow-1.png"
        alt="UI-element: arrow"
        className="absolute top-48 left-0 transform translate-x-6 scale-200 hidden md:block"
        width={52}
        height={150}
      />
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 w-[70vw] justify-items-center">
        {isInView
          ? CARDS.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white text-black px-10 py-9 rounded-lg shadow-lg w-[330px] h-[390px] flex flex-col justify-start items-start gap-4 font-montserrat"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <h3 className="font-bold mb-2 tracking-[0.1px]">{card.title}</h3>
                <motion.figure
                  className="h-1 bg-orange"
                  initial={{
                    width: 0,
                  }}
                  animate={{ width: '25%' }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                />
                <div className="text-text-secondary text-sm tracking-[0.1px]">
                  {card.description}
                </div>
              </motion.div>
            ))
          : null}
      </motion.div>
      <motion.h4
        className="text-center text-black mb-10 font-montserrat text-lg md:max-w-[60vw] tracking-[0.2px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <b>
          La mayoría dice saber lanzar una startup, pero en realidad solo conocen la
          superficie....
        </b>{' '}
        . Porque una cosa es que te enseñen a contruir un lindo producto y que te motives
        con el feedback de tus conocidos, y otra muy diferente es empezar a hacer dinerito
        en cuenta.
      </motion.h4>
      <Button className="bg-dark-blue text-white font-montserrat font-bold px-8 py-4 rounded-[20px] h-13 mb-10 w-full md:w-auto">
        <a
          href="https://calendly.com/take-a-leap/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          ME UNO A TAKE A LEAP PROGRAM
        </a>
      </Button>
      <Image
        src="/assets/images/UI-elements/arrow-2.png"
        alt="UI-element: arrow"
        className="absolute bottom-0 right-40 transform translate-y-16 hidden md:block"
        width={280}
        height={230}
      />
    </motion.section>
  );
};

export default ExperiencingSection;
