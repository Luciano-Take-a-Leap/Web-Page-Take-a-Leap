'use client';

import { motion } from 'motion/react';

import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import Navbar from '../navbar';
import Image from 'next/image';
import MobileNav from '../mobile-nav';
import { useEffect, useState } from 'react';
import CountdownBanner from './countdown-banner';
import { Header as THeader } from '@/types/sanity.types';

interface HeaderProps {
  data: THeader | null;
}

const Header = ({ data }: HeaderProps) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [isCountdownExpanded, setIsCountdownExpanded] = useState(true);

  useEffect(() => {
    const limitTime = data?.countdownBanner?.limitDate
      ? new Date(data.countdownBanner.limitDate)
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
  }, [data?.countdownBanner?.limitDate]);

  return (
    <motion.header
      className={cn(
        'bg-white fixed inset-x-0 z-40 h-14 md:h-20 gap-[54px] w-screen items-center justify-between md:justify-center md:px-8 flex md-backdrop-blur-[10px] transition-all'
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <MobileNav links={data?.navigation || []} />
      <Link
        href="/"
        title='Home'
        className="items-center justify-center gap-1 hidden md:flex"
        aria-label={'Home'}
      >
        <Image
          src={'/assets/images/logo-header.png'}
          alt="logo"
          width={120}
          height={40}
        />
      </Link>

      <Navbar links={data?.navigation || []} />
      {timeLeft && timeLeft !== '00:00:00:00' ? (
        <CountdownBanner
          data={data?.countdownBanner}
          timeLeft={timeLeft}
          expanded={isCountdownExpanded}
          setExpanded={setIsCountdownExpanded}
        />
      ) : null}
    </motion.header>
  );
};

export default Header;
