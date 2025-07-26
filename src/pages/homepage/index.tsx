'use client';

import Hero from '@/components/sections/hero';
import ConversationSection from '@/components/sections/conversations-section';
import ScrollHint from '@/components/layout/scroll-hint';
import ExperiencingSection from '@/components/sections/experiencing-section';
import { motion } from 'motion/react';
import React from 'react';
import WhatsappButton from '@/components/whatsapp-button';
import CurrentEditionPeopleSection from '@/components/sections/current-edition-people-section';

export default function HomePageComponent() {
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  return (
    <div className="flex flex-col min-h-screen w-full justify-center">
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
        <CurrentEditionPeopleSection />
        <WhatsappButton />
      </main>
    </div>
  );
}
