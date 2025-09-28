import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import QueryProvider from '../hooks/QueryProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'HanaLoop',
    template: '%s | HanaLoop',
  },
  description: 'Carbon Emissions Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <div className='flex h-screen bg-gray-50'>
            <NavBar />
            <main className='flex flex-1 flex-col overflow-y-auto'>
              <section className='p-6'>{children}</section>
              <Footer />
            </main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
