import Countdown from '@/components/countdown';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';

interface CountdownBannerProps {
  data?: {
    enabled?: boolean;
    limitDate?: string;
    mainText?: string;
    ctaButtonText?: string;
    href?: string;
  };
  timeLeft: string;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

const CountdownBanner: React.FC<CountdownBannerProps> = ({
  data,
  timeLeft,
  expanded,
  setExpanded,
}) => {
  const router = useRouter();

  const handleLinkClick = (href?: string) => {
    if (href?.startsWith('#')) {
      window.scrollTo({
        top: document.getElementById('agenda-un-llamado')?.offsetTop || 0,
        behavior: 'smooth',
      });
    } else if (href?.startsWith('/')) {
      router.push(href);
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <motion.div
      className={twMerge(
        'absolute top-0 w-screen bg-blue md:h-26 flex flex-row items-start md:items-center md:justify-between text-sm md:text-base px-4 md:px-8 py-2 md:py-0',
        expanded ? 'translate-y-0' : 'translate-y-[-96%]',
        'transition-all duration-500 ease-in-out'
      )}
      initial={{ y: -380, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      exit={{ y: -380, opacity: 0 }}
    >
      <div className="w-screen flex flex-col md:flex-row items-center justify-center md:justify-evenly text-white gap-2 md:gap-8">
        <h3 className="text-white font-bold text-center md:text-start pt-2 md:w-full md:max-w-2xl font-montserrat text-xs md:text-md">
          {data?.mainText}
        </h3>
        <Countdown value={timeLeft} />
        <Button
          className={twMerge(
            'rounded-sm px-3 py-2 text-xl transition-colors cursor-pointer font-montserrat bg-white hover:bg-white text-black z-10'
          )}
          onClick={() => handleLinkClick(data?.href)}
        >
          {data?.ctaButtonText}
        </Button>
      </div>
      <div
        className="absolute -bottom-6 px-8 left-[calc(50%-48px)] bg-blue pt-4 pb-1 cursor-pointer rounded-xl z-0"
        onClick={() => setExpanded(!expanded)}
      >
        <ArrowUp
          className={twMerge(
            'text-white',
            expanded ? 'rotate-0' : 'rotate-180',
            'transition-transform duration-300'
          )}
        />
      </div>
    </motion.div>
  );
};

export default CountdownBanner;