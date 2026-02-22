import Link from "next/link";
import styles from "./service.module.css";
import Image from "next/image";

const services = [
  {
    title: "Câmeras de Monitoramento",
    description: "Sistemas CFTV IP com acesso remoto e inteligência artificial.",
    image: "/service-camera.png",
    url: "services/cameras"
  },
  // {
  //   title: "Alarmes Inteligentes",
  //   description: "Sensores de presença e pânico com monitoramento via aplicativo.",
  //   image: "/escudo.png"
  // },
  {
    title: "Portão Eletrônico",
    description: "Abertura ultrarrápida com máxima segurança: tecnologia que protege e agiliza seu dia.",
    image: "/escudo.png",
    url: "services/portoes-eletronicos"
  },

  {
    title: "Cerca Eletrônica e Concertina",
    description: "Proteção perimetral de alta voltagem para máxima segurança.",
    image: "/cercas.png",
    url: "services/cercas-eletronicas"
  },
  {
    title: "Controle de Acesso",
    description: "Fechaduras biométricas, faciais e interfonis para condomínios.",
    image: "/footprint.png",
    url: "services/Controles-de-acesso"
  }
];

export default function Service() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="text-(--color-secondary) font-semibold uppercase tracking-widest text-sm">
            Nossas Soluções
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2 font-poppins">
            O que fazemos por sua<span className="text-(--color-secondary)"> segurança</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={styles.overlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Link href={`${service.url}`}>
                  <button className={styles.learnMore}>Ver Detalhes</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}