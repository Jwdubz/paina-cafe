import type { Metadata } from 'next';
import './globals.css';

const siteBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paina.jarrettwroten.com',
);
const socialCardPath = '/paina-social-card-e57e400b.png';
const socialCardUrl = new URL(socialCardPath, siteBase).toString();

export const metadata: Metadata = {
  metadataBase: siteBase,
  title: 'Paina Cafe | Hawaiian Food in Las Vegas',
  description: 'Gather around fresh poke, hot Hawaiian plates, and Paina Cafe mochi donuts at two Las Vegas locations.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
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
        alt: 'Paina Cafe mochi donuts and Hawaiian bowls. Mochi Poke Pā‘ina.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `(function(w,d){w.clarity=w.clarity||function(){(w.clarity.q=w.clarity.q||[]).push(arguments)};var done=0,ev=["scroll","pointerdown","keydown"],o={passive:true,capture:true};function go(){if(done)return;done=1;ev.forEach(function(e){w.removeEventListener(e,go,o)});var t=d.createElement("script");t.async=1;t.src="https://www.clarity.ms/tag/yvve5xueah";var y=d.getElementsByTagName("script")[0];y.parentNode.insertBefore(t,y)}ev.forEach(function(e){w.addEventListener(e,go,o)});function idle(){w.requestIdleCallback?w.requestIdleCallback(go,{timeout:2500}):setTimeout(go,2500)}d.readyState==="complete"?idle():w.addEventListener("load",idle,{once:true})})(window,document);clarity("set","site","paina");` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var q=new URLSearchParams(location.search).get('motion'),r=q==='reduced';if(q!=='reduced'&&q!=='full'){try{r=localStorage.getItem('paina-motion-v1')==='reduced'}catch(e){}}document.documentElement.dataset.motion=r?'reduced':'full'})();` }} />
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
