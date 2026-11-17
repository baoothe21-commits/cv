import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';
import { Sparkles, ArrowDown } from 'lucide-react';

export interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenPrice: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenPrice,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-[#BE4C00]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Navbar */}
      <Navbar onOpenContact={onOpenContact} onOpenPrice={onOpenPrice} />

      {/* 2. Centered Hero Content (Without 3D face image, with well-proportioned readable typography) */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-4 sm:py-6 z-10 max-w-4xl mx-auto w-full my-auto">
        {/* Subtle badge above heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.04] border border-[#D7E2EA]/15 text-[11px] sm:text-xs md:text-sm text-[#BBCCD7] font-medium tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
          <span>Nguyễn Thế Bảo &bull; Kinh doanh TikTok Shop US &amp; Sáng tạo 3D</span>
        </motion.div>

        {/* Refined h1 heading: sized for effortless readability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full flex justify-center"
        >
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-[1.05] text-center"
            style={{ fontSize: 'clamp(2.4rem, 6.2vw, 5.8rem)' }}
          >
            chào, mình là bảo
          </h1>
        </motion.div>

        {/* Supporting subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-[#D7E2EA]/85 font-light max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed"
        >
          Chuyên sáng tạo mô hình 3D, diễn hoạt chuyển động &amp; tối ưu hóa vận hành thương mại điện tử xuyên biên giới trên TikTok Shop US, Shopee, Etsy &amp; ShopBase.
        </motion.p>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-7"
        >
          {['3D Creator', 'TikTok Shop US Operations', 'E-commerce Specialist', 'Dai Nam University'].map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs text-[#D7E2EA]/80 font-medium tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue button */}
        <motion.button
          type="button"
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 sm:mt-8 p-2 rounded-full text-[#D7E2EA]/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.button>
      </div>

      {/* 3. Bottom bar */}
      <div className="relative w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left paragraph text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[160px] sm:max-w-[220px] md:max-w-[270px]"
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.72rem, 1.35vw, 1.45rem)' }}
          >
            một nhà sáng tạo 3d và sinh viên kinh tế số đam mê tạo ra các dự án ấn tượng, nghiên cứu xu hướng và tối ưu hóa sản phẩm thương mại điện tử toàn cầu
          </p>
        </motion.div>

        {/* Right contact button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} label="Liên hệ ngay" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
