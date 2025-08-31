'use client';

import { HEADER_LINKS } from '../header';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-12 items-center">
        {HEADER_LINKS.map((link) => {
          return link.isButton ? (
            <li
              key={link.key}
              className="relative flex h-max items-center justify-center"
            >
              <Button
                className={cn(
                  'rounded-xl p-4 text-xl transition-colors font-work-sans'
                )}
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById('agenda-un-llamado')?.offsetTop || 0,
                    behavior: 'smooth',
                  });
                }}
              >
                {link.label}
              </Button>
            </li>
          ) : (
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
