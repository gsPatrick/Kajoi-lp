"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Array com TODAS as seções na ORDEM CORRETA da página
    const sections = ['servicos', 'sobre-nos', 'como-funciona', 'depoimentos', 'orcamento', 'localizacao'];
    
    const handleScroll = () => {
      // Offset de 150px para ativar o link um pouco antes
      const scrollPosition = window.scrollY + 150;

      let currentSection = '';
      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo1.png"
            alt="Kaoji Assistência Técnica Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {/* LINKS REORDENADOS E COMPLETOS */}
            <li>
              <a href="#servicos" className={`${styles.navLink} ${activeSection === 'servicos' ? styles.activeLink : ''}`}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#sobre-nos" className={`${styles.navLink} ${activeSection === 'sobre-nos' ? styles.activeLink : ''}`}>
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#como-funciona" className={`${styles.navLink} ${activeSection === 'como-funciona' ? styles.activeLink : ''}`}>
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#depoimentos" className={`${styles.navLink} ${activeSection === 'depoimentos' ? styles.activeLink : ''}`}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#localizacao" className={`${styles.navLink} ${activeSection === 'localizacao' ? styles.activeLink : ''}`}>
                Localização
              </a>
            </li>
            <li>
              <a href="#orcamento" className={`${styles.navLinkCta}`}>
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;