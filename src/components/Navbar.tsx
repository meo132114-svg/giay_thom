import { useState, useEffect } from 'react';
import { Menu, X, Wind } from 'lucide-react';
import { PAGES, type PageId } from '@/content';

type NavbarProps = {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
};

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={() => go('home')}
            className="group flex items-center gap-3"
            aria-label="Giày Thơm - Trang chủ"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-wood-500 text-cream-50 shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-6">
              <Wind className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="font-display text-lg font-bold leading-none tracking-tight text-wood-700">
                GIÀY THƠM
              </div>
              <div className="text-[11px] font-medium text-eco-600">
                Giày thơm tho, lo gì tiết thể dục!
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => go(page.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  currentPage === page.id
                    ? 'text-wood-700'
                    : 'text-ink-500 hover:text-wood-600'
                }`}
              >
                {page.label}
                {currentPage === page.id && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-eco-500" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-wood-600 transition-colors hover:bg-wood-50 lg:hidden"
            aria-label="Mở menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="glass-nav border-t border-wood-200/40 px-4 py-4">
          <div className="flex flex-col gap-1">
            {PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => go(page.id)}
                className={`rounded-2xl px-4 py-3 text-left text-base font-semibold transition-all ${
                  currentPage === page.id
                    ? 'bg-wood-50 text-wood-700'
                    : 'text-ink-600 hover:bg-cream-100'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
}
