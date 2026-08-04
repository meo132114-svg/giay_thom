import { useState } from 'react';
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';
import { FAQS, type PageId } from '@/content';
import CtaButtons from '@/components/CtaButtons';
import SectionHeading from '@/components/SectionHeading';
import PageNav from '@/components/PageNav';

type FaqPageProps = {
  onNavigate: (page: PageId) => void;
};

export default function FaqPage({ onNavigate }: FaqPageProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36">
        <div className="pointer-events-none absolute -top-10 left-0 h-72 w-72 rounded-full bg-wood-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="pill bg-wood-100 text-wood-700 animate-fadeInUp">
            <HelpCircle className="h-4 w-4" />
            Câu hỏi thường gặp
          </span>
          <h1 className="mt-5 animate-fadeInUp font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance" style={{ animationDelay: '0.1s' }}>
            FAQ & Liên hệ
          </h1>
          <p className="mt-6 animate-fadeInUp text-lg leading-relaxed text-ink-600 text-balance" style={{ animationDelay: '0.2s' }}>
            Bạn có thắc mắc? Chúng tôi ở đây để giúp. Dưới đây là những câu hỏi
            thường gặp nhất, hoặc gửi tin nhắn cho chúng tôi bất cứ lúc nào.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className={`card overflow-hidden transition-all ${
                    isOpen ? 'shadow-card' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-base font-bold text-wood-700 sm:text-lg">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-eco-500 text-white rotate-180'
                          : 'bg-cream-200 text-wood-600'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-cream-50/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Liên hệ với chúng tôi"
            title="Gửi tin nhắn cho Giày Thơm"
            subtitle="Đội ngũ chăm sóc khách hàng sẽ phản hồi trong vòng 24 giờ."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="card h-full p-8">
                <h3 className="font-display text-xl font-bold text-wood-700">
                  Thông tin liên hệ
                </h3>
                <div className="mt-6 space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@giaythom.vn' },
                    { icon: Phone, label: 'Hotline / Zalo', value: 'Cập nhật hotline' },
                    { icon: MapPin, label: 'Địa chỉ', value: 'Cập nhật địa chỉ văn phòng' },
                    { icon: MessageCircle, label: 'Mạng xã hội', value: 'Facebook · Instagram · TikTok · Zalo OA' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-eco-100 text-eco-600">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-ink-400">
                          {c.label}
                        </div>
                        <div className="font-semibold text-ink-800">
                          {c.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-cream-200 pt-6">
                  <h4 className="text-sm font-bold text-wood-700">
                    Mua ngay tại
                  </h4>
                  <div className="mt-4">
                    <CtaButtons />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card p-8">
                <h3 className="font-display text-xl font-bold text-wood-700">
                  Gửi tin nhắn
                </h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="text-sm font-semibold text-ink-700">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="mt-2 w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-ink-800 outline-none transition-all focus:border-wood-400 focus:ring-2 focus:ring-wood-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@example.com"
                      className="mt-2 w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-ink-800 outline-none transition-all focus:border-wood-400 focus:ring-2 focus:ring-wood-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink-700">
                      Nội dung
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Nhập câu hỏi hoặc tin nhắn của bạn..."
                      className="mt-2 w-full resize-none rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-ink-800 outline-none transition-all focus:border-wood-400 focus:ring-2 focus:ring-wood-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-eco w-full"
                  >
                    <Send className="h-4 w-4" />
                    Gửi tin nhắn
                  </button>
                  {sent && (
                    <div className="animate-fadeIn rounded-2xl bg-eco-100 px-4 py-3 text-center text-sm font-semibold text-eco-700">
                      Cảm ơn bạn! Tin nhắn đã được gửi. Chúng tôi sẽ phản hồi sớm.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <PageNav current="faq" onNavigate={onNavigate} />
    </div>
  );
}
