export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '3rem 0' }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Atelier Provenance</h3>
            <p>Rédaction experte pour le mobilier de collection et les objets anciens.</p>
          </div>
          <div className="footer-section">
            <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Liens utiles</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="/services" style={{ color: 'white', opacity: 0.8 }}>Services</a></li>
              <li><a href="/about" style={{ color: 'white', opacity: 0.8 }}>À propos</a></li>
              <li><a href="/contact" style={{ color: 'white', opacity: 0.8 }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Contact</h4>
            <p>Email: contact@atelier-provenance.com</p>
            <p>Téléphone: +33 6 12 34 56 78</p>
          </div>
        </div>
        <div className="footer-bottom" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p>&copy; {new Date().getFullYear()} Atelier Provenance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
