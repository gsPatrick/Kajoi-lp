import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Bloco de marca centralizado e moderno */}
        <div className={styles.brandBlock}>
          <a href="#" aria-label="Voltar ao topo">
            <Image
              src="/logo1.png"
              alt="Kaoji Assistência Técnica Logo"
              width={160} // Aumentado de 140
              height={52} // Aumentado de 45 (mantendo proporção)
            />
          </a>
                <p className={styles.description}>
                Especialistas em reparo de computadores e notebooks. Agilidade e confiança para o seu dispositivo.
                </p>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Navegação horizontal */}
        <nav className={styles.footerNav}>
          <a href="#servicos" className={styles.navLink}>Serviços</a>
          <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
          <a href="#depoimentos" className={styles.navLink}>Depoimentos</a>
          <a href="#orcamento" className={styles.navLink}>Orçamento</a>
        </nav>

        {/* Linha final com créditos */}
        <div className={styles.footerBottom}>
          <p>
            &copy; {currentYear} Kaoji Assistência Técnica. Todos os direitos reservados.
          </p>
          <p className={styles.devCredit}>
            Desenvolvido por{' '}
            <a href="https://codebypatrick.dev/" target="_blank" rel="noopener noreferrer" className={styles.devLink}>
              Patrick.Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;