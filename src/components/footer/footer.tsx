import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { BsTelephoneFill, BsGeoAltFill, BsInstagram, BsWhatsapp, BsMailbox, BsEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Branding */}
        <div className={styles.column}>
          <div className="flex items-center gap-2 mb-4">
            <Image 
              src="/logo-base-png.png" 
              alt="Logo J.A Segurança" 
              width={40} 
              height={40} 
            />
            <span className="font-poppins font-bold text-white tracking-widest uppercase">J.A Segurança</span>
          </div>
          <p className={styles.description}>
            Especializada em fornecer soluções de segurança eletrônica de alta qualidade para proteger seus negócios, residências e propriedades. Com nossa experiência e conhecimento em segurança eletrônica, estamos aqui para ajudar você a garantir a segurança do seus familiares e patrimônio!
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className={styles.column}>
          <h3 className={styles.title}>Navegação</h3>
          <ul className={styles.list}>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/sobre">Sobre Nós</Link></li>
            <li><Link href="/services">Serviços</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços Principais (Bom para SEO) */}
        <div className={styles.column}>
          <h3 className={styles.title}>Serviços</h3>
          <ul className={styles.list}>
            <li>Câmeras de Monitoramento</li>
            <li>Alarmes Inteligentes</li>
            <li>Cerca Elétrica</li>
            <li>Controle de Acesso</li>
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
                <Link href={"https://www.instagram.com/j.a.seguranca.eletronica/"}>j.a.seguranca.eletronica</Link>
            </li>
            <li className={`flex items-center gap-1 ${styles.socialLinks}`}>
                <BsWhatsapp className={`text-(--color-secondary) ${styles.socialIcon}`} />
                <Link href={"https://wa.me/555183490527"}>Whatsapp</Link>
            </li>
            <li className={`flex items-center gap-1 ${styles.socialLinks}`}>
                <BsEnvelopeFill className={`text-(--color-secondary) ${styles.socialIcon}`} />
                contato@jaseguranca.com
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