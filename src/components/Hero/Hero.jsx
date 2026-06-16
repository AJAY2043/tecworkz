import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow" variants={fadeUp} custom={0}>
            Melbourne &middot; IT Services
          </motion.span>

          <motion.h1 className="hero__title" variants={fadeUp} custom={1}>
            Reliable technology,
            <br />
            <span className="hero__title-accent">built for tomorrow.</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={fadeUp} custom={2}>
            TecWorkz helps Melbourne businesses design, build and maintain
            the websites, networks and systems they run on, so you can
            focus on the work that matters.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp} custom={3}>
            <Link to="/contact" className="btn btn--primary">
              Get a Free Quote <Icon name="arrow" />
            </Link>
            <Link to="/services" className="btn btn--secondary">
              Our Services
            </Link>
          </motion.div>

          <motion.div className="hero__stats" variants={fadeUp} custom={4}>
            <div className="hero__stat">
              <span className="hero__stat-value">10+</span>
              <span className="hero__stat-label">Years combined experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">Projects delivered</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">24/7</span>
              <span className="hero__stat-label">Support availability</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 480 460" className="hero__circuit">
            <path className="circuit-path" d="M40 80 H220 V200" />
            <path className="circuit-path" d="M120 40 V140 H320 V300" />
            <path className="circuit-path" d="M440 60 H300 V180 H180 V380" />
            <path className="circuit-path" d="M60 400 H260 V260 H400" />

            <path className="circuit-pulse circuit-pulse--blue" d="M40 80 H220 V200" />
            <path className="circuit-pulse circuit-pulse--orange" d="M120 40 V140 H320 V300" />
            <path className="circuit-pulse circuit-pulse--blue" d="M440 60 H300 V180 H180 V380" />
            <path className="circuit-pulse circuit-pulse--orange" d="M60 400 H260 V260 H400" />

            <circle className="circuit-node circuit-node--blue" cx="220" cy="200" r="6" />
            <circle className="circuit-node circuit-node--orange" cx="320" cy="300" r="6" />
            <circle className="circuit-node circuit-node--blue" cx="180" cy="380" r="6" />
            <circle className="circuit-node circuit-node--orange" cx="400" cy="260" r="6" />
            <circle className="circuit-node circuit-node--blue" cx="40" cy="80" r="5" />
            <circle className="circuit-node circuit-node--orange" cx="440" cy="60" r="5" />

            <g className="circuit-card">
              <rect x="150" y="150" width="180" height="120" rx="14" />
              <circle cx="180" cy="180" r="6" className="circuit-card__dot circuit-card__dot--blue" />
              <circle cx="200" cy="180" r="6" className="circuit-card__dot circuit-card__dot--orange" />
              <rect x="170" y="205" width="120" height="8" rx="4" className="circuit-card__bar" />
              <rect x="170" y="225" width="80" height="8" rx="4" className="circuit-card__bar" />
              <rect x="170" y="245" width="100" height="8" rx="4" className="circuit-card__bar" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;