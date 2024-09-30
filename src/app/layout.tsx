import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/layout/Header';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Industrial Energy Battery | Tesla',
  description: 'Site layout configure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black antialiased`}
      >
        <div className='flex h-screen flex-col overflow-hidden'>
          <Header />
          <main className=''>{children}</main>
        </div>
      </body>
    </html>
  );
}
