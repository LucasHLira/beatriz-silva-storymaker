'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StickyCard({
  children,
  className = '',
  index = 1,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.12], [0, 20]);
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.6]);

  return (
    // z-index explícito garante que cartões posteriores ficam sempre acima dos anteriores
    <div
      ref={ref}
      className={`sticky top-0 min-h-screen ${className}`}
      style={{ zIndex: index }}
    >
      <motion.div
        style={{ scale, borderRadius, opacity }}
        className="min-h-screen origin-top overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
