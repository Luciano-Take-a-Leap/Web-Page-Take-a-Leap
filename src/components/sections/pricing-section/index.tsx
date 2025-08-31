import { Button } from '@/components/ui/button';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const PricingSection: React.FC = () => {
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
  <section className="w-screen bg-white flex justify-center items-center z-20">
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{ duration: 0.5 }}
      className="bg-dark-blue text-white w-screen md:w-[80vw] rounded-3xl md:rounded-[80px] py-10 my-10 px-8 md:px-24 flex flex-col items-center md:items-start justify-center"
    >
      <Image src={'/assets/images/logo-header.png'} alt="logo" width={120} height={40} />
      <motion.div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4 font-montserrat font-bold">
        <motion.h3
          className="text-[30px] md:text-4xl md:max-w-[50%]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          ¿Cuanto tiempo has perdido en acciones que no te llevan a ningún lado?
        </motion.h3>
        <motion.p
          className="text-lg md:text-[20px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Yo sólo te pido 40 días y confiar en la Evidencia Progresiva del Market Fit
          <br /> <br /> Me vas a decir: Que razón tenías Luciano
        </motion.p>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center mt-8 bg-white text-black rounded-3xl py-16 gap-4 text-center md:w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Image
          src={'/assets/images/plan-features-mobile.png'}
          alt="plan features"
          width={300}
          height={200}
          className="md:hidden"
        />
        <Image
          src={'/assets/images/plan-features.png'}
          alt="plan features"
          width={700}
          height={200}
          className="hidden md:block"
        />
        <hr className="bg-orange h-[2px] w-full" />
        <motion.h4 className="text-2xl font-bold px-6">Precio oficial: 700 usd</motion.h4>
        <motion.h4 className="text-2xl font-bold px-6">
          Precio de Lanzamiento: <br />
          380 usd hasta el 4 de Agosto a las 23:59 HS
        </motion.h4>
      </motion.div>
      <Button
        variant={'default'}
        className="mt-8 bg-white hover:bg-white text-black px-10 rounded-xl font-bold h-10 md:self-center"
      >
        {'Reserva tu plaza'.toUpperCase()}
      </Button>
    </motion.div>
  </section>
);

};

export default PricingSection;
