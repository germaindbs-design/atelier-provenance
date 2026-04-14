import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            Atelier Provenance
          </Link>
          <div className="nav-links">
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/about" className="nav-link">À propos</Link>
            <Link href="/contact" className="btn btn-outline">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
