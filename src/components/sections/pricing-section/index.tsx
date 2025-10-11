import RichText from '@/components/layout/rich-text-renderer';
import { Button } from '@/components/ui/button';
import { PriceSection as TPriceSection } from '@/types/sanity.types';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import PriceComparation from './price-comparation';
import Countdown from '@/components/countdown';

interface PricingSectionProps {
  data?: TPriceSection;
  countownLimitDate?: string;
}
const PricingSection: React.FC<PricingSectionProps> = ({ data, countownLimitDate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const limitTime = countownLimitDate
      ? new Date(countownLimitDate)
      : null;
    if (!limitTime) {
      setTimeLeft(null);
      return;
    }
    const interval = setInterval(() => {
      const now = new Date();
      const difference = limitTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('00:00:00:00');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const formatted = [
        days.toString().padStart(2, '0'),
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
      ]
        .filter(Boolean)
        .join(':');

      setTimeLeft(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, [countownLimitDate]);


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
    <section className="w-screen bg-white flex justify-center items-center z-20">

      <motion.div
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={sectionRef}
        transition={{ duration: 0.5 }}
        className="bg-dark-blue text-white w-screen md:w-[80vw] rounded-3xl md:rounded-[80px] py-10 my-10 px-8 md:px-24 flex flex-col items-center md:items-start justify-center"
      >
        <Image src={'/assets/images/logo-header.png'} alt="logo" width={120} height={40} />
        <motion.div className="flex items-center justify-center items-center flex-col gap-4">
          <RichText value={data?.topText} className='md:max-w-[80%] text-center' />
          {data?.ctaButtonText ?
            <Button
            variant={'default'}
            className="mt-8 bg-yellow hover:bg-yellow text-black px-10 rounded-xl font-bold h-10 md:self-center"
            >
              {data.ctaButtonText.toUpperCase()}
            </Button> : null
          }
          {timeLeft && timeLeft !== '00:00:00:00' ? <Countdown className='mt-6' value={timeLeft} /> : null}
        </motion.div>
        {data?.regularPrice ? <PriceComparation
          launchPriceText={data?.launchPrice}
          officialPriceText={data.regularPrice}
          officialPriceTitle={data?.regularPriceTitle}
          launchPriceTitle={data?.launchPriceTitle}
          /> : null}
        <motion.div
          className="flex flex-col items-center justify-center mt-8 bg-white text-black rounded-3xl py-16 gap-4 text-center md:w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {data?.boxItems && data.boxItems.length > 0 ? (
            <div className="flex flex-col gap-4 px-4 md:px-0">
              {data.boxItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center md:max-w-3xl">
                  <p className="text-black text-xl font-montserrat font-semibold">{item}</p>
                </div>
              ))}
            </div>
          ) : null}
          {data?.boxCtaText ? <Button
            variant={'default'}
            className="mt-8 bg-orange hover:bg-orange text-black px-10 rounded-xl font-bold h-10 md:self-center"
          >
            {data.boxCtaText.toUpperCase()}
          </Button>
            : null}
        </motion.div>
      </motion.div>
    </section>
  );

};

export default PricingSection;
