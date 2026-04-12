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
                Vos pièces ont de la valeur.
                <br />
                <em>Encore faut-il que l'annonce le dise.</em>
              </h1>
              <p className="intro">
                Rédaction de fiches pour mobilier de collection. Chaque texte est
                construit pour soutenir le prix, clarifier la pièce et rendre
                l'objet réellement désirable — pas seulement visible.
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
                  <li>Vocabulaire précis, position claire</li>
                  <li>Formats prêts à publier, adaptés à vos canaux</li>
                  <li>Livraison sous 5 jours ouvrés</li>
                </ul>
              </div>
            </div>
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
              <p className="feature-title">Rédaction</p>
              <p>Un texte qui justifie le prix, donne une lecture claire et rend l'objet désirable.</p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <p className="feature-title">Exploitation</p>
              <p>Version longue, courte, extraits réutilisables — prêts à publier sur tous vos canaux.</p>
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
                défendre, et un catalogue qui ne reflète pas la qualité de la
                sélection.
              </p>
              <div className="pull-quote">
                « Une bonne fiche ne crée pas la valeur de l'objet —
                elle la rend enfin lisible. »
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
                Plus de 300 fiches produites pour des antiquaires, marchands et
                galeries français. Une connaissance directe des codes du marché —
                du vocabulaire attendu aux plateformes de référence.
              </p>
              <p>
                Le point de départ est toujours le même : comprendre l'objet,
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
                  <h3>Test</h3>
                  <span className="price">3 fiches · 450 €</span>
                </div>
                <p className="offer-desc">
                  Pour évaluer le service sur un premier lot, sans engagement.
                  Le bon point de départ.
                </p>
                <ul>
                  <li>3 fiches complètes</li>
                  <li>150 € / fiche</li>
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
                <div className="offer-badge">Le plus choisi</div>
                <div className="offer-head">
                  <h3>Lot</h3>
                  <span className="price">10 fiches · 1 200 €</span>
                </div>
                <p className="offer-desc">
                  Pour traiter un ensemble cohérent et donner une vraie
                  consistance à votre catalogue.
                </p>
                <ul>
                  <li>10 fiches complètes</li>
                  <li>120 € / fiche</li>
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
                  <h3>Volume</h3>
                  <span className="price">Sur devis</span>
                </div>
                <p className="offer-desc">
                  Pour les marchands et galeries avec un flux régulier. Tarif
                  dégressif, suivi personnalisé.
                </p>
                <ul>
                  <li>20 fiches ou plus</li>
                  <li>Tarif dégressif</li>
                  <li>Charte éditoriale dédiée</li>
                  <li>Interlocuteur unique</li>
                  <li>Réactivité renforcée</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Discutons-en
                </a>
              </div>
            </div>

            <p className="pricing-note">
              Toutes les formules incluent une analyse du marché en amont, une
              version longue et courte de chaque fiche, et un aller-retour de
              révision. Paiement à la livraison.
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
                Chaque exemple part d'une annonce réelle et montre ce que la
                rédaction change — sur la lecture, la désirabilité, la cohérence
                avec le prix affiché.
              </p>
            </div>

            <div className="examples-stack">

              {/* CAS 1 */}
              <article
                className={`case-study ${openExample === 1 ? "is-open" : ""}`}
              >
                <button
                  className="case-toggle"
                  onClick={() => setOpenExample(openExample === 1 ? null : 1)}
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 1 · Enfilade suédoise Karlit, années 1960</p>
                    <h3>Du descriptif correct à une pièce vraiment positionnée.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 1 200 €</span>
                      <span>Teck miel</span>
                      <span>Formule Test</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 1 ? "−" : "+"}
                  </div>
                </button>

                {openExample === 1 && (
                  <div className="case-body">
                    <div className="case-image-grid">
                      <div className="image-card">
                        <img
                          src="/images/enfilade-karlit.jpg"
                          alt="Enfilade suédoise Karlit en teck miel"
                        />
                      </div>
                      <div className="image-card image-placeholder">
                        <div>
                          <p>Annonce d'origine</p>
                          <span>À ajouter : /public/images/annonce-enfilade-karlit.jpg</span>
                        </div>
                      </div>
                    </div>

                    <div className="before-after-grid">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          Enfilade vintage années 60 en teck. Bon état général.
                          Quelques traces d'usure normales. 180 × 45 × 75 cm.
                          Livraison possible.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après</p>
                        <h4>
                          Enfilade suédoise Karlit, circa 1960 — teck miel,
                          silhouette basse, façade en mouvement
                        </h4>
                        <p>
                          Produite par Karlit dans les années 1960, cette
                          enfilade illustre avec justesse ce que le mobilier
                          scandinave sait faire de mieux : une ligne sobre, un
                          bois chaleureux, et une façade qui ne se répète pas.
                        </p>
                        <p>
                          La surface en teck miel développe une patine homogène
                          et lumineuse. Deux portes coulissantes latérales
                          encadrent un ensemble central de tiroirs inclinés —
                          un rythme discret qui donne à la pièce une vraie
                          présence graphique.
                        </p>
                        <p className="result-line">
                          → Vendu en 6 jours au prix affiché.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              {/* CAS 2 */}
              <article
                className={`case-study ${openExample === 2 ? "is-open" : ""}`}
              >
                <button
                  className="case-toggle"
                  onClick={() => setOpenExample(openExample === 2 ? null : 2)}
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 2 · Ensemble de trois chaises, années 1950</p>
                    <h3>Du lot utilitaire à l'ensemble cohérent et désirable.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 290 € / unité</span>
                      <span>Métal noir · velours vert</span>
                      <span>Formule Lot</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 2 ? "−" : "+"}
                  </div>
                </button>

                {openExample === 2 && (
                  <div className="case-body">
                    <div className="case-image-grid">
                      <div className="image-card">
                        <img
                          src="/images/chaises-1950.jpg"
                          alt="Trois chaises années 1950 métal noir et velours vert"
                        />
                      </div>
                      <div className="image-card image-placeholder">
                        <div>
                          <p>Annonce d'origine</p>
                          <span>À ajouter : /public/images/annonce-chaises-1950.jpg</span>
                        </div>
                      </div>
                    </div>

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
                        <p className="panel-label">Après</p>
                        <h4>
                          Ensemble de trois chaises, circa 1955 — structure
                          métallique noire, velours vert, esprit moderniste
                        </h4>
                        <p>
                          Un ensemble rare à trouver complet : trois chaises des
                          années 1950, cohérentes dans leur ligne et dans leur
                          matière. La rigueur du métal laqué noir répond à la
                          douceur du velours vert — un contraste qui situe
                          immédiatement la pièce.
                        </p>
                        <p>
                          L'une des trois dispose d'accoudoirs, variation
                          subtile qui permet de composer l'espace plus
                          librement. Velours nettoyé, métal portant une patine
                          d'usage franche et assumée.
                        </p>
                        <p className="result-line">
                          → Ensemble vendu en 9 jours, prix maintenu.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              {/* CAS 3 */}
              <article
                className={`case-study ${openExample === 3 ? "is-open" : ""}`}
              >
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
                      <span>Formule Lot</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 3 ? "−" : "+"}
                  </div>
                </button>

                {openExample === 3 && (
                  <div className="case-body">
                    <div className="case-image-grid">
                      <div className="image-card image-placeholder">
                        <div>
                          <p>Photo de la pièce</p>
                          <span>À ajouter : /public/images/bureau-1880.jpg</span>
                        </div>
                      </div>
                      <div className="image-card image-placeholder">
                        <div>
                          <p>Annonce d'origine</p>
                          <span>À ajouter : /public/images/annonce-bureau-1880.jpg</span>
                        </div>
                      </div>
                    </div>

                    <div className="before-after-grid">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          Bureau ancien en noyer, style Napoléon III, vers
                          1880. Marqueterie, tiroirs, bon état général.
                          Restauré. 130 × 70 × 78 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après</p>
                        <h4>
                          Bureau en noyer et marqueterie, vers 1880 — style
                          Napoléon III, restauration professionnelle
                        </h4>
                        <p>
                          Bureau à structure en noyer massif, orné d'un décor
                          en marqueterie de placage aux motifs géométriques
                          caractéristiques du style Napoléon III. La surface
                          plane est encadrée par un léger galbe sur les
                          montants — une sophistication discrète, typique du
                          mobilier bourgeois de la seconde moitié du XIXe.
                        </p>
                        <p>
                          Trois tiroirs en façade, ferrures d'origine conservées.
                          L'ensemble a fait l'objet d'une restauration
                          professionnelle — stabilité assurée, lecture
                          esthétique nette, sans dénaturation du caractère
                          d'époque.
                        </p>
                        <p className="result-line">
                          → Vendu au prix demandé, sans négociation.
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
        <section className="section section-contact border-top" id="contact">
          <div className="container">
            <div className="contact-box">
              <p className="eyebrow">Contact</p>
              <h2>Le plus simple : envoyer trois objets.</h2>
              <p className="section-intro narrow">
                Photos, prix souhaité, dimensions, état — et tout ce que vous
                savez de la pièce. Je reviens sous 48h avec un retour et une
                proposition adaptée.
              </p>
              <div className="actions">
                <a
                  href="mailto:contact@atelierprovenance.fr"
                  className="button button-primary"
                >
                  Écrire un email
                </a>
                <a href="#offres" className="button button-secondary">
                  Revoir les formules
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

        .eyebrow {
          margin: 0 0 16px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a06d2c;
          font-weight: 700;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* NAV */
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(246, 239, 228, 0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #dccbb7;
        }
        .nav-inner {
          display: flex; align-items: center;
          justify-content: space-between;
          height: 68px; gap: 32px;
        }
        .nav-logo {
          font-size: 0.95rem; letter-spacing: 0.08em;
          font-weight: 600; white-space: nowrap;
        }
        .nav-links {
          display: flex; align-items: center; gap: 28px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem; color: #6a5648;
        }
        .nav-links a:not(.button):hover { color: #2d241d; }

        /* HERO */
        .hero {
          padding: 104px 0 84px;
          background: linear-gradient(180deg, #f6efe4 0%, #f3eadc 100%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px; align-items: center;
        }
        .hero-panel { display: flex; justify-content: flex-end; }
        .hero-card {
          width: 100%; max-width: 300px;
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 18px;
          padding: 28px 24px;
        }
        .hero-label {
          margin: 0 0 16px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px; letter-spacing: 0.18em;
          text-transform: uppercase; color: #a06d2c;
          font-weight: 700;
        }
        .hero-list {
          margin: 0; padding: 0;
          list-style: none;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem; color: #5e5146;
          line-height: 1.9;
        }
        .hero-list li::before {
          content: "—";
          margin-right: 10px;
          color: #c5a17a;
        }

        .intro {
          max-width: 680px;
          font-size: 1.1rem;
          margin-bottom: 40px;
          color: #4a3728;
          line-height: 1.8;
        }

        /* BAND */
        .band {
          background: #fffaf2;
          border-top: 1px solid #dccbb7;
          border-bottom: 1px solid #dccbb7;
          padding: 44px 0;
        }
        .grid-three {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .feature {
          padding: 8px 40px 8px 0;
          border-right: 1px solid #e3d2be;
        }
        .feature:last-child { border-right: none; padding-right: 0; padding-left: 40px; }
        .feature:not(:first-child):not(:last-child) { padding-left: 40px; }
        .feature-number {
          display: block;
          font-size: 11px; color: #c5a17a;
          letter-spacing: 0.1em; margin-bottom: 10px;
          font-family: Arial, Helvetica, sans-serif;
        }
        .feature-title {
          margin-bottom: 10px;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #9a744d;
          font-weight: 700; font-family: Arial, Helvetica, sans-serif;
        }
        .feature p {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem; color: #5e5146; line-height: 1.75;
          margin: 0;
        }

        /* SECTIONS */
        .section { padding: 96px 0; }
        .section-alt { background: #f0e8d8; }
        .border-top { border-top: 1px solid #dccbb7; }
        .section-head { max-width: 860px; margin-bottom: 52px; }
        .section-intro {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 1rem; color: #5e5146;
          line-height: 1.85; margin: 16px 0 0;
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
          padding: 32px 28px;
          display: flex; flex-direction: column;
          transition: box-shadow 0.2s ease;
        }
        .card:hover {
          box-shadow: 0 8px 32px rgba(88, 62, 40, 0.1);
        }
        .card-featured {
          background: #3d2b1f;
          border-color: #3d2b1f;
          color: #f6efe4;
          position: relative;
        }
        .card-featured h3 { color: #f6efe4; }
        .card-featured .offer-desc { color: #c9ae91; }
        .card-featured ul { color: #d4c0aa; }
        .card-featured .price { color: #e8c98a; }

        .offer-badge {
          display: inline-block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase;
          background: #a06d2c;
          color: #fffaf2;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 20px;
          align-self: flex-start;
        }
        .offer-head {
          display: flex; align-items: baseline;
          justify-content: space-between;
          gap: 12px; margin-bottom: 14px; flex-wrap: wrap;
        }
        .price {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem; color: #8b6f58;
          white-space: nowrap;
        }
        .offer-desc {
          margin-bottom: 20px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem; color: #5e5146;
          line-height: 1.7;
        }
        ul {
          padding-left: 16px;
          font-family: Arial, Helvetica, sans-serif;
          color: #5b4b3f; line-height: 2;
          margin-bottom: 28px; flex: 1;
          font-size: 0.9rem;
        }
        .offer-cta { align-self: flex-start; margin-top: auto; }
        .button-light {
          background: #f6efe4; color: #3d2b1f;
        }
        .button-light:hover { background: #fff7ec; }

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
          margin: 0 0 8px;
          font-size: 11px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #a06d2c;
          font-family: Arial, Helvetica, sans-serif; font-weight: 700;
        }
        .case-toggle h3 { margin: 0 0 12px; }
        .case-specs {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .case-specs span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; color: #7f6856;
          border: 1px solid #e3d2be;
          border-radius: 999px; padding: 4px 10px;
          background: #fff7ec;
        }

        .case-body {
          padding: 0 32px 32px;
          border-top: 1px solid #ecddc9;
        }
        .case-image-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px; margin: 24px 0;
        }
        .image-card {
          overflow: hidden; border-radius: 14px;
          border: 1px solid #e3d2be;
          background: #f3eadc; min-height: 240px;
        }
        .image-card img {
          height: 100%; min-height: 240px; object-fit: cover;
        }
        .image-placeholder {
          display: flex; align-items: center;
          justify-content: center; text-align: center;
          padding: 24px; color: #9a7d6a;
        }
        .image-placeholder p {
          margin-bottom: 8px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600; font-size: 0.875rem;
        }
        .image-placeholder span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; line-height: 1.6; color: #b89a82;
        }

        .before-after-grid {
          display: grid; grid-template-columns: 0.85fr 1.15fr;
          gap: 16px;
        }
        .text-panel { border-radius: 14px; padding: 24px; }
        .before-panel {
          background: #f3eadc; border: 1px solid #e3d2be;
        }
        .after-panel {
          background: #fff7ec; border: 1px solid #dccbb7;
        }
        .panel-label {
          margin: 0 0 14px;
          font-size: 11px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #9a744d;
          font-family: Arial, Helvetica, sans-serif; font-weight: 700;
        }
        .before-panel p {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem; color: #7a6455;
          line-height: 1.75; font-style: italic;
        }
        .result-line {
          margin-top: 20px !important;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem; font-weight: 600;
          color: #7a4e1a; font-style: normal !important;
          padding-top: 16px;
          border-top: 1px solid #e8d5bb;
        }

        /* CONTACT */
        .section-contact { background: #ede0cc; }
        .contact-box { max-width: 720px; }
        .narrow { max-width: 600px; margin-bottom: 36px; }
        .actions { display: flex; flex-wrap: wrap; gap: 12px; }

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

        /* FOOTER */
        .footer {
          border-top: 1px solid #dccbb7;
          padding: 36px 0; background: #f6efe4;
        }
        .footer-inner {
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .footer-logo {
          font-size: 0.95rem; font-weight: 600;
          letter-spacing: 0.06em; margin: 0;
        }
        .footer-copy {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; color: #8b6f58; margin: 0;
        }
        .footer-email {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem; color: #6e4c2a;
        }
        .footer-email:hover { color: #3d2b1f; }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .container { padding: 0 24px; }
          .hero-grid,
          .grid-three,
          .cards-three,
          .split,
          .case-image-grid,
          .before-after-grid { grid-template-columns: 1fr; }
          .feature {
            border-right: none;
            border-bottom: 1px solid #e3d2be;
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
