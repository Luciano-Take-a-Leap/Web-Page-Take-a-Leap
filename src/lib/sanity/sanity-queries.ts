import { groq } from 'next-sanity';

export const HEADER_QUERY = groq`
  *[_type == "header"][0] {
    _id,
    title,
    navigation[] {
      key,
      label,
      href,
      isButton
    },
    countdownBanner {
      enabled,
      limitDate,
      mainText,
      ctaButtonText,
      href
    },
    accessibility {
      logoAlt,
      homeAriaLabel,
      mobileMenuLabel
    }
  }
`;

export const homePageSEOQuery = groq`
  *[_type == "homePage"][0]{
    seo{
      title,
      description,
      keywords,
      openGraph{
        title,
        description,
        image{
          asset->{
            url,
            metadata{
              dimensions{
                width,
                height
              }
            }
          },
          alt
        },
        type
      },
      twitter{
        cardType,
        site,
        creator
      },
      canonical,
      noIndex,
      noFollow
    }
  }
`;

export const homePageCTAButtonRedirectionURLQuery = groq`
  *[_type == "homePage"][0]{
    redirectionButtonUrl
  }
`;

export const heroQuery = groq`
  *[_type == "hero"][0]{
    title,
    subtitle,
    mainContent,
    coloredSectionText,
    ctaButton
  }
`;

export const conversationSectionQuery = groq`
  *[_type == "conversationSection"][0]{
    title,
    image{
      asset->{url},
      alt
    },
    content,
    conversationTitle
  }
`;

export const experiencingSectionQuery = groq`
  *[_type == "experiencingSection"][0]{
    title,
    cards[]{
      topText,
      bottomText,
      _key
    },
    bottomText,
    ctaButton
  }
`;

export const reasonSectionQuery = groq`
  *[_type == "reasonSection"][0]{
    title,
    image{
      asset->{url}
    },
    content
  }
`;

export const currentEditionPeopleSectionQuery = groq`
  *[_type == "currentEditionPeopleSection"][0]{
    title,
    subtitle,
    cards[]{
      name,
      subtitle,
      content,
      _key
    },
    postCardsText,
    titleGuidanceCards,
    processGuidanceCards[]{
      icon{
        asset->{url}
      },
      title,
      content,
      _key
    },
    bonusTitle,
    bonusSubtitle,
    bonuses[]{
      title,
      description,
      image{
        asset->{url}
      },
      cost,
      _key
    },
    extraBonusesTitle,
    extraBonusesSubtitle,
    extraBonuses[]{
      title,
      description,
      image{
        asset->{url}
      },
      cost,
      _key
    },
    warningTitle,
    warningSubtitle,
    warningText,
    testimonials[]{
      asset->{url},
      _key
    }
  }
`;

export const successCaseSectionQuery = groq`
  *[_type == "successCaseSection"][0]{
    cases[]{
      _type,
      _key,
      _type == "case" => {
        title,
        content,
        image{
          asset->{url}
        }
      },
      _type == "video" => {
        url
      }
    }
  }
`;

export const aboutMeSectionQuery = groq`
  *[_type == "aboutMeSection"][0]{
    title,
    image{
      asset->{url},
      alt
    },
    mobileImage{
      asset->{url},
      alt
    },
    content
  }
`;

export const howReservationWorksSectionQuery = groq`
  *[_type == "howReservationWorksSection"][0]{
    title,
    cards[]{
      content,
      _key
    },
    bottomText,
    ctaButton
  }
`;

export const warrantySectionQuery = groq`
  *[_type == "warrantySection"][0]{
    title,
    subtitle,
    Carousel{
      title,
      people[]{
        name,
        role,
        linkedIn,
        _key
      }
    },
    ctaButton
  }
`;

export const faqSectionQuery = groq`
  *[_type == "FAQSection"][0]{
    title,
    faqs[]{
      question,
      answer,
      _key
    }
  }
`;

export const headerQuery = groq`
  *[_type == "header"][0]{
    navigation[]{
      label,
      href,
      isButton,
      _key
    },
    countdownBanner{
      enabled,
      limitDate,
      mainText,
      ctaButtonText
    }
  }
`;

export const homePageSectionsQuery = groq`
  *[_type == "homePage"][0]{
    sections[]->{
      _type,
      _id,
      _key,
      _type == "hero" => {
        title,
        subtitle,
        mainContent,
        coloredSectionText,
        ctaButton
      },
      _type == "conversationSection" => {
        title,
        image{
          asset->{url},
          alt
        },
        content,
        conversationTitle
      },
      _type == "experiencingSection" => {
        title,
        cards[]{
          topText,
          bottomText,
          _key
        },
        bottomText,
        ctaButton
      },
      _type == "reasonSection" => {
        title,
        image{
          asset->{url}
        },
        content
      },
      _type == "currentEditionPeopleSection" => {
        title,
        subtitle,
        cards[]{
          name,
          subtitle,
          content,
          _key
        },
        postCardsText,
        titleGuidanceCards,
        processGuidanceCards[]{
          icon{
            asset->{url}
          },
          title,
          content,
          _key
        },
        bonusTitle,
        bonusSubtitle,
        bonuses[]{
          title,
          description,
          image{
            asset->{url}
          },
          cost,
          _key
        },
        extraBonusesTitle,
        extraBonusesSubtitle,
        extraBonuses[]{
          title,
          description,
          image{
            asset->{url}
          },
          cost,
          _key
        },
        warningTitle,
        warningSubtitle,
        warningText,
        testimonials[]{
          asset->{url},
          _key
        }
      },
      _type == "successCaseSection" => {
        cases[]{
          _type,
          _key,
          _type == "case" => {
            title,
            content,
            image{
              asset->{url}
            }
          },
          _type == "video" => {
            url
          }
        }
      },
      _type == "aboutMeSection" => {
        title,
        image{
          asset->{url},
          alt
        },
        mobileImage{
          asset->{url},
          alt
        },
        content
      },
      _type == "howReservationWorksSection" => {
        title,
        cards[]{
          content,
          _key
        },
        bottomText,
        ctaButton
      },
      _type == "warrantySection" => {
        title,
        subtitle,
        Carousel{
          title,
          people[]{
            name,
            role,
            linkedIn,
            _key
          }
        },
        ctaButton
      },
      _type == "FAQSection" => {
        title,
        faqs[]{
          question,
          answer,
          _key
        }
      }
    }
  }
`;

export const whatsappConfigQuery = groq`
  *[_type == "whatsappConfig"][0]{
    phoneNumber,
    initialMessage
  }
`;