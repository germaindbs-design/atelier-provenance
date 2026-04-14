export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-logo">Atelier Provenance</p>
          <p className="footer-copy">© {new Date().getFullYear()} — Rédaction de mobilier de collection</p>
        </div>
        <div className="footer-right">
          <a href="mailto:contact.atelierprovenance@gmail.com" className="footer-email">contact.atelierprovenance@gmail.com</a>
          <a href="tel:+33751420733" className="footer-phone">07 51 42 07 33</a>
        </div>
      </div>
    </footer>
  );
}
