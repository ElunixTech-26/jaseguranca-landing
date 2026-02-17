'use client';

// Esse componente roda no navegador.
// Ele pode usar estado e eventos.

import Link from "next/link";
import { useState } from "react";


export default function Header(){

    // o primeiro item do array, é a situação padrão do state, a segunda é o que acontece quanod der algum evento.
    //services
    const [isOpen, setIsOpen] = useState(false);

    // menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false); 


    return (
        <header
        className="flex bg-(--color-dark-bg) justify-between items-center h-20 pr-10 pl-10 border-b border-(--color-border-subtle)
">

            <div className="flex items-center gap-2">
                <img src="/logo-base-png.png" 
                alt="Logo da J.A Segurança"
                className="w-15" />
                <div className="flex flex-col font-poppins">
                    <span 
                    className="text-md uppercase text-(--color-secondary) tracking-widest font-semibold">Segurança</span>
                    <span 
                    className="text-sm tracking-widest uppercase text-(--color-text-gray)">Eletrônica</span>
                </div>
            </div>
            
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <Link href={"/"} className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link href={"/services"} className="nav-link">Serviços</Link>
                    </li>
                    <li>
                        <Link href={"/sobre"} className="nav-link">Sobre</Link>
                    </li>
                    <li>
                        <Link href={"/contato"} className="nav-link">Contato</Link>
                    </li>
                </ul>
            </nav>

            {isMenuOpen &&
                <div className="md:hidden flex">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            }


        </header>
    );
}
