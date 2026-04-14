import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Atelier Provenance</h3>
            <p>Rédaction experte pour le mobilier de collection et les objets anciens.</p>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link href="#services">Notices individuelles</Link></li>
              <li><Link href="#services">Lots de notices</Link></li>
              <li><Link href="#services">Catalogues complets</Link></li>
              <li><Link href="#examples">Exemples</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Légal</h3>
            <ul className="footer-links">
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/cgv">Conditions générales de vente</Link></li>
              <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>contact@atelier-provenance.com</li>
              <li>+33 6 12 34 56 78</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Atelier Provenance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
