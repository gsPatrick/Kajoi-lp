"use client";

import { motion } from 'framer-motion';
import { FiTool, FiHardDrive, FiRefreshCw, FiWind, FiCpu, FiZap, FiDownload, FiSmartphone } from 'react-icons/fi';
import { BsMemory, BsMotherboard, BsPcDisplay, BsLaptop } from 'react-icons/bs';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';
import styles from './Services.module.css';

// DADOS COMPLETOS - 12 SERVIÇOS
const servicesData = [
  {
    type: 'specialty',
    icon: <FiTool size={32} />,
    title: "Reparo de Carcaça e Dobradiça",
    description: "Somos especializados e referência na cidade. Preservamos a originalidade do seu notebook com grande economia.",
    tag: '2 ANOS DE GARANTIA',
    specialtyTag: 'ESPECIALIDADE'
  },
  {
    type: 'standard',
    icon: <FiHardDrive size={28} />,
    title: "Upgrade de SSD e NVMe",
    description: "Deixa seu notebook ou computador até 10x mais rápido. Usamos as melhores marcas e instalamos/clonamos seu sistema.",
  },
  {
    type: 'standard',
    icon: <BsMemory size={28} />,
    title: "Upgrade de Memória RAM",
    description: "Recomendado para multitarefas, programas pesados ou jogos. Essencial para um ótimo desempenho.",
  },
  {
    type: 'standard',
    icon: <BsLaptop size={28} />,
    title: "Troca de Peças - Notebook",
    description: "Substituição de peças danificadas por novas em casos de quedas, batidas ou derramamento de líquido.",
    details: [ { text: "Telas (HD, Full HD, 144Hz)", icon: 'check' }, { text: "Teclado e Bateria", icon: 'check' }, { text: "HD / SSD e Memória RAM", icon: 'check' }, { text: "Outros (Consultar)", icon: 'check' }]
  },
  {
    type: 'standard',
    icon: <BsPcDisplay size={28} />,
    title: "Troca de Peças - Computador",
    description: "Efetuamos a troca de peças danificadas em casos de quedas, batidas ou desgaste natural.",
    details: [ { text: "Placa-mãe e Fonte", icon: 'check' }, { text: "Placa de Vídeo e Processador", icon: 'check' }, { text: "HD/SSD e Memória RAM", icon: 'check' }, { text: "Outros (Consultar)", icon: 'check' }]
  },
  {
    type: 'standard',
    icon: <FiWind size={28} />,
    title: "Limpeza Interna Premium",
    description: "Manutenção preventiva para evitar falhas, melhorar o desempenho e prolongar a vida útil do seu equipamento.",
    details: [ { text: "Registro de todo o processo com fotos e vídeos.", icon: 'attention' }, { text: "Checklist completo e análise de temperaturas.", icon: 'check' }]
  },
  {
    type: 'standard',
    icon: <FiRefreshCw size={28} />,
    title: "Formatação de Sistema",
    description: "Recomendado para sistemas lentos, com vírus ou corrompidos. Deixamos seu sistema novo em folha.",
    details: [ { text: "Backup dos dados pessoais incluso", icon: 'check' }, { text: "Sistema, drivers e programas básicos atualizados", icon: 'check' }, { text: "Otimização completa do sistema", icon: 'check' }]
  },
  {
    type: 'standard',
    icon: <FiCpu size={28} />,
    title: "Montagem de Computadores",
    description: "Comprou as peças e tem receio de montar? Nós resolvemos com montagem profissional e segura.",
    details: [ { text: "Montagem e Cable Management", icon: 'check' }, { text: "Pasta térmica de alta performance (12w/mk)", icon: 'check' }, { text: "Análise de temperaturas e funcionamento", icon: 'check' }]
  },
  {
    type: 'featured',
    icon: <BsMotherboard size={28} />,
    title: "Reparo de Placa-mãe Notebook",
    description: "Caso a troca fique inviável ou não seja mais comercializada, fazemos o reparo da sua placa mãe.",
    tag: '6 MESES DE GARANTIA'
  },
  {
    type: 'standard',
    icon: <FiDownload size={28} />,
    title: "Instalação de Programas",
    description: "Efetuamos a instalação de vários tipos de programas, desde os mais simples até os mais complexos.",
  },
  {
    type: 'standard',
    icon: <FiZap size={28} />,
    title: "Reparo de Fonte/Carregador",
    description: "Fazemos a troca do cabo completo por um novo, mantendo assim seu carregador original.",
  },
];

const Services = () => {
  const sectionVariants = { /* ... */ };

  // ANIMAÇÕES PARA CARDS PADRÃO E EM DESTAQUE
  const standardCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, backgroundColor: 'var(--white)', transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { y: -8, backgroundColor: 'var(--indigo-dye)', transition: { duration: 0.3 } }
  };
  const standardTextVariants = {
    visible: { color: 'var(--black)' },
    hover: { color: 'var(--white)' }
  };
  const standardDescriptionVariants = {
    visible: { color: '#555' },
    hover: { color: 'rgba(255, 255, 255, 0.9)' }
  };
  const standardIconWrapperVariants = {
    visible: { backgroundColor: '#f4eefc', color: 'var(--indigo-dye)' },
    hover: { backgroundColor: '#6a1b9a', color: 'var(--white)' }
  };

  // ANIMAÇÕES PARA O CARD DE ESPECIALIDADE
  const specialtyCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { y: -8, boxShadow: '0 0 25px rgba(170, 100, 255, 0.7)', transition: { duration: 0.3 } }
  };

  return (
    <motion.section id="servicos" className={styles.servicesSection} /* ... */>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos Serviços Especializados</h2>
        <p className={styles.subtitle}>Soluções precisas e transparentes para notebooks e computadores.</p>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.serviceCard} ${styles[service.type]}`}
              variants={service.type === 'specialty' ? specialtyCardVariants : standardCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              custom={index}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } }}
            >
              <div className={styles.cardHeader}>
                <motion.div className={styles.iconWrapper} variants={standardIconWrapperVariants}>
                  {service.icon}
                </motion.div>
                <motion.h3 className={styles.cardTitle} variants={standardTextVariants}>
                  {service.title}
                </motion.h3>
                {service.specialtyTag && (
                  <div className={styles.specialtyTag}>
                    <FaExclamationTriangle /> {service.specialtyTag}
                  </div>
                )}
              </div>
              <motion.p className={styles.cardDescription} variants={standardDescriptionVariants}>
                {service.description}
              </motion.p>
              
              {service.details && (
                <ul className={styles.detailsList}>
                  {service.details.map((detail, i) => (
                    <motion.li key={i} className={styles.detailItem} variants={standardDescriptionVariants}>
                      {detail.icon === 'check' ? 
                        <FaCheckCircle className={`${styles.detailIcon} ${styles.checkIcon}`} /> :
                        <FaTimesCircle className={`${styles.detailIcon} ${styles.crossIcon}`} />
                      }
                      <span>{detail.text}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {service.tag && (
                <div className={styles.guaranteeTag}>
                  {service.tag}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;