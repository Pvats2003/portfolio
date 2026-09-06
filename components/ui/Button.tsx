import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  external?: boolean;
  className?: string;
}

export function Button({ href, children, variant = 'primary', showArrow = false, external = false, className }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-bg hover:bg-ink'
      : 'border border-border-strong text-ink hover:border-accent hover:text-accent';

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, styles, className)}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {content}
    </Link>
  );
}
