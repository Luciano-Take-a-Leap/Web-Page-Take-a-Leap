'use client';

import { cn } from '@/utils/twMerge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  links?: Array<{
    label?: string;
    href?: string;
    isButton?: boolean;
    _key: string;
  }>;
}

const Navbar = ({ links }: NavbarProps) => {
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
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Button>
            </li>
          ) : (
            <li
              key={`list_item_element_${link._key}_${i}`}
              className="relative flex h-max items-center justify-center cursor-pointer"
            >
              <div
                className={cn(
                  'rounded-sm px-2 py-1 lg:px-3 lg:py-2 text-base lg:text-xl transition-colors font-work-sans whitespace-nowrap hover:bg-gray-100'
                )}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;