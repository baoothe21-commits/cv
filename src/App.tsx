import React, { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactModal from './components/ContactModal';
import PriceModal from './components/PriceModal';
import ProjectModal, { ProjectData } from './components/ProjectModal';
import ContactButton from './components/ContactButton';
import { ArrowUp, Mail, Phone, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsContactOpen(false);
        setIsPriceOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen relative overflow-x-clip selection:bg-[#B600A8]/40 selection:text-white">
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPrice={() => setIsPriceOpen(true)}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* FOOTER & CALL TO ACTION */}
      <footer className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 sm:px-10 py-16 sm:py-20 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#BBCCD7] uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            Cùng hợp tác phát triển
          </div>

          <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            Bảo &bull; Nguyễn Thế Bảo
          </h3>

          <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light max-w-xl mb-8 leading-relaxed">
            Nhà sáng tạo 3D &amp; Chuyên viên Thương mại Điện tử đam mê tạo ra các dự án thị giác ấn tượng, nghiên cứu xu hướng và tối ưu hóa doanh số gian hàng xuyên biên giới.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
            <a
              href="tel:0347969324"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161616] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60 text-xs sm:text-sm text-white font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>0347969324</span>
            </a>

            <a
              href="mailto:baoothe21@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161616] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60 text-xs sm:text-sm text-white font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-[#BBCCD7]" />
              <span>baoothe21@gmail.com</span>
            </a>

            <ContactButton
              onClick={() => setIsContactOpen(true)}
              label="Liên hệ ngay"
              className="!text-xs sm:!text-sm !py-2.5 !px-8"
            />
          </div>

          <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Nguyễn Thế Bảo (Bảo). Đại học Đại Nam &bull; Kinh tế số.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
            >
              <span>Lên đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Global Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <PriceModal
        isOpen={isPriceOpen}
        onClose={() => setIsPriceOpen(false)}
        onSelectService={() => {
          setIsPriceOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
};

export default App;
