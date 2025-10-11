// components/component-resolver.tsx
'use client';

import React from 'react';
import Hero from '@/components/sections/hero';
import ConversationSection from '@/components/sections/conversation-section';
import ExperiencingSection from '@/components/sections/experiencing-section';
import CurrentEditionPeopleSection from '@/components/sections/current-edition-people-section';
import HowReserveWorksSection from '@/components/sections/how-reserve-works-section';
import AboutMeSection from '@/components/sections/about-me-section';
import WarrantySection from '@/components/sections/warranty-section';
import FAQSection from '@/components/sections/faq-section';
import SuccessCaseSection from '@/components/sections/success-case-section';
import ReasonSection from '@/components/sections/reason-section';

import {
  isHeroSection,
  isConversationSection,
  isExperiencingSection,
  isReasonSection,
  isCurrentEditionPeopleSection,
  isSuccessCaseSection,
  isAboutMeSection,
  isHowReservationWorksSection,
  isWarrantySection,
  isFAQSection,
  isPriceSection,
} from '@/types';
import { HomePageSection } from '@/types';
import PricingSection from '@/components/sections/pricing-section';

type ComponentResolverProps = {
  sections: HomePageSection[];
  countdownLimitDate?: string;
  redirectionUrl: string | null;
  onViewChange?: () => void;
};

export default function ComponentResolver({
  sections,
  redirectionUrl,
  countdownLimitDate,
  onViewChange,
}: ComponentResolverProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const sectionKey = section._key || section._id || `${section._type}-${index}`;

        if (isHeroSection(section)) {
          return (
            <section key={sectionKey} className="w-full md:mt-20">
              <Hero data={section} redirectionUrl={redirectionUrl} />
            </section>
          );
        }

        if (isConversationSection(section)) {
          return (
            <ConversationSection
              key={sectionKey}
              data={section}
              onViewChange={onViewChange}
            />
          );
        }

        if (isExperiencingSection(section)) {
          return <ExperiencingSection key={sectionKey} data={section} redirectionUrl={redirectionUrl} />;
        }

        if (isReasonSection(section)) {
          return <ReasonSection key={sectionKey} data={section} />;
        }

        if (isCurrentEditionPeopleSection(section)) {
          return <CurrentEditionPeopleSection key={sectionKey} data={section} />;
        }

        if (isSuccessCaseSection(section)) {
          return <SuccessCaseSection key={sectionKey} data={section} />;
        }

        if (isAboutMeSection(section)) {
          return <AboutMeSection key={sectionKey} data={section} />;
        }

        if (isHowReservationWorksSection(section)) {
          return <HowReserveWorksSection key={sectionKey} data={section} redirectionUrl={redirectionUrl} />;
        }

        if (isWarrantySection(section)) {
          return <WarrantySection key={sectionKey} data={section} redirectionUrl={redirectionUrl} />;
        }

        if (isFAQSection(section)) {
          return <FAQSection key={sectionKey} data={section} />;
        }

        if (isPriceSection(section)) {
          return <PricingSection key={sectionKey} data={section} countownLimitDate={countdownLimitDate} redirectionUrl={redirectionUrl} />;
        }

        return (
          <SectionFallback
            key={sectionKey}
            sectionType={(section as HomePageSection)._type}
          />
        );
      })}
    </>
  );
}

export function SectionFallback({ sectionType }: { sectionType: string }) {
  return (
    <div className="p-8 text-center text-gray-500">
      <p>Section type &quot;{sectionType}&quot; not implemented yet.</p>
    </div>
  );
}
