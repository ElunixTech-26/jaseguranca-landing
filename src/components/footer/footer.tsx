import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { BsTelephoneFill, BsGeoAltFill, BsInstagram, BsWhatsapp, BsMailbox, BsEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

    const numeroTelefone = "555183490527"; 
    const mensagem = `Olá, vim pelo site! Gostaria de realizar um orçamento.`;
    
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Branding */}
        <div className={styles.column}>
          <div className="flex items-center gap-2 mb-4">
            <Image 
              src="/logos/logo-base-png.png" 
              alt="Logo J.A Segurança" 
              width={40} 
              height={40} 
            />
            <span className="font-poppins font-bold text-white tracking-widest uppercase">J.A Segurança</span>
          </div>
          <p className={styles.description}>
            <span className="font-bold">Soluções de segurança eletrônica para proteger negócios, residências e patrimônios.</span> <br/> <br/>
            Tecnologia de ponta e expertise para garantir tranquilidade e proteção total.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className={styles.column}>
          <h3 className={styles.title}>Navegação</h3>
          <ul className={styles.list}>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/#sobre">Sobre Nós</Link></li>
            <li><Link href="/#services">Serviços</Link></li>
            <li><Link href="/#contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços Principais (Bom para SEO) */}
        <div className={styles.column}>
          <h3 className={styles.title}>Serviços</h3>
          <ul className={styles.list}>
            <li>
              <Link href={"/services/cameras"}>Câmeras de Monitoramento</Link>
            </li>
            <li>
              <Link href={"/services/alarmes_e_sensores"}>Alarmes & Sensores Inteligentes</Link>
            </li>
            <li>
              <Link href={"/services/cercas_eletronicas"}>Cercas Eletrônicas</Link>
            </li>
            <li>
              <Link href={"/services/interfones"}>Controle de Acesso</Link>
            </li>
            <li>
              <Link href={"/services/automacao"}>Automação Residencial</Link>
            </li>
            <li>
              <Link href={"/services/portoes_eletronicos"}>Portões Eletrônicos</Link>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div className={styles.column}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.list}>
            <li className={`flex items-center gap-1 ${styles.socialLinks}`}>
                <BsGeoAltFill className={`text-(--color-secondary)  ${styles.socialIcon}`} />
                Av. Boqueirão, 3100 - Estância Velha, Canoas - RS, 92340, Brasil
            </li>
            <li className={`flex items-center gap-1 ${styles.socialLinks}`}>
                <BsInstagram className={`text-(--color-secondary) ${styles.socialIcon}`} />
                <Link href={"https://www.instagram.com/j.a.segurancars/"}>j.a.seguranca.eletronica</Link>
            </li>
            <li className={`flex items-center gap-1 ${styles.socialLinks}`}>
                <BsWhatsapp className={`text-(--color-secondary) ${styles.socialIcon}`} />
                <Link href={url}>Whatsapp</Link>
            </li>
            <li className={`flex items-center gap-1 ${styles.socialLinks}`}>
                <BsEnvelopeFill className={`text-(--color-secondary) ${styles.socialIcon}`} />
                <Link href={"mailto:jaseg0722@gmail.com"}>E-mail comercial</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {currentYear} J.A Segurança Eletrônica - Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0 text-[10px] opacity-50">Developed By  
            <Link className="text-white text-sm" href={"https://Elunix.tech"}> Elunix<span className="text-blue-500">.</span></Link>
        </p>
      </div>
    </footer>
  );
}