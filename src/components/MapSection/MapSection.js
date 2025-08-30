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
    // ADICIONADO O ID AQUI
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
          {/* SUBSTITUA ESTE IFRAME PELO SEU */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.220959199344!2d-48.84902968553259!3d-26.30391398348618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafc69223746b%3A0x86771cf54a35041!2sKaoji%20Assist%C3%AAncia%20T%C3%A9cnica%20Celular%20e%20Notebook!5e0!3m2!1spt-BR!2sbr!4v1675888888888!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
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