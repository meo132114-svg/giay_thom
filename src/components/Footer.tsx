import { ShoppingBag, Sparkles, Wind, Mail, Phone, MapPin } from 'lucide-react';
import { PAGES, SHOPEE_URL, TIKTOK_URL, type PageId } from '@/content';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-20 bg-ink-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-wood-500 text-cream-50">
                <Wind className="h-5 w-5" />
              </div>
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
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-eco-400" />
                hello@giaythom.vn
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-eco-400" />
                Hotline / Zalo: Cập nhật
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-eco-400" />
                Cập nhật địa chỉ văn phòng
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-eco-400">
              Mua Ngay
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm"
              >
                <ShoppingBag className="h-4 w-4" />
                Mua trên Shopee
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-eco w-full text-sm"
              >
                <Sparkles className="h-4 w-4" />
                Mua trên TikTok Shop
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-300/10 pt-6 text-center text-xs text-cream-300/60">
          © 2026 GIÀY THƠM. All Rights Reserved. · Sản xuất tại Việt Nam 🇻🇳
        </div>
      </div>
    </footer>
  );
}
