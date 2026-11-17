import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { GraduationCap, Award, TrendingUp, Cpu } from 'lucide-react';

export interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const animatedParagraphText =
    "Với hơn năm năm kinh nghiệm trong lĩnh vực thiết kế, tôi tập trung vào nhận diện thương hiệu, thiết kế web và trải nghiệm người dùng, tôi thực sự yêu thích việc đồng hành cùng các doanh nghiệp mong muốn tạo sự khác biệt và thể hiện hình ảnh xuất sắc nhất. Bên cạnh thiết kế, tôi là Nguyễn Thế Bảo, sinh viên năm 2 ngành Kinh tế số tại Đại học Đại Nam với kinh nghiệm thực chiến trong vận hành TikTok Shop US, Shopee, Etsy và ShopBase, nghiên cứu xu hướng, tối ưu hóa từ khóa và ứng dụng AI sáng tạo nội dung. Hãy cùng nhau tạo nên những điều phi thường!";

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ================= 4 Decorative 3D Images ================= */}
      {/* 1. Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decorative Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] animate-pulse"
            style={{ animationDuration: '6s' }}
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Decorative Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 3. Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decorative Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] animate-pulse"
            style={{ animationDuration: '7s' }}
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Geometric Decorative"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* ================= Centered Content Structure ================= */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl w-full mx-auto text-center">
        {/* Heading: "Về bản thân" with .hero-heading gradient, font-black, uppercase, clamp(3rem, 12vw, 160px), FadeIn delay 0, y 40 */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Về bản thân
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph with character-by-character scroll opacity */}
        <div className="max-w-[580px] w-full mx-auto px-2">
          <AnimatedText
            text={animatedParagraphText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Education, Skills & Career Objective Highlights */}
        <div className="w-full max-w-3xl mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {/* Card 1: Học vấn */}
          <FadeIn delay={0.2} y={20} className="h-full">
            <div className="h-full p-5 rounded-2xl bg-[#131313] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                <GraduationCap className="w-4 h-4 text-[#B600A8]" />
                Học vấn
              </div>
              <h4 className="text-base font-bold text-white uppercase mb-1">
                Đại học Đại Nam (Dai Nam University)
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-snug">
                Chuyên ngành: <strong className="text-white font-medium">Kinh tế số (Digital Economy)</strong> &bull; Sinh viên năm 2. Định hướng chuyên sâu về E-commerce, Mô hình kinh doanh số &amp; Marketing kỹ thuật số.
              </p>
            </div>
          </FadeIn>

          {/* Card 2: Chứng chỉ & Ngoại ngữ */}
          <FadeIn delay={0.25} y={20} className="h-full">
            <div className="h-full p-5 rounded-2xl bg-[#131313] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                <Award className="w-4 h-4 text-emerald-400" />
                Chứng chỉ &amp; Ngoại ngữ
              </div>
              <h4 className="text-base font-bold text-white uppercase mb-1">
                Tiếng Anh &amp; Thương mại quốc tế
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-snug">
                Đang chủ động học &amp; luyện thi <strong className="text-white font-medium">TOEIC</strong>. Khả năng đọc hiểu tài liệu chuyên ngành, phân tích từ khóa và giao tiếp vận hành đơn hàng xuyên biên giới.
              </p>
            </div>
          </FadeIn>

          {/* Card 3: Kỹ năng cốt lõi */}
          <FadeIn delay={0.3} y={20} className="h-full">
            <div className="h-full p-5 rounded-2xl bg-[#131313] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                <Cpu className="w-4 h-4 text-[#7621B0]" />
                Kỹ năng cốt lõi &amp; Công cụ
              </div>
              <h4 className="text-base font-bold text-white uppercase mb-1">
                Nghiên cứu từ khóa &amp; Săn sản phẩm
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-snug">
                Tìm kiếm winning product, tối ưu bài đăng &amp; nội dung SEO, Tin học văn phòng (Word, Excel) và ứng dụng linh hoạt ChatGPT/AI nhân bội năng suất làm việc.
              </p>
            </div>
          </FadeIn>

          {/* Card 4: Mục tiêu nghề nghiệp */}
          <FadeIn delay={0.35} y={20} className="h-full">
            <div className="h-full p-5 rounded-2xl bg-[#131313] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                <TrendingUp className="w-4 h-4 text-[#BE4C00]" />
                Mục tiêu nghề nghiệp
              </div>
              <h4 className="text-base font-bold text-white uppercase mb-1">
                Làm chủ E-commerce xuyên biên giới
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-snug">
                Mở rộng chiều sâu chuyên môn vận hành TikTok Shop US, Shopee, Etsy &amp; ShopBase qua phân tích xu hướng thuật toán và tạo tài sản hình ảnh chuyển đổi cao.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button below text block */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton onClick={onOpenContact} label="Liên hệ ngay" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
