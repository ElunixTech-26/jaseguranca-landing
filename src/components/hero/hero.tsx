import Image from 'next/image';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
     {/* IMAGEM DESKTOP (Paisagem)*/}
      <div className="hidden md:block">
        <Image 
          src="/camera-desktop.png" 
          alt="Sistema de Monitoramento J.A Segurança"
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* IMAGEM MOBILE (De pé) */}
      <div className="block md:hidden">
        <Image 
          src="/camera-foto-cell.png"
          alt="Sistema de Monitoramento J.A Segurança"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <h1 className="font-poppins text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Automação e <span className="text-(--color-accent-glow)">Segurança</span> 
          <br />
          para <span className="text-(--color-accent-glow)">proteger</span> o que
          <br/>
          Realmente Importa.
        </h1>
        
        <p className="text-(--color-text-secondary) text-lg md:text-xl max-w-2xl mb-10">
            {/* Sistemas inteligentes de segurança e automação residencial e empresarial. */}
            {/* Segurança e tecnologia <br/> sob seu controle. */}
            soluções de segurança eletrônica de alta qualidade <br/>para proteger seus negócios, residências e propriedades. 
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="primary-button text-white !border-none">
            Solicitar Orçamento
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Nossos Serviços
          </button>
        </div>
      </div>
    </section>
  );
}