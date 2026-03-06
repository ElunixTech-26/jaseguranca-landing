'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from './header.module.css';
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();
    const isServicesActive = pathname.startsWith('/services');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="flex bg-(--color-dark-bg) justify-between items-center h-20 px-6 md:px-10 border-b border-(--color-border-subtle) relative z-[1000]">
            
            {/* Logo com Next Image */}
            <Link href="/" className="flex items-center gap-2 z-[1001]">
                <Image 
                    src="/logos/logo-base-png.png" 
                    alt="Logo J.A Segurança" 
                    width={60} 
                    height={60} 
                    className="w-12 h-auto"
                />
                <div className="flex flex-col font-poppins">
                    <span className="text-md uppercase text-(--color-secondary) tracking-widest font-semibold leading-tight">Segurança</span>
                    <span className="text-sm tracking-widest uppercase text-(--color-text-gray) leading-tight">Eletrônica</span>
                </div>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex gap-8">
                    <li><Link href="/" className="nav-link">Home</Link></li>

                    <li><Link href="/#services" onClick={closeMenu} 
                    className={`nav-link ${isServicesActive ? 'nav-link-fixed' : '' }`} >Serviços</Link></li>

                    <li><Link href="/#sobre" className="nav-link">Sobre</Link></li>
                    <li><Link href="/#contato" className="nav-link">Contato</Link></li>
                </ul>
            </nav>

            {/* Hamburger Button */}
            <button
                className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ""}`}>
                <ul className="font-poppins">
                    <li><Link href="/" onClick={closeMenu}>Início</Link></li>
                    
                    <li><Link href="/#services" onClick={closeMenu} 
                    className={`nav-link ${isServicesActive ? 'text-(--color-secondary)' : '' }`} >Serviços</Link></li>

                    <li><Link href="/#sobre" onClick={closeMenu}>Sobre</Link></li>
                    <li><Link href="/#contato" onClick={closeMenu}>Contato</Link></li>
                </ul>
            </div>

        </header>
    );
}