'use client';

import { ServerCrash } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default function Error({
  error,
}: {
  params: Promise<{ locale: string }>;
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)] px-4 text-center">
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-red-100">
        <ServerCrash className="w-10 h-10 text-red-600" />
      </div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Ocurrió un error inesperado
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row mt-8">
        <Button variant="outline" asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
