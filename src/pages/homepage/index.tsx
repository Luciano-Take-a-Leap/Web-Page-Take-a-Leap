'use client';

import { motion } from 'motion/react';
import React from 'react';
import WhatsappButton from '@/components/whatsapp-button';
import ScrollHint from '@/components/layout/scroll-hint';
import ComponentResolver from '@/components/layout/homepage-component-resolver';
import { HomePageSection } from '@/types';

interface HomePageClientProps {
  sections: Array<HomePageSection>;
  redirectionUrl: string | null;
  whatsappConfig: {
    phoneNumber: string;
    initialMessage: string;
  } | null;
  countdownLimitDate?: string;
}

export default function HomePageComponent({ sections, redirectionUrl, whatsappConfig, countdownLimitDate }: HomePageClientProps) {
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  if (!sections || sections.length === 0) {
    return (
      <div className="flex flex-col w-screen justify-center items-center min-h-screen">
        <div>No sections configured in Sanity Studio</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen justify-center items">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <ComponentResolver
          sections={sections}
          redirectionUrl={redirectionUrl}
          onViewChange={() => setShowScrollHint(false)}
          countdownLimitDate={countdownLimitDate}
        />

        {showScrollHint && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ScrollHint />
          </motion.div>
        )}
        <WhatsappButton settings={whatsappConfig} />
      </main>
    </div>
  );
}
