"use client";

import { motion } from 'framer-motion';
import { FiCalendar, FiBox, FiSmile } from 'react-icons/fi';
import styles from './HowItWorks.module.css';
import React from 'react';

const stepsData = [
  { icon: <FiCalendar size={28} />, title: "Agende seu Atendimento", description: "Entre em contato pelo WhatsApp ou formulário, descreva o problema e agende o melhor horário." },
  { icon: <FiBox size={28} />, title: "Traga seu Dispositivo", description: "Deixe seu aparelho em nossa loja. Realizaremos um diagnóstico completo e transparente para identificar a melhor solução." },
  { icon: <FiSmile size={28} />, title: "Receba como Novo", description: "Avisaremos assim que o reparo for concluído. Seu dispositivo estará pronto, testado e com garantia." }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  // ANIMAÇÃO APRIMORADA: Efeito de "pop-in" com física
  const stepVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Animação especial para o ícone
  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3, // Ícone anima um pouco depois do card
      },
    },
  };
  
  const connectorVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { type: "spring", stiffness: 100, damping: 20, restDelta: 0.001, delay: 0.5 } },
  };

  return (
    <motion.section 
      id="como-funciona" 
      className={styles.howItWorksSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={stepVariants}>Nosso Processo é Simples e Rápido</motion.h2>
        <motion.p className={styles.subtitle} variants={stepVariants}>Em apenas 3 passos, seu problema está resolvido.</motion.p>
        
        <div className={styles.stepsContainer}>
          {stepsData.map((step, index) => (
            // Usando Fragment com key para o React
            <React.Fragment key={index}> 
              <motion.div className={styles.stepItem} variants={stepVariants}>
                <div className={styles.iconWrapper}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <motion.div variants={iconVariants}>
                    {step.icon}
                  </motion.div>
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>

              {index < stepsData.length - 1 && (
                <motion.div className={styles.connector} variants={connectorVariants} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Importe o React se não estiver globalmente disponível
export default HowItWorks;