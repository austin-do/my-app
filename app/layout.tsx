import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import AppTopNavbar from '@/components/Navigation/AppTopNavbar';
import AppFooter from '@/components/AppFooter/AppFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Den Den Dori',
  description: 'Claw Machine Arcade',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className} style={{ margin: 0 }}>
      <AppTopNavbar />
      {children}
      <AppFooter />
    </body>
  </html>
);

export default RootLayout;
