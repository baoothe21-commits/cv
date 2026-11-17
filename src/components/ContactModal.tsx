import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Check, Copy, Send, ExternalLink, Sparkles, MapPin, GraduationCap } from 'lucide-react';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Mô hình hóa 3D & Kết xuất hình ảnh (Rendering)',
    message: '',
  });

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-3xl p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl z-10 overflow-hidden"
          >
            {/* Background decorative glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B600A8]/10 border border-[#B600A8]/30 text-xs uppercase tracking-wider text-[#BBCCD7] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                Liên hệ hợp tác
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                Nguyễn Thế Bảo <span className="hero-heading">(Bảo)</span>
              </h2>
              <p className="text-sm sm:text-base text-[#D7E2EA]/80 mt-1">
                3D Creator &bull; Chuyên viên Thương mại Điện tử &bull; Vận hành TikTok Shop US &bull; Sinh viên Kinh tế số
              </p>
              <div className="flex items-center gap-4 text-xs text-[#D7E2EA]/60 mt-2">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#BBCCD7]" /> Đại học Đại Nam
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#BBCCD7]" /> Hà Nội, Việt Nam (Hỗ trợ toàn cầu)
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* Phone Card */}
              <div className="bg-[#181818] border border-[#D7E2EA]/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#D7E2EA]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Số điện thoại / Zalo
                  </div>
                  <button
                    onClick={() => copyToClipboard('0347969324', 'phone')}
                    className="p-1.5 text-xs text-[#D7E2EA]/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Sao chép số điện thoại"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Đã chép' : 'Sao chép'}</span>
                  </button>
                </div>
                <a
                  href="tel:0347969324"
                  className="text-lg font-bold text-white hover:text-emerald-400 transition-colors tracking-wide flex items-center gap-2"
                >
                  0347969324
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-[#181818] border border-[#D7E2EA]/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#D7E2EA]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                    <Mail className="w-4 h-4 text-[#BBCCD7]" />
                    Email trực tiếp
                  </div>
                  <button
                    onClick={() => copyToClipboard('baoothe21@gmail.com', 'email')}
                    className="p-1.5 text-xs text-[#D7E2EA]/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Sao chép Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Đã chép' : 'Sao chép'}</span>
                  </button>
                </div>
                <a
                  href="mailto:baoothe21@gmail.com"
                  className="text-base font-bold text-white hover:text-[#BBCCD7] transition-colors tracking-wide truncate flex items-center gap-2"
                >
                  baoothe21@gmail.com
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase">Đã gửi thông tin thành công!</h3>
                <p className="text-sm text-[#D7E2EA]/80 mt-1">
                  Cảm ơn bạn! Bảo (Nguyễn Thế Bảo) sẽ liên hệ lại với bạn qua số điện thoại/email trong thời gian sớm nhất.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Họ và tên của bạn
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181818] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#BBCCD7] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Email hoặc Số điện thoại
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: ten@company.com / 0912..."
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#BBCCD7] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Dịch vụ bạn quan tâm
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#181818] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#BBCCD7] transition-colors cursor-pointer"
                  >
                    <option value="Mô hình hóa 3D & Kết xuất hình ảnh (Rendering)">Mô hình hóa 3D &amp; Kết xuất ảnh sản phẩm thực tế</option>
                    <option value="Vận hành gian hàng TikTok Shop US & Shopee">Vận hành gian hàng TikTok Shop US &amp; Shopee (Flash Sale, Listing)</option>
                    <option value="Nghiên cứu sản phẩm POD & Từ khóa SEO">Nghiên cứu sản phẩm POD &amp; Tối ưu SEO từ khóa (Etsy/ShopBase)</option>
                    <option value="Nhận diện thương hiệu & Thiết kế Web">Nhận diện thương hiệu &amp; Thiết kế giao diện Website chuyển đổi</option>
                    <option value="Giải pháp toàn diện 3D + E-commerce">Gói hợp tác toàn diện: 3D Visuals &amp; Tối ưu E-commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Nội dung yêu cầu / Chi tiết dự án
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Mô tả ngắn gọn về mong muốn hoặc mục tiêu dự án của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181818] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#BBCCD7] transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-white flex items-center gap-2 transition-all duration-300 shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1] hover:shadow-[0px_6px_20px_rgba(182,0,168,0.45),inset_4px_4px_14px_#9b3be3] outline outline-2 outline-white -outline-offset-[3px] cursor-pointer"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Gửi thông tin
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
