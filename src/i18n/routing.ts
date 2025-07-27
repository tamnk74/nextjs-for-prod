import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'vi'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The pathname prefix for each locale
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
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
