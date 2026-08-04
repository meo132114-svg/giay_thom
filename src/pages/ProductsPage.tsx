import {
  Leaf,
  Citrus,
  Sparkles,
  Flame,
  Check,
  ShoppingBag,
  Wind,
} from 'lucide-react';
import { IMAGES, SCENTS, type PageId } from '@/content';
import CtaButtons from '@/components/CtaButtons';
import SectionHeading from '@/components/SectionHeading';
import PageNav from '@/components/PageNav';

type ProductsPageProps = {
  onNavigate: (page: PageId) => void;
};

const iconMap: Record<string, typeof Leaf> = {
  Citrus,
  Leaf,
  Sparkles,
  Flame,
};

const imgMap: Record<string, string> = {
  orangeFresh: IMAGES.orangeFresh,
  mintClose: IMAGES.mintClose,
  lemongrass: IMAGES.lemongrass,
  cinnamon: IMAGES.cinnamon,
};

const features = [
  'Than hoạt tính hút ẩm, khử mùi tận gốc',
  'Tinh dầu thiên nhiên 100% nguyên chất',
  'Túi vải nhỏ gọn, dễ mang theo',
  'Tái sử dụng nhiều tháng nhờ phơi nắng',
  'An toàn cho mọi chất liệu giày',
  'Mỗi hộp gồm 4 túi thơm',
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36">
        <div className="pointer-events-none absolute -top-10 left-0 h-72 w-72 rounded-full bg-eco-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="pill bg-eco-100 text-eco-700 animate-fadeInUp">
            <Leaf className="h-4 w-4" />
            Bộ sưu tập sản phẩm
          </span>
          <h1
            className="mt-5 animate-fadeInUp font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            style={{ animationDelay: '0.1s' }}
          >
            Sản phẩm & Mùi hương
          </h1>
          <p
            className="mt-6 animate-fadeInUp text-lg leading-relaxed text-ink-600 text-balance"
            style={{ animationDelay: '0.2s' }}
          >
            Một thiết kế, bốn mùi hương thiên nhiên. Mỗi hộp gồm 4 túi thơm nhỏ
            gọn, đủ dùng cho 2 đôi giày cùng lúc.
          </p>
        </div>
      </section>

      {/* Product showcase */}
<section className="py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Cụm hình ảnh */}
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        {/* 🎯 Khung tỉ lệ 3:4, nền trắng + object-contain để ảnh hiển thị trọn vẹn */}
        <div className="aspect-[3/4] w-full overflow-hidden rounded-5xl bg-white shadow-card">
          <img
            src="/kichthuoc.jpg"
            alt="Kích thước túi khử mùi Giày Thơm"
            className="h-full w-full object-contain p-2"
            loading="lazy"
          />
        </div>
        
        {/* Badge góc dưới */}
        <div className="absolute -bottom-5 -right-5 rounded-3xl bg-wood-500 px-6 py-4 text-cream-50 shadow-card animate-floatY">
          <div className="text-3xl font-bold">4</div>
          <div className="text-xs font-medium">Túi / hộp</div>
        </div>
      </div>

      {/* Nội dung bên cạnh */}
      <div>
        <h2 className="section-title text-3xl sm:text-4xl text-balance">
          Túi Khử Mùi Giày Thơm
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-600">
          Mỗi túi thơm là sự kết hợp giữa than hoạt tính hút ẩm và tinh dầu
          thiên nhiên, được bọc trong túi vải nhỏ gọn. Chỉ cần bỏ vào giày
          sau khi mang, túi sẽ hút ẩm và tỏa hương thơm dịu nhẹ suốt đêm.
        </p>
        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-sm text-ink-600"
            >
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-eco-100 text-eco-600">
                <Check className="h-3 w-3" />
              </div>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <CtaButtons size="lg" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Scents */}
      <section className="bg-cream-50/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Bốn mùi hương thiên nhiên"
            title="Chọn hương, chọn trải nghiệm"
            subtitle="Mỗi mùi hương mang một công dụng riêng — từ sảng khoái đến ấm áp."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SCENTS.map((scent, i) => {
              const Icon = iconMap[scent.icon] || Leaf;
              const isEco = scent.color === 'eco';
              return (
                <div
                  key={scent.name}
                  className="group card overflow-hidden transition-all hover:shadow-card hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-40 w-full overflow-hidden sm:w-40 sm:flex-shrink-0">
                      <img
                        src={imgMap[scent.img] || IMAGES.herbsFlat}
                        alt={scent.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                            isEco
                              ? 'bg-eco-100 text-eco-600'
                              : 'bg-wood-100 text-wood-600'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-wood-700">
                          {scent.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">
                        {scent.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {scent.notes.split(' · ').map((n) => (
                          <span
                            key={n}
                            className="pill bg-cream-100 text-ink-500 text-xs"
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Usage gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Phù hợp mọi loại giày"
            title="Cho mọi nhu cầu cuộc sống"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: IMAGES.sneakersWhite, name: 'Giày Thể Thao', tag: 'Chạy bộ, gym' },
              { img: "/giay.jpg", name: 'Giày Học Sinh', tag: 'Đi học hàng ngày' },
              { img: "/giayda.jpg", name: 'Giày Da', tag: 'Đi làm, sự kiện' },
            ].map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-4xl bg-cream-50 shadow-soft transition-all hover:shadow-card hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/40 to-transparent" />
                  <span className="absolute top-4 right-4 pill bg-cream-50/90 text-wood-700 text-xs">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-wood-700">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-400">
                    An toàn cho mọi chất liệu
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-wood-500 to-wood-700 p-10 text-center text-cream-50 shadow-card sm:p-16">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-eco-400/30 blur-2xl" />
            <ShoppingBag className="mx-auto h-10 w-10 text-eco-300" />
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
              Bạn đã chọn được hương thơm ưa thích?
            </h2>
            <p className="mt-4 text-base text-cream-200">
              Đặt hàng chính hãng ngay tại các gian hàng thương mại điện tử của
              chúng tôi để nhận ưu đãi vận chuyển và voucher giảm giá.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButtons size="lg" />
            </div>
          </div>
        </div>
      </section>

      <PageNav current="products" onNavigate={onNavigate} />
    </div>
  );
}
