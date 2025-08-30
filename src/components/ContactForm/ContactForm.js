"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const phoneNumber = "5547988840902";
    const message = "Olá! Vim através do site e gostaria de fazer um orçamento.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.section id="orcamento" className={styles.contactSection} /* ... */>
            <div className={styles.container}>
                <motion.h2 className={styles.title} /* ... */>Pronto para resolver seu problema?</motion.h2>
                <motion.p className={styles.subtitle} /* ... */>
                    Clique no botão abaixo para um orçamento rápido e direto pelo WhatsApp.
                </motion.p>
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.submitButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaWhatsapp /> Fazer um Orçamento Gratuito
                </motion.a>
            </div>
        </motion.section>
    );
};
export default ContactForm;