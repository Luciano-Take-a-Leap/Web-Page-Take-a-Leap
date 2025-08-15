'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  className?: string;
  iconClassName?: string;
}

export function ThemeToggle({ className, iconClassName }: ThemeToggleProps) {
  const { setTheme } = useTheme();
  //get the current theme
  const { theme: themes } = useTheme();

  //change theme from current to opposite
  const toggleTheme = () => {
    setTheme(themes === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="link"
      className={`bg-transparent cursor-pointer ${className}`}
      size="icon"
      onClick={() => toggleTheme()}
    >
      <Sun
        className={`h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${iconClassName}`}
      />
      <Moon
        className={`absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${iconClassName}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
