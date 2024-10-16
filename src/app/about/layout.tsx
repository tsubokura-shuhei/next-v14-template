

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aboutぺーじ（title）',
  description: 'Aboutぺーじ（description）',
  openGraph:{
    title:"Aboutぺーじ（ogp-title）",
    description:"Aboutぺーじ（description）",
    url:"Aboutぺーじ（description）",
    siteName:"Aboutぺーじ（siteName）",
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body >{children}</body>
    </html>
  );
}
