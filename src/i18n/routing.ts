import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'vi'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Paths that should not be internationalized
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      vi: '/gioi-thieu',
    },
    '/libs': {
      en: '/libs',
      vi: '/thu-vien',
    },
    '/roadmap/frontend': {
      en: '/roadmap/frontend',
      vi: '/lo-trinh/frontend',
    },
    '/roadmap/backend': {
      en: '/roadmap/backend',
      vi: '/lo-trinh/backend',
    },
    '/posts': {
      en: '/posts',
      vi: '/bai-viet',
    },
    '/profile': {
      en: '/profile',
      vi: '/ho-so',
    },
    '/calendar': {
      en: '/calendar',
      vi: '/lich',
    },
    '/feedback': {
      en: '/feedback',
      vi: '/phan-hoi',
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
