import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <section className="cta-section" aria-labelledby="cta-title">
          <div>
            <span className="eyebrow">Appointments</span>
            <h2 id="cta-title">Ready for a flawless install?</h2>
            <p>Book a polished Evora appointment for your next install, wash, revamp, or custom style.</p>
          </div>
          <a className="button button-light" href="#contact">Book Your Appointment</a>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
