import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHero from '../../components/PageHero/PageHero';
import Icon from '../../components/Icon/Icon';
import './Contact.css';

// ⚠️ TODO: Replace these 3 values once your EmailJS account is set up.
// Get them from https://dashboard.emailjs.com/admin
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const CONTACT_INFO = [
  { icon: 'mail', label: 'Email', value: 'info@tecworkz.com.au', href: 'mailto:info@tecworkz.com.au' },
  { icon: 'phone', label: 'Phone', value: '+61 3 0000 0000', href: 'tel:+61300000000' },
  { icon: 'pin', label: 'Location', value: 'Melbourne, VIC, Australia', href: null },
  { icon: 'clock', label: 'Hours', value: 'Mon–Fri, 9am–5:30pm AEST', href: null },
];

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        subtitle="Fill out the form below and we'll get back to you within one business day, or reach us directly using the details on the right."
      />

      <section className="section contact-page">
        <div className="container contact-page__grid">
          <div className="contact-page__info" data-aos="fade-right">
            <h3>Get in touch</h3>
            <p className="contact-page__info-text">
              Have a question or want a quote? Reach out using any of the
              details below, or send us a message and we'll respond
              promptly.
            </p>

            <ul className="contact-page__info-list">
              {CONTACT_INFO.map((item) => (
                <li key={item.label}>
                  <span className="contact-page__info-icon">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <span className="contact-page__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <span className="contact-page__info-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-page__form-wrap" data-aos="fade-left">
            {status === 'success' ? (
              <div className="contact-page__success">
                <Icon name="success" className="contact-page__success-icon" />
                <h3>Message sent</h3>
                <p>Thanks for reaching out — we'll be in touch within one business day.</p>
                <button className="btn btn--secondary" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-page__form" onSubmit={handleSubmit} noValidate>
                <div className="contact-page__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? 'contact-page__input--error' : ''}
                  />
                  {errors.name && <span className="contact-page__error">{errors.name}</span>}
                </div>

                <div className="contact-page__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={errors.email ? 'contact-page__input--error' : ''}
                  />
                  {errors.email && <span className="contact-page__error">{errors.email}</span>}
                </div>

                <div className="contact-page__field">
                  <label htmlFor="phone">Phone Number (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="04xx xxx xxx"
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or question..."
                    className={errors.message ? 'contact-page__input--error' : ''}
                  />
                  {errors.message && <span className="contact-page__error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <p className="contact-page__form-error">
                    Something went wrong sending your message. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary contact-page__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}{' '}
                  <Icon name="send" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;