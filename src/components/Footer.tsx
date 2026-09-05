import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { PAGES, CONTACT, type PageId } from '@/content';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
  </svg>
);

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-20 bg-ink-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo-removebg-preview.png"
                alt="Logo Giày Thơm"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-display text-lg font-bold tracking-tight">
                  GIÀY THƠM
                </div>
                <div className="text-[11px] font-medium text-eco-400">
                  Giày thơm tho, lo gì tiết thể dục!
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-300/80">
              Túi khử mùi giày từ than hoạt tính & tinh dầu thiên nhiên — hút
              ẩm, khử mùi, mang lại hương thơm tự nhiên cho đôi giày của bạn.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-eco-400">
              Khám Phá
            </h4>
            <ul className="mt-4 space-y-2">
              {PAGES.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => onNavigate(page.id)}
                    className="text-sm text-cream-300/80 transition-colors hover:text-eco-300"
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-eco-400">
              Liên Hệ
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-300/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-eco-400" />
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-eco-300">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-eco-400" />
                <a href={`tel:${CONTACT.phone}`} className="transition-colors hover:text-eco-300">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-eco-400" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-eco-400">
              Mạng Xã Hội
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-300/10 text-cream-200 transition-all hover:bg-eco-500 hover:text-white hover:-translate-y-0.5"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-300/10 text-cream-200 transition-all hover:bg-eco-500 hover:text-white hover:-translate-y-0.5"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-300/10 text-cream-200 transition-all hover:bg-eco-500 hover:text-white hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-300/10 pt-6 text-center text-xs text-cream-300/60">
          © 2026 GIÀY THƠM. All Rights Reserved. · Sản xuất tại Việt Nam
        </div>
      </div>
    </footer>
  );
}
