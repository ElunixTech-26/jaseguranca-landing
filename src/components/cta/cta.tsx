'use client';

import { useState } from "react";
import styles from "./cta.module.css";

interface CtaProps {
  servicoPadrao?: string; 
}

//nenhum é o padrão caso não venha args
export default function Cta( {servicoPadrao = "nenhum "}: CtaProps) {

  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    servico: servicoPadrao
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Configuração do WhatsApp
    const numeroTelefone = "5551994089100"; 
    const mensagem = `Olá, vim pelo site! Meu nome é ${formData.nome}, moro em ${formData.cidade}. Gostaria de um orçamento para ${formData.servico}.`;
    
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section className={styles.ctaSection} id="contato">
      <div className={styles.container}>
        
        {/* Conteúdo */}
        <div className={styles.content}>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-6">
            Pronto para elevar o nível de <span className="text-(--color-secondary)">segurança</span> do seu ambiente?
          </h2>
          <p className="text-(--color-text-secondary) text-lg mb-8">
            Consiga mais conforto e praticidade no seu dia a dia com uma instalação feita por um especialista.
          </p>
          
          <div className={styles.benefits}>
            <span>✓ Atendimento Rápido</span>
            <span>✓ Orçamento Gratuito</span>
            <span>✓ Garantia de Serviço</span>
          </div>
        </div>

        {/* Formulário */}
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSendMessage}>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Faça um orçamento em poucos minutos!</h3>
            {/* Realize um orçamento ainda hoje! */}
            
            <div className={styles.inputGroup}>
              <input 
                className={styles.inputForm} 
                type="text" 
                placeholder="Seu nome" 
                required 
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className={styles.inputGroup}>
              <input 
                className={styles.inputForm} 
                type="text" 
                placeholder="Sua Cidade" 
                required 
                onChange={(e) => setFormData({...formData, cidade: e.target.value})}
              />
            </div>

            <div className={styles.inputGroup}>
              <select 
                className={styles.dropForm} 
                name="servicos" 
                value={formData.servico}
                required
                onChange={(e) => setFormData({...formData, servico: e.target.value})}
              >
                <option value="nenhum" disabled>Escolha o serviço desejado</option>
                <option value="Câmeras de Segurança">Câmera de Segurança</option>
                <option value="Automação Residêncial">Automação Residencial</option>
                <option value="Automação Empresarial">Automação Empresarial</option>
                <option value="Portão Eletrônico">Portão Eletrônico</option>
                <option value="Cerca Eletrônica">Cerca Eletrônica</option>
              </select>
            </div>

            <button type="submit" className="primary-button w-full mt-4">
              Solicitar via WhatsApp
            </button>
            
            <p className="text-[10px] text-center mt-4 text-(--color-text-muted) uppercase tracking-sm">
              Clique para abrir o WhatsApp do técnico
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}