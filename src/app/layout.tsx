import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ style: ['normal', 'italic'], weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS App For Testing',
  description: 'NextJS App for Testing'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
