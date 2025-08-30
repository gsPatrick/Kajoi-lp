"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones para abrir/fechar o menu
import styles from './Header.module.css';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre-nos', label: 'Sobre Nós' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#localizacao', label: 'Localização' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Estado para o menu mobile

  // Efeito para o scroll spy
  useEffect(() => {
    const sections = navLinks.map(link => link.href.substring(1));
    const handleScroll = () => {
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

  // Efeito para travar o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animação para o menu overlay
  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.4, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.4, ease: 'easeInOut' } }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/logo1.png" alt="Kaoji Assistência Técnica Logo" width={120} height={40} priority />
          </Link>

          {/* Navegação Desktop */}
          <nav className={`${styles.nav} ${styles.navDesktop}`}>
            <ul className={styles.navList}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.activeLink : ''}`}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li><a href="#orcamento" className={styles.navLinkCta}>Solicitar Orçamento</a></li>
            </ul>
          </nav>

          {/* Botão Hambúrguer para Mobile */}
          <div className={styles.menuButton} onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
      </header>

      {/* Menu Overlay para Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav>
              <ul className={styles.mobileNavList}>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className={styles.mobileNavLink} onClick={toggleMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#orcamento" className={styles.mobileNavLinkCta} onClick={toggleMenu}>
                    Solicitar Orçamento
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;