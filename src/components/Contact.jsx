import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    if (!form.service) nextErrors.service = 'Please choose a service.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please share a short message.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-info reveal">
        <span className="eyebrow">Contact</span>
        <h2>Book your Evora appointment.</h2>
        <p>
          Send a request for your install, wash, revamp, or custom service. The form is frontend-only now and ready
          for a backend API later.
        </p>
        <div className="contact-list">
          <a href="tel:+13102567079">310-256-7079</a>
          <a href="mailto:hello@evorahairsalon.com">hello@evorahairsalon.com</a>
          <span>Houston, TX & Katy</span>
          <span>Mobile appointments available with ZIP-based travel fee</span>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://www.tiktok.com/@evorasalon" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.instagram.com/evora_hairsalon" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/Evora_hairsalon" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <form className="contact-form reveal delay-1" onSubmit={handleSubmit} noValidate>
        {submitted && <p className="success-message">Thank you. This request is ready to connect to an API later.</p>}
        <label>
          Name
          <input name="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} />
          {errors.email && <small>{errors.email}</small>}
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
        <label>
          Service
          <select name="service" value={form.service} onChange={updateField} aria-invalid={Boolean(errors.service)}>
            <option value="">Choose a service</option>
            <option>Basic Closure Wig Installation</option>
            <option>Frontal Installation</option>
            <option>Glueless Installation</option>
            <option>Wash and Blow-Dry</option>
            <option>Hairline Customisation</option>
            <option>Wig Revamp and Style</option>
          </select>
          {errors.service && <small>{errors.service}</small>}
        </label>
        <label className="full-span">
          Message
          <textarea name="message" rows="5" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} />
          {errors.message && <small>{errors.message}</small>}
        </label>
        <button className="button button-primary full-span" type="submit">Submit Request</button>
      </form>
    </section>
  );
}
