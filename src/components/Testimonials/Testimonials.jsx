import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import testimonials from '../../data/testimonials.json';
import './Testimonials.css';

function Testimonials() {
  const [index, setIndex] = useState(0);

  const goTo = (newIndex) => {
    const total = testimonials.length;
    setIndex(((newIndex % total) + total) % total);
  };

  const current = testimonials[index];

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head section-head--center" data-aos="fade-up">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="section-heading">What our clients say</h2>
        </div>

        <div className="testimonials__slider" data-aos="fade-up">
          <Icon name="quote" className="testimonials__quote-mark" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="testimonials__card"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="testimonials__stars">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Icon name="value" key={i} />
                ))}
              </div>
              <p className="testimonials__text">"{current.quote}"</p>
              <div className="testimonials__author">
                <span className="testimonials__name">{current.name}</span>
                <span className="testimonials__role">{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__controls">
            <button
              className="testimonials__nav"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              <Icon name="chevronLeft" />
            </button>

            <div className="testimonials__dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  className={`testimonials__dot ${i === index ? 'testimonials__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonials__nav"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              <Icon name="chevronRight" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;