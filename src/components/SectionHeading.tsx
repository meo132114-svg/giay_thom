import { type ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : 'text-left'} max-w-3xl`}>
      {eyebrow && (
        <span className="pill bg-eco-100 text-eco-700">
          <span className="h-1.5 w-1.5 rounded-full bg-eco-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 section-title text-3xl leading-tight sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg text-balance">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
