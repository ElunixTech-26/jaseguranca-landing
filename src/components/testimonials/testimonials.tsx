'use client';

import { motion } from 'framer-motion';

const logos = ["logo-base-png.png", "logo-base-jpeg.png", "logo-base-letter-png.png", "logo-base-letter-jpeg.png"];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black border-t border-(--color-border-subtle)">
      
      {/* Logos*/}
      <div className="mb-20">
        <p className="text-center text-sm uppercase tracking-widest text-(--color-text-muted) mb-10">
          Confiam na J.A Segurança
        </p>
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 w-32 h-16 flex items-center">
                <img src={`/${logo}`} alt="Empresa parceira" className="max-h-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16">O que dizem sobre nossa entrega</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 bg-(--color-dark-surface) rounded-3xl border border-(--color-border-subtle)">
              <div className="text-(--color-secondary) mb-4 text-2xl">★★★★★</div>
              <p className="text-(--color-text-secondary) italic mb-6">
                "Excelente profissionalismo. A instalação foi rápida, organizada e a equipe explicou todo o sistema de segurança. Dormimos muito mais tranquilos agora."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div>
                  <h4 className="text-white font-bold">Nome do Cliente</h4>
                  <span className="text-xs text-(--color-text-muted)">Empresa/Residência</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//mandar para o cliente para ele dar o testimonial
// "Oi [Nome], tudo bem? O sistema que instalamos está funcionando como esperado? Se puder, me manda um áudio curto ou texto dizendo o que você achou da instalação e da sensação de segurança hoje. Quero colocar no site da J.A para ajudar mais pessoas a se sentirem protegidas."