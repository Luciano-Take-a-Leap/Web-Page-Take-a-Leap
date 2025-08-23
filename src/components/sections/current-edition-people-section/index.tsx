'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const CurrentEditionPeopleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const CARDS = useMemo(
    () => [
      {
        stepName: 'Customer - Problem Fit',
        title: 'Fase 01',
        description: [
          <p key={'1-1'} className="font-bold font-lora text-2xl md:text-[30px]">
            Encuentra tu nueva oportunidad para elevar el potencial rentable de tu idea.
          </p>,
          <p key={'1-2'} className="">
            Uno de los miedos cuando estás emprendiendo es:
          </p>,
          <p key={'1-3'} className="">
            “No me conoce nadie”
            <br /> “Ya hay mucha competencia”
            <br /> “Me va a costar muchísimo venderlo”
            <br /> “Es un nicho muy complicado”
          </p>,
          <p key={'1-4'} className="">
            Y el problema está en pensar que para generar interés, hay que crear algo mega
            innovador ( nada más alejado de la realidad ).
          </p>,
          <p key={'1-5'} className="font-bold">
            Piensa: ¿Qué NO está ofreciendo tu competencia y hay un grupo de personas, con
            mucha urgencia, que lo necesita?
          </p>,
          <p key={'1-6'} className="">
            Debes actuar como un francotirador… no como una metralleta apuntando a las
            nubes.
          </p>,
          <p key={'1-7'} className="">
            Vamos a encontrar tu oportunidad sobre un target puntual en los primeras 2
            semanas.
          </p>,
          <p key={'1-8'} className="">
            No importa tu nicho, tu experiencia o que no te conozca nadie.
          </p>,
        ],
      },
      {
        stepName: 'Problem - Solution Fit',
        title: 'Fase 02',
        description: [
          <b key={'2-1'} className="font-bold font-lora text-[30px]">
            Diseña una solución tan deseable que NO sea necesario seguir agregándole
            features a tu idea.
          </b>,
          <p key={'2-2'} className="">
            Llevo más de 60 empresas mentorizadas a mis espaldas.
          </p>,
          <p key={'2-3'} className="">
            TODOS, absolutamente TODOS tenían dudas sobre cómo ofrecer su solución, cómo
            presentarla y perdían demasiado tiempo re pensado el producto.
          </p>,
          <p key={'2-4'} className="">
            Y el resultado es mucha confusión y poco interés del otro lado.
          </p>,
          <p key={'2-5'} className="">
            Así que date 2 semanas más.
          </p>,
          <p key={'2-6'} className="font-bold">
            Vamos a crear un gancho para diferenciarte y perfilar tu solución para que tus
            potenciales clientes la prueben y nos den feedback.
          </p>,
          <p key={'2-7'} className="">
            Quedará tan brutal, que le vas a perder el miedo a vender tu producto.
          </p>,
        ],
      },
      {
        stepName: 'Business - Model Fit',
        title: 'Fase 03',
        description: [
          <b key={'3-1'} className="font-bold font-lora text-[30px]">
            Olvídate del famoso “que buena idea” y empieza a hacer dinero en tu cuenta
          </b>,
          <p key={'3-2'} className="">
            Existe una realidad, y es que hay un largo trecho entre el feedback que te dan
            tus conocidos y que logres realmente monetizar tu solución.
          </p>,
          <p key={'3-3'} className="font-bold">
            Quiero que ahorres meses de errores ( incluso años ) en acciones que no
            generan $$ y que empieces a darle en la tecla ahora…
          </p>,
          <p key={'3-4'} className="">
            Así que en esta fase, te enseñaré secuencias de monetización y estrategias de
            pre selling validadas para que logres que tus potenciales clientes saquen la
            billetera ;)
          </p>,
          <p key={'3-5'} className="">
            Además vas a tener un Como Ganar y Dónde Jugar muy claro.
          </p>,
        ],
      },
      {
        stepName: 'Product - Market Fit',
        title: 'Fase 04',
        description: [
          <b key={'4-1'} className="font-bold font-lora text-[30px]">
            Consigue tus primeros clientes y logra repetirlo varias veces
          </b>,
          <p key={'4-2'} className="">
            Muchos emprendedores se dejan llevar por el ruido que hay en redes y tratan de
            copiar a las empresas que ya están escalando.
          </p>,
          <p key={'4-3'} className="">
            Y lo cierto es que cansa ( y mucho ) escuchar tantos playbooks “ganadores”.
          </p>,
          <p key={'4-4'} className="font-bold">
            Al contrario de la mayoría, vas a tener motions de captación y estrategias de
            go to market que son eficaces, sencillas y creadas para founders en etapa Pre
            Market Fit;
          </p>,
          <p key={'4-5'} className="">
            Para que generes tus primeras ventas y repitas el proceso sin depender de
            agencias caras ni anuncios costosos.
          </p>,
        ],
      },
      {
        stepName: 'Go to Market',
        title: 'Fase 05',
        description: [
          <b key={'5-1'} className="font-bold font-lora text-[30px]">
            Construye tu MVP para salir a la cancha{' '}
          </b>,
          <p key={'5-2'} className="">
            Luego de varios años en esto, te puedo asegurar que tu cliente no te va a
            comprar por lo lindo o sofisticado que sea tu producto, sino por mostrarle
            realmente el valor que fuimos construyendo en las etapas anteriores.
          </p>,
          <p key={'5-3'} className="font-bold">
            Asi que como parte de la estrategia de Go to Market, en ésta fase, vas a
            construir tu primer release de producto para salir a la cancha y que
            finalmente logres lanzar tu startup con mucha Evidencia Progresiva de Market
            Fit.
          </p>,
          <p key={'5-4'} className="">
            Y validar de que vas por muy buen camino en todas las capas del negocio y
            empieces a jugar en serio, por supuesto :)
          </p>,
        ],
      },
    ],
    []
  );

  const ACTIONS = [
    {
      text: '8 Community sessions',
      animationSrc: '/assets/community_animation.json',
      invertInDarkMode: true,
    },
    {
      text: 'Secuencias y estrategias',
      animationSrc: '/assets/discovery_animation.json',
    },
    {
      text: 'Plan de acción semanal',
      animationSrc: '/assets/asurance_animation.json',
    },
    {
      text: 'Servicios en bandeja',
      animationSrc: '/assets/marketing_animation.json',
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

  useEffect(() => {
    if (!isInView) return; // sólo recalcula cuando aparecen

    let maxHeight = 0;

    // 1. Resetear alturas (por si cambia el contenido)
    cardsRef.current.forEach((card) => {
      if (card) card.style.height = 'auto';
    });

    // 2. Calcular la mayor altura
    cardsRef.current.forEach((card) => {
      if (card && card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
      }
    });

    // 3. Aplicar esa altura a todos
    cardsRef.current.forEach((card) => {
      if (card) card.style.height = `${maxHeight}px`;
    });
  }, [isInView, CARDS]); // recalcula si cambian los datos o la visibilidad

  return (
    <motion.section
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      className="w-full relative flex flex-col items-center justify-center md:pt-20 pb-10 md:pb-12"
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
          90 días para conseguir tus primeros clientes gracias a la Evidencia Progresiva
          del Market Fit
        </p>
        Piénsalo 😉😉
        <br /> Éstas 3 fases son las que te llevarán a lanzar tu startup con ventas,
        mientras otros emprendedores siguen escondiéndose detras de ideas que nunca llegan
        a buen puerto
      </motion.span>
      <div className="w-[315px] h-[300px] absolute top-48 left-0 transform translate-x-6 hidden md:block scale-175 z-10">
        <Image
          src="/assets/images/UI-elements/circle.png"
          alt="UI-element: arrow"
          className=""
          fill
        />
      </div>
      <motion.div className="flex flex-col gap-6 px-4 py-10 md:w-[70vw]">
        {isInView
          ? CARDS.map((card, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="bg-yellow rounded-3xl text-black font-montserrat flex flex-col items-center justify-center text-center py-8 px-8 md:py-12 md:px-16 relative z-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <p className="absolute font-bold text-sm md:text-md top-2">
                  • {card.stepName} •
                </p>
                <h3 className="font-[900] italic text-[40px] w-full text-center md:self-start">
                  {card.title}
                </h3>
                <div className="text-lg text-black flex flex-col gap-4 w-full">
                  {card.description.map((desc, descIndex) => (
                    <span key={descIndex}>{desc}</span>
                  ))}
                </div>
              </motion.div>
            ))
          : null}
        <motion.h5
          className="w-full text-center font-bold mb-10 md:px-0 font-montserrat text-md md:text-xl tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          PD: Recuerda que el Market Fit NO es binario ( lo tengo o no lo tengo ) y está
          en constante movimiento, con lo cual incluso cuando estés ganando, vas a tener
          que seguir iterando sobre cada una de éstas fases para ser aún más competitivo y
          que no te coman los vecinos.
        </motion.h5>
      </motion.div>
      <motion.h4
        className="text-center font-bold mb-10 px-4 md:px-0 font-montserrat text-xl md:text-3xl md:max-w-[60vw] tracking-[0.2px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Emprendedor, así es como voy a acompañarte y comprometerme con tu transformación
      </motion.h4>
      <motion.div className="flex justify-center items-center mb-10 w-full gap-6">
        <motion.ul className="w-full font-work-sans text-sm flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-2">
          {ACTIONS.map((action, index) => (
            <motion.li
              key={index}
              className="mb-6 font-bold text-md flex items-center gap-8 md:gap-2 w-full flex-col"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: index % 2 === 0 ? 1.3 : 1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="w-50 md:w-46 lg:w-56 h-40 md:h-36 lg:h-44 relative flex"
              >
                <DotLottieReact
                  className={twMerge(
                    'w-full h-full relative',
                    action.invertInDarkMode ? 'dark:invert-100' : ''
                  )}
                  src={action.animationSrc}
                  loop
                  autoplay
                  speed={0.9}
                />
              </motion.div>

              <p className="text-center uppercase md:text-sm lg:text-xl">{action.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="relative bg-orange text-white px-10 py-10 md:py-6 rounded-3xl w-full max-w-[1200px] md:h-[260px] flex flex-col md:flex-row justify-start items-center gap-14 font-montserrat"
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
              Solo trabajaré mano a mano con 12 emprendedores en esta edición de Take a
              Leap Program
            </b>
            <p className="text-lg h-full">
              [Y ya hay dentro 6 emprendedores que quedaron fuera de la edición anterior]
              Entrar ahora no solo te asegura tu plaza sino que además también te llevas
              condiciones especiales.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CurrentEditionPeopleSection;
