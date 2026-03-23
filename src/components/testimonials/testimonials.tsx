'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const empresasParceiras = [
  {
    logo: "logos/logo-cfc-preferencial.png",
    url: "https://www.cfcpreferencialrs.com.br/",
    alt: "Logo CFC Preferencial"
  },
  {
    logo: "logos/logo-kaza-sushi.jpg",
    url: "https://kaza-sushi.mistercheff.com.br/",
    alt: "Logo Kaza Sushi"
  },
  {
    logo: "logos/logo-dtg.pdf",
    url: "https://dtgconsultoriaimobiliaria.com.br",
    alt: "Logo DTG Imobiliaria"
  },
  {
    logo: "logos/logo-gboex.png",
    url: "https://www.gboex.com.br/",
    alt: "Logo GBOEX"
  },
  {
    logo: "logos/logo-sp-sports.png",
    url: "https://webarena.app/arena/sp-sports",
    alt: "Logo SP Sports"
  },
  {
    logo: "logos/logo-posto-ipiranga-boqueirao.png",
    url: "https://www.instagram.com/postoipirangaboqueirao?igsh=Zzl0c21zNG4zOTF4",
    alt: "Posto Ipiranga Boqueirão"
  },
  {
    logo: "logos/logo-freios-canoense.jpeg",
    url: "https://share.google/uCtcrzG5D57gvbOao",
    alt: "Freios Canoense"
  }
]

const testimonials = [
  {
    id: 1,
    nome: 'Jairo Bueno',
    empresa: '',
    comentario: 'Usei os serviços dessa empresa para instalação de Câmeras, Alarme e Automação Residencial. Recomendo muito! Eles gabaritaram todos os requisitos que esperamos quando contratamos um serviço: Empatia, compromisso e agilidade!'
  },
  {
    id: 2,
    nome: 'Bruno Tavares',
    empresa: '',
    comentario: 'Contratei os serviços da Empresa para instalação de câmeras e alarme comercial, serviço de alta qualidade com profissionais sérios e principalmente cumprindo os prazos.'
  },
  {
    id: 3,
    nome: 'Flávia Maria Alves',
    empresa: '',
    comentario: 'Profissional nota 10! Melhor atendimento e melhores valores! Já o recomendo faz tempo e continuo indicando!!!'
  },
  {
    id: 4,
    nome: 'Lucas Terribele',
    empresa: '',
    comentario: 'Muito bem atendido como sempre! Serviço de qualidade!'
  }
]

export default function Testimonials() {

  const scrollRef = useRef<HTMLDivElement>(null);

  //função de rolar
  const scroll = (direction: 'left' | 'right') =>{
    if(scrollRef.current){
      const {current} = scrollRef;
      const scrollAmount = 424; //pixels que serão scrollados

      current.scrollBy({
        left: direction == 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-black border-t border-(--color-border-subtle)">

      {/* Logos*/}
      <div className="mb-20">
        <p className=" text-center text-sm uppercase tracking-widest text-(--color-text-muted) mb-10">
          Confiam na J.A Segurança
        </p>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...empresasParceiras, ...empresasParceiras].map((empresas, i) =>
                <a
                  key={i}
                  href={`${empresas.url}`}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="transition-opacity w-32 h-16 flex items-center shrink-0"
                >
                  <img src={`/${empresas.logo}`} alt={`${empresas.alt}`} className="max-h-full object-contain" />
                </a>
            )}
          </motion.div>
        </div>
      </div>


     <div className="max-w-7xl mx-auto px-6 relative">

        <p className="text-center text-sm uppercase tracking-widest text-(--color-text-muted) mb-10">
          O que dizem nossos clientes
        </p>

        {/* 4. Botões de Navegação (Apenas Desktop) */}
        <div className="hidden md:flex gap-4 absolute top-0 right-6">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-(--color-border-subtle) text-white hover:bg-(--color-secondary) transition-colors"
            >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-(--color-border-subtle) text-white hover:bg-(--color-secondary) transition-colors"
            >
            →
          </button>
        </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4">
        {testimonials.map((i) => (
          <div
          key={i.id}
          className="min-w-[85vw] md:min-w-[400px]  md:max-w-[400px] snap-center p-8 bg-(--color-dark-surface) rounded-3xl border border-(--color-border-subtle) flex flex-col hover:border-(--color-secondary)/50 transition-colors duration-500"
          >
            {/* Conteúdo do Card (Estrelas, Comentário, Avatar) */}
            <div className="text-(--color-secondary) mb-4 text-2xl">★★★★★</div>
            <p className="text-(--color-text-secondary) italic mb-6 flex-1">
              "{i.comentario}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-(--color-secondary)/20 border border-(--color-secondary)/30 flex items-center justify-center text-(--color-secondary) font-bold">
                {i.nome.split(' ')[0][0]}{i.nome.split(' ').slice(-1)[0][0]}
              </div>
              <div>
                <h4 className="text-white font-bold">{i.nome}</h4>
                <span className="text-xs text-(--color-text-muted)">
                  {i.empresa || 'Cliente J.A'}
                </span>
              </div>
            </div>
          </div>
        ))}
     </div>

    </div>

    </section>
  );
}