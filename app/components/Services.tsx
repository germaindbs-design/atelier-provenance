export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1>Des textes qui justifient le prix,<br />créent du désir, accélèrent la vente.</h1>
            <p className="lead">
              Atelier Provenance rédige pour vous des notices expertes
              qui transforment vos annonces de mobilier ancien en véritables
              arguments de vente.
            </p>
            <div className="actions">
              <a href="#offres" className="button button-primary">Voir les offres</a>
              <a href="#exemples" className="button button-outline">Voir des exemples</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-text">
              Notice type<br />pour mobilier ancien
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
