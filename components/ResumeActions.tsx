'use client';

import { Download } from 'lucide-react';

export function DownloadResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium tracking-tight text-bg transition-colors duration-300 ease-editorial hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:hidden"
    >
      <Download className="h-4 w-4" />
      Download Resume
    </button>
  );
}
