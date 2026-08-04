import {
  Wind,
  Shield,
  Leaf,
  Sparkles,
  Droplets,
  RefreshCw,
  Star,
  Quote,
  Frown,
  EyeOff,
  AlertTriangle,
} from 'lucide-react';
import { IMAGES, PROBLEMS, type PageId } from '@/content';
import CtaButtons from '@/components/CtaButtons';
import SectionHeading from '@/components/SectionHeading';
import PageNav from '@/components/PageNav';

type HomePageProps = {
  onNavigate: (page: PageId) => void;
};

const problemIcons: Record<string, typeof Frown> = {
  Frown,
  Droplets,
  EyeOff,
  AlertTriangle,
};

const highlights = [
  { icon: Wind, label: 'Khử mùi tận gốc' },
  { icon: Droplets, label: 'Hút ẩm cấp tốc' },
  { icon: RefreshCw, label: 'Tái sử dụng' },
  { icon: Leaf, label: '100% tự nhiên' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-eco-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-80 w-80 rounded-full bg-wood-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fadeInUp">
              <span className="pill bg-eco-100 text-eco-700">
                <Sparkles className="h-4 w-4" />
                Than hoạt tính kết hợp tinh dầu thiên nhiên
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance">
                Giày thơm tho —{' '}
                <span className="shimmer-text">Tự tin trong từng bước chân</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 text-balance">
                Giày Thơm là giải pháp túi khử mùi giày ứng dụng than hoạt tính
                kết hợp tinh dầu thiên nhiên, giúp hút ẩm, loại bỏ mùi hôi hiệu
                quả và mang lại hương thơm dễ chịu. Tối ưu cho học sinh, sinh
                viên, người chơi thể thao và người thường xuyên mang giày kín.
              </p>
              <div className="mt-8">
                <CtaButtons size="lg" />
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 text-sm font-medium text-ink-500"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-eco-100 text-eco-600">
                      <h.icon className="h-4 w-4" />
                    </div>
                    {h.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scaleIn">
              <div className="relative overflow-hidden rounded-5xl bg-cream-50 shadow-card">
                <img
                  src="/image.jpg"
                  alt="Túi khử mùi giày Giày Thơm"
                  className="h-[420px] w-full object-contain lg:h-[520px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-900/30 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-cream-50 p-5 shadow-card sm:block animate-floatY">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-800 text-cream-50">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-wood-700">
                      4 mùi hương thiên nhiên
                    </div>
                    <div className="text-xs text-ink-400">
                      Cam · Bạc Hà · Chanh Sả · Quế
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge top-right */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl bg-eco-500 px-4 py-3 text-white shadow-card animate-floatY"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-2xl font-bold">100%</div>
                <div className="text-[11px] font-medium">Tự nhiên</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-cream-200 bg-cream-50/60">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: '4', label: 'Mùi hương thiên nhiên' },
              { value: '100%', label: 'Nguyên liệu tự nhiên' },
              { value: '2-3 tuần', label: 'Phơi nắng tái sử dụng' },
              { value: '4 túi', label: 'Mỗi hộp đóng gói' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-wood-600 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ink-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vấn đề & Giải pháp"
            title="Những rắc rối khi mang giày kín"
            subtitle="Bạn có gặp những tình huống này? Giày Thơm ở đây để giải quyết."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, i) => {
              const Icon = problemIcons[p.icon] || Frown;
              return (
                <div
                  key={p.title}
                  className="card p-7 transition-all hover:shadow-card hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-red-50 text-red-500">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-wood-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Solution banner */}
          <div className="mt-10 overflow-hidden rounded-5xl bg-gradient-to-br from-eco-500 to-eco-700 p-8 text-center text-white shadow-card sm:p-12">
            <div className="pointer-events-none absolute" />
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl text-balance">
              Giải pháp từ Giày Thơm
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-eco-50 text-balance">
              Trao trả sự tự tin cho đôi chân bằng giải pháp hấp phụ mùi và hút
              ẩm tự nhiên, an toàn tuyệt đối cho sức khỏe.
            </p>
          </div>
        </div>
      </section>

      {/* Mini review */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Khách hàng nói gì"
            title="Hàng ngàn đôi giày đã thơm tho"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                name: 'Minh Anh',
                role: 'Học sinh THPT',
                text: 'Giày của mình sau tiết thể dục thường có mùi khó chịu. Từ khi dùng Giày Thơm, mùi hôi giảm rõ rệt và giày luôn giữ được hương thơm tự nhiên.',
              },
              {
                name: 'Tuấn Kiệt',
                role: 'Sinh viên',
                text: 'Túi nhỏ gọn, rất tiện mang theo. Tối đá bóng về chỉ cần bỏ túi thơm vào giày, sáng hôm sau giày khô ráo và thơm mát.',
              },
            ].map((r) => (
              <div key={r.name} className="card p-8">
                <Quote className="h-8 w-8 text-eco-300" />
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-wood-100 font-display text-base font-bold text-wood-700">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-800">{r.name}</div>
                    <div className="text-sm text-ink-400">{r.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-eco-500 text-eco-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageNav current="home" onNavigate={onNavigate} />
    </div>
  );
}
