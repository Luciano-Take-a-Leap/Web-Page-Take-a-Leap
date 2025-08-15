'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const SuccessCaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
      ref={sectionRef}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="py-12 px-5 md:px-10 w-full lg:w-[80vw] relative"
    >
      <motion.div
        className="mt-12 flex w-full justify-center items-center lg:justify-evenly gap-8 lg:items-stretch flex-col lg:flex-row"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="relative w-full lg:w-[55%] aspect-[4/3]">
          <Image
            src="/assets/images/success-case.png"
            alt="Conversation"
            fill
            className="object-contain"
          />
        </motion.div>
        {isInView && (
          <motion.div className="w-full lg:w-[40%] flex flex-col justify-center font-work-sans text-sm md:max-w-[560px]">
            {[
              'IGNACIO ES EL MEJOR EJEMPLO PARA DEMOSTRARTE QUE SE PUEDE',
              '[La mayoría de los emprendedores se identifican mucho con él]',
              'Quiería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
              'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
              'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
            ].map((text, index) => (
              <motion.p
                key={index}
                className={`mb-6 ${index === 0 ? 'font-bold text-md md:text-lg' : ''}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.7,
                }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default SuccessCaseSection;
