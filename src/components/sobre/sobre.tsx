'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsShieldCheck, BsClockHistory, BsAward } from 'react-icons/bs'; 
import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <section className={styles.sobreSection} id="sobre">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-(--color-secondary) font-bold uppercase tracking-widest text-sm">Nossa Trajetória</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mt-2 mb-8 leading-tight">
            Segurança não é apenas tecnologia. <span className="text-(--color-secondary)">É compromisso.</span>
          </h2>
          
          <div className="space-y-6 text-(--color-text-secondary) text-lg leading-relaxed">
            <p>
              Na J.A Segurança, entendemos que cada projeto não é apenas uma instalação de equipamentos, mas a proteção de um patrimônio, de uma empresa e, principalmente, de uma família. Combinamos conhecimento técnico de ponta com um atendimento humanizado e transparente.
            </p>
            <p className="font-medium text-white/90">
              Nosso diferencial é a precisão: desde o projeto inicial até o treinamento do uso, cuidamos de cada cabo e configuração para que o sistema funcione com perfeição no momento que você mais precisar.
            </p>
            <p>
              Não apenas instalamos sistemas; construímos barreiras de proteção e oferecemos a liberdade de controlar seu ambiente, de onde você estiver. <br/>Nossa missão é simples: fazer com que você durma tranquilo.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="primary-button text-center">
              Falar com o Especialista
            </a>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <BsClockHistory className="text-xl text-(--color-secondary)" />
              Atendimento ágil em Canoas e Região
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-(--color-border-subtle) shadow-2xl">
            <Image 
              src="/leo-cartoon.png" 
              alt="Profissional da J.A Segurança" 
              fill 
              className="object-fill object-top"
            />
            {/* Overlay sutil para dar profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 hidden md:flex">
            <div className="bg-(--color-secondary)/20 p-4 rounded-full">
              <BsShieldCheck className="text-4xl text-(--color-secondary)" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">100%</span>
              <span className="text-sm text-(--color-text-secondary)">Sistemas Certificados</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}