'use client';

import { MenuIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MobileNavProps {
  links?: Array<{
    label?: string;
    href?: string;
    isButton?: boolean;
    _key: string;
  }>;
}

const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center justify-center p-0 md:hidden"
          aria-label={'Mostrar menú'}
          variant="ghost"
        >
          <MenuIcon className="size-6 text-text-secondary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={20} className="min-w-40">
        {links?.map((link, i) => (
          <DropdownMenuItem key={`${link._key}_${i}`} asChild>
            <Link href={link.href || '/'} className="flex items-center gap-4">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
