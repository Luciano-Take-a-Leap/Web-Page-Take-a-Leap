'use client';

import { HEADER_LINKS } from '../header';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-12">
        {HEADER_LINKS.map((link) => {
          return (
            <li
              key={link.key}
              className="relative flex h-max items-center justify-center "
            >
              <Link
                className={cn(
                  'rounded-sm px-3 py-2 text-xl transition-colors font-work-sans'
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
