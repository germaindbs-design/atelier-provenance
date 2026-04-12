"use client";

import { useState } from "react";

export default function Page() {
  const [openExample, setOpenExample] = useState(null);

  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">Atelier Provenance</a>
          <div className="nav-links">
            <a href="#proposition">Approche</a>
            <a href="#offres">Prestations</a>
            <a href="#exemples">Exemples</a>
            <a href="#contact" className="button button-primary button-sm">
              Prendre contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Atelier Provenance</p>
              <h1>
                Vos pièces ont une valeur.
                <br />
                <em>Il reste à la rendre lisible.</em>
              </h1>
              <p className="intro">
                Rédaction de notices pour le mobilier de collection. Chaque texte
                est construit pour soutenir le prix, clarifier la pièce et rendre
                l'objet véritablement désirable — pas seulement visible.
              </p>
              <div className="actions">
                <a href="#contact" className="button button-primary">
                  Envoyer trois objets
                </a>
                <a href="#offres" className="button button-secondary">
                  Voir les prestations
                </a>
              </div>
            </div>
            <div className="hero-panel">
              <div className="hero-card">
                <p className="hero-label">En bref</p>
                <ul className="hero-list">
                  <li>Analyse du marché avant toute rédaction</li>
                  <li>Vocabulaire précis, positionnement assumé</li>
                  <li>Formats prêts à publier, adaptés à vos canaux</li>
                  <li>Livraison sous 5 jours ouvrés</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EPIGRAPHE */}
        <section className="epigraph">
          <div className="container">
            <blockquote className="epigraph-quote">
              « Les beaux livres sont écrits dans une sorte de langue étrangère. »
              <cite>Marcel Proust, <em>Contre Sainte-Beuve</em></cite>
            </blockquote>
          </div>
        </section>

        {/* BAND */}
        <section className="band">
          <div className="container grid-three">
            <div className="feature">
              <span className="feature-number">01</span>
              <p className="feature-title">Marché</p>
              <p>Analyse des prix observés — plateformes, marchands, galeries — avant d'écrire une ligne.</p>
            </div>
            <div className="feature">
              <span className="feature-number">02</span>
              <p className="feature-title">Traduction</p>
              <p>Un texte qui traduit la valeur de l'objet dans une langue que l'acheteur peut entendre.</p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <p className="feature-title">Exploitation</p>
              <p>Version longue, version courte, extraits réutilisables — prêts à publier sur tous vos canaux.</p>
            </div>
          </div>
        </section>

        {/* CONSTAT */}
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Le constat</p>
              <h2>
                La plupart des annonces décrivent.
                <br />
                <em>Aucune ne convainc.</em>
              </h2>
            </div>
            <div className="text-block">
              <p>
                Un objet bien choisi peut passer inaperçu si son annonce se
                contente d'énoncer des dimensions et un état général. La
                description informe — elle ne positionne pas.
              </p>
              <p>
                Résultat : une valeur perçue affaiblie, un prix difficile à
                défendre, un catalogue qui ne reflète pas la qualité de la
                sélection.
              </p>
              <div className="pull-quote">
                Une bonne notice ne crée pas la valeur de l'objet —
                elle la traduit enfin dans une langue que l'acheteur peut entendre.
              </div>
            </div>
          </div>
        </section>

        {/* QUI */}
        <section className="section section-alt border-top" id="proposition">
          <div className="container split">
            <div>
              <p className="eyebrow">L'atelier</p>
              <h2>
                Un œil sur les objets.
                <br />
                <em>Une main sur les mots.</em>
              </h2>
            </div>
            <div className="text-block">
              <p>
                Atelier Provenance est une structure spécialisée dans la
                valorisation éditoriale du mobilier de collection. Chaque mission
                est traitée avec soin, sans délégation ni automatisation.
              </p>
              <p>
                Une connaissance directe des codes du marché — du vocabulaire
                attendu aux plateformes de référence — au service d'une seule
                ambition : traduire ce que l'objet vaut en termes que l'acheteur
                reconnaît et retient.
              </p>
              <p>
                Le point de départ est toujours le même : comprendre la pièce,
                situer son marché, puis écrire un texte qui tient le prix plutôt
                que de l'excuser.
              </p>
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section className="section border-top" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Trois formules. Un seul niveau d'exigence.</h2>
              <p className="section-intro">
                Que ce soit pour tester le service sur trois pièces ou structurer
                un catalogue entier, chaque formule répond à un besoin précis.
              </p>
            </div>

            <div className="cards cards-three">

              {/* OFFRE 1 */}
              <div className="card">
                <div className="offer-head">
                  <h3>Première lecture</h3>
                  <span className="price">3 notices · 450 €</span>
                </div>
                <p className="offer-desc">
                  Pour évaluer le service sur un premier lot, sans engagement.
                  Le bon point de départ.
                </p>
                <ul>
                  <li>3 notices complètes</li>
                  <li>150 € / notice</li>
                  <li>Analyse marché incluse</li>
                  <li>Version longue + courte</li>
                  <li>Livraison sous 5 jours</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Commencer ici
                </a>
              </div>

              {/* OFFRE 2 — FEATURED */}
              <div className="card card-featured">
                <div className="offer-head">
                  <h3>Ensemble</h3>
                  <span className="price">10 notices · 1 200 €</span>
                </div>
                <p className="offer-desc">
                  Pour traiter un ensemble cohérent et donner une vraie
                  consistance à votre catalogue.
                </p>
                <ul>
                  <li>10 notices complètes</li>
                  <li>120 € / notice</li>
                  <li>Analyse marché incluse</li>
                  <li>Toutes déclinaisons</li>
                  <li>Alignement éditorial global</li>
                  <li>Livraison sous 10 jours</li>
                </ul>
                <a href="#contact" className="button button-light offer-cta">
                  Nous contacter
                </a>
              </div>

              {/* OFFRE 3 */}
              <div className="card">
                <div className="offer-head">
                  <h3>Catalogue</h3>
                  <span className="price">Sur devis</span>
                </div>
                <p className="offer-desc">
                  Pour les marchands et galeries souhaitant un accompagnement
                  éditorial continu sur l'ensemble de leur stock.
                </p>
                <ul>
                  <li>Volume et cadence adaptés</li>
                  <li>Charte éditoriale dédiée</li>
                  <li>Suivi et révisions inclus</li>
                  <li>Interlocuteur unique</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Nous contacter
                </a>
              </div>

            </div>

            <p className="pricing-note">
              Chaque notice inclut : analyse du marché de référence, rédaction
              longue (250–350 mots), version courte adaptée aux réseaux sociaux
              et aux plateformes de vente, et un extrait accroche utilisable en
              titre d'annonce. Paiement à la livraison. Aucune automatisation :
              chaque texte est rédigé à la main, pour une seule pièce à la fois.
            </p>
          </div>
        </section>

        {/* EXEMPLES */}
        <section className="section section-alt border-top" id="exemples">
          <div className="container">
            <div className="section-head examples-head">
              <p className="eyebrow">Exemples</p>
              <h2>Trois cas, avant et après.</h2>
              <p className="section-intro">
                Chaque exemple part d'une annonce existante et montre ce que la
                rédaction change — sur la lecture, la désirabilité, la cohérence
                avec le prix affiché. La version "après" présente le format court,
                idéal pour une publication sur les réseaux sociaux ou une plateforme
                comme Drouot Digital.
              </p>
            </div>

            <div className="examples-stack">

              {/* CAS 1 */}
              <article className={`case-study ${openExample === 1 ? "is-open" : ""}`}>
                <button
                  className="case-toggle"
                  onClick={() => setOpenExample(openExample === 1 ? null : 1)}
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 1 · Fauteuil club, vers 1930</p>
                    <h3>Rendre à un objet usé sa dignité de pièce de caractère.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 850 €</span>
                      <span>Cuir patiné · chêne</span>
                      <span>Formule Première lecture</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 1 ? "−" : "+"}
                  </div>
                </button>

                {openExample === 1 && (
                  <div className="case-body">
                    <div className="before-after-grid">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          Fauteuil club ancien en cuir marron, quelques griffures,
                          structure bois solide, bon état général. Livraison
                          possible. H 85 × L 80 × P 75 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après — format court</p>
                        <p className="panel-sublabel">Adapté à une publication Instagram ou Drouot Digital</p>
                        <h4>
                          Fauteuil club, circa 1930 — cuir naturel patiné,
                          structure chêne massif
                        </h4>
                        <p>
                          Ce fauteuil club ne cherche pas à dissimuler son âge :
                          il l'assume. Le cuir naturel, griffé par l'usage et
                          assoupli par le temps, a acquis cette teinte profonde
                          que nulle teinture ne reproduit. La structure en chêne
                          massif — solide, sans jeu — témoigne d'une fabrication
                          antérieure aux compromis de série.
                        </p>
                        <p>
                          Un fauteuil de cette génération ne se trouve plus
                          facilement dans cet état d'intégrité. H 85 × L 80 × P 75 cm.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              {/* CAS 2 */}
              <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                <button
                  className="case-toggle"
                  onClick={() => setOpenExample(openExample === 2 ? null : 2)}
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 2 · Chaises, années 1950</p>
                    <h3>Faire d'un lot banal un ensemble cohérent et désirable.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 420 €</span>
                      <span>Métal · velours</span>
                      <span>Formule Première lecture</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 2 ? "−" : "+"}
                  </div>
                </button>

                {openExample === 2 && (
                  <div className="case-body">
                    <div className="before-after-grid">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          3 chaises années 50 métal et velours vert, idéales
                          pour bureau ou table, bon état, velours nettoyé,
                          traces d'usage sur le métal. H 83 × L 60 × P 53 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après — format court</p>
                        <p className="panel-sublabel">Adapté à une publication Instagram ou Drouot Digital</p>
                        <h4>
                          Ensemble de trois chaises, circa 1955 — structure
                          métallique noire, velours vert, esprit moderniste
                        </h4>
                        <p>
                          Un ensemble rare à trouver complet : trois chaises
                          cohérentes dans leur ligne et dans leur matière. La
                          rigueur du métal laqué noir répond à la douceur du
                          velours vert — un contraste qui situe immédiatement
                          la pièce dans l'esthétique des années 1950.
                        </p>
                        <p>
                          Velours nettoyé, patine métallique d'usage.
                          H 83 × L 60 × P 53 cm.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              {/* CAS 3 */}
              <article className={`case-study ${openExample === 3 ? "is-open" : ""}`}>
                <button
                  className="case-toggle"
                  onClick={() => setOpenExample(openExample === 3 ? null : 3)}
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 3 · Bureau de style, vers 1880</p>
                    <h3>Justifier le prix par la pièce, pas par l'époque seule.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 2 800 €</span>
                      <span>Noyer · marqueterie</span>
                      <span>Formule Ensemble</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 3 ? "−" : "+"}
                  </div>
                </button>

                {openExample === 3 && (
                  <div className="case-body">
                    <div className="before-after-grid">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          Bureau ancien en noyer avec marqueterie, style
                          Napoléon III, très bon état après restauration,
                          nombreux tiroirs, beau meuble de caractère.
                          H 78 × L 140 × P 72 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après — format court</p>
                        <p className="panel-sublabel">Adapté à une publication Instagram ou Drouot Digital</p>
                        <h4>
                          Bureau à marqueterie, circa 1880 — noyer massif,
                          esprit Napoléon III, restauration professionnelle
                        </h4>
                        <p>
                          La marqueterie de ce bureau n'est pas un ornement
                          surajouté : elle est le langage même de l'objet.
                          Chaque motif témoigne d'un savoir-faire qui disparaît
                          — celui du marqueteur capable de composer une surface
                          comme on écrit une phrase.
                        </p>
                        <p>
                          Restauration professionnelle : stabilité assurée,
                          lecture esthétique nette, caractère d'époque préservé.
                          H 78 × L 140 × P 72 cm.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section border-top" id="contact">
          <div className="container split">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>
                Trois objets suffisent
                <br />
                <em>pour commencer.</em>
              </h2>
            </div>
            <div className="text-block">
              <p>
                Décrivez brièvement les pièces que vous souhaitez faire
                rédiger — période, matière, état, prix envisagé — et nous
                vous répondons sous 48 heures avec une proposition adaptée.
              </p>
              <p>
                Aucun engagement à ce stade. Une première réponse, puis
                une notice de démonstration si le projet s'y prête.
              </p>
              <a
                href="mailto:contact@atelierprovenance.fr"
                className="button button-primary"
              >
                Écrire à l'atelier
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-logo">Atelier Provenance</p>
          <p className="footer-copy">
            © {new Date().getFullYear()} — Rédaction de mobilier de collection
          </p>
          <a
            href="mailto:contact@atelierprovenance.fr"
            className="footer-email"
          >
            contact@atelierprovenance.fr
          </a>
        </div>
      </footer>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #2d241d;
          background: #f6efe4;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }
        img { display: block; width: 100%; height: auto; }

        h1, h2, h3, h4 { margin: 0 0 20px; line-height: 1.2; }
        h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 400; }
        h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 400; }
        h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; }
        h4 { font-size: 1rem; font-weight: 600; margin-bottom: 12px; }
        p { margin: 0 0 16px; line-height: 1.85; }
        p:last-child { margin-bottom: 0; }
        em { font-style: italic; }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .eyebrow {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a06d2c;
          margin-bottom: 16px;
        }

        /* NAVIGATION */
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: #f6efe4;
          border-bottom: 1px solid #dccbb7;
          padding: 0;
        }
        .nav-inner {
          display: flex; align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-logo {
          font-size: 1rem; font-weight: 400;
          letter-spacing: 0.04em;
        }
        .nav-links {
          display: flex; align-items: center; gap: 32px;
        }
        .nav-links a:not(.button) {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem; color: #5e5146;
        }
        .nav-links a:not(.button):hover { color: #2d241d; }

        /* HERO */
        .hero {
          padding: 96px 0 80px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .intro {
          font-size: 1.05rem;
          color: #4a3728;
          margin: 24px 0 36px;
          line-height: 1.85;
        }
        .actions {
          display: flex; gap: 14px; flex-wrap: wrap;
        }
        .hero-panel {
          display: flex; justify-content: center;
        }
        .hero-card {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 20px;
          padding: 36px;
          width: 100%;
          max-width: 380px;
        }
        .hero-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a06d2c;
          margin-bottom: 20px;
        }
        .hero-list {
          list-style: none;
          margin: 0; padding: 0;
        }
        .hero-list li {
          padding: 12px 0;
          border-bottom: 1px solid #ecddc9;
          font-size: 0.95rem;
          color: #4a3728;
          line-height: 1.5;
        }
        .hero-list li:last-child { border-bottom: none; }

        /* EPIGRAPHE */
        .epigraph {
          padding: 56px 0;
          background: #f0e8d8;
          border-top: 1px solid #dccbb7;
          border-bottom: 1px solid #dccbb7;
        }
        .epigraph-quote {
          margin: 0 auto;
          max-width: 680px;
          text-align: center;
          font-style: italic;
          font-size: 1.05rem;
          color: #5a4330;
          line-height: 1.85;
        }
        .epigraph-quote cite {
          display: block;
          margin-top: 16px;
          font-style: normal;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #a06d2c;
          text-transform: uppercase;
        }

        /* BAND */
        .band {
          padding: 64px 0;
          background: #2d241d;
          color: #f0e8d8;
        }
        .grid-three {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .feature {
          padding: 0 48px 0 0;
          border-right: 1px solid #4a3728;
          margin-right: 48px;
        }
        .feature:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }
        .feature-number {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: #a06d2c;
          display: block;
          margin-bottom: 16px;
        }
        .feature-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #f0e8d8;
        }
        .feature p:last-child {
          font-size: 0.95rem;
          color: #c4b49e;
          line-height: 1.7;
        }

        /* SECTIONS */
        .section { padding: 96px 0; }
        .section-alt { background: #f0e8d8; }
        .border-top { border-top: 1px solid #dccbb7; }

        .section-head {
          max-width: 680px;
          margin-bottom: 56px;
        }
        .section-intro {
          font-size: 1rem;
          color: #5a4330;
          line-height: 1.85;
          margin-top: 16px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
        }
        .text-block p { color: #4a3728; }
        .text-block p + p { margin-top: 20px; }

        .pull-quote {
          margin-top: 36px;
          padding: 22px 28px;
          border-left: 2px solid #a06d2c;
          font-style: italic;
          font-size: 1.05rem;
          color: #5a4330;
          line-height: 1.65;
          background: #fff7ec;
          border-radius: 0 12px 12px 0;
        }

        /* OFFRES */
        .cards {
          display: grid;
          gap: 20px;
          align-items: stretch;
        }
        .cards-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .card {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 20px;
          padding: 32px;
          display: flex; flex-direction: column;
        }
        .card-featured {
          background: #2d241d;
          border-color: #2d241d;
          color: #f0e8d8;
        }
        .card-featured ul { color: #c4b49e; }
        .card-featured .offer-desc { color: #c4b49e; }
        .card-featured .price { color: #c4b49e; }

        .offer-head {
          margin-bottom: 12px;
        }
        .offer-head h3 { margin-bottom: 4px; }
        .price {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem;
          color: #7a5c3e;
          letter-spacing: 0.04em;
        }
        .offer-desc {
          font-size: 0.95rem;
          color: #5a4330;
          margin-bottom: 20px;
          line-height: 1.65;
        }
        .card ul {
          list-style: none;
          padding: 0; margin: 0 0 28px;
          flex: 1;
        }
        .card ul li {
          padding: 9px 0;
          border-bottom: 1px solid #ecddc9;
          font-size: 0.9rem;
          color: #4a3728;
          line-height: 1.5;
        }
        .card-featured ul li {
          border-bottom-color: #4a3728;
        }
        .card ul li:last-child { border-bottom: none; }
        .offer-cta { width: 100%; margin-top: auto; }

        .button-light {
          background: #f0e8d8;
          color: #2d241d;
        }
        .button-light:hover {
          background: #fff7ec;
        }

        .pricing-note {
          margin-top: 32px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem; color: #7a5c3e;
          line-height: 1.8; max-width: 820px;
        }

        /* EXEMPLES */
        .examples-stack { display: grid; gap: 16px; }
        .examples-head { margin-bottom: 48px; }

        .case-study {
          border: 1px solid #dccbb7;
          border-radius: 20px;
          background: #fffaf2;
          overflow: hidden;
          transition: box-shadow 0.2s ease;
        }
        .case-study.is-open {
          box-shadow: 0 8px 40px rgba(88, 62, 40, 0.1);
        }

        .case-toggle {
          width: 100%; background: none; border: none;
          padding: 28px 32px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          cursor: pointer; text-align: left;
          color: inherit; font-family: inherit;
        }
        .case-toggle:hover { background: #fff7ec; }

        .case-toggle-left { flex: 1; }
        .case-toggle-icon {
          font-size: 1.5rem; color: #a06d2c;
          font-weight: 300; flex-shrink: 0;
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #dccbb7; border-radius: 999px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .case-meta {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: #a06d2c;
          margin-bottom: 8px;
        }
        .case-specs {
          display: flex; gap: 20px; flex-wrap: wrap;
          margin-top: 10px;
        }
        .case-specs span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; color: #8b6f58;
        }

        .case-body {
          padding: 0 32px 32px;
          border-top: 1px solid #ecddc9;
        }

        .before-after-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 24px;
        }

        .text-panel {
          padding: 24px;
          border-radius: 14px;
        }
        .before-panel {
          background: #f3eadc;
          border: 1px solid #e3d2be;
        }
        .after-panel {
          background: #fff7ec;
          border: 1px solid #dccbb7;
        }
        .panel-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: #a06d2c;
          margin-bottom: 4px; font-weight: 600;
        }
        .panel-sublabel {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          color: #9a7d6a;
          margin-bottom: 16px;
          font-style: italic;
        }

        /* CONTACT */
        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.95rem;
          color: #a06d2c;
          border-bottom: 1px solid #a06d2c;
          padding-bottom: 2px;
        }

        /* FOOTER */
        .footer {
          padding: 40px 0;
          border-top: 1px solid #dccbb7;
          background: #2d241d;
          color: #c4b49e;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .footer-logo {
          font-size: 0.95rem;
          color: #f0e8d8;
          letter-spacing: 0.04em;
          margin: 0;
        }
        .footer-copy {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem;
          margin: 0;
        }
        .footer-email {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem;
          color: #a06d2c;
        }
        .footer-email:hover { color: #f0e8d8; }

        /* BUTTONS */
        .button {
          display: inline-flex; align-items: center;
          justify-content: center; min-height: 48px;
          padding: 0 26px; border-radius: 999px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          letter-spacing: 0.01em; cursor: pointer;
          border: none;
        }
        .button-sm { min-height: 38px; padding: 0 18px; font-size: 0.82rem; }
        .button-primary { background: #8d5a1c; color: #fffaf2; }
        .button-primary:hover { background: #6e4416; }
        .button-secondary {
          border: 1px solid #c9ae91; color: #6e4c2a;
          background: transparent;
        }
        .button-secondary:hover {
          border-color: #a06d2c; background: #fff7ec;
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .container { padding: 0 24px; }
          .hero-grid,
          .grid-three,
          .cards-three,
          .split,
          .before-after-grid { grid-template-columns: 1fr; }
          .feature {
            border-right: none;
            border-bottom: 1px solid #4a3728;
            padding: 0 0 24px 0 !important;
          }
          .feature:last-child { border-bottom: none; padding-bottom: 0 !important; }
          .hero { padding: 72px 0 56px; }
          .section { padding: 72px 0; }
          .split { gap: 40px; }
          .nav-links a:not(.button) { display: none; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .case-toggle { padding: 24px; }
          .case-body { padding: 0 24px 24px; }
        }

        @media (max-width: 480px) {
          .hero { padding: 56px 0 48px; }
          .section { padding: 56px 0; }
          .button { width: 100%; justify-content: center; }
          .actions { flex-direction: column; }
          .case-toggle { padding: 20px; }
          .case-body { padding: 0 20px 20px; }
        }
      `}</style>
    </>
  );
}
