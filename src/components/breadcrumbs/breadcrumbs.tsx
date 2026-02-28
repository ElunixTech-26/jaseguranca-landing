'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsChevronRight } from 'react-icons/bs';
import styles from './breadcrumbs.module.css';

// Objeto de mapeamento
const routeConfig: Record<string, { label: string; href?: string }> = {
  services: { label: "Serviços", href: "/#services" },
  cameras: { label: "Câmeras de Segurança" },
  portoes_eletronicos: { label: "Portões Eletrônicos" },
  automacao: { label: "Automações" },
  cercas_eletronicas: { label: "Concertinas e Cercas Eletrônicas " }
};


export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          
          const config = routeConfig[segment];
          const label = config?.label || segment.charAt(0).toUpperCase() + segment.slice(1);
          
          const href = config?.href || `/${pathSegments.slice(0, index + 1).join('/')}`;

          return (
            <li key={index} className={styles.item}>
              <BsChevronRight className={styles.separator} />
              {isLast ? (
                <span className={styles.current}>{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}