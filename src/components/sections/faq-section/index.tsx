'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/utils/twMerge';

type FAQItem = {
  question: string;
  response: React.ReactNode;
};

const ITEMS: FAQItem[] = [
  {
    question: '¿Y si no tengo experiencia o autoridad en mi sector?',
    response: (
      <>
        <p>
          No te preocupes, todos empezamos desde cero. Lo importante es que estés
          dispuesto a aprender y aplicar la metodología.
        </p>
        <p>
          Además, tendrás acceso a un grupo de apoyo donde podrás compartir tus
          inquietudes y recibir feedback.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto tiempo necesito dedicarle a este proceso?',
    response: (
      <>
        <p>
          El tiempo que necesitarás dedicarle a este proceso puede variar según tus
          objetivos y circunstancias personales. Sin embargo, te recomendamos que reserves
          al menos 4 horas a la semana para trabajar en las actividades y tareas
          propuestas.
        </p>
        <p>
          Recuerda que la clave del éxito es la constancia y el compromiso. Si te
          mantienes enfocado y sigues el plan, verás resultados en poco tiempo.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué pasa si no obtengo resultados?',
    response: (
      <>
        <p>
          Si no obtienes resultados, estaremos aquí para ayudarte. La metodología se basa
          en la evidencia y el aprendizaje continuo, por lo que ajustaremos el enfoque
          según sea necesario.
        </p>
        <p>
          Además, tendrás acceso a sesiones de seguimiento y apoyo para resolver cualquier
          obstáculo que puedas encontrar.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué pasa si no tengo una idea clara para mi proyecto?',
    response: (
      <>
        <p>
          No te preocupes, muchas personas comienzan sin una idea clara. A lo largo del
          proceso, te ayudaremos a explorar tus intereses y habilidades para que puedas
          encontrar una idea que te apasione.
        </p>
        <p>
          Además, tendrás acceso a herramientas y recursos que te ayudarán a definir y
          validar tu idea.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto cuesta participar en este proceso?',
    response: (
      <>
        <p>
          El costo de participar en este proceso puede variar según el programa y los
          recursos que elijas. Sin embargo, nos esforzamos por ofrecer opciones accesibles
          para que todos puedan beneficiarse.
        </p>
        <p>
          Te invitamos a ponerte en contacto con nuestro equipo para obtener más
          información sobre precios y opciones de financiamiento.
        </p>
      </>
    ),
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full relative flex flex-col items-center justify-center py-10 md:pb-20 bg-white text-black px-6"
    >
      <motion.h2
        className="text-center text-[30px] md:text-[40px] mt-10 mb-6 font-montserrat font-bold px-6 md:max-w-[80%]"
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        Resuelvo dudas cruciales y determinantes
      </motion.h2>

      <motion.div
        className="w-full md:w-[50%]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full justify-between items-center my-2 py-4 text-left text-sm font-medium rounded-md transition-all outline-none hover:underline decoration-white bg-blue px-2 cursor-pointer"
              >
                <p className="text-white">{item.question}</p>
                <ChevronDownIcon
                  className={cn(
                    'transition-transform duration-300 text-white',
                    isOpen ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                style={{
                  height:
                    isOpen && contentRefs.current[index]
                      ? contentRefs.current[index].scrollHeight
                      : 0,
                  overflow: 'hidden',
                  transition: 'height 0.3s ease',
                }}
              >
                <div className="mt-2 mb-4 px-2 p-1 border text-lg">{item.response}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
