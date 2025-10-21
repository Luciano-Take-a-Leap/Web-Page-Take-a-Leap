"use client";
import Link from "next/link";
import "./globals.css";
import { cn } from "@/utils/twMerge";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center relative" id="not-found">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">¡Oops!</h1>
        <p className="text-gray-400 mb-6">
          Parece que la página que buscas no existe.
        </p>

        <div className="flex items-center justify-center">
          <Link
            title="Volver al inicio"
            href="/"
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "rounded-xl"
            )}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
      <Image
        src="/assets/images/not-found.webp"
        alt="Not Found Illustration"
        width={400}
        height={400}
        className="mt-10"
      />
    </main>
  );
}
