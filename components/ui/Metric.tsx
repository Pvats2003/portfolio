import { MetricItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Metric({ value, label, note, className }: MetricItem & { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-mono text-3xl font-semibold text-ink sm:text-4xl">{value}</span>
      <span className="text-sm text-muted">{label}</span>
      {note && <span className="font-mono text-xs text-faint">{note}</span>}
    </div>
  );
}

export function MetricStrip({ metrics, className }: { metrics: MetricItem[]; className?: string }) {
  if (!metrics.length) return null;
  return (
    <div className={cn('grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6', className)}>
      {metrics.map((m) => (
        <Metric key={m.label} {...m} />
      ))}
    </div>
  );
}
