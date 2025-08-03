'use client';

import { motion } from 'motion/react';

import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import Navbar from '../navbar';
import { ThemeToggle } from '../theme-toggle';
import Image from 'next/image';
import MobileNav from '../mobile-nav';

export const HEADER_LINKS = [
  {
    key: 'quien-soy',
    href: '/#quien-soy',
    label: 'Quien soy',
  },
  {
    key: 'programa',
    href: '/#programa',
    label: 'Programa',
  },
  {
    key: 'reserva',
    href: '/#reserva',
    label: 'Reserva',
  },
  {
    key: 'casos-de-exito',
    href: '/#casos-de-exito',
    label: 'Casos de éxito',
  },
  { key: 'agenda-un-llamado', href: '/#agenda-un-llamado', label: 'Agenda un llamado' },
];

const Header = () => {
  return (
    <motion.header
      className={cn(
        'bg-white dark:bg-[black] fixed inset-x-0 z-40 mx-auto h-14 md:h-20 gap-[54px] w-screen items-center justify-between md:justify-center px-4 md:px-8 flex md-backdrop-blur-[10px] transition-colors'
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
      <MobileNav />
      <Link
        href="/"
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
      <div className="flex items-center gap-2">
        <Navbar />
        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
