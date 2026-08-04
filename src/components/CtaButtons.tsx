import { ShoppingBag, Sparkles } from 'lucide-react';
import { SHOPEE_URL, TIKTOK_URL } from '@/content';

type CtaButtonsProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  className?: string;
};

export default function CtaButtons({
  size = 'md',
  variant = 'default',
  className = '',
}: CtaButtonsProps) {
  const sizeClass =
    size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-sm';
  const padClass =
    size === 'lg' ? 'px-8 py-4' : size === 'sm' ? 'px-5 py-2.5' : 'px-6 py-3';

  const shopee =
    variant === 'outline'
      ? `inline-flex items-center justify-center gap-2 rounded-full ${padClass} ${sizeClass} font-semibold text-wood-600 border-2 border-wood-300 transition-all duration-300 hover:border-wood-500 hover:bg-wood-50`
      : `inline-flex items-center justify-center gap-2 rounded-full ${padClass} ${sizeClass} font-semibold text-cream-50 bg-wood-500 transition-all duration-300 hover:bg-wood-600 hover:shadow-card hover:-translate-y-0.5`;

  const tiktok =
    variant === 'outline'
      ? `inline-flex items-center justify-center gap-2 rounded-full ${padClass} ${sizeClass} font-semibold text-eco-600 border-2 border-eco-300 transition-all duration-300 hover:border-eco-500 hover:bg-eco-50`
      : `inline-flex items-center justify-center gap-2 rounded-full ${padClass} ${sizeClass} font-semibold text-white bg-eco-500 transition-all duration-300 hover:bg-eco-600 hover:shadow-glow hover:-translate-y-0.5`;

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer" className={shopee}>
        <ShoppingBag className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
        Mua trên Shopee
      </a>
      <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={tiktok}>
        <Sparkles className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
        Mua trên TikTok Shop
      </a>
    </div>
  );
}
