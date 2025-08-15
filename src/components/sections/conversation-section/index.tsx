'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

import Image from 'next/image';

interface ConversationSectionProps {
  onViewChange?: () => void;
}

const ConversationSection: React.FC<ConversationSectionProps> = ({ onViewChange }) => {
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
  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="pt-12 pb-40 px-5 md:px-10 w-full relative z-30 bg-background"
    >
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
          ¿Escuchaste alguna de estas frases?
        </motion.h2>
        <motion.div className="relative w-full lg:max-w-[45%] aspect-[4/3]">
          <Image
            src="/assets/images/conversation.png"
            alt="Conversation"
            fill
            className="object-contain"
          />
        </motion.div>

        {isInView && (
          <motion.div className="w-full flex flex-col justify-center font-work-sans text-sm md:max-w-[70vw] text-center">
            <motion.h2
              className="text-[40px] font-bold mb-4 font-montserrat tracking-[0.2px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Bastaaaaaa!
            </motion.h2>
            <motion.p
              className="mb-6 font-bold text-md md:text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Si yo fuera tú, no aguantaría ni 2 segundos y me replantearía si esto es lo
              que quiero.
            </motion.p>
            <motion.p
              className="mb-6 font-bold text-md md:text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              “Luciano, qué exagerado”.
            </motion.p>
            <motion.p
              className="mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Puede ser… o quizás no tanto
            </motion.p>
            <motion.p
              className="mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              Me pongo en la piel de esos emprendedores que tienen la chispa para lanzar
              su propia startup y conseguir la libertad que se merecen, pero se sienten
              abrumados por la cantidad de “expertos” presumiendo formulas “mágicas”.
            </motion.p>
            <motion.p
              className="mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              {' '}
              [Spoiler, no es oro todo lo que reluce]
            </motion.p>
            <motion.p
              className="mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              Y es normal. ¿Cómo no le vas a pegar una miradita si te hablan de productos
              fantásticos, levantar capital y volverte millonario en Silicon Valley?
            </motion.p>
            <motion.p
              className="mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              Yo también mordí el anzuelo de “el mejor producto gana” y me gasté más de
              20K usd y meses en ideas que no tuvieron ni 2 ventas.{' '}
              <b>
                Pero, después de 7 años, te puedo asegurar que tu startup no va a ganar
                por tener un producto lindísimo... sino por construir Evidencia Progresiva
                del Market Fit
              </b>
            </motion.p>
            <motion.b
              className="mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              Si no le puedes vender tu idea a casi nadie, no es porque sea mala, porque
              le falte más features o porque no tengas contactos. El problema es que no
              entienden el valor real de tu trabajo.
            </motion.b>
            <motion.b
              className="text-lg mb-6 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >
              La piedra angular que debes pulir son tu target, tu oferta y tus motions de
              captación.
            </motion.b>
          </motion.div>
        )}
      </motion.div>
      <Image
        src="/assets/images/UI-elements/curl-1.png"
        alt="Curl"
        width={390}
        height={180}
        className="absolute bottom-0 left-0 transform translate-x-[15%] translate-y-[15%] hidden md:block"
      />
    </motion.section>
  );
};

export default ConversationSection;
