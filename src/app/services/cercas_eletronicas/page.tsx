import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Cta from "@/components/cta/cta";
import styles from '@/app/services/cameras/CameraPage.module.css'
import { Metadata } from "next";
import Image from "next/image";
import Faq from "@/components/faq/faq";

export const metadata: Metadata = {
  title: "Cercas Elétricas e Concertinas | J.A Segurança",
  description: "Instalação de cercas elétricas e concertinas em Canoas e região. Proteção perimetral robusta com alarme integrado e alta voltagem.",
  keywords: ["cerca elétrica canoas", "concertina", "proteção perimetral", "segurança residencial em canoas", "J.A Segurança"],
  openGraph: {
    title: "Cercas e Concertinas - J.A Segurança Eletrônica",
    description: "Crie uma barreira intransponível no seu patrimônio.",
    images: ["/illustrative/cercas-card.png"],
  },
};

const passosInstalacao = [
  {
    numero: "01",
    titulo: "Dimensionamento de Hastes",
    descricao: "Calculamos a altura e o espaçamento ideal das hastes de alumínio para garantir que a barreira respeite a legislação local e ofereça máxima segurança."
  },
  {
    numero: "02",
    titulo: "Fixação e Tensionamento",
    descricao: "Instalamos fios de aço inox com isoladores de alta resistência, garantindo que a cerca permaneça tensionada e ativa sob qualquer condição climática."
  },
  {
    numero: "03",
    titulo: "Central de Choque Inteligente",
    descricao: "Instalamos a central de choque com sistema de monitoramento: se o fio for cortado ou tocado, um alarme sonoro é disparado e você recebe o alerta no celular."
  },
  {
    numero: "04",
    titulo: "Concertinas e Acabamento",
    descricao: "Para perímetros críticos, aplicamos concertinas de aço galvalume com pontas perfurantes, instaladas com fixação reforçada para impedir qualquer tentativa de escalada."
  }
];

export default function CercasPage(){
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
            Cercas Elétricas e Concertinas em <span className="text-(--color-secondary)">Canoas</span>: Sua Primeira Linha de Defesa
            </h1>
            
            <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
              A segurança começa antes mesmo de qualquer tentativa de invasão. Com soluções de cercas elétricas e concertinas, você cria uma barreira eficiente que protege seu patrimônio desde o perímetro. Para quem busca mais proteção e tranquilidade, esse é um dos métodos mais eficazes disponíveis hoje.
            </p>

            <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
              Trabalhamos com instalação de cercas elétricas em Canoas e região, utilizando materiais de alta resistência como aço galvalume e tecnologia confiável da <strong className="text-white">Intelbras</strong>. O sistema não apenas dificulta o acesso, mas também atua de forma preventiva, emitindo alertas imediatos em caso de tentativa de corte, toque ou violação.
            </p>

            <p className="text-(--color-text-secondary) text-lg mb-6 leading-relaxed max-w-2xl">
              Além da proteção física, a cerca elétrica funciona como um forte elemento dissuasivo. Residências, empresas e condomínios que investem nesse tipo de solução reduzem significativamente os riscos de invasão, combinando segurança ativa com baixo custo de manutenção.
            </p>

            <p className="text-(--color-text-secondary) text-lg mb-8 leading-relaxed max-w-2xl">
              Atendemos Canoas e toda a região metropolitana, levando projetos personalizados de proteção perimetral que se adaptam à realidade de cada cliente. Fale com nossa equipe e descubra a melhor solução para manter seu espaço seguro 24 horas por dia.
            </p>
            <ul className={`${styles.checks} flex flex-col items-center lg:items-start`}>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Eletrificadores <strong className="text-white">Intelbras</strong> de alta potência
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Concertinas em aço galvalume (resistência à corrosão)
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-(--color-secondary)">✔</span> Monitoramento inteligente: disparo imediato em caso de corte
              </li>
            </ul>
          </div>

          
          <div className="grid grid-cols-1 gap-4 h-auto lg:h-[550px] w-full">

            <div className={`${styles.animateIn} relative lg:col-span-7 lg:row-span-2 h-[400px] lg:h-full rounded-3xl overflow-hidden border border-(--color-border-subtle)`} 
                style={{ animationDelay: '0.2s' }}>
              <Image 
                src="/cercas-eletronicas.png" 
                alt="Cerca Eletrônica & Concertina instalada" 
                fill 
                priority
                 className="object-fill hover:scale-105 transition-transform duration-500"
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

      <Cta servicoPadrao="Cerca Eletrônica" />
      <Faq />
      
    </main>
  );
}