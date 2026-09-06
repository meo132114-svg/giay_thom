import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Facebook,
  Instagram,
  Send,
} from 'lucide-react';
import { FAQS, CONTACT, type PageId } from '@/content';
import SectionHeading from '@/components/SectionHeading';

type FaqPageProps = {
  onNavigate: (page: PageId) => void;
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
  </svg>
);

export default function FaqPage({ onNavigate: _onNavigate }: FaqPageProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || sending) return;

    setSending(true);
    setFeedback(null);

    try {
      await emailjs.send(
        'service_7qd4nwj',
        'template_22cfwif',
        {
          name: form.name,
          email: form.email,
          from_name: form.name,     // Dự phòng cho template EmailJS dùng biến from_name
          from_email: form.email,   // Dự phòng cho template EmailJS dùng biến from_email
          reply_to: form.email,
          message: form.message,
        },
        'rW6uH1LsvWwYAfhdJ'
      );
      setForm({ name: '', email: '', message: '' });
      setFeedback('success');
    } catch (error) {
      console.error("Lỗi gửi mail:", error);
      setFeedback('error');
    } finally {
      setSending(false);
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
            thường gặp nhất và thông tin liên hệ trực tiếp với Giày Thơm.
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
            title="Kết nối với Giày Thơm"
            subtitle="Đội ngũ chăm sóc khách hàng luôn sẵn sàng lắng nghe và hỗ trợ bạn."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contact info */}
            <div className="card h-full p-8">
              <h3 className="font-display text-xl font-bold text-wood-700">
                Thông tin liên hệ
              </h3>
              <div className="mt-6 space-y-5">
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 transition-opacity hover:opacity-80">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-eco-100 text-eco-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink-400">Email</div>
                    <div className="font-semibold text-ink-800">{CONTACT.email}</div>
                  </div>
                </a>
                <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-4 transition-opacity hover:opacity-80">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-eco-100 text-eco-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink-400">Hotline</div>
                    <div className="font-semibold text-ink-800">{CONTACT.phone}</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-eco-100 text-eco-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink-400">Địa chỉ văn phòng</div>
                    <div className="font-semibold text-ink-800">{CONTACT.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media & Form */}
            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="font-display text-xl font-bold text-wood-700">
                  Mạng xã hội
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  Theo dõi Giày Thơm trên các nền tảng mạng xã hội.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877F2] text-white transition-transform hover:-translate-y-0.5">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FFB13B] via-[#DD2A7B] to-[#8134AF] text-white transition-transform hover:-translate-y-0.5">
                    <Instagram className="h-6 w-6" />
                  </a>
                  {/* Sử dụng TikTokIcon ở đây để tránh lỗi unused variable */}
                  <a href={CONTACT.tiktok || "#"} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white transition-transform hover:-translate-y-0.5">
                    <TikTokIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="card p-8">
                <form onSubmit={handleSubmit}>
                  <h3 className="font-display text-xl font-bold text-wood-700">
                    Gửi tin nhắn cho chúng tôi
                  </h3>
                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-ink-700">Họ và tên</label>
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
                      <label className="text-sm font-semibold text-ink-700">Email của bạn</label>
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
                      <label className="text-sm font-semibold text-ink-700">Nội dung tin nhắn</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Nhập nội dung bạn cần hỗ trợ..."
                        className="mt-2 w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-ink-800 outline-none transition-all focus:border-wood-400 focus:ring-2 focus:ring-wood-200"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-wood-700 px-6 py-3 font-semibold text-white transition-all hover:bg-wood-800 disabled:opacity-50"
                    >
                      {sending ? 'Đang gửi...' : 'Gửi tin nhắn'}
                      <Send className="h-4 w-4" />
                    </button>

                    {feedback === 'success' && (
                      <p className="text-sm text-green-600 text-center font-medium">
                        Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm.
                      </p>
                    )}
                    {feedback === 'error' && (
                      <p className="text-sm text-red-600 text-center font-medium">
                        Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}