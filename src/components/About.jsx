const stats = [
  ['Houston', 'Service Area'],
  ['Katy', 'Mobile Area'],
  ['15+', 'Hair Services'],
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-media reveal">
        <img src="/images/beauty-salon-interior.jpg" alt="Premium beauty salon interior with soft blush chairs" />
      </div>
      <div className="section-copy reveal delay-1">
        <span className="eyebrow">About Evora</span>
        <h2>Polished hair services with detail, care, and confidence.</h2>
        <p>
          Evora focuses on beauty that feels personal: clean installs, careful customization, smooth styling, and
          appointment experiences that help clients feel prepared and confident.
        </p>
        <p>
          From closure wig installation to lace repair and same-day prep, each service is designed to protect the
          look, comfort, and longevity of your style.
        </p>
        <div className="stats-grid" aria-label="Evora highlights">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
