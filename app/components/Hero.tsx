import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Donnez à vos pièces la description qu'elles méritent</h1>
          <p>Nous transformons vos annonces de mobilier ancien et d'objets de collection en textes qui justifient le prix, créent du désir et accélèrent la vente.</p>
          <Link href="#contact" className="btn">Demander un devis</Link>
        </div>
      </div>
    </section>
  )
}
