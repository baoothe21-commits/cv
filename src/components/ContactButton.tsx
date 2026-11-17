import React from 'react';
import { motion } from 'framer-motion';

export interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  label = 'Liên hệ ngay',
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full uppercase tracking-widest font-medium text-white transition-all duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base cursor-pointer
        shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1]
        hover:shadow-[0px_6px_20px_rgba(182,0,168,0.45),inset_4px_4px_14px_#9b3be3]
        outline outline-2 outline-white -outline-offset-[3px]
        ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      }}
    >
      {label}
    </motion.button>
  );
};

export default ContactButton;
