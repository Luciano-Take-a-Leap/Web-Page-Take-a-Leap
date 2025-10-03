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
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface MobileNavProps {
  links?: Array<{
    label?: string;
    href?: string;
    isButton?: boolean;
    _key: string;
  }>;
}

const MobileNav = ({ links }: MobileNavProps) => {
  const router = useRouter();
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
            <div onClick={() => {
              link.href?.startsWith('#') ?
                window.scrollTo({
                  top: document.getElementById('agenda-un-llamado')?.offsetTop || 0,
                  behavior: 'smooth',
                })
                : link.href?.startsWith('/') ?
                  router.push(link.href)
                  : window.open(link.href, '_blank');
            }} className={twMerge("flex items-center gap-4", 
              link.isButton ? "bg-dark-blue text-white" : "",
             )}>
              {link.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
