'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

const CurrentEditionPeopleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
      text: (
        <>
          12 Community sessions <br /> + 6 sesiones 1-1
        </>
      ),
      description:
        'Quiero que nos exprimas a dudas, te sientas acompañado y juntos aceleremos este proceso de lanzar tu startup.',
      icon: '/assets/images/ES_Emoji_Mono-Boca.png',
    },
    {
      text: 'Plan de acción semanal',
      description:
        'Tendrás una hoja de ruta clara para que cada semana sepas qué pasos dar y qué objetivos cumplir.',
      icon: '/assets/images/ES_Emoji_Manos.png',
    },
    {
      text: 'Secuencias y estrategias servidas en bandeja',
      description: (
        <>
          Tendrás todo mi arsenal de herramientas para ponerte muy fácil la implementación
          en cada fase.
        </>
      ),
      icon: '/assets/images/ES_Emoji_Diana.png',
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

  const BONUS_ITEMS = [
    {
      title: 'BuildUp Your Sales Game',
      value: 'VALORADO EN: 2.000 USD',
      description: (
        <>
          Necesitas superar las creencias que te están limitando con la venta. <br />{' '}
          <br />
          La mayoría de los emprendedores se esconden detrás de productos e ideas porque
          le tienen miedo a vender ( incluso si tienen un negocio B2C ). <br /> <br />
          Este bonus.. es una bomba. <br /> <br />
          Porque te voy a enseñar mi método infalible para gestionar reuniones de venta en
          la etapa en la que estás ahora ( con personas o empresas ) y que no te puedan
          decir que “no”.
          <br /> <br />
          Son solo 5 pasos para crear un proceso tan ágil y sencillo que le perderás el
          miedo a vender y te sentirás capaz. <br /> <br />
          Aparte, te regalaré los guiones que tanto yo como mis clientes utilizamos
          dependiendo el modelo de tu negocio. <br /> <br />
          Solo por esto ya vas a rentabilizar todo el programa.
        </>
      ),
    },
    {
      title: 'GameUp Your Web Page & Content',
      value: 'VALORADO EN: 1.997 USD',
      description: (
        <>
          Te vamos a ayudar a crear una web page muy top en menos de 2 semanas. <br />{' '}
          <br />
          Una que convierta de verdad [ no como la mayoría que la tienen sólo para dar
          confianza ] <br /> <br />
          No vas a necesitar meter una sola línea de código porque nos vamos a encargar
          nosotros. <br /> <br />
          Y además vamos a darle un buen empujón de potencia, calidad y sobre todo
          estrategia a tu contenido y a tu marca. <br /> <br />
          Aquí te hablaré de temáticas, formatos, copy, edición, apoyos visuales… y sobre
          todo GANCHOS muy potentes. <br /> <br />
          Me vas a dar la razón y vamos a callarle la boca a los que dicen que debes
          publicar a diario para que los algoritmos te favorezcan.
        </>
      ),
    },
  ];
  return (
    <motion.section
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      className="w-full relative flex flex-col items-center justify-center"
    >
      <div className="bg-[#222] w-screen flex flex-col items-center justify-center text-white mb-16">
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
            60 días para conseguir tus primeros clientes pagos
          </p>
          Piénsalo 😉😉
          <br /> Éstas 5 fases son las que te llevarán a lanzar tu startup con ventas, más
          rápido y sin fundirte, mientras otros emprendedores siguen escondiéndose detrás
          de ideas que nunca llegan a buen puerto.
        </motion.span>
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
                  <h3 className="font-[900] italic text-[40px] w-full text-center md:self-start mb-4">
                    {card.title}
                  </h3>
                  <div className="text-lg text-black flex flex-col gap-4 w-full tracking-[0.001px] leading-6">
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
            PD: Recuerda que el Market Fit está en constante movimiento, así que cuando
            estés ganando, vas a tener que seguir iterando sobre cada una de éstas fases
            para ser aún más competitivo.
          </motion.h5>
        </motion.div>
      </div>
      <motion.h4
        className="text-center font-bold mb-10 px-4 md:px-0 font-montserrat text-xl md:text-5xl md:max-w-[70vw] tracking-[0.2px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Emprendedor, así es como voy a acompañarte y comprometerme con tu transformación
      </motion.h4>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start my-10 w-[80%] max-w-[1200px] mx-auto">
        {ACTIONS.map((action, index) => (
          <motion.div
            key={index}
            className="basis-1/3 max-w-[300px] w-full font-work-sans text-sm flex flex-col justify-start items-center gap-4 shadow-2xl rounded-4xl p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
          >
            <motion.div className="relative mx-auto flex justify-center items-center">
              <Image
                src={action.icon}
                alt={`Icon for ${action.text}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>

            <p className="text-center uppercase md:text-sm lg:text-lg w-[90%] font-montserrat font-extrabold">
              {action.text}
            </p>
            <p className="text-center md:text-xs lg:text-md w-[80%] text-gray-500">
              {action.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex flex-col gap-6 px-4 py-10 md:w-[70vw]">
        <motion.h4
          className="text-center font-bold mb-4 px-4 md:px-0 font-montserrat text-xl md:text-5xl md:max-w-[70vw] tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          Tendrás acceso a este bonus de regalo
        </motion.h4>
        <motion.h5
          className="text-center font-bold px-4 md:px-0 font-montserrat text-md md:text-2xl tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          [Se me va la mano entregando demasiado. Ya lo sé]
        </motion.h5>
        <motion.div className="my-10 w-full max-w-[1200px] flex flex-col items-center justify-center mx-auto shadow-2xl rounded-4xl py-4 px-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-start ">
            <div className="flex flex-col justify-start items-start p-6">
              <h6 className="font-extrabold font-lora text-4xl mb-6">
                {BONUS_ITEMS?.[0].title}
              </h6>
              <p className="font-montserrat font-[500] text-md">
                {BONUS_ITEMS?.[0].description}
              </p>
            </div>
            <div className="flex flex-col justify-start items-center p-6 w-full relative h-64 md:h-full">
              <Image
                src="/assets/images/conversation.png"
                alt={BONUS_ITEMS?.[0].title}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <figure className="h-[2px] w-[85%] bg-orange block" />
          <p className="font-archivo-black-400 text-2xl">{BONUS_ITEMS?.[0].value}</p>
        </motion.div>
        <motion.h4
          className="text-center font-bold mb-4 px-4 md:px-0 font-montserrat text-xl md:text-5xl md:max-w-[70vw] tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          Además, habrá un regalo extra para los más rápidos
        </motion.h4>
        <motion.h5
          className="text-center font-bold px-4 md:px-0 font-montserrat text-md md:text-2xl tracking-[0.2px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          Bonus especial hasta el 18 de Octubre
        </motion.h5>
        {BONUS_ITEMS.filter((_, i) => i !== 0).map((bonus, index) => (
          <motion.div
            key={index}
            className="my-10 w-full max-w-[1200px] flex flex-col items-center justify-center mx-auto shadow-2xl rounded-4xl py-4 px-2 gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-start ">
              <div className="flex flex-col justify-start items-start p-6">
                <h6 className="font-extrabold font-lora text-4xl mb-6">{bonus.title}</h6>
                <p className="font-montserrat font-[500] text-md">{bonus.description}</p>
              </div>
              <div className="flex flex-col justify-start items-center p-6 w-full relative h-64 md:h-full">
                <Image
                  src="/assets/images/conversation.png"
                  alt={bonus.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <figure className="h-[2px] w-[85%] bg-orange block" />
            <p className="font-archivo-black-400 text-2xl">{bonus.value}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="relative bg-blue text-white px-10 py-10 md:py-6 w-full  flex flex-col justify-start items-center gap-14 font-montserrat"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 w-full h-max text-center items-center">
          <div className="flex justify-center items-center gap-2">
            <span className="text-3xl md:text-4xl">👇</span>
            <h3 className="font-[900] italic text-3xl md:text-[40px] text-center tracking-[0.1px]">
              Atención a esto, emprendedor!
            </h3>
            <span className="text-3xl md:text-4xl">👇</span>
          </div>
          <div className="text-sm tracking-[0.1px] flex flex-col justify-between gap-8 mt-2 md:w-[40%]">
            <b className="text-2xl md:text-3xl">
              Solo trabajaré mano a mano con 12 startups en esta edición de Take a Leap
              Program
            </b>
            <p className="text-xl md:text-2xl h-full">
              [Y ya hay dentro 6 emprendedores que quedaron fuera de la edición anterior]
              Entrar ahora no solo te asegura tu plaza sino que además también te llevas
              condiciones especiales.
            </p>
          </div>
        </div>
        <Carousel
          setApi={setApi}
          className="w-auto max-w-[1200px] md:py-2 relative min-h-108"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-start md:p-1 basis-full md:basis-1/3 text-white font-montserrat"
              >
                <div className="min-h-60 border-8 border-amber-50 bg-amber-50 rounded-3xl flex items-center">
                  <Image
                    src={`/assets/images/testimonials/testimonial_${index + 1}.jpeg`}
                    alt={`Testimonial ${index + 1}`}
                    width={350}
                    height={80}
                    className="object-contain p-2 "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="link"
            className="absolute left-4 md:-left-12 hidden md:block md:top-1/2 transform -translate-y-1/2 scale-150 cursor-pointer text-white z-10"
          />
          <CarouselNext
            variant="link"
            className="absolute right-4 md:-right-12 hidden md:block md:top-1/2 transform -translate-y-1/2 scale-150 cursor-pointer text-white z-10"
          />
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  current === idx + 1 ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default CurrentEditionPeopleSection;
