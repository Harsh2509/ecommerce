"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export const Button = ({ children, href }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={() => {
        router.push(href);
      }}
    >
      {children}
    </button>
  );
};
