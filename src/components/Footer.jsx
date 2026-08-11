import Brand from './Brand.jsx';
import { navLinks } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>Empowering beauty with premium wig installs, hair care, and styling across Houston and Katy.</p>
        </div>
        <div>
          <h2>Navigate</h2>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:+13102567079">310-256-7079</a>
          <span>Houston, TX & Katy</span>
          <span>Mobile appointment travel fee based on ZIP code</span>
        </div>
        <div>
          <h2>Social</h2>
          <a href="https://www.tiktok.com/@evorasalon" target="_blank" rel="noreferrer">@evorasalon</a>
          <a href="https://www.instagram.com/evora_hairsalon" target="_blank" rel="noreferrer">@Evora_hairsalon</a>
          <a href="https://www.facebook.com/Evora_hairsalon" target="_blank" rel="noreferrer">@Evora_hairsalon</a>
        </div>
      </div>
      <p className="copyright">© 2026 Evora Hair Salon. All rights reserved.</p>
    </footer>
  );
}
