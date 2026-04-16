import Image from 'next/image';
import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
     {/* IMAGEM DESKTOP (Paisagem)*/}
      <div className="hidden md:block">
        <Image 
          src="/illustrative/hero-desktop.png" 
          alt="Sistema de Monitoramento J.A Segurança"
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* IMAGEM MOBILE (De pé) */}
      <div className="block md:hidden">
        <Image 
          src="/illustrative/hero-cellphone.png"
          alt="Sistema de Monitoramento J.A Segurança"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.divH1}>
          <h1 className="font-poppins text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-(--color-secondary)">Segurança</span> Eletrônica e Automação em Canoas
            <br />
             <span className="text-(--color-secondary)">Proteja</span> o que Realmente Importa
          </h1>
        </div>

        <p className="text-(--color-text-secondary) text-lg md:text-xl max-w-2xl mb-10">
          Projetos completos de segurança eletrônica com instalação de câmeras, alarmes, cercas elétricas e automação de portões. 
          Atendemos residências, empresas e condomínios em Canoas e região.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href="/#contato" 
            className="primary-button text-white !border-none text-center"
          >
            Solicitar Orçamento
          </Link>

          <Link 
            href="/#services" 
            className={styles.secondaryButton}
          >
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}