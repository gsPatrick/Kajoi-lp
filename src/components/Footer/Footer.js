import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Removido FaFacebookF
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Informações de contato do cliente
  const phoneNumber = "5547988840902";
  const instagramUrl = "https://www.instagram.com/kajoiinformatica?igsh=c2Y5NHo5ZTA5d3Jl";
  
  // Mensagem personalizada para o WhatsApp
  const whatsappMessage = "Olá! Vim através do site e gostaria de mais informações.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Bloco de marca centralizado */}
        <div className={styles.brandBlock}>
          <a href="#" aria-label="Voltar ao topo">
            <Image
              src="/logo.png"
              alt="Kaoji Assistência Técnica Logo"
              width={160} // Tamanho aumentado, como solicitado
              height={52} // Proporção mantida
            />
          </a>
          <p className={styles.description}>
            Soluções definitivas para seus dispositivos, com a confiança que você merece.
          </p>
          <div className={styles.socialIcons}>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Navegação horizontal */}
        <nav className={styles.footerNav}>
          <a href="#servicos" className={styles.navLink}>Serviços</a>
          <a href="#sobre-nos" className={styles.navLink}>Sobre Nós</a>
          <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
          <a href="#depoimentos" className={styles.navLink}>Depoimentos</a>
          <a href="#localizacao" className={styles.navLink}>Localização</a>
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