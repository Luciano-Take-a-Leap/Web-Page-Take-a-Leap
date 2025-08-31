import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  //motion animation hooks for the floating elements
  const desktopFallAnimation1 = useTransform(scrollYProgress, [0.5, 1], [0, 1000]);
  const desktopFallAnimation2 = useTransform(scrollYProgress, [0.5, 1], [0, 1500]);
  const desktopFallAnimation3 = useTransform(scrollYProgress, [0.5, 1], [0, 500]);
  const desktopFallAnimation4 = useTransform(scrollYProgress, [0.5, 1], [0, 150]);
  const desktopFallAnimation5 = useTransform(scrollYProgress, [0.5, 1], [0, 800]);
  const mobileFallAnimation1 = useTransform(scrollYProgress, [0.4, 1], [0, 500]);
  const mobileFallAnimation2 = useTransform(scrollYProgress, [0.4, 1], [0, 100]);
  const mobileFallAnimation3 = useTransform(scrollYProgress, [0.4, 1], [0, 900]);

  const rotateAnimation1 = useTransform(scrollYProgress, [0.5, 1], [-66, -20]);
  const rotateAnimation2 = useTransform(scrollYProgress, [0.5, 1], [-66, -120]);
  const rotateAnimation3 = useTransform(scrollYProgress, [0.5, 1], [-66, -60]);
  const rotateAnimation4 = useTransform(scrollYProgress, [0.5, 1], [66, -30]);
  const rotateAnimation5 = useTransform(scrollYProgress, [0.5, 1], [75, 66]);
  const rotateAnimation6 = useTransform(scrollYProgress, [0.5, 1], [35, 40]);

  const scaleAnimation1 = useTransform(scrollYProgress, [0.5, 1], [1, 0.6]);
  const scaleAnimation2 = useTransform(scrollYProgress, [0.5, 1], [1, 2.6]);
  const scaleAnimation3 = useTransform(scrollYProgress, [0.5, 1], [1, 0.7]);

  return (
    <motion.section
      layout
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full md:h-[calc(100vh-80px)] flex items-center justify-center relative ${className} px-5 md:px-0 py-26 md:py-0 bg-dark-blue overflow-hidden`}
    >
      <motion.figure
        className="w-26 h-26 rounded-2xl bg-yellow absolute top-0 left-0 hidden md:block transform translate-x-16 translate-y-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation1,
          rotate: rotateAnimation1,
          scale: scaleAnimation1,
        }}
      />
      <motion.figure
        className="w-26 h-26 rounded-2xl bg-orange absolute top-0 right-0 hidden md:block transform -translate-x-16 translate-y-14 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation2,
          rotate: rotateAnimation2,
          scale: scaleAnimation2,
        }}
      />
      <motion.figure
        className="w-16 h-16 rounded-xl bg-yellow absolute top-0 right-0 hidden md:block transform -translate-x-16 translate-y-72"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation3,
          rotate: rotateAnimation1,
          scale: scaleAnimation3,
        }}
      />
      <motion.figure
        className="w-40 h-40 rounded-2xl bg-orange absolute bottom-0 left-0 hidden md:block transform -translate-x-8 translate-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation4,
          rotate: rotateAnimation3,
          scale: scaleAnimation3,
        }}
      />
      <motion.figure
        className="w-16 h-16 rounded-2xl bg-yellow absolute bottom-0 right-0 hidden md:block transform -translate-x-48 -translate-y-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: desktopFallAnimation5,
          rotate: rotateAnimation4,
          scale: scaleAnimation3,
        }}
      />
      <motion.figure
        className="w-20 h-20 rounded-2xl bg-orange absolute bottom-0 left-0 md:hidden transform -translate-x-4 -translate-y-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: mobileFallAnimation1,
          rotate: rotateAnimation1,
          scale: scaleAnimation3,
        }}
      />
      <motion.figure
        className="w-24 h-24 rounded-3xl bg-orange absolute top-0 right-0 md:hidden transform translate-x-2 translate-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: mobileFallAnimation3,
          rotate: rotateAnimation6,
        }}
      />
      <motion.figure
        className="w-24 h-24 rounded-2xl bg-yellow absolute bottom-0 right-0 md:hidden transform translate-x-22 -translate-y-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          y: mobileFallAnimation2,
          rotate: rotateAnimation3,
        }}
      />
      <motion.figure
        className="w-10 h-10 rounded-lg bg-yellow absolute bottom-0 right-0 md:hidden transform -translate-x-8 translate-y-2"
        style={{
          rotate: rotateAnimation5,
          scale: scaleAnimation2,
        }}
      />
      <motion.div
        className={twMerge(
          'flex flex-col items-center gap-8 w-full max-w-[940px] 2xl:max-w-[70vw] z-30 mt-26 md:mt-0'
        )}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className="text-[26px] md:text-[32px] font-archivo text-center text-white font-bold"
            transition={{ duration: 1 }}
          >
            ⚡ Take a Leap Program ⚡
          </motion.h2>
        </motion.div>
        <motion.h4
          className="text-center text-[34px] md:text-[42px] text-white tracking-[0.2px] font-lora leading-[40px] font-[900] relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white">
            La mayoría de los emprendedores se funden antes de cumplir un año.
          </span>
        </motion.h4>
        <motion.p
          className="text-xl text-center text-white px-4 tracking-[0.2px] font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Te dijeron que para tener éxito, hay que construir un producto espectacular. Y
          aquí estás, pensando; ¿Cómo rayos empiezo si no tengo ni 10K usd y aún no le
          vendí ni a mi primo?
          <br />
          <br />
          Calma. No necesitas seguir pensando y codeando ideas, levantar inversión, ni
          quemar tus ahorros.
        </motion.p>
        <motion.div
          className="flex items-center justify-center bg-[#F65A1799] w-full md:w-max md:max-w-[60vw] rounded-[40px] px-6 py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-white font-montserrat font-bold text-center text-xl leading-6">
            Solo observa cómo puedes lanzar tu startup y conseguir tus primeras ventas en
            60 días, ahorrando esfuerzos, gracias a la Evidencia Progresiva del Market
            Fit.
          </p>
        </motion.div>
      </motion.div>
      <Image
        src="/assets/images/UI-elements/curl-1.png"
        alt="Curl"
        width={450}
        height={180}
        className="absolute top-0 left-0 transform -translate-x-[15%] -translate-y-[75%] hidden md:block grayscale -rotate-20"
      />
      <Image
        src="/assets/images/UI-elements/curl-1.png"
        alt="Curl"
        width={450}
        height={195}
        className="absolute bottom-0 right-0 transform translate-x-[20%] translate-y-[10%] hidden md:block -rotate-20 grayscale z-10"
      />
      <Image
        src="/assets/images/UI-elements/arrow-3.png"
        alt="Arrow"
        width={450}
        height={450}
        className="absolute top-0 left-0 transform -translate-x-[35%] translate-y-[250%] hidden md:block"
      />
      <Image
        src="/assets/images/UI-elements/arrow-3.png"
        alt="Arrow"
        width={180}
        height={180}
        className="absolute top-0 left-0 transform -translate-x-[35%] translate-y-[200%] block md:hidden"
      />
    </motion.section>
  );
};

export default Hero;
