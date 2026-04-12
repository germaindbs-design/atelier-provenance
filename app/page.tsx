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
                Rédaction de fiches pour le mobilier de collection. Chaque texte
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

        {/* CITATION */}
        <section className="epigraph">
          <div className="container">
            <blockquote className="proust-quote">
              <p>
                « Les beaux livres sont écrits dans une sorte de langue étrangère. »
              </p>
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
              <p>Un texte qui traduit la valeur de l'objet en termes que l'acheteur comprend et que le prix peut habiter.</p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <p className="feature-title">Exploitation</p>
              <p>Version longue, courte, extraits réutilisables — prêts à publier sur l'ensemble de vos canaux.</p>
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
                description informe — elle ne positionne pas, elle n'engage pas,
                elle ne traduit rien de ce qui rend la pièce singulière.
              </p>
              <p>
                Résultat : une valeur perçue affaiblie, un prix difficile à
                défendre, et un catalogue qui ne reflète pas la qualité réelle
                de la sélection.
              </p>
              <div className="pull-quote">
                Une bonne fiche ne crée pas la valeur de l'objet —
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
                Un œil formé aux objets.
                <br />
                <em>Une main au service des mots.</em>
              </h2>
            </div>
            <div className="text-block">
              <p>
                Atelier Provenance est fondé par un praticien formé à l'histoire
                de l'art et aux humanités, avec une connaissance directe du marché
                du mobilier de collection. Chaque mission est traitée avec soin,
                sans délégation ni automatisation.
              </p>
              <p>
                Le travail de l'atelier est un travail de traduction : rendre dans
                une langue précise et désirable ce que l'objet porte en lui —
                son époque, son usage, sa singularité. Ni invention, ni
                enjolivement. Une lecture juste, mise en mots.
              </p>
              <p>
                Du vocabulaire attendu par les acheteurs avertis aux formats
                propres à chaque plateforme, chaque fiche est construite pour
                que le prix affiché trouve sa justification naturelle dans le
                texte qui l'accompagne.
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
                Qu'il s'agisse d'évaluer le service sur trois pièces ou de
                structurer un catalogue entier, chaque formule répond à un
                besoin précis — sans friction inutile.
              </p>
            </div>

            <div className="cards cards-three">

              {/* OFFRE 1 */}
              <div className="card">
                <div className="offer-head">
                  <h3>Première lecture</h3>
                  <span className="price">3 fiches · 450 €</span>
                </div>
                <p className="offer-desc">
                  Pour évaluer le service sur un premier lot, sans engagement.
                  Le point de départ naturel.
                </p>
                <ul>
                  <li>3 fiches complètes</li>
                  <li>150 € / fiche</li>
                  <li>Analyse marché incluse</li>
                  <li>Version longue + courte</li>
                  <li>Livraison sous 5 jours ouvrés</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Commencer ici
                </a>
              </div>

              {/* OFFRE 2 — FEATURED */}
              <div className="card card-featured">
                <div className="offer-badge">Le plus choisi</div>
                <div className="offer-head">
                  <h3>Ensemble</h3>
                  <span className="price">10 fiches · 1 200 €</span>
                </div>
                <p className="offer-desc">
                  Pour traiter un ensemble cohérent et donner une véritable
                  consistance éditoriale à votre catalogue.
                </p>
                <ul>
                  <li>10 fiches complètes</li>
                  <li>120 € / fiche</li>
                  <li>Analyse marché incluse</li>
                  <li>Toutes déclinaisons</li>
                  <li>Alignement éditorial global</li>
                  <li>Livraison sous 10 jours ouvrés</li>
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
                  Pour une refonte complète ou un volume régulier. Un cadre
                  adapté à votre rythme et à votre ligne éditoriale.
                </p>
                <ul>
                  <li>Volume sur mesure</li>
                  <li>Tarif dégressif</li>
                  <li>Suivi éditorial continu</li>
                  <li>Interlocuteur dédié</li>
                  <li>Délais négociés</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Discutons-en
                </a>
              </div>

            </div>

            <p className="pricing-note">
              Toutes les formules incluent une analyse préalable du marché,
              la rédaction des formats longs et courts, et une révision sur
              retour. Les échanges se font par e-mail ; un premier appel peut
              être organisé pour les missions Catalogue.
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
                traduction éditoriale change concrètement — sur la lecture,
                la désirabilité, la cohérence avec le prix affiché.
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
                    <p className="case-meta">Exemple 1 · Commode en marqueterie, XVIIIe</p>
                    <h3>Donner une langue à ce que l'œil voit déjà.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 4 500 €</span>
                      <span>Marqueterie · bois de rose</span>
                      <span>Formule Première lecture</span>
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
                          src="/images/commode-marqueterie.jpg"
                          alt="Commode en marqueterie XVIIIe siècle"
                        />
                      </div>
                      <div className="image-card image-placeholder">
                        <div>
                          <p>Annonce d'origine</p>
                          <span>À ajouter : /public/images/annonce-commode.jpg</span>
                        </div>
                      </div>
                    </div>
                    <div className="before-after-grid">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          Commode ancienne en bois, marqueterie, bon état.
                          Trois tiroirs. Époque XVIIIe. 120 × 55 × 85 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après</p>
                        <h4>
                          Commode en marqueterie de bois de rose, époque
                          Louis XV — plateau en marbre d'origine
                        </h4>
                        <p>
                          Commode à trois tiroirs en bois naturel, ornée d'un
                          décor en marqueterie de bois de rose à motifs
                          géométriques rayonnants. La construction, sobre dans
                          ses proportions, révèle un soin particulier dans
                          l'assemblage des placages — caractéristique des
                          ateliers provinciaux de qualité du milieu du XVIIIe.
                        </p>
                        <p>
                          Plateau en marbre d'origine, conservé sans
                          restauration. Ferrures en bronze doré, légèrement
                          patinées, cohérentes avec l'époque. Bon état
                          structural ; le décor présente les traces d'usage
                          attendues pour une pièce de cette ancienneté.
                        </p>
                        <p className="result-line">
                          → Vendue en 6 jours, prix maintenu.
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
                    <p className="case-meta">Exemple 2 · Trois chaises années 1950</p>
                    <h3>Faire d'un défaut une signature.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 680 €</span>
                      <span>Métal · velours</span>
                      <span>Formule Ensemble</span>
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
                          Lot de 3 chaises vintage années 50, métal noir,
                          velours vert. Usure normale. À restaurer ou à
                          utiliser telles quelles.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après</p>
                        <h4>
                          Ensemble de trois chaises, vers 1950 — structure
                          métal laqué noir, assise velours vert bouteille
                        </h4>
                        <p>
                          Trois chaises à structure tubulaire en métal laqué
                          noir, assises tendues d'un velours vert bouteille
                          dense — une teinte caractéristique des intérieurs
                          bourgeois et des brasseries de la reconstruction.
                          Le dessin, net et sans ornement, s'inscrit dans le
                          courant fonctionnaliste qui traverse le mobilier de
                          série des années 1950.
                        </p>
                        <p>
                          L'ensemble se pose aussi bien dans un appartement
                          que dans un espace de travail qui assume ses
                          références. Velours nettoyé ; métal portant une
                          patine d'usage franche et assumée.
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
                    <div className="case-image-grid">
                      <div className="image-card">
                        <img
                          src="/images/bureau-1880.jpg"
                          alt="Bureau en noyer et marqueterie vers 1880"
                        />
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
                          Bureau en noyer et marqueterie, vers 1880 —
                          style Napoléon III, restauration professionnelle
                        </h4>
                        <p>
                          Bureau à structure en noyer massif, orné d'un décor
                          en marqueterie de placage aux motifs géométriques
                          caractéristiques du style Napoléon III. La surface
                          plane est encadrée d'un léger galbe sur les
                          montants — une sophistication discrète, typique du
                          mobilier bourgeois de la seconde moitié du XIXe.
                        </p>
                        <p>
                          Trois tiroirs en façade, ferrures d'origine
                          conservées. L'ensemble a fait l'objet d'une
                          restauration professionnelle soignée, sans
                          surrestauration : le bois retrouve sa lisibilité
                          sans perdre son caractère. Une pièce de cabinet
                          qui tient le prix qu'on lui demande.
                        </p>
                        <p className="result-line">
                          → Vendu en 12 jours à prix ferme.
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
                Envoyez par e-mail les photographies et les informations dont
                vous disposez sur les pièces — provenance, état, prix envisagé.
                Une réponse sous 48 heures, avec une proposition claire.
              </p>
              <p>
                Pas de formulaire, pas de devis automatique. Un échange direct,
                à la mesure de ce que vous confiez.
              </p>
              <a
                href="mailto:contact@atelierprovenance.fr"
                className="button button-primary"
                style={{ marginTop: "8px" }}
              >
                contact@atelierprovenance.fr
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
            © {new Date().getFullYear()} — Rédaction pour le mobilier de collection
          </p>
          <a href="mailto:contact@atelierprovenance.fr" className="footer-email">
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

        /* CONTAINER */
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* NAV */
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(246, 239, 228, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e3d2be;
        }
        .nav-inner {
          display: flex; align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-logo {
          font-family: Georgia, serif;
          font-size: 1rem; letter-spacing: 0.04em;
          color: #2d241d;
        }
        .nav-links {
          display: flex; align-items: center; gap: 28px;
        }
        .nav-links a:not(.button) {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem; color: #5e5146;
          letter-spacing: 0.02em;
        }
        .nav-links a:not(.button):hover { color: #2d241d; }

        /* HERO */
        .hero { padding: 96px 0 80px; }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 80px; align-items: start;
        }
        .eyebrow {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem; letter-spacing: 0.14em;
          text-transform: uppercase; color: #a06d2c;
          margin-bottom: 20px;
        }
        .intro {
          font-size: 1.1rem; color: #4a3728;
          line-height: 1.85; margin: 24px 0 36px;
          max-width: 520px;
        }
        .actions {
          display: flex; gap: 14px; flex-wrap: wrap;
        }
        .hero-panel { padding-top: 12px; }
        .hero-card {
          background: #fff7ec;
          border: 1px solid #dccbb7;
          border-radius: 20px;
          padding: 32px 36px;
        }
        .hero-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: #a06d2c;
          margin-bottom: 20px;
        }
        .hero-list {
          list-style: none; padding: 0; margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem; color: #4a3728;
          display: flex; flex-direction: column; gap: 14px;
        }
        .hero-list li {
          padding-left: 18px;
          position: relative;
        }
        .hero-list li::before {
          content: "—";
          position: absolute; left: 0;
          color: #a06d2c;
        }

        /* EPIGRAPH */
        .epigraph {
          padding: 56px 0;
          border-top: 1px solid #dccbb7;
          border-bottom: 1px solid #dccbb7;
          background: #f0e8d8;
        }
        .proust-quote {
          margin: 0 auto;
          max-width: 640px;
          text-align: center;
        }
        .proust-quote p {
          font-size: 1.15rem;
          font-style: italic;
          color: #3d2b1f;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .proust-quote cite {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #9a7d6a;
          font-style: normal;
          text-transform: uppercase;
        }

        /* BAND */
        .band {
          padding: 64px 0;
          background: #2d241d;
          border-top: 1px solid #dccbb7;
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
          padding-right: 0; margin-right: 0;
        }
        .feature-number {
          display: block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem; letter-spacing: 0.12em;
          color: #a06d2c; margin-bottom: 16px;
        }
        .feature-title {
          font-family: Georgia, serif;
          font-size: 1rem; font-weight: 600;
          color: #f6efe4; margin-bottom: 10px;
        }
        .band p {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.875rem; color: #c4b09a;
          line-height: 1.75; margin: 0;
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
          padding: 36px 32px;
          display: flex; flex-direction: column;
        }
        .card-featured {
          background: #2d241d;
          border-color: #2d241d;
        }
        .card-featured h3,
        .card-featured .price,
        .card-featured .offer-desc,
        .card-featured ul,
        .card-featured li { color: #f6efe4 !important; }
        .card-featured ul { color: #c4b09a !important; }

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
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: #a06d2c;
          margin-bottom: 8px;
        }
        .case-specs {
          display: flex; gap: 16px; flex-wrap: wrap;
          margin-top: 12px;
        }
        .case-specs span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; color: #9a7d6a;
          background: #f0e8d8;
          padding: 4px 12px; border-radius: 999px;
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
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .text-panel {
          padding: 24px 28px;
          border-radius: 14px;
          border: 1px solid #e3d2be;
        }
        .before-panel {
          background: #f3eadc;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem; color: #6b5646;
          line-height: 1.75;
        }
        .after-panel {
          background: #fffaf2;
          font-size: 0.9rem; color: #3d2b1f;
          line-height: 1.75;
        }
        .panel-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.7rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: #a06d2c;
          margin-bottom: 14px;
        }
        .result-line {
          margin-top: 16px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem; color: #7a5c3e;
          font-style: italic;
        }

        /* CONTACT */
        .contact-email {
          display: inline-flex; align-items: center;
          gap: 8px; margin-top: 8px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem; color: #a06d2c;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* FOOTER */
        .footer {
          background: #2d241d;
          padding: 40px 0;
          border-top: 1px solid #4a3728;
        }
        .footer-inner {
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          flex-wrap: wrap;
        }
        .footer-logo {
          font-family: Georgia, serif;
          font-size: 0.95rem; color: #f6efe4;
          letter-spacing: 0.04em; margin: 0;
        }
        .footer-copy {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; color: #9a7d6a; margin: 0;
        }
        .footer-email {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.8rem; color: #c4b09a;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .footer-email:hover { color: #f6efe4; }

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
          .case-image-grid,
          .before-after-grid { grid-template-columns: 1fr; }
          .feature {
            border-right: none;
            border-bottom: 1px solid #4a3728;
            padding: 0 0 24px 0 !important;
            margin-right: 0 !important;
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
