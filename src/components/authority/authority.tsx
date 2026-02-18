import { BsShieldCheck, BsClockHistory, BsCpu, BsHeadset } from "react-icons/bs";
import styles from "./authority.module.css";

const benefits = [
  {
    icon: <BsShieldCheck />,
    title: "Monitoramento na Palma da Sua Mão",
    description: "Acompanhe sua residência ou empresa em tempo real pelo celular, com acesso seguro e imagens de alta qualidade."
  },
  {
    icon: <BsCpu />,
    title: "Equipamentos de Ponta",
    description: "Trabalhamos com sistemas modernos e confiáveis, garantindo estabilidade, nitidez e integração eficiente."
  },
  {
    icon: <BsClockHistory />,
    title: "Instalação Ágil",
    description: "Projetos executados com planejamento técnico, acabamento limpo e configuração completa do sistema."
  },
  {
    icon: <BsHeadset />,
    title: "Suporte Dedicado",
    description: "Orientação clara e atendimento próximo para garantir que seu sistema funcione perfeitamente."
  }
];

export default function Authority() {
  return (
    <section className={styles.authority}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="text-(--color-secondary) font-semibold uppercase tracking-widest text-sm">
            Diferenciais
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2 font-poppins">
            Por que confiar na <span className="text-(--color-secondary)">J.A Segurança Eletrônica?</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}