"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.videoOverlay} />

      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero2.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>

      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TEXTO ATUALIZADO ABAIXO */}
        <motion.h1 className={styles.headline} variants={itemVariants}>
        Especialistas em Reparo de Computadores e Notebooks.
        </motion.h1>
        <motion.p className={styles.subheadline} variants={itemVariants}>
          A solução definitiva para o seu dispositivo. Combinamos agilidade, peças de alta qualidade e garantia em cada serviço.
        </motion.p>
        <motion.a
          href="#orcamento"
          className={styles.ctaButton}
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(75, 0, 130, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Faça um Orçamento Gratuito
        </motion.a>
        {/* FIM DO TEXTO ATUALIZADO */}
      </motion.div>
    </section>
  );
};

export default Hero;