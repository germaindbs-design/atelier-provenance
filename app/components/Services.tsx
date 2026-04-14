export default function Services() {
  const services = [
    {
      title: "Notice individuelle",
      description: "Pour une pièce unique qui mérite une description sur mesure. Nous analysons son histoire, ses caractéristiques et son marché pour créer un texte qui met en valeur son authenticité et sa rareté.",
      price: "150€"
    },
    {
      title: "Lot de 3 notices",
      description: "Idéal pour les vendeurs réguliers. Chaque notice bénéficie de la même attention aux détails, avec une cohérence éditoriale pour votre catalogue.",
      price: "450€ (150€/pièce)"
    },
    {
      title: "Lot de 10 notices",
      description: "Pour les galeries et antiquaires avec un inventaire important. Nous créons une véritable narration autour de votre collection.",
      price: "1200€ (120€/pièce)"
    },
    {
      title: "Catalogue complet",
      description: "Harmonisation éditoriale de votre catalogue entier. Nous créons une voix cohérente qui reflète votre expertise et valorise chaque pièce.",
      price: "Sur devis"
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Nos services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>
        <p className="service-note">
          Chaque texte est rédigé à la main, sans automatisation. Nous prenons le temps de comprendre chaque pièce, son histoire et son marché.
        </p>
      </div>
    </section>
  )
}
