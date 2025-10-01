'use client';

import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  links?: Array<{
    label?: string;
    href?: string;
    isButton?: boolean;
    _key: string;
  }>;
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6 lg:gap-12 items-center">
        {links?.map((link, i) => {
          return link.isButton ? (
            <li
              key={`list_item_button_${link._key}_${i}`}
              className="relative flex h-max items-center justify-center"
            >
              <Button
                className={cn(
                  'rounded-xl px-3 py-2 lg:px-4 lg:py-3 text-base lg:text-xl transition-colors font-work-sans whitespace-nowrap'
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
              key={`list_item_element_${link._key}_${i}`}
              className="relative flex h-max items-center justify-center"
            >
              <Link
                className={cn(
                  'rounded-sm px-2 py-1 lg:px-3 lg:py-2 text-base lg:text-xl transition-colors font-work-sans whitespace-nowrap hover:bg-gray-100'
                )}
                href={link.href || '/'}
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