'use client';

import { Button } from '@/components/ui/button';
import { Footer as TFooter } from '@/types/sanity.types';
import getSocialMediaLogo from '@/utils/get-social-media-logo';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FooterProps {
  data?: TFooter | null;
}

const Footer = ({ data }: FooterProps) => {
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
    <AnimatePresence>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-dark-blue text-white px-6 md:px-20 lg:px-40 py-8 mt-24 lg:mt-32"
      >
        <div className="flex justify-between w-full items-center">
          <Image
            src={'/assets/images/logo-header.png'}
            alt="logo"
            width={120}
            height={40}
          />
          <div className="flex space-x-4">
            {data?.socialLinks?.filter(media => Boolean(media.platform)).map((social, index) => (
              <Button
                key={`social-link-` + index}
                className="transform hover:scale-110 transition"
                variant={"ghost"}
                onClick={
                  () => handleLinkClick(social.href)
                }
                aria-label={social.platform}
              >
                {getSocialMediaLogo(social.platform!)}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center mt-10">
          {data?.copyrightText && (
            <p className="text-center text-sm md:text-base font-medium mt-4 md:mt-0">
              {data?.copyrightText}
            </p>
          )}
          <div className="flex space-x-6">
            {data?.navigation?.map((navItem, index) => (
              <Button
                key={`nav-item-` + index}
                className="text-sm md:text-base font-medium hover:underline"
                variant={"ghost"}
                onClick={() => handleLinkClick(navItem.href)}
              >
                {navItem.label}
              </Button>
            ))}
          </div>

        </div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
