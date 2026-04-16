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
  keywords: ["câmeras de segurança em canoas", "monitoramento 24h", "segurança eletrônica canoas", "instalação cftv canoas", "J.A Segurança"],
  // OpenGraph faz o link ficar bonito quando compartilhado no WhatsApp/Social
  openGraph: {
    title: "Monitoramento Inteligente - J.A Segurança Eletrônica",
    description: "Sistemas de alta performance com acesso pelo celular.",
    images: ["/illustrative/service-camera-card.png"], // Imagem que aparece no compartilhamento
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
        <div className="w-full text-center items-center flex flex-col justify-center">
          <h1 className="pageTitle">
            Câmeras de Segurança em <span className="text-(--color-secondary)">Canoas</span> <br/>Monitoramento Inteligente para o seu dia a dia
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${styles.animateIn} text-center lg:text-left`}>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Ter visibilidade total do seu ambiente é um dos pilares de uma segurança eficiente. Com sistemas modernos de câmeras de segurança, você acompanha tudo o que acontece em tempo real, com mais controle e tranquilidade, seja em casa ou na sua empresa.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Desenvolvemos projetos de instalação de câmeras em Canoas e região, utilizando equipamentos de alta resolução, acesso remoto pelo celular e armazenamento seguro de imagens. Cada sistema é pensado de forma estratégica, garantindo cobertura completa e monitoramento eficiente dos espaços mais importantes.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Além da proteção, as câmeras também funcionam como um forte elemento de prevenção, inibindo ações indesejadas e trazendo mais segurança para residências, empresas e condomínios. Tudo isso com tecnologia acessível e fácil de usar no dia a dia.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
            Atendemos Canoas e toda a região metropolitana com soluções personalizadas em segurança eletrônica. Fale com nossa equipe e descubra como ter mais controle e proteção no seu ambiente.
          </p>

          <ul className={`${styles.checks} flex flex-col items-center lg:items-start`}>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Equipamentos <strong className="text-white">Intelbras</strong> de alta performance
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Imagens em 4K Ultra HD com nitidez absoluta
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Detecção por IA: alertas reais em tempo real
            </li>
          </ul>
        </div>
          
          {/* Grid Otimizado: auto-rows no mobile para não achatar, h fixo só no desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 h-auto lg:h-[550px] w-full">
            
            {/* FOTO 1 - Âncora Vertical */}
            <div className={`${styles.animateIn} relative lg:col-span-7 lg:row-span-2 h-[400px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.4s' }}>
              <Image 
                src="/camera-poste.png" 
                alt="Câmera instalada em um poste." 
                fill 
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* FOTO 2 - Superior Direita */}
            <div className={`${styles.animateIn} relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.2s' }}>
              <Image 
                src="/foto-camera-3.jpeg" 
                alt="Câmera intelbras instalada no alto" 
                fill 
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* FOTO 3 - Inferior Direita - desktop */}
            <div className={`${styles.animateIn} md:block relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.6s' }}>
              <Image 
                src="/cameras-intelbras-2.png" 
                alt="Câmeras intelbras na embalagem" 
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