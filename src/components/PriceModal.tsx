import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Box, ShoppingCart, Search, Palette, ArrowRight } from 'lucide-react';

export interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const PriceModal: React.FC<PriceModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const tiers = [
    {
      title: 'Hình ảnh & Tài sản 3D',
      icon: Box,
      tag: 'Chuyên môn sáng tạo',
      description: 'Mô hình hóa 3D tùy chỉnh, bố cục ánh sáng chuyên nghiệp, vật liệu và kết xuất hình ảnh sắc nét.',
      price: 'Linh hoạt theo dự án',
      features: [
        'Dựng mô hình 3D vật thể hoặc sản phẩm chi tiết',
        'Thiết lập ánh sáng studio & chất liệu tả thực (PBR)',
        'Kết xuất ảnh độ phân giải 4K nhiều góc độ',
        'Animation chuyển động và vòng lặp tương tác',
        'Bàn giao đầy đủ file nguồn (GLB/GLTF, FBX, OBJ)',
      ],
      cta: 'Yêu cầu báo giá 3D',
    },
    {
      title: 'Vận hành TikTok Shop US',
      icon: ShoppingCart,
      tag: 'Thế mạnh E-commerce',
      highlighted: true,
      description: 'Quản trị gian hàng toàn diện, đăng tải sản phẩm thắng (winning product) và tối ưu hóa doanh số.',
      price: 'Hợp đồng / Part-time / Chia sẻ doanh thu',
      features: [
        'Đăng tải sản phẩm và chuẩn hóa danh mục TikTok Shop US',
        'Thiết lập chiến dịch Flash Sale & mã giảm giá khuyến mại',
        'Viết tiêu đề và mô tả sản phẩm chuẩn SEO chuyển đổi cao',
        'Đồng bộ danh mục đa sàn: Shopee, ShopBase',
        'Tư vấn và hỗ trợ khách hàng trước mua hàng',
      ],
      cta: 'Thảo luận vận hành gian hàng',
    },
    {
      title: 'Sản phẩm POD & Từ khóa SEO',
      icon: Search,
      tag: 'Dữ liệu & Tăng trưởng',
      description: 'Nghiên cứu từ khóa dựa trên dữ liệu, dự báo xu hướng và tối ưu danh mục cho Etsy & ShopBase.',
      price: 'Theo đợt sản phẩm / Hàng tháng',
      features: [
        'Nghiên cứu thị trường ngách & xu hướng sản phẩm tiềm năng',
        'Phân tích từ khóa tìm kiếm cao - mức độ cạnh tranh thấp',
        'Tối ưu hóa tiêu đề, thẻ tag và mô tả chuẩn SEO',
        'Quy trình tự động hóa đăng bài bằng ChatGPT/AI',
        'Phân tích đối thủ cạnh tranh & kiểm toán chuyển đổi',
      ],
      cta: 'Khám phá tăng trưởng POD',
    },
    {
      title: 'Nhận diện thương hiệu & Web',
      icon: Palette,
      tag: 'Hệ thống nhận diện',
      description: 'Ngôn ngữ thị giác thương hiệu toàn diện, cấu trúc UI/UX và thiết kế website tối ưu chuyển đổi.',
      price: 'Báo giá theo yêu cầu',
      features: [
        'Hệ thống nhận diện thương hiệu & quy chuẩn typography',
        'Thiết kế giao diện UI/UX hiện đại, chuẩn Responsive (Figma)',
        'Tối ưu tỷ lệ chuyển đổi (CRO) trên từng điểm chạm',
        'Tích hợp yếu tố 3D sống động vào giao diện web',
        'Bàn giao file thiết kế hoàn chỉnh sẵn sàng lập trình',
      ],
      cta: 'Bắt đầu dự án thương hiệu',
    },
  ];

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
            className="relative w-full max-w-5xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#B600A8]/10 border border-[#B600A8]/30 text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-3">
                Minh bạch &bull; Hợp tác hiệu quả
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                Dịch vụ &amp; <span className="hero-heading">Bảng giá</span>
              </h2>
              <p className="text-sm sm:text-base text-[#D7E2EA]/80 mt-3 font-light">
                Giải pháp tùy chỉnh trong sáng tạo hình ảnh 3D và vận hành thương mại điện tử xuyên biên giới. Mỗi dự án đều có mục tiêu riêng — hãy cùng Bảo xây dựng phương án tối ưu nhất cho bạn.
              </p>
            </div>

            {/* Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tiers.map((tier, idx) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={idx}
                    className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-[#181520] border-2 border-[#B600A8]/60 shadow-[0_0_30px_rgba(182,0,168,0.2)]'
                        : 'bg-[#181818] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40'
                    }`}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white">
                        Được yêu cầu nhiều nhất
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#BBCCD7]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                              {tier.title}
                            </h3>
                            <span className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
                              {tier.tag}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#D7E2EA]/80 mb-5 leading-relaxed">
                        {tier.description}
                      </p>

                      <div className="py-2.5 px-3.5 bg-black/40 rounded-xl mb-5 border border-white/5 flex items-baseline justify-between">
                        <span className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider">Chi phí:</span>
                        <span className="text-sm font-semibold text-white">{tier.price}</span>
                      </div>

                      <ul className="space-y-2.5 mb-6">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectService(tier.title);
                      }}
                      className="w-full py-3 px-5 rounded-full border border-[#D7E2EA]/30 hover:border-white text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>{tier.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom info banner */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center text-xs text-[#D7E2EA]/70">
              Bạn cần giải pháp trọn gói đa gian hàng, giai đoạn chạy thử nghiệm hoặc dự án riêng? Hotline trực tiếp: <strong className="text-white">0347969324</strong> &bull; Email: <strong className="text-white">baoothe21@gmail.com</strong>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PriceModal;
