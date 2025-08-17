import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Navbar from './components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'sonner';
import FlyonuiScript from '@/shared/lib/FlyonuiScript';
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { ReactQueryProvider } from './providers/ReactQueryProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  // Ensure locale is valid, fallback to default if not
  const validLocales = ['en', 'vi'];
  const validatedLocale = validLocales.includes(locale) ? locale : 'en';
  
  const messages = await getMessages();

  return (
    <html lang={validatedLocale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClerkProvider>
          <NextIntlClientProvider messages={messages}>
            <ReactQueryProvider>
              <div className="min-h-screen">
                <Navbar />
                <main className="pt-16">
                  {children}
                </main>
              </div>
            </ReactQueryProvider>
          </NextIntlClientProvider>
        </ClerkProvider>
        <Toaster />
        <div className="cf-turnstile" data-sitekey="0x4AAAAAABjTaSufpzCDM6pN" data-theme="light"></div>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </body>
      <FlyonuiScript />
    </html>
  );
}
