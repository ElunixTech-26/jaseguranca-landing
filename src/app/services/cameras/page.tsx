import Cta from "@/components/cta/cta";
import styles from "@/app/services/cameras/CameraPage.module.css"
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Faq from "@/components/faq/faq";

// Este objeto é o que o Google lê
export const metadata: Metadata = {
  title: "Câmeras de Segurança e Monitoramento 24h | J.A Segurança",
  description: "Instalação profissional de sistemas de CFTV, câmeras IP e acesso remoto em Canoas e região. Proteja seu patrimônio com tecnologia de ponta.",
  keywords: ["câmeras de segurança", "monitoramento 24h", "segurança eletrônica canoas", "instalação cftv", "J.A Segurança"],
  // OpenGraph faz o link ficar bonito quando compartilhado no WhatsApp/Social
  openGraph: {
    title: "Monitoramento Inteligente - J.A Segurança Eletrônica",
    description: "Sistemas de alta performance com acesso pelo celular.",
    images: ["/logo-base-letter-jpeg.png"], // Imagem que aparece no compartilhamento
  },
};

const passosInstalacao = [
  {
    numero: "01",
    titulo: "Análise de Pontos Cego",
    descricao: "Visitamos o local para identificar os pontos estratégicos e garantir 100% de cobertura sem falhas."
  },
  {
    numero: "02",
    titulo: "Infraestrutura e Cabeamento",
    descricao: "Realizamos a passagem de cabos blindados ou configuração de rede Wi-Fi dedicada para evitar interferências."
  },
  {
    numero: "03",
    titulo: "Fixação e Ajuste de Ângulo",
    descricao: "Instalamos os equipamentos e ajustamos o foco e ângulo de visão para máxima nitidez dia e noite."
  },
  {
    numero: "04",
    titulo: "Configuração e Treinamento",
    descricao: "Configuramos o acesso no seu celular e ensinamos você a monitorar tudo em tempo real."
  }
];

export default function CamerasPage() {
  return (
    <main className={styles.main}>

      <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs />
      </div>


      {/* HERO DA PÁGINA */}
      <section className={styles.heroSection}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${styles.animateIn} text-center lg:text-left`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
              Monitoramento <span className="text-(--color-secondary)">Inteligente</span>
            </h1>
            <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed">
              Instalamos sistemas de CFTV com diversas opções de escolha. Temos câmeras com reconhecimento facial, visão noturna, detecção de movimento humana e opções de câmeras com inteligência artificial. Tudo fácil e rápido na palma da sua mão.   
           </p>
            <ul className={`${styles.checks}`}>
              <li className="flex gap-3 items-center"><span className="text-(--color-secondary)">✔</span> Resolução 4K Ultra HD</li>
              <li className="flex gap-3 items-center"><span className="text-(--color-secondary)">✔</span> Visão Noturna</li>
              <li className="flex gap-3 items-center"><span className="text-(--color-secondary)">✔</span> Inteligência Artificial</li>
            </ul>
          </div>
          
          {/* Grid Otimizado: auto-rows no mobile para não achatar, h fixo só no desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 h-auto lg:h-[550px] w-full">
            
            {/* FOTO 1 - Âncora Vertical */}
            <div className={`${styles.animateIn} relative lg:col-span-7 lg:row-span-2 h-[400px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.4s' }}>
              <Image 
                src="/camera-poste.png" 
                alt="Instalação em altura" 
                fill 
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* FOTO 2 - Superior Direita */}
            <div className={`${styles.animateIn} relative lg:col-span-5 lg:row-span-1 h-[250px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.2s' }}>
              <Image 
                src="/cameras-intelbras.jpeg" 
                alt="Monitoramento Profissional" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* FOTO 3 - Inferior Direita - desktop */}
            <div className={`${styles.animateIn} md:block hidden relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.6s' }}>
              <Image 
                src="/cameras-intelbras-2.png" 
                alt="Câmeras de alta tecnologia" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>


          </div>
          
        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA */}
      <section className={styles.timelineSection}>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins">Como funciona a instalação?</h2>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.line}></div>

          {passosInstalacao.map((passo, index) => (
            <div 
              key={index} 
              className={`${styles.stepRow} ${index % 2 !== 0 ? styles.stepRowInverse : ""} ${styles.animateIn}`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className={styles.card}>
                <span className={styles.number}>{passo.numero}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{passo.titulo}</h3>
                <p className="text-(--color-text-secondary) leading-relaxed">
                  {passo.descricao}
                </p>
              </div>

              <div className={styles.dot}></div>
              
              {/* Espaçador invisível para manter o grid no desktop */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </section>

      <Cta servicoPadrao="Câmeras de Segurança" />
      <Faq />
      
    </main>
  );
}