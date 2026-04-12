"use client";

export default function Page() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">Atelier Provenance</a>
          <div className="nav-links">
            <a href="#proposition">La proposition</a>
            <a href="#offres">Prestations</a>
            <a href="#exemples">Exemples</a>
            <a href="#contact" className="button button-primary button-sm">
              Nous contacter
            </a>
          </div>
        </div>
      </nav>

      <main>

        {/* HERO */}
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Atelier Provenance</p>
            <h1>
              Vous avez les bonnes pièces.
              <br />
              <em>Nous leur donnons le langage qu'elles méritent.</em>
            </h1>
            <p className="intro">
              Rédaction et mise en valeur de mobilier de collection pour antiquaires,
              marchands, galeries et vendeurs de design. Des fiches de vente claires,
              désirables et prêtes à publier.
            </p>
            <div className="actions">
              <a href="#contact" className="button button-primary">
                Demander un exemple gratuit
              </a>
              <a href="#offres" className="button button-secondary">
                Voir les prestations
              </a>
            </div>
          </div>
          <div className="hero-rule" />
        </section>

        {/* BAND */}
        <section className="band">
          <div className="container grid-three">
            <div className="feature">
              <span className="feature-number">01</span>
              <p className="feature-title">Clarté</p>
              <p>
                Titres positionnants, informations hiérarchisées, lecture immédiate.
              </p>
            </div>
            <div className="feature">
              <span className="feature-number">02</span>
              <p className="feature-title">Désirabilité</p>
              <p>
                Mise en valeur sobre du design, de la matière, de l'époque et de la présence.
              </p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <p className="feature-title">Exploitation directe</p>
              <p>
                Versions prêtes à publier pour site, marketplace, newsletter ou réseaux.
              </p>
            </div>
          </div>
        </section>

        {/* CONSTAT */}
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Le constat</p>
              <h2>
                Beaucoup d'objets sont bien choisis.
                <br />
                <em>Peu sont réellement bien présentés.</em>
              </h2>
            </div>
            <div className="text-block">
              <p>
                La plupart des annonces décrivent sans valoriser. Elles informent, mais ne
                donnent ni lecture, ni cohérence, ni projection.
              </p>
              <p>
                Résultat : des objets sous-positionnés, une valeur perçue affaiblie et une
                image de catalogue moins forte qu'elle ne pourrait l'être.
              </p>
              <div className="pull-quote">
                « Un objet bien décrit se vend mieux — et au bon prix. »
              </div>
            </div>
          </div>
        </section>

        {/* PROPOSITION */}
        <section className="section border-top" id="proposition">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">La proposition</p>
              <h2>Nous transformons des objets en récits de vente.</h2>
              <p className="section-intro">
                Pas pour en dire plus. Pour rendre la valeur visible, clarifier la pièce et
                aider l'acheteur à se projeter.
              </p>
            </div>
            <div className="cards cards-three">
              <div className="card card-plain">
                <div className="card-icon">—</div>
                <h3>Structuration</h3>
                <p>Titre positionnant, informations hiérarchisées, points saillants mis en avant.</p>
              </div>
              <div className="card card-plain">
                <div className="card-icon">—</div>
                <h3>Mise en valeur</h3>
                <p>Vocabulaire précis, contexte cohérent, justification naturelle du prix.</p>
              </div>
              <div className="card card-plain">
                <div className="card-icon">—</div>
                <h3>Déclinaisons</h3>
                <p>Version longue, version courte, extraits réutilisables selon les canaux.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section className="section section-alt" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Une gamme simple, pour tester, structurer, puis déléguer.</h2>
            </div>
            <div className="cards cards-two">

              <div className="card">
                <div className="offer-head">
                  <h3>Audit Express</h3>
                  <span className="price">390 €</span>
                </div>
                <p className="offer-desc">
                  Une première démonstration concrète pour voir immédiatement ce que
                  vos objets pourraient devenir.
                </p>
                <ul>
                  <li>Analyse de 10 objets</li>
                  <li>Réécriture complète de 2 fiches</li>
                  <li>Recommandations concrètes</li>
                  <li>Appel de restitution de 30 minutes</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Commencer
                </a>
              </div>

              <div className="card card-featured">
                <div className="badge">Recommandé</div>
                <div className="offer-head">
                  <h3>Pack Pilote</h3>
                  <span className="price">1 900 €</span>
                </div>
                <p className="offer-desc">
                  L'offre centrale pour transformer un premier lot d'objets en catalogue
                  plus lisible, plus cohérent et plus vendable.
                </p>
                <ul>
                  <li>15 fiches premium prêtes à publier</li>
                  <li>Déclinaisons courtes et longues</li>
                  <li>Contenus complémentaires selon les besoins</li>
                  <li>Livraison rapide et utilisation immédiate</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Commencer
                </a>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Abonnement</h3>
                  <span className="price">3 000 – 6 000 € / mois</span>
                </div>
                <p className="offer-desc">
                  Une externalisation fluide pour les structures qui ont du volume et
                  veulent gagner du temps sans perdre en niveau.
                </p>
                <ul>
                  <li>30 à 60 fiches par mois</li>
                  <li>Optimisation continue</li>
                  <li>Support asynchrone</li>
                  <li>Production régulière et homogène</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Nous contacter
                </a>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Système Premium</h3>
                  <span className="price">8 000 – 20 000 €</span>
                </div>
                <p className="offer-desc">
                  Pour les catalogues à structurer en profondeur : refonte éditoriale,
                  harmonisation et transmission de méthode.
                </p>
                <ul>
                  <li>Refonte catalogue complète</li>
                  <li>Storytelling global de la marque</li>
                  <li>Templates et process documentés</li>
                  <li>Formation d'équipe incluse</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Nous contacter
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* EXEMPLES */}
        <section className="section" id="exemples">
          <div className="container split split-reverse">
            <div>
              <p className="eyebrow">Exemples</p>
              <h2>Ce que change une fiche bien construite.</h2>
              <p className="section-intro" style={{ marginTop: "16px" }}>
                Trois cas concrets pour illustrer l'écart entre une description
                fonctionnelle et une fiche qui vend.
              </p>
            </div>
            <div className="examples">
              <div className="example">
                <div className="example-meta">Mobilier de rangement · 1960s</div>
                <h3>Enfilade Karlit</h3>
                <p>
                  Repositionnement d'une pièce déjà forte : meilleure lecture, meilleure
                  présence, cohérence renforcée avec le positionnement prix.
                </p>
              </div>
              <div className="example">
                <div className="example-meta">Assise · 1950s · Lot de 3</div>
                <h3>Trois chaises années 1950</h3>
                <p>
                  Transformation d'un lot utilitaire en ensemble cohérent, lisible et
                  plus désirable à l'œil comme sur la page.
                </p>
              </div>
              <div className="example">
                <div className="example-meta">Bureau · Vers 1880</div>
                <h3>Bureau ancien</h3>
                <p>
                  Justification du positionnement et du prix par la structure, l'usage,
                  la qualité et la lisibilité historique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-contact border-top" id="contact">
          <div className="container">
            <div className="contact-box">
              <p className="eyebrow">Contact</p>
              <h2>Le plus simple : m'envoyer 2 ou 3 objets.</h2>
              <p className="section-intro narrow">
                Photos, prix, dimensions, état — et toute information disponible.
                Je vous dirai si c'est un bon test et sous quelle forme commencer.
              </p>
              <div className="actions">
                <a href="mailto:contact@atelierprovenance.fr" className="button button-primary">
                  Écrire un email
                </a>
                <a href="#offres" className="button button-secondary">
                  Revoir les offres
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-logo">Atelier Provenance</p>
          <p className="footer-copy">
            © {new Date().getFullYear()} — Rédaction de mobilier de collection.
          </p>
          <a href="mailto:contact@atelierprovenance.fr" className="footer-email">
            contact@atelierprovenance.fr
          </a>
        </div>
      </footer>

      <style jsx global>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #1a1a1a;
          background: #ffffff;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        main {
          width: 100%;
        }

        /* ── CONTAINER ── */
        .container {
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── NAV ── */
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #ebebeb;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          gap: 32px;
        }

        .nav-logo {
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          font-weight: 500;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem;
          color: #525252;
        }

        .nav-links a:not(.button):hover {
          color: #1a1a1a;
        }

        /* ── HERO ── */
        .hero {
          padding: 104px 0 88px;
        }

        .hero-rule {
          width: 100%;
          height: 1px;
          background: #e5e5e5;
          margin-top: 88px;
        }

        /* ── TYPOGRAPHY ── */
        .eyebrow {
          margin: 0 0 20px;
          font-size: 11px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #8a8a8a;
          font-family: Arial, Helvetica, sans-serif;
        }

        h1, h2, h3, p, ul {
          margin-top: 0;
        }

        h1 {
          max-width: 900px;
          margin-bottom: 32px;
          font-size: clamp(2.6rem, 5.5vw, 5rem);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #111111;
        }

        h1 em, h2 em {
          font-style: italic;
          color: #3a3a3a;
        }

        h2 {
          margin-bottom: 20px;
          font-size: clamp(1.9rem, 3vw, 2.75rem);
          line-height: 1.15;
          font-weight: 400;
          letter-spacing: -0.015em;
        }

        h3 {
          margin-bottom: 12px;
          font-size: 1.2rem;
          line-height: 1.35;
          font-weight: 500;
        }

        .intro,
        .section-intro,
        .text-block p,
        .card p,
        .offer-desc,
        .example p,
        .feature p {
          font-family: Arial, Helvetica, sans-serif;
          color: #555555;
          line-height: 1.85;
        }

        .intro {
          max-width: 700px;
          font-size: 1.1rem;
          margin-bottom: 40px;
          color: #444444;
        }

        .section-intro {
          font-size: 1.05rem;
          max-width: 680px;
          margin-bottom: 0;
        }

        /* ── SECTIONS ── */
        .section {
          padding: 96px 0;
        }

        .section-alt {
          background: #f8f7f5;
        }

        .border-top {
          border-top: 1px solid #e5e5e5;
        }

        .section-head {
          max-width: 840px;
          margin-bottom: 52px;
        }

        /* ── BAND ── */
        .band {
          background: #f8f7f5;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          padding: 40px 0;
        }

        .grid-three {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
        }

        .feature {
          padding: 8px 36px 8px 0;
          border-right: 1px solid #e5e5e5;
        }

        .feature:last-child {
          border-right: none;
          padding-right: 0;
          padding-left: 36px;
        }

        .feature:not(:first-child):not(:last-child) {
          padding-left: 36px;
        }

        .feature-number {
          display: block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          color: #b0b0b0;
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }

        .feature-title {
          margin-bottom: 8px;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6a6a6a;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
        }

        /* ── SPLIT ── */
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .text-block p + p {
          margin-top: 20px;
        }

        /* ── PULL QUOTE ── */
        .pull-quote {
          margin-top: 32px;
          padding: 20px 24px;
          border-left: 2px solid #1a1a1a;
          font-style: italic;
          font-size: 1.05rem;
          color: #2a2a2a;
          line-height: 1.6;
          background: #f8f7f5;
          border-radius: 0 8px 8px 0;
        }

        /* ── CARDS ── */
        .cards {
          display: grid;
          gap: 20px;
        }

        .cards-three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .cards-two {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .card {
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          background: #ffffff;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease;
        }

        .card:hover {
          box-shadow: 0 4px 28px rgba(0,0,0,0.07);
        }

        .card-plain {
          background: #f8f7f5;
          border-color: transparent;
        }

        .card-icon {
          font-size: 1.4rem;
          margin-bottom: 20px;
          color: #b0b0b0;
          letter-spacing: 0.05em;
        }

        .card-featured {
          border-width: 1.5px;
          border-color: #1a1a1a;
          background: #111111;
          color: #ffffff;
          position: relative;
        }

        .card-featured h3 {
          color: #ffffff;
        }

        .card-featured .offer-desc,
        .card-featured ul {
          color: #c0c0c0;
        }

        .card-featured .price {
          color: #aaaaaa;
        }

        .card-featured .button-primary {
          background: #ffffff;
          color: #111111;
        }

        .card-featured .button-primary:hover {
          background: #f0f0f0;
        }

        .badge {
          display: inline-block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #111111;
          background: #ffffff;
          border-radius: 999px;
          padding: 4px 12px;
          margin-bottom: 20px;
          align-self: flex-start;
        }

        /* ── OFFER ── */
        .offer-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .price {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem;
          color: #7a7a7a;
          white-space: nowrap;
        }

        .offer-desc {
          margin-bottom: 20px;
        }

        ul {
          padding-left: 16px;
          font-family: Arial, Helvetica, sans-serif;
          color: #444444;
          line-height: 1.9;
          margin-bottom: 28px;
          flex: 1;
        }

        li {
          padding-left: 4px;
        }

        .offer-cta {
          align-self: flex-start;
          margin-top: auto;
        }

        /* ── EXAMPLES ── */
        .examples {
          display: grid;
          gap: 16px;
        }

        .example {
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 24px 28px;
          transition: background 0.2s ease;
        }

        .example:hover {
          background: #f8f7f5;
        }

        .example-meta {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #aaaaaa;
          margin-bottom: 8px;
        }

        .example h3 {
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        /* ── CONTACT ── */
        .section-contact {
          background: #f8f7f5;
        }

        .contact-box {
          max-width: 780px;
        }

        .narrow {
          max-width: 640px;
          margin-bottom: 36px;
        }

        /* ── BUTTONS ── */
        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 999px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          cursor: pointer;
        }

        .button-sm {
          min-height: 38px;
          padding: 0 18px;
          font-size: 0.85rem;
        }

        .button-primary {
          background: #1a1a1a;
          color: #ffffff;
        }

        .button-primary:hover {
          background: #3a3a3a;
        }

        .button-secondary {
          border: 1px solid #d0d0d0;
          color: #1a1a1a;
          background: transparent;
        }

        .button-secondary:hover {
          border-color: #8a8a8a;
          background: #f8f7f5;
        }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid #e5e5e5;
          padding: 36px 0;
          background: #ffffff;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-logo {
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          margin: 0;
        }

        .footer-copy {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem;
          color: #9a9a9a;
          margin: 0;
        }

        .footer-email {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem;
          color: #555555;
          transition: color 0.2s ease;
        }

        .footer-email:hover {
          color: #1a1a1a;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .container {
            padding: 0 24px;
          }

          .grid-three {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .feature {
            border-right: none;
            border-bottom: 1px solid #e5e5e5;
            padding: 0 0 24px 0 !important;
          }

          .feature:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }

          .cards-three,
          .cards-two,
          .split {
            grid-template-columns: 1fr;
          }

          .split {
            gap: 48px;
          }

          .hero {
            padding: 72px 0 64px;
          }

          .hero-rule {
            margin-top: 64px;
          }

          .section {
            padding: 72px 0;
          }

          .nav-links a:not(.button) {
            display: none;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 56px 0 48px;
          }

          .section {
            padding: 56px 0;
          }

          .button {
            width: 100%;
            justify-content: center;
          }

          .actions {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
