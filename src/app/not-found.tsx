'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/utils/twMerge';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {


  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center relative">
            <div className="flex flex-col items-center justify-center mt-20 px-4 text-center">
              <h1 className="text-4xl font-bold mb-2">¡Oops!</h1>
              <p className="text-gray-400 mb-6">
                Parece que la página que buscas no existe.
              </p>

              <div className="flex items-center justify-center">
                <Link
                  title='Volver al inicio'
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: 'outline',
                    }),
                    'rounded-xl'
                  )}
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-20 w-[70%] z-0"
            >
              <DotLottieReact
                src="/assets/404_animation.json"
                loop
                autoplay
                segment={[30, 300]}
                speed={1.1}
              />
            </motion.div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
