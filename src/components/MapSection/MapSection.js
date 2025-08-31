// src/components/MapSection/MapSection.js

"use client";

import { motion } from 'framer-motion';
import styles from './MapSection.module.css';

const MapSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="localizacao"
      className={styles.mapSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Nossa Localização</h2>
        <p className={styles.subtitle}>
          Venha nos visitar! Estamos prontos para atender você.
        </p>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14310.187710922091!2d-48.8285242931774!3d-26.276364141966447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEsquina%20-%20RUA.%20Albano%20Schmidt%2C%20R.%20Pasteur%2C%204717%20-%20sala%202%20-%20Iriri%C3%BA%2C%20Joinville%20-%20SC%2C%2089227-701!5e0!3m2!1spt-BR!2sbr!4v1756680817486!5m2!1spt-BR!2sbr"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default MapSection;
