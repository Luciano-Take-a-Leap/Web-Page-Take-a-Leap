'use client';

import RoundedSquare from '@/components/layout/rounded-square';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const CurrentEditionPeopleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const CARDS = [
    {
      title: 'Fase 01',
      description: [
        <p key={'1-1'}>
          Encuentra tu nueva oportunidad con un target que esté dipuesto a pagar por tu
          producto
        </p>,
        <p key={'1-2'}>
          Piensa: Qué NO está ofreciendo tu competencia y hay un grupo de personas, con
          mucha urgencia, que lo necesita?
        </p>,
        <p key={'1-3'}>Vamos a encontar un target concreto en los primeros 10 días</p>,
      ],
    },
    {
      title: 'Fase 02',
      description: [
        <p key={'2-1'}>
          Diseña una propuesta con un gancho tan deseable que tu precio pase a un segundo
          plano
        </p>,
        <p key={'2-2'}>
          Vamos a perfilar tu nueva oferta y lograr que tu potenciales clientes prueben tu
          solución (no te preocupes! no necesitas un mega producto para esto)
        </p>,
        <p key={'2-3'}>
          Asi que date 10 días más. Quedará tan brutal que no te vas a preocupar por
          agregarle más features a tu producto.
        </p>,
      ],
    },
    {
      title: 'Fase 03',
      description: [
        <p key={'3-1'}>Monetiza tu solución y adquiere tus primeros clientes pagos.</p>,
        <p key={'3-2'}>
          Quiere que te ahorres meses de errores y empieces a ver lo que realmente
          funciona.
        </p>,
        <p key={'3-3'}>
          Vamos a aplicar secuencias que te van a ayudar a conseguir tus primeros 10
          clientes pagos sin necesidad de pagar una agencia, ni invertir miles de usd en
          estrategias carísimas.
        </p>,
      ],
    },
  ];

  const ACTIONS = [
    '8 Community sessions',
    'Secuencias y estrategias',
    'Plan de acción semanal',
    'Servicios en bandeja',
    'Xxxxxxxxxxxxxxx',
    'Xxxxxxxxxxxxxxx',
    'Xxxxxxxxxxxxxxx',
    'Xxxxxxxxxxxxxxx',
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
      className="w-full relative flex flex-col items-center justify-center md:pt-20 md:pb-12"
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
        Tú, yo y los emprendedores de esta edición
      </motion.h2>

      <motion.span
        className="text-center mb-10 font-montserrat text-lg md:max-w-[60vw] tracking-[0.2px] px-5"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <p className="font-semibold">
          40 días para conseguir tus primeros clientes gracias a la Evidencia Progresiva
          del Market Fit
        </p>
        Piénsalo 😉😉 Éstas 3 fases son las que te llevarán a lanzar tu startup con
        ventas, mientras otros emprendedores siguen escondiéndose detras de ideas que
        nunca llegan a buen puerto
      </motion.span>
      <div className="w-[315px] h-[300px] absolute top-48 left-0 transform translate-x-6 hidden md:block scale-175">
        <Image
          src="/assets/images/UI-elements/circle.png"
          alt="UI-element: arrow"
          className=""
          fill
        />
      </div>
      <motion.div className="flex flex-col gap-6 py-10 md:w-[70vw] items-center">
        {isInView
          ? CARDS.map((card, index) => (
              <motion.div
                key={index}
                className="bg-yellow text-black px-10 py-6 rounded-3xl w-full max-w-[1200px] md:h-[260px] flex flex-col md:flex-row justify-start items-center gap-8 md:gap-14 font-montserrat"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <h3 className="font-[900] italic text-[40px] w-full md:w-[20%] text-center md:self-start">
                  {card.title}
                </h3>
                <div className="text-xl text-black flex flex-col justify-between h-full gap-8 md:gap-0 w-full md:w-[70%]">
                  {card.description.map((desc, descIndex) => (
                    <p key={descIndex} className="mb-2">
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))
          : null}
      </motion.div>
      <motion.h4
        className="text-center font-bold mb-10 font-montserrat text-lg md:max-w-[60vw] tracking-[0.2px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Emprendedor, así es como voy a acompañarte y comprometerme con tu transformación
      </motion.h4>
      <motion.div className="flex justify-center items-center mb-10 md:max-w-[60vw] md:w-full gap-6">
        <motion.div
          className="relative md:w-[30%] aspect-[4/3]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Image
            src="/assets/images/marketing-items.png"
            alt="Conversation"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.ul className="w-full md:w-[50%] md:max-h-39 font-work-sans text-sm grid grid-cols-1 md:grid-cols-2">
          {ACTIONS.map((action, index) => (
            <motion.li
              key={index}
              className="mb-6 font-bold text-md flex items-start gap-8 md:gap-2 w-full md:w-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <div className="flex items-start h-full">
                <ArrowRight className="inline" />
              </div>
              <p>{action.toUpperCase()}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="relative bg-orange text-white px-10 py-10 md:py-6 rounded-t-3xl md:rounded-b-3xl w-full max-w-[1200px] md:h-[260px] flex flex-col md:flex-row justify-start items-center gap-14 font-montserrat"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-4 w-full h-max items-start">
          <h3 className="font-[900] italic text-[40px] w-full md:w-[30%] text-center md:self-start tracking-[0.1px]">
            Atención!
          </h3>
          <div className="text-sm tracking-[0.1px] w-full flex flex-col justify-between gap-8 mt-2">
            <b className="text-xl">
              Solo trabajaré manos a mano con 12 emprendedores en esta edición de Take a
              Leap Program
            </b>
            <p className="text-lg h-full">
              [Y ya hay dentro 6 emprendedores que quedaron fuera de la edición anterior]
              Entrar ahora no solo te asegura tu plaza sino que además también te llevas
              condiciones especiales.
            </p>
          </div>
        </div>
        <RoundedSquare className="absolute bottom-0 left-0 transform translate-y-20 -translate-x-20 z-20 hidden md:block w-[170px] h-[170px] -rotate-[66deg] bg-orange/20" />
      </motion.div>
    </motion.section>
  );
};

export default CurrentEditionPeopleSection;
