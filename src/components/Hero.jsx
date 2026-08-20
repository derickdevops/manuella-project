export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy reveal">
        <img className="hero-logo" src="/images/evora-logo.jpeg" alt="Evora logo" />
        <span className="eyebrow">Houston & Katy hair beauty</span>
        <h1>Empowering beauty. Your Evora.</h1>
        <p>
          Premium wig installs, frontals, glueless styling, wash services, and revamps crafted for a confident,
          camera-ready finish.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Book Now</a>
          <a className="button button-secondary" href="#services">View Services</a>
        </div>
      </div>
      <div className="hero-media reveal delay-1">
        <img src="/images/beauty-makeup-artist.jpg" alt="Elegant beauty service with soft glam makeup styling" />
        <div className="hero-note">
          <strong>Wig installs from $85</strong>
          <span>Closures, frontals, glueless installs, revamps, curls, and custom finishes.</span>
        </div>
      </div>
    </section>
  );
}
