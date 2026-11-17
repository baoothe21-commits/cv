import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { ProjectData } from '../components/ProjectModal';

export const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Khách hàng',
    subtitle: 'Mô hình hóa 3D chi tiết cao, dàn dựng bố cục ánh sáng không gian và kết xuất ảnh chân thực phục vụ bộ nhận diện thương hiệu agency sáng tạo.',
    col1TopImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1BottomImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Nhận diện thương hiệu Aura',
    category: 'Dự án cá nhân',
    subtitle: 'Nghiên cứu ứng dụng hiệu ứng kính (glassmorphism), bề mặt 3D phát quang lấp lánh và kết hợp typography hiện đại cho sản phẩm số cao cấp.',
    col1TopImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1BottomImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Khách hàng',
    subtitle: 'Ngôn ngữ thị giác 3D toàn diện, mô hình sản phẩm tương tác và animation chuyển động sống động phát triển cho hệ sinh thái công nghệ thế hệ mới.',
    col1TopImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1BottomImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    number: '04',
    name: 'Vận hành Shopee & TikTok Shop',
    category: 'Thực tập sinh TMĐT | 03/2025 - 05/2026',
    subtitle:
      'Đăng tải & tối ưu danh mục sản phẩm, cấu hình chiến dịch Flash Sale, hỗ trợ & tư vấn khách hàng trước mua hàng, quản lý quy trình vận hành storefront toàn diện.',
    col1TopImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1BottomImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '05',
    name: 'Thương mại điện tử POD (Etsy & ShopBase)',
    category: 'Thực tập sinh TMĐT | 06/2025',
    subtitle:
      'Nghiên cứu từ khóa, phân tích xu hướng, săn tìm sản phẩm POD tiềm năng (winning product), tối ưu tiêu đề & mô tả chuẩn SEO, quản lý danh mục sản phẩm trên Etsy & ShopBase.',
    col1TopImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1BottomImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelectProject: (p: ProjectData) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] sm:min-h-[640px] flex items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden transition-shadow"
      >
        {/* Top row: Number, category label, project name, Live Project button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              className="font-black text-white leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#BBCCD7] opacity-80">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <div className="self-end sm:self-center">
            <LiveProjectButton onClick={() => onSelectProject(project)} label="Xem dự án" />
          </div>
        </div>

        {/* Subtitle if available */}
        {project.subtitle && (
          <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/75 font-light leading-relaxed max-w-3xl mb-5 -mt-2">
            {project.subtitle}
          </p>
        )}

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 w-full">
          {/* Left Column (40% width / 5 cols): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Left Top Image */}
            <div
              onClick={() => onSelectProject(project)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/10 cursor-pointer group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1TopImg}
                alt={`${project.name} preview top`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              onClick={() => onSelectProject(project)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/10 cursor-pointer group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1BottomImg}
                alt={`${project.name} preview bottom`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols): 1 tall image */}
          <div
            onClick={() => onSelectProject(project)}
            className="md:col-span-7 w-full h-[240px] sm:h-[320px] md:h-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/10 cursor-pointer group"
          >
            <img
              src={project.col2Img}
              alt={`${project.name} main showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export interface ProjectsSectionProps {
  onSelectProject: (p: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 px-4 sm:px-6 md:px-10 z-20"
    >
      <div className="max-w-6xl mx-auto w-full mb-12 sm:mb-16 md:mb-20 text-center">
        {/* Heading: "Dự án" using .hero-heading gradient */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Dự án
          </h2>
        </FadeIn>
      </div>

      {/* 5 sticky-stacking project & experience cards */}
      <div className="w-full flex flex-col items-center">
        {PROJECTS.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const range: [number, number] = [index * 0.2, 1];

          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
              onSelectProject={onSelectProject}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
