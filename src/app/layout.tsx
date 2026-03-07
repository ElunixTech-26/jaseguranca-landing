import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from 'next/font/google'

import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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
  description: "J.A Segurança Eletrônica: Especialistas em CFTV, alarmes, cercas elétricas e automação residencial em Canoas. Proteja seu patrimônio com tecnologia de ponta e instalação profissional. Solicite um orçamento gratuito!",
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
        <Footer/>
      </body>
    </html>
  );
}
