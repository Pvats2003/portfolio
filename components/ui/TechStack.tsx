import { cn } from '@/lib/utils';

export function TechStack({ items, className }: { items: string[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li key={item} className="rounded border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
