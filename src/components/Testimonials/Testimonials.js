"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';

const testimonialsData = [
  { name: "Rafael Bortoli Debarba", quote: "Excelente atendimento. Diagnóstico justo.", rating: 5 },
  { name: "Felipe Eduardo", quote: "Empresa com profissionais competentes e preço justo.", rating: 5 },
  { name: "Adilson Schreiber Junior", quote: "Excelentes profissionais, realizando o trabalho com prudência e transparência. Atendimento diferenciado. Recomendo.", rating: 5 },
  { name: "Marcos Fratelli", quote: "Estava com problema em meu notebook... Encontrei um excelente profissional, altamente capacitado, agilidade no atendimento, e rápido no conserto. Indico a qualquer que precise de um bom profissional de confiança.", rating: 5 },
  { name: "NIARA PAIVA", quote: "Melhor atendimento de Joinville, além de super educados e atenciosos, consertaram meu computador e não cobraram por uma parte que eu não tinha pedido! Recomendo para todos!!!", rating: 5 },
  { name: "Jessica Wilbert", quote: "Meu notebook não estava ligando... eles verificaram o carregador sem cobrar nada por isso. Com certeza voltarei sempre que precisar, ganharam minha confiança!", rating: 5 }
];

const StarRating = ({ rating }) => (
  <div className={styles.starRating}>
    {[...Array(rating)].map((_, i) => <FaStar key={i} size={16} />)}
  </div>
);

const Testimonials = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="depoimentos"
      className={styles.testimonialsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Comentários de Clientes</h2>
        <p className={styles.subtitle}>Confira alguns comentários de clientes, todos retirados do Google.</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className={styles.mySwiper}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.testimonialCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>{testimonial.name.charAt(0)}</div>
                  <StarRating rating={testimonial.rating} />
                </div>
                {/* === CORREÇÃO APLICADA AQUI === */}
                <p className={styles.quoteText}>&ldquo;{testimonial.quote}&rdquo;</p>
                <p className={styles.authorName}>– {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;