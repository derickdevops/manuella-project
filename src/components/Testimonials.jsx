import { testimonials } from '../data.js';

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-heading reveal">
        <span className="eyebrow">Testimonials</span>
        <h2>Trusted for polished, natural-looking results.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card reveal" style={{ '--delay': `${index * 70}ms` }} key={testimonial.name}>
            <div className="stars" aria-label="Five star rating">★★★★★</div>
            <p>“{testimonial.quote}”</p>
            <strong>{testimonial.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
