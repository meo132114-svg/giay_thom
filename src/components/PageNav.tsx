import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PAGES, type PageId } from '@/content';

type PageNavProps = {
  current: PageId;
  onNavigate: (page: PageId) => void;
};

export default function PageNav({ current, onNavigate }: PageNavProps) {
  const idx = PAGES.findIndex((p) => p.id === current);
  const prev = idx > 0 ? PAGES[idx - 1] : null;
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

  return (
    <div className="mx-auto mt-16 flex max-w-3xl items-center justify-between gap-4">
      {prev ? (
        <button
          onClick={() => onNavigate(prev.id)}
          className="group flex items-center gap-3 rounded-2xl border border-wood-200 bg-cream-50 px-5 py-4 transition-all hover:border-wood-400 hover:shadow-soft"
        >
          <ArrowLeft className="h-5 w-5 text-wood-500 transition-transform group-hover:-translate-x-1" />
          <div className="text-left">
            <div className="text-xs font-medium text-ink-400">Trang trước</div>
            <div className="text-sm font-bold text-wood-700">{prev.short}</div>
          </div>
        </button>
      ) : (
        <div />
      )}

      {next ? (
        <button
          onClick={() => onNavigate(next.id)}
          className="group flex items-center gap-3 rounded-2xl bg-wood-500 px-5 py-4 text-cream-50 shadow-soft transition-all hover:bg-wood-600 hover:shadow-card hover:-translate-y-0.5"
        >
          <div className="text-right">
            <div className="text-xs font-medium text-cream-200">Tiếp tục</div>
            <div className="text-sm font-bold">{next.short}</div>
          </div>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
