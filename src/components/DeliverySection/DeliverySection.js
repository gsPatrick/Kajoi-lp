"use client";
import { motion } from 'framer-motion';
import { FaMotorcycle } from 'react-icons/fa'; // Ícone de motoboy
import { FiMapPin, FiShield } from 'react-icons/fi';
import styles from './DeliverySection.module.css';

const DeliverySection = () => {
    return (
        <section className={styles.deliverySection}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.content}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* ÍCONE TROCADO PARA MOTOBOY */}
                    <div className={styles.iconWrapper}>
                        <FaMotorcycle />
                    </div>
                    {/* TEXTO ATUALIZADO */}
                    <h2 className={styles.title}>Retiramos e Entregamos para Você</h2>
                    <p className={styles.description}>
                        Sem tempo para trazer seu equipamento? Nós buscamos! Oferecemos um serviço de retirada e entrega via motoboy para notebooks e computadores em toda a região.
                    </p>
                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <FiMapPin />
                            <span>Comodidade e agilidade no seu dia</span>
                        </div>
                        <div className={styles.featureItem}>
                            <FiShield />
                            <span>Transporte seguro e profissional</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default DeliverySection;