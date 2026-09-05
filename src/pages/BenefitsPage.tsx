import {
  Wind,
  Shield,
  Feather,
  Leaf,
  HeartHandshake,
  Sparkles,
  Droplets,
  RefreshCw,
  Package,
  Sun,
} from 'lucide-react';
import { IMAGES, BENEFITS, type PageId } from '@/content';
import SectionHeading from '@/components/SectionHeading';
import PageNav from '@/components/PageNav';

type BenefitsPageProps = {
  onNavigate: (page: PageId) => void;
};

const iconMap: Record<string, typeof Wind> = {
  Wind,
  Shield,
  Feather,
  Leaf,
  HeartHandshake,
  Sparkles,
  Droplets,
  RefreshCw,
  Package,
};

export default function BenefitsPage({ onNavigate }: BenefitsPageProps) {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36">
        <div className="pointer-events-none absolute -top-10 right-0 h-72 w-72 rounded-full bg-eco-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="pill bg-eco-100 text-eco-700 animate-fadeInUp">
            <Shield className="h-4 w-4" />
            Công dụng & Điểm nổi bật
          </span>
          <h1
            className="mt-5 animate-fadeInUp font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            style={{ animationDelay: '0.1s' }}
          >
            Không chỉ thơm — còn chăm sóc
          </h1>
          <p
            className="mt-6 animate-fadeInUp text-lg leading-relaxed text-ink-600 text-balance"
            style={{ animationDelay: '0.2s' }}
          >
            Tám công dụng nổi bật đã được hàng ngàn khách hàng kiểm chứng. Đôi
            giày của bạn xứng đáng được nâng niu mỗi ngày.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => {
              const Icon = iconMap[b.icon] || Wind;
              return (
                <div
                  key={b.title}
                  className="group card p-7 transition-all hover:shadow-card hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-eco-100 text-eco-600 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-wood-700">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-50/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-5xl shadow-card">
              <img
                src={IMAGES.charcoalPour}
                alt="Than hoạt tính khử mùi"
                className="h-[380px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="pill bg-wood-100 text-wood-700">
                <Sparkles className="h-4 w-4" />
                Cơ chế hoạt động
              </span>
              <h2 className="mt-4 section-title text-3xl sm:text-4xl text-balance">
                Than hoạt tính và tinh dầu cùng làm việc
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                Than hoạt tính với cấu trúc xốp gốm giúp bẫy và triệt tiêu các
                hợp chất hữu cơ gây mùi hôi, đồng thời hấp phụ độ ẩm dư thừa.
                Tinh dầu nguyên chất tạo hương thơm dịu nhẹ, sảng khoái, không
                gây nồng gắt.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Bỏ túi vào giày',
                    desc: 'Sau khi mang giày, đơn giản bỏ 1-2 túi thơm vào bên trong.',
                  },
                  {
                    step: '02',
                    title: 'Than hút ẩm & mùi',
                    desc: 'Than hoạt tính hấp phụ độ ẩm và bẫy hợp chất gây mùi hôi.',
                  },
                  {
                    step: '03',
                    title: 'Tinh dầu tỏa hương',
                    desc: 'Tinh dầu nguyên chất lan tỏa hương thơm dịu nhẹ tự nhiên.',
                  },
                  {
                    step: '04',
                    title: 'Phơi nắng tái sử dụng',
                    desc: '2-3 tuần/lần, phơi nắng để tái hoạt hóa than hoạt tính.',
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-wood-100 font-display text-sm font-bold text-wood-700">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-semibold text-ink-800">
                        {s.title}
                      </div>
                      <div className="text-sm text-ink-500">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse highlight */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="pill bg-eco-100 text-eco-700">
                <Sun className="h-4 w-4" />
                Tái sử dụng
              </span>
              <h2 className="mt-4 section-title text-3xl sm:text-4xl text-balance">
                Phơi nắng — tái hoạt hóa đơn giản
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                Không cần thay mới liên tục! Chỉ cần phơi túi thơm dưới ánh nắng
                mặt trời 2-3 giờ, 2-3 tuần/lần. Nắng mặt trời giúp giải phóng ẩm
                và tái hoạt hóa than hoạt tính, tiết kiệm và thân thiện môi
                trường.
              </p>
            </div>
            <div className="order-1 overflow-hidden rounded-5xl shadow-card lg:order-2">
              <img
                src={IMAGES.ecoCraft}
                alt="Vật liệu tự nhiên thân thiện môi trường"
                className="h-[360px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <PageNav current="benefits" onNavigate={onNavigate} />
    </div>
  );
}
