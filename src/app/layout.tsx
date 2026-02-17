import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from 'next/font/google'

import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-inter-next',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins-next',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-montserrat-next',
})

export const metadata: Metadata = {
  title: "J.A Segurança Eletrônica",
  description: "Descrição a definir...",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
