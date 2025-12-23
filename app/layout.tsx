// app/layout.tsx

import "./globals.css";

import Header from './Components/Header';
import Footer from './Components/Footer';

import { ReactNode } from 'react';

export const metadata = {
  title: 'Mon Site Personnel',
  description: 'Bienvenue sur mon site web',
};

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>
      
        <Footer />
      </body>
    </html>
  );
}
