"use client";

import { useState } from "react";

const examples = [
  {
    id: 1,
    meta: "Mobilier de rangement · 1960s",
    title: "Enfilade Karlit",
    summary:
      "Repositionnement d'une pièce déjà forte : meilleure lecture, meilleure présence, cohérence renforcée avec le positionnement prix.",
    before: {
      label: "Avant",
      text: "Enfilade vintage années 60. Bon état général. Quelques traces d'usure. Dimensions : 180 × 45 × 75 cm. Livraison possible.",
    },
    after: {
      label: "Après",
      text: "Enfilade Karlit, circa 1960. Structure en chêne massif, façades laquées blanc cassé, piètement fuselé laqué noir — une combinaison sobre qui situe immédiatement la pièce dans le meilleur du mobilier fonctionnaliste nordique. Patine homogène, état très satisfaisant. 180 × 45 × 75 cm.",
    },
  },
  {
    id: 2,
    meta: "Assise · 1950s · Lot de 3",
    title: "Trois chaises années 1950",
    summary:
      "Transformation d'un lot utilitaire en ensemble cohérent, lisible et plus désirable à l'œil comme sur la page.",
    before: {
      label: "Avant",
      text: "Lot de 3 chaises vintage années 50. Structure bois, assises rembourrées tissu. Usure normale. À voir sur place.",
    },
    after: {
      label: "Après",
      text: "Ensemble de trois chaises, circa 1955. Piètement en hêtre tourné, assises et dossiers garnis d'un tissu bouclé ocre d'origine — encore présent et solide. La sobriété de la ligne et la chaleur du tissu en font un ensemble immédiatement cohérent, rare à trouver complet.",
    },
  },
  {
    id: 3,
    meta: "Bureau · Vers 1880",
    title: "Bureau ancien",
    summary:
      "Justification du positionnement et du prix par la structure, l'usage, la qualité et la lisibilité historique.",
    before: {
      label: "Avant",
      text: "Bureau ancien style Louis-Philippe. Bois massif. Nombreux tiroirs. Bon état. Prix ferme. Idéal bureau ou cabinet.",
    },
    after: {
      label: "Après",
      text: "Bureau à cylindre, vers 1880, dans le goût Louis-Philippe. Noyer massif, neuf tiroirs en ceinture, dessus en cuir maroquiné bordeaux d'origine. La solidité de la construction, la lisibilité du style et la rareté du cuir encore intact justifient pleinement le positionnement. Pièce de caractère, utilisable immédiatement.",
    },
  },
];

