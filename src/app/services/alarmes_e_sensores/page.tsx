import Cta from "@/components/cta/cta";
import styles from "@/app/services/cameras/CameraPage.module.css"
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export const metadata: Metadata = {
  title: "Sensores de Alarme e Barreira Infravermelha | J.A Segurança",
  description: "Proteja seu patrimônio com sistemas de alarme inteligentes e sensores de barreira. Monitoramento 24h, tecnologia de ponta e alertas no celular em Canoas.",
  keywords: ["sistema de alarme", "sensor de barreira infravermelho", "alarme monitorado canoas", "segurança residencial", "detecção de movimento", "J.A Segurança"],
  openGraph: {
    title: "Alarme e Proteção Inteligente - J.A Segurança",
    description: "Detecção imediata de invasões com tecnologia de ponta.",
    images: ["/logo-base-letter-jpeg.png"],
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className={`${styles.animateIn} text-center lg:text-left`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
              Proteção Invisível e <span className="text-(--color-secondary)">Monitoramento Ativo</span>
            </h1>
            
            <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
              A segurança real começa antes da intrusão. Trabalhamos com a linha profissional de sensores e alarmes <strong className="text-white">Intelbras</strong>, desenvolvidos para criar um perímetro de proteção indetectável. Nossos sistemas utilizam tecnologia de barreira infravermelha de alta precisão e sensores pet-immune, que garantem que sua casa esteja sempre vigiada sem alarmes falsos causados por animais ou vegetação. Com alertas instantâneos no seu smartphone, você tem o controle total do seu patrimônio na palma da mão, onde quer que você esteja.
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
              <Image 
                src="/sensores-1.jpeg" 
                alt="Instalação em altura" 
                fill 
                priority
                className="object-cover hover:scale-105 transition-transform duration-500 object-top"
              />
            </div>

            <div className={`${styles.animateIn} md:block hidden relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.4s' }}>
              <Image 
                src="/sensor-e-alarme-card.png" 
                alt="Câmeras de alta tecnologia" 
                fill 
                className="object-center object-fill hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className={`${styles.animateIn} md:block hidden relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.6s' }}>
              <Image 
                src="/sensor-e-alarme-card.png" 
                alt="Câmeras de alta tecnologia" 
                fill 
                className="object-center object-fill hover:scale-105 transition-transform duration-500"
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