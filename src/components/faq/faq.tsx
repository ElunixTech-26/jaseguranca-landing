'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlus, BsDash } from 'react-icons/bs';

interface FaqItem {
  pergunta: string;
  resposta: string;
}

const faqData: FaqItem[] = [
  {
    pergunta: "Qual a garantia dos equipamentos e da instalação?",
    resposta: "Oferecemos garantia total de 12 meses nos equipamentos (contra defeitos de fábrica) e garantia vitalícia na mão de obra de instalação. Nosso compromisso é com a sua tranquilidade a longo prazo."
  },
  {
    pergunta: "A instalação de câmeras ou alarmes demora muito?",
    resposta: "Em média, uma residência padrão é finalizada em um dia de trabalho. Trabalhamos com metodologia limpa: sem fios expostos desnecessariamente e com todo o cuidado para manter sua casa organizada."
  },
  {
    pergunta: "Em caso de queda de energia, o sistema continua funcionando?",
    resposta: "Sim. Todos os nossos sistemas de alarme e cercas eletrificadas possuem baterias de backup integradas. Para sistemas de vídeo, recomendamos o uso de no-breaks, que podemos dimensionar para você."
  },
  {
    pergunta: "Preciso pagar mensalidade para monitorar meu sistema?",
    resposta: "Não. A nossa tecnologia é focada em monitoramento próprio. Você tem acesso total às suas câmeras e alarmes através do seu smartphone, sem custos mensais fixos. O sistema é seu, o controle é seu."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-(--color-dark-bg)">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-(--color-border-subtle)">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-white font-semibold">{item.pergunta}</span>
                {activeIndex === index ? <BsDash className="text-(--color-secondary)" /> : <BsPlus className="text-(--color-secondary)" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-(--color-text-secondary) pb-6 leading-relaxed">
                      {item.resposta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}