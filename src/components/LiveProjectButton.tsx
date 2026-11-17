import React from 'react';
import { motion } from 'framer-motion';

export interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Xem dự án',
}) => {
  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]
        text-[#D7E2EA] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer
        ${className}`}
    >
      {label}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0">
      {content}
    </button>
  );
};

export default LiveProjectButton;
