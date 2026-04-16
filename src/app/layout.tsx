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
  
  robots: {
    index: true,
    follow: true,
  },

    // ── Open Graph (WhatsApp, Facebook, LinkedIn)  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jasegurancars.com.br",
    siteName: "J.A Segurança Eletrônica",
    title: "J.A Segurança Eletrônica | J.A Segurança Eletrônica Canoas",
    description:
      "J.A Segurança Eletrônica: Especialistas em CFTV, alarmes, cercas elétricas e automação residencial em Canoas. Proteja seu patrimônio com tecnologia de ponta e instalação profissional. Solicite um orçamento gratuito!",
    images: [
      {
        url: "/illustrative/leo-cartoon.png",
        width: 1200,
        height: 630,
        alt: "Clínica Terapias do Corpo — Porto Alegre",
      },
    ],
  },

  manifest: "/manifest.json",
  icons: {
    icon: ["/icon-96x96.png", "/favicon.ico"],
    apple: "/apple-icon.png"
  },
  verification: {
    google: 'iL8GGNdY0-dc9ScKKmxaftJsOzKpaORLP1wbRZFuJEU'
  }
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "J.A Segurança Eletrônica",
  description:
    "Empresa especializada em segurança eletrônica em Canoas e região metropolitana. Instalação de câmeras de segurança, alarmes, cercas elétricas, automação de portões e controle de acesso para residências, empresas e condomínios.",
  url: "https://www.jasegurancars.com.br",  
  telephone: "+55-51-83490527",  
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canoas",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Canoas",
    },
    {
      "@type": "City",
      name: "Porto Alegre",
    },
    {
      "@type": "City",
      name: "Esteio",
    },
    {
      "@type": "City",
      name: "Sapucaia do Sul",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.9176,
    longitude: -51.1836,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    }
  ],
  sameAs: [
    "https://www.instagram.com/j.a.segurancars/",
  ],
  priceRange: "$$",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
