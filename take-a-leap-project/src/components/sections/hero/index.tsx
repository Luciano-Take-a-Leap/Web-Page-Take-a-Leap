import { motion } from 'motion/react';
import { useRef } from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);

  return (
    <motion.div
      layout
      ref={ref}
      className={`w-full h-[calc(100vh-80px)] flex items-center justify-center relative ${className}`}
    >
      <motion.div className="w-full h-full absolute top-0 left-0">
        <motion.img
          src="/assets/images/hero-bg.png"
          alt="hero"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </motion.div>

      <motion.div className="flex flex-col items-center z-10 gap-12 max-w-[940px] 2xl:max-w-[70vw]">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className="text-[80px] font-archivo-black-400 text-center text-white"
            transition={{ duration: 1 }}
          >
            Take a Leap Program
          </motion.h2>
        </motion.div>
        <motion.h4
          className="font-bold text-center font-montserrat text-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white">
            Si sueñas con cambiar el mundo e invertir esfuerzo en productos que nadie
            quiere, este no es tu programa.
          </span>
        </motion.h4>
        <motion.p
          className="text-sm font-montserrat text-center text-white px-4 tracking-[0.2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Te dijeron que para montar una startup exitosa hay que construir un producto
          espectacular… Y aquí estás, mirando historias de éxito y pensado: “¿Cómo rayos
          empiezo si no tengo ni 10K para invertir y aún no le vendí ni a mi abuelita?”
          <br />
          <br />
          Calma. No necesitas seguir pensando y codeando ideas, dejar tu trabajo actual,
          ni quemar todos tus ahorros. 
        </motion.p>
        <motion.div
          className="flex items-center justify-center bg-[#F65A1799] max-w-[815px] rounded-full px-12 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-white font-montserrat font-bold text-center">
            Solo observa cómo puedes lanzar tu startup y conseguir tus primeras ventas,
            ahorrando esfuerzos, gracias a la Evidencia Progresiva del Market Fit -
            incluso sin tener un producto aún en el mercado -
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
