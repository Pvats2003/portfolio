import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ kicker, title, subtitle, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{kicker}</p>
      )}
      <h2 className="mt-3 text-display-md font-semibold text-ink">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
