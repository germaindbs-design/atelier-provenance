import Link from 'next/link'
import Comparison from '../components/Comparison'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Transformez vos annonces en histoires qui vendent
              </h1>
              <p className="hero-subtitle">
                Des notices expertes pour le mobilier de collection et les objets anciens,
                qui justifient le prix et accélèrent la vente.
              </p>
              <Link href="/contact" className="btn">
                Demander un devis
              </Link>
            </div>
            <div className="hero-image">
              <img
                src="/hero-image.jpg"
                alt="Mobilier ancien de collection"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nos services</h2>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="service-card" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>Notice individuelle</h3>
              <p>150 € par notice (lot de 3 : 450 €)</p>
              <p>Une description détaillée qui met en valeur votre objet et justifie son prix.</p>
            </div>
            <div className="service-card" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>Lot de 10 notices</h3>
              <p>120 € par notice (1 200 € le lot)</p>
              <p>Idéal pour les galeries et antiquaires avec un catalogue important.</p>
            </div>
            <div className="service-card" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>Catalogue complet</h3>
              <p>Sur devis</p>
              <p>Harmonisation de l'ensemble de votre catalogue avec un ton cohérent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="container">
          <h2 className="section-title">Avant / Après</h2>
          <Comparison />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '3rem', borderRadius: '8px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Prêt à vendre plus vite et plus cher ?</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Offrez à vos objets la description qu'ils méritent.</p>
            <Link href="/contact" className="btn" style={{ backgroundColor: 'var(--accent)', color: 'var(--dark)' }}>
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
