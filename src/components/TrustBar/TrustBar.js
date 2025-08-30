"use client";

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import GoogleBadge from '@/components/GoogleBadge/GoogleBadge';
import styles from './TrustBar.module.css';

// Itens que irão deslizar no fundo
const marqueeItems = [
  "QUALIDADE GARANTIDA",
  "10+ ANOS DE EXPERIÊNCIA",
  "ATENDIMENTO PREMIUM",
  "PEÇAS DE ALTA PERFORMANCE",
  "DIAGNÓSTICO PRECISO",
  "NOTA 5 NO GOOGLE"
];

const TrustBar = () => {
  return (
    <motion.section 
      className={styles.trustBarSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* O marquee (texto deslizante) como um elemento de fundo */}
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {/* Duplicamos a lista para criar um loop infinito e contínuo */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className={styles.marqueeItem}>
              <span>{item}</span>
              <FaStar className={styles.separatorIcon} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Wrapper para centralizar o selo e colocá-lo na frente */}
      <div className={styles.badgeWrapper}>
        <GoogleBadge />
      </div>
    </motion.section>
  );
};

export default TrustBar;