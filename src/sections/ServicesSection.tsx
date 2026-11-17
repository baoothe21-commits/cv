import React from 'react';
import FadeIn from '../components/FadeIn';

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Tạo mô hình 3D (3D Modeling)',
    description:
      'Tạo dựng các mô hình vật thể, nhân vật hoặc không gian 3D chi tiết theo yêu cầu riêng của khách hàng, tối ưu cho game, sản phẩm thương mại và hiển thị thị giác.',
  },
  {
    number: '02',
    name: 'Kết xuất hình ảnh (Rendering)',
    description:
      'Kết xuất ảnh 3D chân thực, sắc nét với hệ thống ánh sáng, chất liệu và bề mặt vật liệu được tinh chỉnh tỉ mỉ, giúp hiện thực hóa ý tưởng sống động.',
  },
  {
    number: '03',
    name: 'Thiết kế chuyển động (Motion Design)',
    description:
      'Diễn hoạt chuyển động mượt mà và đồ họa động mang lại năng lượng, cảm xúc và câu chuyện trực quan cuốn hút cho thương hiệu và sản phẩm số.',
  },
  {
    number: '04',
    name: 'Nhận diện thương hiệu (Branding)',
    description:
      'Xây dựng hệ thống nhận diện thương hiệu nhất quán — từ thiết kế logo đến bộ quy chuẩn thương hiệu toàn diện — tạo dựng dấu ấn rõ ràng và đáng nhớ.',
  },
  {
    number: '05',
    name: 'Thiết kế Website (Web Design)',
    description:
      'Thiết kế giao diện website hiện đại, tinh gọn và tối ưu hóa tỷ lệ chuyển đổi, chú trọng sâu sắc đến bố cục, phân cấp thị giác và trải nghiệm người dùng.',
  },
  {
    number: '06',
    name: 'Vận hành TikTok Shop & TMĐT',
    description:
      'Quản lý gian hàng trọn gói trên TikTok Shop US và Shopee, từ đăng tải sản phẩm chuẩn SEO, thiết lập Flash Sale đến hỗ trợ và tư vấn khách hàng chuyên nghiệp.',
  },
  {
    number: '07',
    name: 'Nghiên cứu sản phẩm POD & Từ khóa SEO',
    description:
      'Phân tích xu hướng thị trường, nghiên cứu từ khóa tìm kiếm cao và tối ưu tiêu đề, mô tả chuẩn SEO cho sản phẩm Print-on-Demand (POD) trên Etsy & ShopBase.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: "Dịch vụ" in #0C0C0C, font-black, uppercase, centered, font size clamp(3rem, 12vw, 160px). Margin bottom: mb-16 sm:mb-20 md:mb-28 */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Dịch vụ
          </h2>
        </FadeIn>

        {/* 7 service items in a vertical list */}
        <div className="w-full flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className={`w-full py-8 sm:py-10 md:py-12 ${
                index !== 0 ? 'border-t border-[#0C0C0C]/15' : ''
              } transition-colors duration-300 hover:bg-[#0C0C0C]/[0.02]`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-12">
                {/* Left: Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none min-w-[120px] sm:min-w-[160px] md:min-w-[200px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </div>

                {/* Right: Name + description stacked vertically */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] leading-tight mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
