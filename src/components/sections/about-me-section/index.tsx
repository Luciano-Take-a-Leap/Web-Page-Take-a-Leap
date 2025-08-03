'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import Image from 'next/image';

const AboutMeSection: React.FC = () => {
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
      className="py-12 w-full lg:w-[80vw] relative"
    >
      <motion.div
        className="mt-12 flex w-full justify-evenly gap-8 items-stretch flex-col lg:flex-row"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isInView && (
          <motion.div className="lg:w-[60%] px-10 md:px-14 flex flex-col justify-center font-work-sans text-sm">
            <motion.h2
              className="text-xl md:text-[50px] mb-4 font-archivo-black-400 tracking-[0.2px] text-orange"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Mi nombre es Luciano Biancardi
            </motion.h2>
            <motion.p
              className="mb-6 font-bold text-md md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Soy emprendedor y asesor de startups early stage
            </motion.p>
            <motion.p
              className="mb-6 text-md md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              He trabajado con grandes startups como Ualá, fui COO de Sinapsis y también
              ayudé a más de 30 emprendedores a construir sus productos digitales. Pero
              siempre me quedaba con un sabor amargo: La mayoría terminaba cerrando, a
              pesar de haber invertido miles de dólares en productos increíbles “que la
              gente usaría”.
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              ¿Te suena familiar?
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              Las posibilidades de éxito en Latam con métodos tradicionales de
              construcción, nunca fueron tan bajas.
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              Me di cuenta que los principales problemas son:
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              - Apostar 100% al producto desde el inicio como nuestra única carta ganadora
              y seguir estrategias de empresas que están en otra etapa.
              <br />- Considerar al Market Fit cómo algo binario de “lo tienes o no lo
              tienes”, y no como un continuo en constante cambio: un error fatal incluso
              para startups con clientes dado el contexto super dinámico.
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              Es por eso que terminamos creando este nuevo enfoque de la Evidencia
              Progresiva del Market Fit para GANAR EN LATAM:
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              Decidé que tenía que priorizar lo que realmente funcionaba: Menos ruido, más
              resultado, más rápido e cuidando tus ahorros.
            </motion.p>
          </motion.div>
        )}
        <motion.div className="relative w-[40%] hidden aspect-[4/3] lg:flex">
          <Image
            src="/assets/images/luciano.png"
            alt="Conversation"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div className="relative w-full aspect-[4/3] lg:hidden">
          <Image
            src="/assets/images/luciano-mobile.png"
            alt="Conversation"
            fill
            className="object-cover rounded-[20px]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMeSection;
