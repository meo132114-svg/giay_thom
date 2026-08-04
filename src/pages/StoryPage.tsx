import { Leaf, Heart, Recycle, Sparkles, Globe2, Wind, Target, Eye } from 'lucide-react';
import { IMAGES } from '@/content';
import CtaButtons from '@/components/CtaButtons';
import SectionHeading from '@/components/SectionHeading';
import PageNav from '@/components/PageNav';
import type { PageId } from '@/content';

type StoryPageProps = {
  onNavigate: (page: PageId) => void;
};

const timeline = [
  {
    icon: Sparkles,
    title: 'Ý tưởng nhen nhóm',
    desc: 'Khởi đầu từ mong muốn đơn giản: mang đến cho các bạn trẻ một đôi giày luôn sạch mùi, khô ráo mỗi ngày.',
  },
  {
    icon: Leaf,
    title: 'Tìm kiếm nguyên liệu',
    desc: 'Chúng tôi chọn than hoạt tính và tinh dầu thiên nhiên — nguyên liệu an toàn, lành tính và có khả năng tái sử dụng cao.',
  },
  {
    icon: Wind,
    title: 'Hoàn thiện sản phẩm',
    desc: 'Kết hợp than hoạt tính hút ẩm với 4 mùi hương tinh dầu, tạo nên túi khử mùi nhỏ gọn, hiệu quả và thân thiện môi trường.',
  },
  {
    icon: Globe2,
    title: 'Sản phẩm đến tay bạn',
    desc: 'Giày Thơm chính thức ra mắt, được học sinh, sinh viên Việt Nam tin dùng. Chúng tôi tiếp tục cải tiến mỗi ngày.',
  },
];

const values = [
  { label: 'Chất lượng', desc: 'Sản phẩm được kiểm định kỹ lưỡng trước khi đến tay khách hàng.' },
  { label: 'An toàn', desc: '100% nguyên liệu tự nhiên, không chứa hóa chất độc hại.' },
  { label: 'Sáng tạo', desc: 'Kết hợp than hoạt tính và tinh dầu trong thiết kế tinh gọn.' },
  { label: 'Bền vững', desc: 'Tái sử dụng lâu dài nhờ cơ chế phơi nắng đơn giản.' },
  { label: 'Thân thiện môi trường', desc: 'Giảm thiểu rác thải, hướng tới lối sống xanh.' },
  { label: 'Tận tâm với khách hàng', desc: 'Lắng nghe và cải tiến không ngừng từ phản hồi thực tế.' },
];

export default function StoryPage({ onNavigate }: StoryPageProps) {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36">
        <div className="pointer-events-none absolute -top-10 right-0 h-72 w-72 rounded-full bg-wood-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="pill bg-wood-100 text-wood-700 animate-fadeInUp">
            <Leaf className="h-4 w-4" />
            Câu chuyện thương hiệu
          </span>
          <h1
            className="mt-5 animate-fadeInUp font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            style={{ animationDelay: '0.1s' }}
          >
            Hành trình từ ý tưởng mộc mạc
          </h1>
          <p
            className="mt-6 animate-fadeInUp text-lg leading-relaxed text-ink-600 text-balance"
            style={{ animationDelay: '0.2s' }}
          >
            Giày Thơm được hình thành từ mong muốn mang đến cho các bạn trẻ đôi
            giày luôn sạch mùi, khô ráo mỗi ngày — và lan tỏa thói quen sống
            xanh.
          </p>
        </div>
      </section>

     {/* Story image */}
<section className="pb-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    {/* 🎯 Thay max-w-2xl thành max-w-4xl để khung 16:9 to bự hơn rõ rệt */}
    <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-5xl shadow-card animate-scaleIn">
      <img
        src="/image2.png"
        alt="Than hoạt tính tự nhiên"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</section>
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-eco-100 text-eco-600">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-wood-700">
                Sứ mệnh
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Cung cấp sản phẩm khử mùi giày thiên nhiên chất lượng cao, giá
                thành hợp lý và hướng tới lối sống bền vững.
              </p>
            </div>
            <div className="card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-wood-100 text-wood-600">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-wood-700">
                Tầm nhìn
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Trở thành thương hiệu túi khử mùi giày tự nhiên top đầu được học
                sinh, sinh viên Việt Nam tin tưởng lựa chọn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-50/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hành trình phát triển"
            title="Từ ý tưởng đến sản phẩm trên tay bạn"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <div
                key={t.title}
                className="relative card p-6 transition-all hover:shadow-card hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-wood-500 text-cream-50 shadow-soft">
                  <t.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 text-sm font-bold text-eco-600">
                  Bước {i + 1}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-wood-700">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Giá trị cốt lõi"
            title="Sáu điều chúng tôi luôn trân trọng"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.label}
                className="group card p-7 transition-all hover:shadow-card hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eco-100 text-eco-600 transition-transform group-hover:scale-110">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-wood-700">
                  {v.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nguyên liệu thật"
            title="Mộc mạc trong từng chi tiết"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { img: "/image2.png", label: 'Than hoạt tính' },
              { img: "/tinhdau.jpg", label: 'Tinh thảo mộc' },
              { img: "/image3.jpg", label: 'Túi vải tự nhiên' },
              { img: "/donggoi.jpg", label: 'Đóng gói tối giản' },
            ].map((g) => (
              <div
                key={g.label}
                className="group overflow-hidden rounded-3xl shadow-soft"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-cream-50">
                    {g.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButtons size="lg" />
          </div>
        </div>
      </section>

      <PageNav current="story" onNavigate={onNavigate} />
    </div>
  );
}
