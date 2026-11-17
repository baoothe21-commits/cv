import React from 'react';
import { motion } from 'framer-motion';

export interface NavbarProps {
  onOpenContact: () => void;
  onOpenPrice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPrice }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full px-6 md:px-10 pt-6 md:pt-8 relative z-30"
    >
      <nav className="w-full flex items-center justify-between text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit uppercase tracking-inherit"
        >
          Giới thiệu
        </button>

        <button
          type="button"
          onClick={onOpenPrice}
          className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit uppercase tracking-inherit"
        >
          Bảng giá
        </button>

        <button
          type="button"
          onClick={() => scrollTo('projects')}
          className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit uppercase tracking-inherit"
        >
          Dự án
        </button>

        <button
          type="button"
          onClick={onOpenContact}
          className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit uppercase tracking-inherit"
          title="Hotline: 0347969324 | Email: baoothe21@gmail.com"
        >
          Liên hệ
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
