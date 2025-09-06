'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import Image from 'next/image';

const ReasonSection: React.FC = () => {
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
      className="py-12 relative bg-white flex flex-col items-center justify-center w-full mx-auto px-6 md:px-0"
    >
      <div className="w-full md:w-[80%]">
        <motion.h2
          className="text-2xl md:text-[40px] mb-4 font-lora font-bold tracking-[0.2px] w-full md:w-[85%]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Estoy aquí para ayudarte a entender que si tienes un sistema que funciona con
          menos, puedes descansar más sin sentirte culpable
        </motion.h2>
        <motion.div
          className="mt-12 flex w-full justify-between gap-8 items-start flex-col lg:flex-row"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isInView && (
            <motion.div className="lg:w-[50%] flex flex-col justify-center font-work-sans text-sm text-black md:pt-20">
              <motion.p
                className="mb-6 text-md md:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                La diferencia entre los emprendedores que trabajan mucho y ganan lo justo
                y los que trabajan lo justo y ganan bien es sencilla, aunque igual te
                escuece.
              </motion.p>

              <div className="w-full bg-dark-blue text-white font-bold p-4 mb-6 rounded-xl md:text-md">
                Algunos emprendedores piensan que, para crecer, basta con hacer cada vez
                más &quot;cosas&quot;. &quot;Si quiero más visibilidad, necesito publicar
                cada vez más y en más canales. Al final del camino, el que se esfuerza más
                y hace más ruido, gana&quot;.
              </div>
              <motion.p
                className="mb-6 text-md md:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                ¿Qué quieres que te diga?
              </motion.p>
              <motion.p
                className="mb-6 text-md md:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                Es como pensar que el cuñado que más grita en Nochevieja es el que más
                razón tiene.
              </motion.p>
            </motion.div>
          )}
          <motion.div className="lg:w-[50%] relative hidden lg:flex lg:items-end lg:justify-end pb-20">
            <Image
              src="/assets/images/luciano_2.jpeg"
              alt="Luciano"
              width={450}
              height={300}
              className="object-contain rounded-t-[250px] rounded-b-[80px]"
            />
          </motion.div>
          <motion.div className="relative w-full aspect-[4/3] lg:hidden">
            <Image
              src="/assets/images/luciano_2.jpeg"
              alt="Luciano"
              fill
              className="object-cover rounded-[20px]"
            />
          </motion.div>
        </motion.div>
      </div>
      <Image
        src="/assets/images/UI-elements/curl-1.png"
        alt="Curl"
        width={390}
        height={180}
        className="absolute top-0 right-0 transform translate-x-[15%] translate-y-[35%] hidden md:block"
      />
      <Image
        src="/assets/images/UI-elements/arrow-2.png"
        alt="Arrow"
        width={390}
        height={180}
        className="absolute bottom-0 left-0 transform translate-x-[5%] translate-y-[5%] hidden md:block filter invert scale-75 rotate-60"
      />
    </motion.section>
  );
};

export default ReasonSection;
