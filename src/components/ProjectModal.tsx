import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  subtitle?: string;
  col1TopImg: string;
  col1BottomImg: string;
  col2Img: string;
  liveUrl?: string;
  descriptionDetailed?: string;
  tags?: string[];
  results?: string[];
}

export interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!project) return null;

  const currentPreview = selectedImg || project.col2Img;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl z-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <span className="text-4xl sm:text-5xl font-black text-white">
                {project.number}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold border border-white/10">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
              {project.name}
            </h2>

            {project.subtitle && (
              <p className="text-sm sm:text-base text-[#D7E2EA]/80 mb-6 font-light max-w-3xl leading-relaxed">
                {project.subtitle}
              </p>
            )}

            {/* Main Image Stage */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden bg-black/60 border border-white/10 mb-5">
              <img
                src={currentPreview}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs text-white border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                Nhấp vào ảnh thu nhỏ bên dưới để xem góc khác
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[project.col1TopImg, project.col1BottomImg, project.col2Img].map((imgUrl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImg(imgUrl)}
                  className={`h-24 sm:h-32 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentPreview === imgUrl
                      ? 'border-[#B600A8] shadow-[0_0_15px_rgba(182,0,168,0.5)] scale-[1.02]'
                      : 'border-white/15 opacity-70 hover:opacity-100 hover:border-white/50'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Detailed specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#BBCCD7] font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B600A8]" />
                  Điểm nổi bật &amp; Quy trình thực hiện
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#D7E2EA]/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Định hướng mỹ thuật 3D &amp; bố cục trực quan tạo ấn tượng thị giác mạnh mẽ.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Tối ưu hóa đa nền tảng cho TikTok Shop, Shopee và hệ sinh thái POD quốc tế.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Phân tích từ khóa chuyên sâu và cấu trúc metadata chuẩn SEO tối ưu chuyển đổi.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#BBCCD7] font-bold mb-3">
                  Bộ công cụ &amp; Công nghệ thực hiện
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Blender 3D', 'Photorealistic Renders', 'TikTok Shop Seller Center', 'Shopee Seller Hub', 'Etsy SEO', 'ShopBase', 'Figma', 'ChatGPT Automation'].map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D7E2EA] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="rounded-full px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1] hover:shadow-[0px_6px_20px_rgba(182,0,168,0.45),inset_4px_4px_14px_#9b3be3] outline outline-2 outline-white -outline-offset-[3px] transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
              >
                Tư vấn dự án tương tự
              </button>

              <div className="text-xs text-[#D7E2EA]/60 flex items-center gap-2">
                <span>Thực hiện bởi Bảo (Nguyễn Thế Bảo)</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>0347969324</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
