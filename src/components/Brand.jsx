export default function Brand({ compact = false }) {
  return (
    <a className={compact ? 'brand brand-compact' : 'brand'} href="#home" aria-label="Evora home">
      <img src="/images/evora-logo.jpeg" alt="" aria-hidden="true" />
      <span>
        <strong>Evora</strong>
        <small>Hair Salon</small>
      </span>
    </a>
  );
}
