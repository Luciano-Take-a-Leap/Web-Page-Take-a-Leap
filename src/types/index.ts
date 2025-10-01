// types/homepage.ts

import type {
  Hero,
  ConversationSection,
  ExperiencingSection,
  ReasonSection,
  CurrentEditionPeopleSection,
  SuccessCaseSection,
  AboutMeSection,
  HowReservationWorksSection,
  WarrantySection,
  FAQSection
} from '@/types/sanity.types';

type BaseSectionType = {
  _id: string;
  _key?: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
};

export type HomePageSection = 
  | (Hero & BaseSectionType & { _type: 'hero' })
  | (ConversationSection & BaseSectionType & { _type: 'conversationSection' })
  | (ExperiencingSection & BaseSectionType & { _type: 'experiencingSection' })
  | (ReasonSection & BaseSectionType & { _type: 'reasonSection' })
  | (CurrentEditionPeopleSection & BaseSectionType & { _type: 'currentEditionPeopleSection' })
  | (SuccessCaseSection & BaseSectionType & { _type: 'successCaseSection' })
  | (AboutMeSection & BaseSectionType & { _type: 'aboutMeSection' })
  | (HowReservationWorksSection & BaseSectionType & { _type: 'howReservationWorksSection' })
  | (WarrantySection & BaseSectionType & { _type: 'warrantySection' })
  | (FAQSection & BaseSectionType & { _type: 'FAQSection' });

export type HomePageData = {
  sections: HomePageSection[];
} | null;

export type ComponentPropsMap = {
  hero: { data: Hero & BaseSectionType & { _type: 'hero' } };
  conversationSection: { 
    data: ConversationSection & BaseSectionType & { _type: 'conversationSection' }; 
    onViewChange?: () => void;
  };
  experiencingSection: { data: ExperiencingSection & BaseSectionType & { _type: 'experiencingSection' } };
  reasonSection: { data: ReasonSection & BaseSectionType & { _type: 'reasonSection' } };
  currentEditionPeopleSection: { data: CurrentEditionPeopleSection & BaseSectionType & { _type: 'currentEditionPeopleSection' } };
  successCaseSection: { data: SuccessCaseSection & BaseSectionType & { _type: 'successCaseSection' } };
  aboutMeSection: { data: AboutMeSection & BaseSectionType & { _type: 'aboutMeSection' } };
  howReservationWorksSection: { data: HowReservationWorksSection & BaseSectionType & { _type: 'howReservationWorksSection' } };
  warrantySection: { data: WarrantySection & BaseSectionType & { _type: 'warrantySection' } };
  FAQSection: { data: FAQSection & BaseSectionType & { _type: 'FAQSection' } };
};

export type GetComponentProps<T extends keyof ComponentPropsMap> = ComponentPropsMap[T];

export function isHeroSection(section: HomePageSection): section is Hero & BaseSectionType & { _type: 'hero' } {
  return section._type === 'hero';
}

export function isConversationSection(section: HomePageSection): section is ConversationSection & BaseSectionType & { _type: 'conversationSection' } {
  return section._type === 'conversationSection';
}

export function isExperiencingSection(section: HomePageSection): section is ExperiencingSection & BaseSectionType & { _type: 'experiencingSection' } {
  return section._type === 'experiencingSection';
}

export function isReasonSection(section: HomePageSection): section is ReasonSection & BaseSectionType & { _type: 'reasonSection' } {
  return section._type === 'reasonSection';
}

export function isCurrentEditionPeopleSection(section: HomePageSection): section is CurrentEditionPeopleSection & BaseSectionType & { _type: 'currentEditionPeopleSection' } {
  return section._type === 'currentEditionPeopleSection';
}

export function isSuccessCaseSection(section: HomePageSection): section is SuccessCaseSection & BaseSectionType & { _type: 'successCaseSection' } {
  return section._type === 'successCaseSection';
}

export function isAboutMeSection(section: HomePageSection): section is AboutMeSection & BaseSectionType & { _type: 'aboutMeSection' } {
  return section._type === 'aboutMeSection';
}

export function isHowReservationWorksSection(section: HomePageSection): section is HowReservationWorksSection & BaseSectionType & { _type: 'howReservationWorksSection' } {
  return section._type === 'howReservationWorksSection';
}

export function isWarrantySection(section: HomePageSection): section is WarrantySection & BaseSectionType & { _type: 'warrantySection' } {
  return section._type === 'warrantySection';
}

export function isFAQSection(section: HomePageSection): section is FAQSection & BaseSectionType & { _type: 'FAQSection' } {
  return section._type === 'FAQSection';
}