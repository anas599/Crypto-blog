import './globals.css';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from './context/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-slate-800 text-slate-100 mx-auto p-4`}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
