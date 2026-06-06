import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

/** Vectorless node-graph mark — a tree the agent navigates. */
function VectorlessMark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="vl-mark" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#1456F0" />
            <stop offset="55%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#EA5EC1" />
          </linearGradient>
        </defs>
        <path
          d="M12 3v5M12 8L6 14M12 8l6 6M6 14v3M18 14v3"
          stroke="url(#vl-mark)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="3" r="2.1" fill="url(#vl-mark)" />
        <circle cx="6" cy="15.5" r="2.1" fill="url(#vl-mark)" />
        <circle cx="18" cy="15.5" r="2.1" fill="url(#vl-mark)" />
        <circle cx="12" cy="8" r="1.5" fill="url(#vl-mark)" />
      </svg>
      <span className="font-semibold tracking-tight text-[0.95rem]">{appName}</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <VectorlessMark />,
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
