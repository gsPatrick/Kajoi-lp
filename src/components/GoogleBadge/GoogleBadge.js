"use client";

import { motion } from 'framer-motion';
import { FaTrophy, FaStar } from 'react-icons/fa';
import styles from './GoogleBadge.module.css';

const GoogleBadge = ({ variants }) => {
  return (
    <motion.div className={styles.badgeContainer} variants={variants}>
      {/* Elemento para o brilho animado */}
      <div className={styles.glowEffect} />
      
      {/* Conteúdo do Selo */}
      <div className={styles.badgeContent}>
        <FaTrophy className={styles.trophyIcon} />
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        </div>
        <p className={styles.badgeText}>
          SOMOS EMPRESA 5 ESTRELAS NO GOOGLE
        </p>
      </div>
    </motion.div>
  );
};

export default GoogleBadge;