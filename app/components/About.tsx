export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">À propos d'Atelier Provenance</h2>

        <div className="about-content">
          <div className="about-text">
            <p>Atelier Provenance est né d'un constat simple : sur le marché du mobilier ancien et des objets de collection, la qualité des descriptions ne reflète pas celle des pièces proposées.</p>

            <p>Nous sommes convaincus que chaque objet a une histoire à raconter, et que cette histoire est essentielle pour justifier son prix et créer du désir auprès des collectionneurs.</p>

            <p>Notre approche combine :</p>
            <ul>
              <li><strong>Expertise marché</strong> : nous connaissons les tendances, les prix et les attentes des collectionneurs</li>
              <li><strong>Sensibilité historique</strong> : nous savons identifier les détails qui font la valeur d'une pièce</li>
              <li><strong>Talent rédactionnel</strong> : nous transformons ces informations en textes élégants et persuasifs</li>
            </ul>

            <p>Chaque texte est rédigé à la main, sans automatisation. Nous prenons le temps de comprendre chaque pièce, son histoire et son marché pour créer une description qui la valorise pleinement.</p>
          </div>

          <div className="about-image">
            <img src="/about-image.jpg" alt="Atelier Provenance" />
          </div>
        </div>
      </div>
    </section>
  )
}
