export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Atelier Provenance</p>
            <h1>
              Vous avez les bonnes pièces.
              <br />
              Nous leur donnons le langage qu’elles méritent.
            </h1>
            <p className="intro">
              Rédaction et mise en valeur de mobilier de collection pour antiquaires,
              marchands, galeries et vendeurs de design. Des fiches de vente claires,
              désirables et prêtes à publier.
            </p>
            <div className="actions">
              <a href="#contact" className="button button-primary">
                Demander un exemple
              </a>
              <a href="#offres" className="button button-secondary">
                Voir les prestations
              </a>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container grid-three">
            <div className="feature">
              <p className="feature-title">Clarté</p>
              <p>
                Titres positionnants, informations hiérarchisées, lecture immédiate.
              </p>
            </div>
            <div className="feature">
              <p className="feature-title">Désirabilité</p>
              <p>
                Mise en valeur sobre du design, de la matière, de l’époque et de la
                présence.
              </p>
            </div>
            <div className="feature">
              <p className="feature-title">Exploitation directe</p>
              <p>
                Versions prêtes à publier pour site, marketplace, newsletter ou réseaux.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Le constat</p>
              <h2>
                Beaucoup d’objets sont bien choisis.
                <br />
                Peu sont réellement bien présentés.
              </h2>
            </div>
            <div className="text-block">
              <p>
                La plupart des annonces décrivent sans valoriser. Elles informent, mais ne
                donnent ni lecture, ni cohérence, ni projection.
              </p>
              <p>
                Résultat : des objets sous-positionnés, une valeur perçue affaiblie et une
                image de catalogue moins forte qu’elle ne pourrait l’être.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-top">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">La proposition</p>
              <h2>Nous transformons des objets en récits de vente.</h2>
              <p className="section-intro">
                Pas pour en dire plus. Pour rendre la valeur visible, clarifier la pièce et
                aider l’acheteur à se projeter.
              </p>
            </div>

            <div className="cards cards-three">
              <div className="card">
                <h3>Structuration</h3>
                <p>Titre positionnant, informations hiérarchisées, points saillants.</p>
              </div>
              <div className="card">
                <h3>Mise en valeur</h3>
                <p>Vocabulaire précis, contexte cohérent, justification naturelle du prix.</p>
              </div>
              <div className="card">
                <h3>Déclinaisons</h3>
                <p>Version longue, version courte, extraits réutilisables selon les besoins.</p>
              </div>
            </div>
          </div>
        </section>

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
                  <span>390 €</span>
                </div>
                <p>
                  Une première démonstration concrète pour voir immédiatement ce que vos
                  objets pourraient devenir.
                </p>
                <ul>
                  <li>Analyse de 10 objets</li>
                  <li>Réécriture complète de 2 fiches</li>
                  <li>Recommandations concrètes</li>
                  <li>Appel de restitution de 30 minutes</li>
                </ul>
              </div>

              <div className="card card-featured">
                <div className="offer-head">
                  <h3>Pack Pilote</h3>
                  <span>1 900 €</span>
                </div>
                <p>
                  L’offre centrale pour transformer un premier lot d’objets en catalogue plus
                  lisible, plus cohérent et plus vendable.
                </p>
                <ul>
                  <li>15 fiches premium prêtes à publier</li>
                  <li>Déclinaisons courtes et longues</li>
                  <li>Contenus complémentaires selon les besoins</li>
                  <li>Livraison rapide et utilisation immédiate</li>
                </ul>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Abonnement</h3>
                  <span>3 000 à 6 000 € / mois</span>
                </div>
                <p>
                  Une externalisation fluide de la rédaction catalogue pour les structures qui
                  ont du volume et veulent gagner du temps sans perdre en niveau.
                </p>
                <ul>
                  <li>30 à 60 fiches par mois</li>
                  <li>Optimisation continue</li>
                  <li>Support asynchrone</li>
                  <li>Production régulière et homogène</li>
                </ul>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Système Premium</h3>
                  <span>8 000 à 20 000 €</span>
                </div>
                <p>
                  Pour les catalogues à structurer en profondeur : refonte éditoriale,
                  harmonisation, logique de gamme et transmission de méthode.
                </p>
                <ul>
                  <li>Refonte catalogue</li>
                  <li>Storytelling global</li>
                  <li>Templates et process</li>
                  <li>Formation d’équipe</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Exemples</p>
              <h2>Trois cas pour montrer ce que change une fiche bien construite.</h2>
            </div>
            <div className="examples">
              <div className="example">
                <h3>Enfilade Karlit, années 1960</h3>
                <p>
                  Repositionnement d’une pièce déjà forte : meilleure lecture, meilleure
                  présence, meilleure cohérence.
                </p>
              </div>
              <div className="example">
                <h3>Trois chaises années 1950</h3>
                <p>
                  Transformation d’un lot utilitaire en ensemble cohérent, lisible et plus
                  désirable.
                </p>
              </div>
              <div className="example">
                <h3>Bureau ancien vers 1880</h3>
                <p>
                  Justification du positionnement et du prix par la structure, l’usage et la
                  qualité.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top" id="contact">
          <div className="container contact-box">
            <p className="eyebrow">Contact</p>
            <h2>Le plus simple : m’envoyer 2 ou 3 objets.</h2>
            <p className="section-intro narrow">
              Photos, prix, dimensions, état, et toute information disponible. Je te dirai si
              c’est un bon test et sous quelle forme commencer.
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
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #171717;
          background: #ffffff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        main {
          width: 100%;
        }

        .container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          padding: 96px 0 88px;
        }

        .eyebrow {
          margin: 0 0 18px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #737373;
          font-family: Arial, Helvetica, sans-serif;
        }

        h1,
        h2,
        h3,
        p,
        ul {
          margin-top: 0;
        }

        h1 {
          max-width: 880px;
          margin-bottom: 28px;
          font-size: clamp(2.5rem, 5vw, 4.75rem);
          line-height: 1.06;
          font-weight: 500;
        }

        h2 {
          margin-bottom: 18px;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.15;
          font-weight: 500;
        }

        h3 {
          margin-bottom: 14px;
          font-size: 1.25rem;
          line-height: 1.3;
          font-weight: 500;
        }

        .intro,
        .section-intro,
        .text-block p,
        .card p,
        .example p,
        .feature p {
          font-family: Arial, Helvetica, sans-serif;
          color: #525252;
          line-height: 1.8;
        }

        .intro {
          max-width: 760px;
          font-size: 1.125rem;
          margin-bottom: 34px;
        }

        .section {
          padding: 88px 0;
        }

        .section-alt {
          background: #fafafa;
        }

        .border-top {
          border-top: 1px solid #e5e5e5;
        }

        .band {
          background: #fafafa;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          padding: 32px 0;
        }

        .grid-three {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .feature-title {
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #737373;
          font-family: Arial, Helvetica, sans-serif;
        }

        .split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: start;
        }

        .text-block p + p {
          margin-top: 18px;
        }

        .section-head {
          max-width: 820px;
          margin-bottom: 40px;
        }

        .cards {
          display: grid;
          gap: 24px;
        }

        .cards-three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .cards-two {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .card {
          border: 1px solid #e5e5e5;
          border-radius: 28px;
          background: #ffffff;
          padding: 28px;
        }

        .card-featured {
          border-width: 2px;
          border-color: #171717;
        }

        .offer-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 16px;
        }

        .offer-head span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.95rem;
          color: #737373;
          white-space: nowrap;
        }

        ul {
          padding-left: 18px;
          font-family: Arial, Helvetica, sans-serif;
          color: #404040;
          line-height: 1.8;
        }

        .examples {
          display: grid;
          gap: 18px;
        }

        .example {
          border: 1px solid #e5e5e5;
          border-radius: 24px;
          padding: 24px;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .button-primary {
          background: #171717;
          color: #ffffff;
        }

        .button-primary:hover {
          background: #333333;
        }

        .button-secondary {
          border: 1px solid #d4d4d4;
          color: #171717;
        }

        .button-secondary:hover {
          border-color: #737373;
        }

        .contact-box {
          max-width: 860px;
        }

        .narrow {
          max-width: 700px;
        }

        @media (max-width: 900px) {
          .grid-three,
          .cards-three,
          .cards-two,
          .split {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 72px 0 64px;
          }

          .section {
            padding: 72px 0;
          }
        }
      `}</style>
    </>
  );
}
