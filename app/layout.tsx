import type { Metadata } from 'next';
import './globals.css';

const siteBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paina.jarrettwroten.com',
);

export const metadata: Metadata = {
  metadataBase: siteBase,
  title: 'Paina Cafe | Hawaiian Food in Las Vegas',
  description: 'Gather around fresh poke, hot Hawaiian plates, and Paina Cafe mochi donuts at two Las Vegas locations.',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Paina Cafe | Paina Means Gathering',
    description: 'Fresh poke, hot Hawaiian plates, and mochi donuts at two Las Vegas locations.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/paina-social-card-v2.png',
        width: 1200,
        height: 630,
        alt: 'Paina Cafe in Las Vegas. Come hungry.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paina Cafe | Paina Means Gathering',
    description: 'Fresh poke, hot Hawaiian plates, and mochi donuts at two Las Vegas locations.',
    images: ['/paina-social-card-v2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/bricolage-grotesque-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
