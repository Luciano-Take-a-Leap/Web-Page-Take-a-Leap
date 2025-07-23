'use client';

import { motion } from 'motion/react';

import LanguageSwitcher from '../language-switcher';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import MobileNav from '../mobile-nav';
import Navbar from '../navbar';
import { ThemeToggle } from '../theme-toggle';
import Image from 'next/image';

export const HEADER_LINKS = [
  {
    key: 'quien-soy',
    href: '/#quien-soy',
    "label": 'Quien soy',
  },
  {
    key: 'programa',
    href: '/#programa',
    "label": 'Programa',
  },
  {
    key: 'reserva',
    href: '/#reserva',
    "label": 'Reserva',
  },
  {
    key: 'casos-de-exito',
    href: '/#casos-de-exito',
    "label": 'Casos de éxito',
  },
  { key: 'agenda-un-llamado', href: '/#agenda-un-llamado', "label": 'Agenda un llamado' },
];

const Header = () => {

  return (
    <motion.header
      className={cn(
        'bg-white dark:bg-[darkgray]/50 fixed inset-x-0 z-40 mx-auto flex h-20 gap-[54px] w-screen items-center justify-center px-8 transition-colors'
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
      <Link
        href="/"
        className="flex items-center justify-center gap-1"
        aria-label={'Home'}
      >
        <Image
          src={'/assets/images/logo-header.png'}
          alt="logo"
          width={120}
          height={40}
        />
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
        <ThemeToggle />
        <LanguageSwitcher />
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Header;
