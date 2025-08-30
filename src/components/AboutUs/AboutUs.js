"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiHeart, FiShield } from 'react-icons/fi'; // Ícones para os destaques
import styles from './AboutUs.module.css';

const AboutUs = () => {
  // Variantes para animar a seção como um todo
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  // Variantes para os elementos filhos (imagem, texto)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="sobre-nos"
      className={styles.aboutSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna da Imagem */}
          <motion.div className={styles.imageColumn} variants={itemVariants}>
            <div className={styles.imageWrapper}>
              <Image
                src="/loja2.png" // Lembre-se de adicionar esta imagem na pasta /public
                alt="Equipe da Kaoji Assistência Técnica em Joinville"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div className={styles.textColumn} variants={itemVariants}>
            <h2 className={styles.title}>Um pouco sobre nós</h2>
            <p className={styles.mainText}>
              Kajoi Informática, sua escolha confiável em Joinville e região para assistência técnica e informática. Com <strong>mais de 10 anos de experiência</strong> no conserto de computadores e notebooks, oferecemos serviços de manutenção, reparo e assistência técnica com foco na qualidade e excelência.
            </p>
            <p className={styles.secondaryText}>
              Nossa equipe experiente está preparada para resolver qualquer problema, desde pequenos ajustes até reparos complexos, sempre garantindo um atendimento rápido, eficiente e que prioriza a satisfação do cliente. Movidos pela paixão pelo que fazemos, atuamos com ética, honestidade e responsabilidade para entregar resultados que fazem a diferença.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <FiAward size={24} className={styles.highlightIcon} />
                <span>+10 Anos de Experiência</span>
              </div>
              <div className={styles.highlightItem}>
                <FiShield size={24} className={styles.highlightIcon} />
                <span>Qualidade e Excelência</span>
              </div>
              <div className={styles.highlightItem}>
                <FiHeart size={24} className={styles.highlightIcon} />
                <span>Paixão pelo que Fazemos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;