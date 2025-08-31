"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
const phoneNumber = "5547988840902";  // MENSAGEM PRONTA
  const message = "Olá! Vim através do site e gostaria de mais informações.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className={styles.pulse}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FaWhatsapp size={32} />
    </motion.a>
  );
};

export default WhatsAppButton;