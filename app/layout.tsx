import type { Metadata } from 'next';
import './globals.css';

const siteBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paina.jarrettwroten.com',
);
const socialCardPath = '/paina-social-card-113effa5.png';
const socialCardUrl = new URL(socialCardPath, siteBase).toString();

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
        url: socialCardPath,
        width: 1200,
        height: 630,
        alt: 'Paina Cafe mochi donuts and Hawaiian bowls. Mochi. Poke. Pā‘ina.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paina Cafe | Paina Means Gathering',
    description: 'Fresh poke, hot Hawaiian plates, and mochi donuts at two Las Vegas locations.',
    images: [socialCardPath],
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
        <link rel="image_src" href={socialCardUrl} />
        <meta name="thumbnail" content={socialCardUrl} />
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
