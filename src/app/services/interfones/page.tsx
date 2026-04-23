import Cta from "@/components/cta/cta";
import styles from "@/app/services/cameras/CameraPage.module.css"
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Faq from "@/components/faq/faq";


export const metadata: Metadata = {
  title: "Interfones e Vídeo Porteiros Inteligentes | J.A Segurança",
  description: "Controle o acesso ao seu patrimônio com tecnologia de ponta. Vídeo porteiros com acesso via celular e áudio HD em Canoas e região.",
  keywords: ["interfone em canoas", "porteiro eletrônico em canoas", "vídeo porteiro wifi", "controle de acesso", "J.A Segurança"],
  openGraph: {
    title: "Interfones e Vídeo Porteiros Inteligentes | J.A Segurança",
    description: "Identifique visitantes e abra portões de qualquer lugar.",
    images: ["/illustrative/footprint-card.png"],
  },
};

const passosInstalacao = [
  {
    numero: "01",
    titulo: "Análise de Ponto de Acesso",
    descricao: "Identificamos os melhores ângulos de visão e a infraestrutura necessária para integrar seu porteiro à sua rede residencial com máxima segurança."
  },
  {
    numero: "02",
    titulo: "Cabeamento Blindado e Conectividade",
    descricao: "Executamos a infraestrutura dedicada, evitando interferências e garantindo que áudio e vídeo cheguem ao seu destino sem quedas de sinal."
  },
  {
    numero: "03",
    titulo: "Instalação e Integração Digital",
    descricao: "Fixação robusta do painel externo e configuração da unidade interna, integrando tudo ao seu smartphone para controle remoto total."
  },
  {
    numero: "04",
    titulo: "Treinamento de Uso e Segurança",
    descricao: "Ensinamos você a operar o sistema: como atender, como visualizar imagens e como gerenciar o desbloqueio de fechaduras com segurança."
  },
  {
    numero: "05",
    titulo: "Teste de Carga e Acesso",
    descricao: "Simulamos chamadas e acessos remotos para garantir que o sistema de abertura e a transmissão de vídeo estejam em conformidade total."
  }
];
export default function InterfonesPage() {
  return (
    <main className={styles.main}>

      <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs />
      </div>


      {/* HERO DA PÁGINA */}
      <section className={styles.heroSection}>
        <div className="w-full text-center items-center flex flex-col justify-center">
          <h1 className="pageTitle">
            <span className="text-(--color-secondary)">Interfone</span> e Vídeo Porteiro em <span className="text-(--color-secondary)">Canoas</span><br/> Identificação Total e Acesso Seguro
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`${styles.animateIn} text-center lg:text-left`}>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Ter controle sobre quem entra no seu espaço é essencial para garantir segurança no dia a dia. Com soluções modernas de interfone e vídeo porteiro, você consegue visualizar, se comunicar e autorizar acessos com praticidade, sem precisar se expor a situações de risco.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            Trabalhamos com instalação de vídeo porteiro em Canoas e região, utilizando equipamentos da <strong className="text-white">Intelbras</strong>, referência em tecnologia e confiabilidade. Os sistemas permitem atendimento remoto via smartphone, oferecendo mais comodidade e controle, esteja você em casa ou fora.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
            O uso de interfone com câmera é ideal para residências, empresas e condomínios que buscam reforçar a segurança na entrada principal. Além de identificar visitantes, você registra acessos e evita contatos desnecessários, criando um ambiente mais protegido e organizado.
          </p>

          <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
            Atendemos Canoas e toda a região metropolitana, com projetos personalizados que integram segurança e tecnologia no seu dia a dia. Entre em contato e descubra a melhor solução para controlar o acesso ao seu imóvel com mais inteligência.
          </p>
          <ul className={`${styles.checks} flex flex-col items-center lg:items-start`}>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Tecnologia <strong className="text-white">Intelbras</strong> de vídeo e áudio HD
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Abertura remota segura via aplicativo
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-(--color-secondary)">✔</span> Registro de visitas: fotos e vídeos de quem toca
            </li>
          </ul>
        </div>
          {/* Grid Otimizado: auto-rows no mobile para não achatar, h fixo só no desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 h-auto lg:h-[550px] w-full">
            
            <div className={`${styles.animateIn} relative lg:col-span-7 lg:row-span-2 h-[400px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.2s' }}>
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/illustrative/footprint-card.png"
                  width="100%" 
                  height="auto" 
                  controls // Mostra os botões de play/pause
                  className="h-full w-full object-cover rounded-3xl border border-(--color-border-subtle)"
                >
                <source src="/videos/video-porteiro.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className={`${styles.animateIn} md:block hidden relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`}
                style={{ animationDelay: '0.4s' }}>
              <Image 
                src="/cameras-intelbras.jpeg" 
                alt="Equipamentos Intelbras" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className={`${styles.animateIn} md:block relative lg:col-span-5 lg:row-span-1 h-[450px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`} style={{ animationDelay: '0.4s' }}>
              <Image 
              src="/interfone-intelbras.jpeg" 
              alt="Interfone Intelbras Instalado" 
              fill 
              priority
              className="hover:scale-105 transition-transform duration-500 object-fill"/>
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

      <Cta servicoPadrao="Interfones" />
      <Faq />
      
    </main>
  );
}