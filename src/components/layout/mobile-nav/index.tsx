'use client';

import { MenuIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
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

  const handleLinkClick = async (href?: string) => {
    if (href?.startsWith('#')) {
      window.scrollTo({
        top: document.getElementById(href.replace("#", ""))?.offsetTop || 0,
        behavior: 'smooth',
      });
      await new Promise((resolve) => setTimeout(resolve, 300));
      window.scrollTo({
        top: document.getElementById(href.replace("#", ""))?.offsetTop || 0,
        behavior: 'smooth',
      });
      await new Promise((resolve) => setTimeout(resolve, 400));
      window.scrollTo({
        top: document.getElementById(href.replace("#", ""))?.offsetTop || 0,
        behavior: 'smooth',
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.scrollTo({
        top: document.getElementById(href.replace("#", ""))?.offsetTop || 0,
        behavior: 'smooth',
      });
    } else if (href?.startsWith('/')) {
      router.push(href);
    } else if (href) {
      window.open(href, '_blank');
    }
  };

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
            <div
              onClick={() => handleLinkClick(link.href)}
              className={twMerge(
                'flex items-center gap-4 cursor-pointer',
                link.isButton ? 'bg-dark-blue text-white' : ''
              )}
            >
              {link.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;