import { services } from '../data.js';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading reveal">
        <span className="eyebrow">Services</span>
        <h2>Signature installs, revamps, and finish work.</h2>
        <p>Choose a focused service or request a custom appointment based on your unit, timeline, and desired style.</p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" style={{ '--delay': `${index * 60}ms` }} key={service.title}>
            <img src={service.image} alt={`${service.title} at Evora`} />
            <div>
              <span className="service-price">{service.price}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="text-link">Book Now</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
