"use client";

import { useEffect } from 'react';
import { useAnimate, useInView, motion } from 'framer-motion';
import styles from './StatsBar.module.css';

const statsData = [
  { value: 8000, label: "Equipamentos Reparados", suffix: "+" },
  { value: 10, label: "Anos de Experiência", suffix: "" },
  { value: 98, label: "Satisfação dos Clientes", suffix: "%" }
];

const AnimatedCounter = ({ toValue, suffix }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(0, toValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          scope.current.textContent = `${Math.round(latest).toLocaleString('pt-BR')}${suffix}`;
        }
      });
    }
  }, [isInView, toValue, suffix, animate, scope]);

  return <span ref={scope}>{`0${suffix}`}</span>;
};

const StatsBar = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className={styles.statValue}>
              <AnimatedCounter toValue={stat.value} suffix={stat.suffix} />
            </h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;