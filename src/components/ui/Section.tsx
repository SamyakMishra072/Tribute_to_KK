import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className, dark }: SectionProps) {
  return (
    <section className={clsx(
      'py-20',
      dark ? 'bg-gray-900 text-white' : 'bg-white dark:bg-gray-800',
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}