function ExampleCard({ example }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`example ${hovered ? "example-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="example-default">
        <div className="example-meta">{example.meta}</div>
        <h3>{example.title}</h3>
        <p>{example.summary}</p>
        <span className="example-hint">Survoler pour voir la réécriture →</span>
      </div>

      <div className="example-reveal">
        <div className="example-col">
          <div className="reveal-label reveal-label-before">
            {example.before.label}
          </div>
          <p className="reveal-text reveal-text-before">{example.before.text}</p>
        </div>
        <div className="example-divider" />
        <div className="example-col">
          <div className="reveal-label reveal-label-after">
            {example.after.label}
          </div>
          <p className="reveal-text reveal-text-after">{example.after.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            Atelier Provenance
          </a>
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
              Rédaction et mise en valeur de mobilier de collection pour
              antiquaires, marchands, galeries et vendeurs de design. Des fiches
              de vente claires, désirables et prêtes à publier.
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
                Titres positionnants, informations hiérarchisées, lecture
                immédiate.
              </p>
            </div>
            <div className="feature">
              <span className="feature-number">02</span>
              <p className="feature-title">Désirabilité</p>
              <p>
                Mise en valeur sobre du design, de la matière, de l'époque et
                de la présence.
              </p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <p className="feature-title">Exploitation directe</p>
              <p>
                Versions prêtes à publier pour site, marketplace, newsletter ou
                réseaux.
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
                La plupart des annonces décrivent sans valoriser. Elles
                informent, mais ne donnent ni lecture, ni cohérence, ni
                projection.
              </p>
              <p>
                Résultat : des objets sous-positionnés, une valeur perçue
                affaiblie et une image de catalogue moins forte qu'elle ne
                pourrait l'être.
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
                Pas pour en dire plus. Pour rendre la valeur visible, clarifier
                la pièce et aider l'acheteur à se projeter.
              </p>
            </div>
            <div className="cards cards-three">
              <div className="card card-plain">
                <div className="card-icon">—</div>
                <h3>Structuration</h3>
                <p>
                  Titre positionnant, informations hiérarchisées, points
                  saillants mis en avant.
                </p>
              </div>
              <div className="card card-plain">
                <div className="card-icon">—</div>
                <h3>Mise en valeur</h3>
                <p>
                  Vocabulaire précis, contexte cohérent, justification naturelle
                  du prix.
                </p>
              </div>
              <div className="card card-plain">
                <div className="card-icon">—</div>
                <h3>Déclinaisons</h3>
                <p>
                  Version longue, version courte, extraits réutilisables selon
                  les canaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section className="section section-alt" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>
                Une gamme simple, pour tester, structurer, puis déléguer.
              </h2>
            </div>
            <div className="cards cards-two">
              <div className="card">
                <div className="offer-head">
                  <h3>Audit Express</h3>
                  <span className="price">390 €</span>
                </div>
                <p className="offer-desc">
                  Une première démonstration concrète pour voir immédiatement ce
                  que vos objets pourraient devenir.
                </p>
                <ul>
                  <li>Analyse de 10 objets</li>
                  <li>Réécriture complète de 2 fiches</li>
                  <li>Recommandations concrètes</li>
                  <li>Appel de restitution de 30 minutes</li>
                </ul>
                <a
                  href="#contact"
                  className="button button-secondary offer-cta"
                >
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
                  L'offre centrale pour transformer un premier lot d'objets en
                  catalogue plus lisible, plus cohérent et plus vendable.
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
                  Une externalisation fluide pour les structures qui ont du
                  volume et veulent gagner du temps sans perdre en niveau.
                </p>
                <ul>
                  <li>30 à 60 fiches par mois</li>
                  <li>Optimisation continue</li>
                  <li>Support asynchrone</li>
                  <li>Production régulière et homogène</li>
                </ul>
                <a
                  href="#contact"
                  className="button button-secondary offer-cta"
                >
                  Nous contacter
                </a>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Système Premium</h3>
                  <span className="price">8 000 – 20 000 €</span>
                </div>
                <p className="offer-desc">
                  Pour les catalogues à structurer en profondeur : refonte
                  éditoriale, harmonisation et transmission de méthode.
                </p>
                <ul>
                  <li>Refonte catalogue complète</li>
                  <li>Storytelling global de la marque</li>
                  <li>Templates et process documentés</li>
                  <li>Formation d'équipe incluse</li>
                </ul>
                <a
                  href="#contact"
                  className="button button-secondary offer-cta"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXEMPLES */}
        <section className="section section-examples" id="exemples">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Exemples</p>
              <h2>Ce que change une fiche bien construite.</h2>
              <p className="section-intro">
                Trois cas concrets. Survolez chaque carte pour voir la
                réécriture avant / après.
              </p>
            </div>
            <div className="examples-grid">
              {examples.map((ex) => (
                <ExampleCard key={ex.id} example={ex} />
              ))}
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
                Photos, prix, dimensions, état — et toute information
                disponible. Je vous dirai si c'est un bon test et sous quelle
                forme commencer.
              </p>
              <div className="actions">
                <a
                  href="mailto:contact@atelierprovenance.fr"
                  className="button button-primary"
                >
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
          <a
            href="mailto:contact@atelierprovenance.fr"
            className="footer-email"
          >
            contact@atelierprovenance.fr
          </a>
        </div>
      </footer>

      <style jsx global>{`
        /* ── PALETTE ──────────────────────────────────────────
           Crème     #F5F0E8
           Beige     #EDE5D8
           Ocre clair #D4A96A
           Ocre foncé #A87C3E
           Brun chaud #3D2B1F
           Neutre     #6B5B4E
        ──────────────────────────────────────────────────── */

        *, *::before, *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #3D2B1F;
          background: #F5F0E8;
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
          background: rgba(245, 240, 232, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid #DDD5C4;
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
          letter-spacing: 0.1em;
          font-weight: 500;
          color: #3D2B1F;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem;
          color: #6B5B4E;
        }

        .nav-links a:not(.button):hover {
          color: #3D2B1F;
        }

        /* ── HERO ── */
        .hero {
          padding: 104px 0 88px;
          background: #F5F0E8;
        }

        .hero-rule {
          width: 100%;
          height: 1px;
          background: #DDD5C4;
          margin-top: 88px;
        }

        /* ── TYPOGRAPHY ── */
        .eyebrow {
          margin: 0 0 20px;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #A87C3E;
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
          color: #3D2B1F;
        }

        h1 em, h2 em {
          font-style: italic;
          color: #A87C3E;
        }

        h2 {
          margin-bottom: 20px;
          font-size: clamp(1.9rem, 3vw, 2.75rem);
          line-height: 1.15;
          font-weight: 400;
          letter-spacing: -0.015em;
          color: #3D2B1F;
        }

        h3 {
          margin-bottom: 12px;
          font-size: 1.2rem;
          line-height: 1.35;
          font-weight: 500;
          color: #3D2B1F;
        }

        .intro,
        .section-intro,
        .text-block p,
        .card p,
        .offer-desc,
        .feature p {
          font-family: Arial, Helvetica, sans-serif;
          color: #6B5B4E;
          line-height: 1.85;
        }

        .intro {
          max-width: 700px;
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .section-intro {
          font-size: 1.05rem;
          max-width: 680px;
          margin-bottom: 0;
        }

        /* ── SECTIONS ── */
        .section {
          padding: 96px 0;
          background: #F5F0E8;
        }

        .section-alt {
          background: #EDE5D8;
        }

        .section-examples {
          background: #F5F0E8;
        }

        .section-contact {
          background: #EDE5D8;
        }

        .border-top {
          border-top: 1px solid #DDD5C4;
        }

        .section-head {
          max-width: 840px;
          margin-bottom: 52px;
        }

        /* ── BAND ── */
        .band {
          background: #EDE5D8;
          border-top: 1px solid #DDD5C4;
          border-bottom: 1px solid #DDD5C4;
          padding: 44px 0;
        }

        .grid-three {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
        }

        .feature {
          padding: 8px 40px 8px 0;
          border-right: 1px solid #DDD5C4;
        }

        .feature:last-child {
          border-right: none;
          padding-right: 0;
          padding-left: 40px;
        }

        .feature:not(:first-child):not(:last-child) {
          padding-left: 40px;
        }

        .feature-number {
          display: block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          color: #D4A96A;
          letter-spacing: 0.12em;
          margin-bottom: 10px;
        }

        .feature-title {
          margin-bottom: 8px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A87C3E;
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
          border-left: 2px solid #D4A96A;
          font-style: italic;
          font-size: 1.05rem;
          color: #3D2B1F;
          line-height: 1.7;
          background: #EDE5D8;
          border-radius: 0 10px 10px 0;
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
          border: 1px solid #DDD5C4;
          border-radius: 20px;
          background: #F5F0E8;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease;
        }

        .card:hover {
          box-shadow: 0 4px 28px rgba(61, 43, 31, 0.09);
        }

        .card-plain {
          background: #EDE5D8;
          border-color: transparent;
        }

        .card-icon {
          font-size: 1.4rem;
          margin-bottom: 20px;
          color: #D4A96A;
          letter-spacing: 0.05em;
        }

        .card-featured {
          border-width: 1.5px;
          border-color: #3D2B1F;
          background: #3D2B1F;
          color: #F5F0E8;
          position: relative;
        }

        .card-featured h3 {
          color: #F5F0E8;
        }

        .card-featured .offer-desc,
        .card-featured ul {
          color: #C4B09A;
        }

        .card-featured .price {
          color: #D4A96A;
        }

        .card-featured .button-primary {
          background: #D4A96A;
          color: #3D2B1F;
        }

        .card-featured .button-primary:hover {
          background: #C49A58;
        }

        .badge {
          display: inline-block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3D2B1F;
          background: #D4A96A;
          border-radius: 999px;
          padding: 4px 14px;
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
          color: #A87C3E;
          white-space: nowrap;
        }

        .offer-desc {
          margin-bottom: 20px;
        }

        ul {
          padding-left: 16px;
          font-family: Arial, Helvetica, sans-serif;
          color: #6B5B4E;
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
        .examples-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .example {
          border: 1px solid #DDD5C4;
          border-radius: 20px;
          padding: 28px;
          background: #F5F0E8;
          cursor: default;
          position: relative;
          min-height: 240px;
          transition: background 0.3s ease, border-color 0.3s ease,
            box-shadow 0.3s ease;
          overflow: hidden;
        }

        .example-default {
          transition: opacity 0.25s ease, transform 0.25s ease;
          opacity: 1;
          transform: translateY(0);
        }

        .example-reveal {
          position: absolute;
          inset: 0;
          padding: 24px 28px;
          display: flex;
          gap: 0;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
          pointer-events: none;
          overflow: hidden;
        }

        .example-hovered {
          background: #3D2B1F;
          border-color: #3D2B1F;
          box-shadow: 0 8px 40px rgba(61, 43, 31, 0.2);
        }

        .example-hovered .example-default {
          opacity: 0;
          transform: translateY(-8px);
          pointer-events: none;
        }

        .example-hovered .example-reveal {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .example-meta {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #A87C3E;
          margin-bottom: 10px;
        }

        .example h3 {
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .example p {
          font-family: Arial, Helvetica, sans-serif;
          color: #6B5B4E;
          line-height: 1.75;
          font-size: 0.9rem;
        }

        .example-hint {
          display: block;
          margin-top: 18px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #D4A96A;
          text-transform: uppercase;
        }

        .example-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .example-divider {
          width: 1px;
          background: rgba(212, 169, 106, 0.3);
          margin: 0 20px;
          flex-shrink: 0;
        }

        .reveal-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .reveal-label-before {
          color: #7A6A5A;
        }

        .reveal-label-after {
          color: #D4A96A;
        }

        .reveal-text {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          line-height: 1.8;
          margin: 0;
          overflow-y: auto;
        }

        .reveal-text-before {
          color: #8A7A6A;
          font-style: italic;
        }

        .reveal-text-after {
          color: #EDE5D8;
        }

        /* ── CONTACT ── */
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
          padding: 0 26px;
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
          background: #3D2B1F;
          color: #F5F0E8;
        }

        .button-primary:hover {
          background: #5C3E2E;
        }

        .button-secondary {
          border: 1px solid #C4B09A;
          color: #3D2B1F;
          background: transparent;
        }

        .button-secondary:hover {
          border-color: #A87C3E;
          background: #EDE5D8;
        }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid #DDD5C4;
          padding: 36px 0;
          background: #EDE5D8;
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
          letter-spacing: 0.08em;
          margin: 0;
          color: #3D2B1F;
        }

        .footer-copy {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem;
          color: #9A8A7A;
          margin: 0;
        }

        .footer-email {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem;
          color: #6B5B4E;
          transition: color 0.2s ease;
        }

        .footer-email:hover {
          color: #A87C3E;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .container {
            padding: 0 24px;
          }

          .grid-three,
          .cards-three,
          .cards-two,
          .split,
          .examples-grid {
            grid-template-columns: 1fr;
          }

          .split {
            gap: 48px;
          }

          .feature {
            border-right: none;
            border-bottom: 1px solid #DDD5C4;
            padding: 0 0 24px 0 !important;
          }

          .feature:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
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

          .example {
            min-height: auto;
          }

          .example-reveal {
            flex-direction: column;
            gap: 20px;
          }

          .example-divider {
            width: 100%;
            height: 1px;
            margin: 0;
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

          .actions {
            flex-direction: column;
          }

          .button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
