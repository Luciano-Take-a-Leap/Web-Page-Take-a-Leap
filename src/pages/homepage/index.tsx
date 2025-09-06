'use client';

import Hero from '@/components/sections/hero';
import ConversationSection from '@/components/sections/conversation-section';
import ScrollHint from '@/components/layout/scroll-hint';
import ExperiencingSection from '@/components/sections/experiencing-section';
import { motion } from 'motion/react';
import React from 'react';
import WhatsappButton from '@/components/whatsapp-button';
import CurrentEditionPeopleSection from '@/components/sections/current-edition-people-section';
import HowReserveWorksSection from '@/components/sections/how-reserve-works-section';
import AboutMeSection from '@/components/sections/about-me-section';
import WarrantySection from '@/components/sections/warranty-section';
import PricingSection from '@/components/sections/pricing-section';
import FAQSection from '@/components/sections/faq-section';
import SuccessCaseSection from '@/components/sections/success-case-section';
import ReasonSection from '@/components/sections/reason-section';

export default function HomePageComponent() {
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  return (
    <div className="flex flex-col w-screen justify-center items">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <section className="w-full md:mt-20">
          <Hero />
        </section>
        {showScrollHint && (
          <motion.div
            className="transform translate-y-[-70px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ScrollHint />
          </motion.div>
        )}
        <ConversationSection onViewChange={() => setShowScrollHint(false)} />
        <ExperiencingSection />
        <ReasonSection />
        <CurrentEditionPeopleSection />
        <SuccessCaseSection
          content={[
            {
              title: 'IGNACIO ES EL MEJOR EJEMPLO PARA DEMOSTRARTE QUE SE PUEDE',
              subtitle: '[La mayoría de los emprendedores se identifican mucho con él]',
              paragraphs: [
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
              ],
              imageSrc: '/assets/images/success-cases/success_1.png',
              imageAlt: 'Success case 1',
            },
            'https://vimeo.com/200317381',
            {
              title: 'IGNACIO ES EL MEJOR EJEMPLO PARA DEMOSTRARTE QUE SE PUEDE',
              subtitle: '[La mayoría de los emprendedores se identifican mucho con él]',
              paragraphs: [
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
              ],
              imageSrc: '/assets/images/success-cases/success_2.png',
              imageAlt: 'Success case 2',
            },
            'https://vimeo.com/76979871',
            {
              title: 'IGNACIO ES EL MEJOR EJEMPLO PARA DEMOSTRARTE QUE SE PUEDE',
              subtitle: '[La mayoría de los emprendedores se identifican mucho con él]',
              paragraphs: [
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
                'Quería lanzar su startup, y conseguir pirmeros clientes, pero no tenía claridad sobre qué pasos dar, a que target apuntar, que canales priorizar, o cuales son las secuencias para conseguir los pirmeros clientes pagos desde cero.',
                'Sabía que el fitness era una buena industria a la cual apuntar pero no sabía cómo empezar sin invertir en un mega producto para lanzarse.',
                'Nos rompimos la cabeza para encontrar su diferenciación y tras eso, creamos una oferta ridículamente atractiva.',
              ],
              imageSrc: '/assets/images/success-cases/success_3.png',
              imageAlt: 'Success case 3',
            },
          ]}
        />

        <AboutMeSection />
        <HowReserveWorksSection />
        <WarrantySection />
        <FAQSection />
        <PricingSection />
        <WhatsappButton />
      </main>
    </div>
  );
}
