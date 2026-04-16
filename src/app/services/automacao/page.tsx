import Cta from "@/components/cta/cta";
import styles from "@/app/services/cameras/CameraPage.module.css"
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Faq from "@/components/faq/faq";

export const metadata: Metadata = {
  title: "Automação Residencial e Empresarial Inteligente | J.A Segurança",
  description: "Transforme sua casa ou empresa com automação inteligente. Controle iluminação, ar-condicionado, portões e mais via voz ou smartphone. Tecnologia de ponta em Canoas.",
  keywords: ["automação residencial", "casa inteligente", "automação empresarial", "Alexa", "Google Home", "smart home canoas", "J.A Segurança"],
  openGraph: {
    title: "Sua Casa Inteligente - J.A Segurança",
    description: "Conforto, economia e tecnologia sob seu comando.",
    images: ["/illustrative/automacao-card.png"],
  },
};

const passosInstalacao = [
  {
    numero: "01",
    titulo: "Diagnóstico de Infraestrutura",
    descricao: "Mapeamos os dispositivos que você deseja automatizar, verificando a compatibilidade de redes Wi-Fi e hubs de automação para garantir estabilidade total."
  },
  {
    numero: "02",
    titulo: "Instalação de Atuadores Inteligentes",
    descricao: "Instalamos relés, módulos de iluminação e sensores embutidos, mantendo a estética original do seu ambiente com acabamento impecável."
  },
  {
    numero: "03",
    titulo: "Configuração do Hub Central",
    descricao: "Configuramos o 'cérebro' da sua casa. Unificamos todos os aparelhos (TV, Ar, Portão) em uma única interface intuitiva e potente."
  },
  {
    numero: "04",
    titulo: "Criação de Rotinas e Cenas",
    descricao: "Criamos automações inteligentes como 'Chegar em Casa' (luzes acendem, ar liga, portão abre) ou 'Sair de Casa' (tudo desliga, alarme ativa)."
  },
  {
    numero: "05",
    titulo: "Integração por Voz",
    descricao: "Conectamos sua casa com Alexa ou Google Assistente, tornando a automação uma extensão natural da sua rotina através de comandos de voz."
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
            <span className="text-(--color-secondary)">Automação</span> Residencial em <span className="text-(--color-secondary)">Canoas</span><br/> Sua Casa Sob Seu Comando
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className={`${styles.animateIn} text-center lg:text-left`}>

        <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
          Imagine ter controle total do seu ambiente com apenas um toque ou comando de voz. A automação residencial transforma a forma como você vive, trazendo mais conforto, praticidade e eficiência para o seu dia a dia, seja em casa ou no seu negócio.
        </p>

        <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
          Desenvolvemos projetos de automação residencial em Canoas e região, integrando iluminação, climatização, segurança e acessos em um único sistema inteligente. Trabalhamos com tecnologias compatíveis com <strong className="text-white">Alexa e Google Assistente</strong>, permitindo que você controle tudo de forma simples, mesmo à distância.
        </p>

        <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
          Com a automação, sua rotina se adapta ao seu estilo de vida. É possível programar cenários como "modo cinema", ajustar automaticamente a temperatura dos ambientes ou até otimizar o consumo de energia em empresas, reduzindo custos e aumentando a eficiência operacional.
        </p>

        <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
          Atendemos Canoas e toda a região metropolitana com soluções personalizadas, pensadas para elevar o nível de conforto e tecnologia do seu espaço. Fale com nossa equipe e descubra como transformar seu ambiente em um sistema inteligente e totalmente conectado.
        </p>

          <ul className={`${styles.checks} flex flex-col items-center lg:items-start`}>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Ecossistema unificado: Controle centralizado e intuitivo
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Automação inteligente: Cenas personalizadas para cada momento
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Eficiência e Economia: Redução real de custos com gestão energética
            </li>
          </ul>
        </div>
          
          {/*Foto 1 (Principal): Uma sala de estar moderna com iluminação aconchegante (que você automatizou).
            Foto 2 (Detalhe): Um close de um smartphone com o App de automação aberto (mostrando o controle do Ar ou da TV).
            Foto 3 (Detalhe): Uma pessoa dando um comando de voz perto de uma Echo Dot (Alexa) ou um interruptor touch inteligente. */}
          <div className="grid grid-cols-1 gap-4 h-auto lg:h-[700px] w-full">
            
            <div className={`${styles.animateIn} relative lg:col-span-15 lg:row-span-2 h-[500px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.4s' }}>
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="100%" 
                  height="auto" 
                  controls // Mostra os botões de play/pause
                  className="h-full w-full object-cover rounded-3xl border border-(--color-border-subtle)"
                >
                <source src="/videos/video-leo-automacao-1.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
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

      <Cta servicoPadrao="Automação Residencial" />
      <Faq />
    </main>
  );
}