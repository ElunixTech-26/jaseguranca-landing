import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import styles from "@/app/services/cameras/CameraPage.module.css"
import Cta from "@/components/cta/cta";
import Image from "next/image";
import { Metadata } from "next";
import Faq from "@/components/faq/faq";

export const metadata: Metadata = {
  title: "Portões Eletrônicos | J.A Segurança",
  description: "Instalação profissional de Portões Eletrônicos, com alta velocidade de fechamento em Canoas e região. Proteja seu patrimônio com tecnologia de ponta.",
  keywords: ["portões eletrônicos", "portão rápido", "segurança eletrônica canoas", "instalação de portões", "J.A Segurança", "canoas"],
  openGraph: {
    title: "Portôes ultra-rápidos - J.A Segurança Eletrônica",
    description: "Sistemas de portões com alta velocidade e maior segurança para o ambiente.",
    images: ["/illustrative/portao-card.png"],
  },
};

const passosInstalacao = [
  {
    numero: "01",
    titulo: "Avaliação Técnica e Peso",
    descricao: "Analisamos o peso e o fluxo de uso do portão para selecionar o motor com a potência (HP) correta, garantindo que o sistema nunca trabalhe sob sobrecarga."
  },
  {
    numero: "02",
    titulo: "Instalação de Motores Rápidos",
    descricao: "Implementamos tecnologias de alta velocidade que permitem a abertura total em até 2 segundos, reduzindo o tempo de exposição na rua."
  },
  {
    numero: "03",
    titulo: "Configuração Antiesmagamento",
    descricao: "Instalamos sensores de barreira (fotocélulas) que interrompem o fechamento caso detectem crianças, animais ou veículos, evitando acidentes e danos materiais."
  },
  {
    numero: "04",
    titulo: "Controle e Criptografia",
    descricao: "Configuramos controles com tecnologia Rolling Code (anticlonagem) e integramos o comando ao seu smartphone ou farol do carro (PPA/Intelbras)."
  }
];

export default function PortaoPage(){
     return (
    <main className={styles.main}>

      <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs />
      </div>

      {/* HERO DA PÁGINA */}
      <section className={styles.heroSection}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className={`${styles.animateIn} text-center lg:text-left`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
              Abertura <span className="text-(--color-secondary)">Ultra-Rápida</span> para sua proteção.
            </h1>
            
            <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
              O momento mais perigoso do seu dia é quando você para o carro para esperar o portão abrir. 
              Nós eliminamos essa vulnerabilidade instalando a linha de motores de alta performance da <strong className="text-white">PPA</strong>. 
              Líder em tecnologia de velocidade e durabilidade, a PPA oferece o sistema JetFlex, que garante que você entre 
              em casa em até 4 segundos, reduzindo drasticamente seu tempo de exposição na rua. Aliamos a robustez mecânica 
              desta gigante do mercado com nossa instalação técnica impecável, garantindo que seu acesso seja não apenas 
              ágil, mas ininterrupto, mesmo em dias de chuva ou falta de energia.
            </p>

            <ul className={`${styles.checks} flex flex-col items-center lg:items-start`}>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Motores <strong className="text-white">PPA JetFlex</strong>: Abertura em até 4 segundos
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Segurança Total: Controles anti-clonagem (Rolling Code)
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Autonomia garantida: Sistema com bateria de backup
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 h-auto lg:h-[550px] w-full">
          
            <div className={`${styles.animateIn} relative lg:col-span-7 lg:row-span-2 h-[550px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.2s' }}>

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
                <source src="/videos/video-portao-eletronico-2.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          
            <div className={`${styles.animateIn} md:block lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.8s' }}>
                <Image    
                src="/motor-portao-3.jpeg" 
                alt="Foto conceitual da área de um portão eletrônico" 
                fill 
                className="object-fill hover:scale-105 transition-transform duration-500"/>
            </div> 

            <div className={`${styles.animateIn} relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.6s' }}>
                <Image    
                src="/motor-portao-1.jpeg" 
                alt="Foto de Motor do portão eletrônico" 
                fill 
                className="object-cover object-center hover:scale-105 transition-transform duration-500"/>
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

      <Cta servicoPadrao="Portão Eletrônico" />
      <Faq />
      
    </main>
  );
}