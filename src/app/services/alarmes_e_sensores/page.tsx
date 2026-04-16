import Cta from "@/components/cta/cta";
import styles from "@/app/services/cameras/CameraPage.module.css"
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export const metadata: Metadata = {
  title: "Sensores de Alarme e Barreira Infravermelha | J.A Segurança",
  description: "Proteja seu patrimônio com sistemas de alarme inteligentes e sensores de barreira. Monitoramento 24h, tecnologia de ponta e alertas no celular em Canoas.",
  keywords: ["sistema de alarme em canoas", "sensor de barreira infravermelho", "alarme monitorado canoas", "segurança residencial", "detecção de movimento", "J.A Segurança"],
  openGraph: {
    title: "Alarme e Proteção Inteligente - J.A Segurança",
    description: "Detecção imediata de invasões com tecnologia de ponta.",
    images: ["/illustrative/sensor-e-alarme-card.png"],
  },
};

const passosInstalacao = [
  {
    numero: "01",
    titulo: "Mapeamento de Vulnerabilidades",
    descricao: "Realizamos uma varredura tática no seu imóvel para identificar áreas de risco e instalar sensores nos pontos de acesso mais críticos."
  },
  {
    numero: "02",
    titulo: "Instalação de Barreiras Invisíveis",
    descricao: "Implementamos sensores de barreira infravermelha de longo alcance, criando um perímetro virtual que detecta qualquer invasão sem ser notado."
  },
  {
    numero: "03",
    titulo: "Configuração da Central de Alarme",
    descricao: "Instalamos a central com conexão dupla (Wi-Fi + Chip), garantindo que o alarme dispare mesmo se o invasor cortar a internet ou a energia."
  },
  {
    numero: "04",
    titulo: "Sincronização com seu Smartphone",
    descricao: "Configuramos o aplicativo de controle total, permitindo que você arme, desarme e receba notificações de disparo de qualquer lugar do mundo."
  },
  {
    numero: "05",
    titulo: "Teste de Intrusão Simulado",
    descricao: "Realizamos testes reais de acionamento para garantir que todos os sensores estão calibrados e comunicando perfeitamente com a central."
  }
];

export default function SensoresEAlarmesPage() {
  return (
    <main className={styles.main}>

      <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs />
      </div>


      {/* HERO DA PÁGINA */}
      <section className={styles.heroSection}>
        <div className="w-full text-center items-center flex flex-col justify-center">
          <h1 className="pageTitle">
            <span className="text-(--color-secondary)">Alarmes</span> em <span className="text-(--color-secondary)">Canoas</span><br/> Proteção Invisível e Monitoramento Ativo
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className={`${styles.animateIn} text-center lg:text-left`}>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            A segurança mais eficiente é aquela que age antes mesmo de qualquer tentativa de invasão. Com sistemas modernos de alarme, você cria uma camada de proteção inteligente que monitora continuamente seu ambiente, trazendo mais tranquilidade para o dia a dia.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Trabalhamos com instalação de alarmes em Canoas e região, utilizando equipamentos da <strong className="text-white">Intelbras</strong>, referência em tecnologia e confiabilidade. Nossos sistemas contam com sensores de alta precisão, incluindo barreiras infravermelhas e tecnologia pet-immune, evitando disparos falsos e garantindo um monitoramento mais eficiente.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Com os sistemas de alarme, qualquer tentativa de invasão é identificada imediatamente, gerando alertas em tempo real no seu smartphone. Isso permite uma resposta rápida e aumenta significativamente o nível de proteção de residências, empresas e condomínios.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
            Atendemos Canoas e toda a região metropolitana com projetos personalizados de segurança eletrônica, adaptados às necessidades de cada cliente. Entre em contato e descubra como manter seu patrimônio protegido com tecnologia e monitoramento constante.
          </p>
            <ul className={`${styles.checks} flex flex-col items-center lg:items-start`}>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Tecnologia <strong className="text-white">Intelbras</strong> de alta sensibilidade
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Barreiras Infravermelhas (Proteção Perimetral)
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Notificações Push: Alertas instantâneos no celular
              </li>
            </ul>
          </div>   
                  {/* Grid Otimizado: auto-rows no mobile para não achatar, h fixo só no desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 h-auto lg:h-[550px] w-full">
            
            {/* FOTO 1 - Âncora Vertical */}
            <div className={`${styles.animateIn} relative lg:col-span-7 lg:row-span-2 h-[550px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.2s' }}>

               <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/sensor-foto-1"
                  width="100%" 
                  height="auto" 
                  controls // Mostra os botões de play/pause
                  className="h-full w-full object-cover rounded-3xl border border-(--color-border-subtle)"
                >
                <source src="/videos/video-alarme-2.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div> 
            <div className={`${styles.animateIn} md:block relative lg:col-span-5 lg:row-span-2 h-[600px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.4s' }}>
              <Image 
                src="/sensor-foto-3.png" 
                alt="Sensor instalado na parede" 
                fill 
                className="object-center object-cover hover:scale-105 transition-transform duration-500"
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

      <Cta servicoPadrao="Sensores e Alarmes" />
    </main>
  );
}