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
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Atelier Provenance</p>
              <h1>
                Vous avez les bonnes pièces.
                <br />
                <em>Nous les positionnons à leur juste valeur.</em>
              </h1>
              <p className="intro">
                Rédaction stratégique de fiches pour mobilier de collection. Nous alignons
                chaque objet avec son marché réel afin d’augmenter sa lisibilité, sa
                désirabilité et sa valeur perçue.
              </p>
              <div className="actions">
                <a href="#contact" className="button button-primary">
                  Demander un test
                </a>
                <a href="#offres" className="button button-secondary">
                  Voir les prestations
                </a>
              </div>
            </div>
            <div className="hero-panel">
              <div className="hero-card">
                <p className="hero-label">Méthode</p>
                <p>
                  Analyse des prix observés sur plateformes spécialisées, chez les marchands
                  et dans les galeries, puis rédaction positionnante adaptée au niveau réel
                  du marché.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container grid-three">
            <div className="feature">
              <span className="feature-number">01</span>
              <p className="feature-title">Référence marché</p>
              <p>Analyse comparative des prix observés sur plateformes et marchands.</p>
            </div>
            <div className="feature">
              <span className="feature-number">02</span>
              <p className="feature-title">Positionnement</p>
              <p>Rédaction pensée pour soutenir le prix réel et clarifier la pièce.</p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <p className="feature-title">Exploitation</p>
              <p>Formats prêts à publier : long, court, marketplace, site, newsletter.</p>
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
                image de catalogue moins forte qu’elle ne pourrait l’être.
              </p>
              <div className="pull-quote">
                « Une fiche n’ajoute pas de valeur — elle révèle celle qui existe. »
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top" id="proposition">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">La proposition</p>
              <h2>Des fiches construites à partir du marché, pas hors sol.</h2>
              <p className="section-intro">
                Chaque mission démarre par un repérage du prix moyen observé pour des
                pièces comparables, puis la fiche est écrite pour soutenir ce positionnement.
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

        <section className="section section-alt" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Tarification</p>
              <h2>Simple, progressive et alignée avec le marché.</h2>
              <p className="section-intro">
                Tarification basée sur le volume et le positionnement moyen des pièces.
                Minimum 3 objets pour garantir cohérence et efficacité.
              </p>
            </div>

            <div className="cards cards-two">
              <div className="card">
                <div className="offer-head">
                  <h3>Pack Essentiel</h3>
                  <span className="price">150 € / fiche</span>
                </div>
                <p className="offer-desc">
                  Le point d’entrée simple pour tester le service sur un petit lot cohérent.
                </p>
                <ul>
                  <li>3 objets minimum</li>
                  <li>Soit 450 € minimum</li>
                  <li>Analyse rapide du marché</li>
                  <li>Fiche longue + version courte</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Commencer
                </a>
              </div>

              <div className="card card-featured">
                <div className="badge">Recommandé</div>
                <div className="offer-head">
                  <h3>Pack Marchand</h3>
                  <span className="price">1 300 €</span>
                </div>
                <p className="offer-desc">
                  La formule la plus lisible pour harmoniser un premier ensemble de pièces.
                </p>
                <ul>
                  <li>10 fiches</li>
                  <li>130 € / fiche</li>
                  <li>Positionnement homogène</li>
                  <li>Livrables multi-supports</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Commencer
                </a>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Pack Catalogue</h3>
                  <span className="price">2 400 €</span>
                </div>
                <p className="offer-desc">
                  Pour structurer un volume plus large et rendre le catalogue plus cohérent.
                </p>
                <ul>
                  <li>20 fiches</li>
                  <li>120 € / fiche</li>
                  <li>Structuration globale</li>
                  <li>Alignement des pièces</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Nous contacter
                </a>
              </div>

              <div className="card">
                <div className="offer-head">
                  <h3>Abonnement</h3>
                  <span className="price">100–110 € / fiche</span>
                </div>
                <p className="offer-desc">
                  Une externalisation fluide pour les structures qui ont du volume et veulent un rythme régulier.
                </p>
                <ul>
                  <li>30 à 60 fiches / mois</li>
                  <li>Tarification dégressive</li>
                  <li>Optimisation continue</li>
                  <li>Support asynchrone</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">
                  Nous contacter
                </a>
              </div>
            </div>

            <div className="pricing-note">
              Supports de calcul : analyse comparative des prix observés sur plateformes spécialisées,
              marchands indépendants et galeries. Chaque fiche est calibrée en fonction du
              positionnement réel de la pièce.
            </div>
          </div>
        </section>

        <section className="section" id="exemples">
          <div className="container section-head examples-head">
            <p className="eyebrow">Exemples</p>
            <h2>Avant / après : trois cas complets.</h2>
            <p className="section-intro">
              Chaque exemple montre un objet réel, un point de départ fonctionnel et une
              reformulation pensée pour renforcer lecture, désirabilité et cohérence.
            </p>
          </div>

          <div className="container examples-stack">
            <article className="case-study">
              <div className="case-top">
                <div>
                  <p className="case-meta">Exemple 1 · Enfilade suédoise Karlit, années 1960</p>
                  <h3>Du descriptif correct à une pièce vraiment positionnée.</h3>
                </div>
                <div className="case-specs">
                  <span>Prix observé : ~1 200 €</span>
                  <span>Mission type : Pack Essentiel</span>
                  <span>Teck miel</span>
                </div>
              </div>

              <div className="case-image-grid">
                <div className="image-card">
                  <img src="/images/enfilade-karlit.jpg" alt="Enfilade suédoise Karlit en teck miel" />
                </div>
                <div className="image-card image-placeholder">
                  <div>
                    <p>Capture de l’annonce d’origine</p>
                    <span>À ajouter dans /public/images/annonce-enfilade-karlit.jpg</span>
                  </div>
                </div>
              </div>

              <div className="before-after-grid">
                <div className="text-panel before-panel">
                  <p className="panel-label">Avant</p>
                  <p>
                    Enfilade scandinave vintage suédoise Karlit. Enfilade suédoise des années 60,
                    teck miel, tampon Karlit présent, portes coulissantes et tiroirs, bon état général,
                    nettoyage récent, dimensions : L 159,5 × P 42 × H 80 cm.
                  </p>
                </div>
                <div className="text-panel after-panel">
                  <p className="panel-label">Après</p>
                  <h4>Enfilade suédoise Karlit, années 1960 — teck miel, ligne basse et équilibre nordique</h4>
                  <p>
                    Une enfilade suédoise signée Karlit, représentative du design des années 1960,
                    où la précision du dessin rencontre la chaleur stable du teck. Une pièce à la
                    présence calme, structurante, prête à s’intégrer sans effort dans un intérieur contemporain.
                  </p>
                  <p>
                    Cette enfilade des années 1960, attribuée à la maison Karlit, incarne avec justesse
                    l’esthétique scandinave de l’époque : recherche d’équilibre entre sobriété formelle,
                    qualité d’exécution et fonctionnalité réelle. Réalisée en teck à la teinte miel, elle
                    développe une silhouette basse et étirée. La façade se compose de deux portes
                    coulissantes latérales et d’un ensemble central de tiroirs inclinés, apportant un rythme
                    discret et une lecture graphique élégante.
                  </p>
                  <p>
                    Ce type d’enfilade s’intègre naturellement dans un salon, une salle à manger ou une entrée,
                    où il apporte une structure visuelle stable sans alourdir l’espace.
                  </p>
                </div>
              </div>
            </article>

            <article className="case-study">
              <div className="case-top">
                <div>
                  <p className="case-meta">Exemple 2 · Ensemble de trois chaises années 1950</p>
                  <h3>Du lot utilitaire à l’ensemble cohérent et désirable.</h3>
                </div>
                <div className="case-specs">
                  <span>Prix observé : ~240–350 €</span>
                  <span>Mission type : Pack Marchand</span>
                  <span>Métal noir · velours vert</span>
                </div>
              </div>

              <div className="case-image-grid">
                <div className="image-card">
                  <img src="/images/chaises-1950.jpg" alt="Trois chaises années 1950 en métal noir et velours vert" />
                </div>
                <div className="image-card image-placeholder">
                  <div>
                    <p>Capture de l’annonce d’origine</p>
                    <span>À ajouter dans /public/images/annonce-chaises-1950.jpg</span>
                  </div>
                </div>
              </div>

              <div className="before-after-grid">
                <div className="text-panel before-panel">
                  <p className="panel-label">Avant</p>
                  <p>
                    3 chaises années 50 métal et velours vert, idéales pour bureau ou table,
                    bon état, velours nettoyé, traces d’usage sur le métal, dimensions :
                    H 83 × L 60 × P 53 cm.
                  </p>
                </div>
                <div className="text-panel after-panel">
                  <p className="panel-label">Après</p>
                  <h4>Ensemble de trois chaises années 1950 — structure métallique noire et velours vert, esprit bureau moderniste</h4>
                  <p>
                    Un ensemble cohérent de chaises des années 1950, où la rigueur du métal rencontre
                    la douceur du velours vert. Une esthétique fonctionnelle et chaleureuse, idéale pour
                    structurer un coin bureau ou une table de repas sans surcharge.
                  </p>
                  <p>
                    Cet ensemble se caractérise par une structure métallique noire aux lignes simples et efficaces,
                    typiques du mobilier de travail et d’après-guerre. Les assises et dossiers habillés d’un velours
                    vert récemment nettoyé apportent un contraste intéressant entre structure et matière.
                  </p>
                  <p>
                    L’une des chaises est dotée d’accoudoirs, ce qui introduit une variation subtile permettant
                    de composer l’espace plus librement.
                  </p>
                </div>
              </div>
            </article>

            <article className="case-study">
              <div className="case-top">
                <div>
                  <p className="case-meta">Exemple 3 · Bureau ancien à compartiments, Europe du Nord vers 1880</p>
                  <h3>Du meuble ancien restauré à l’outil de travail historique structuré.</h3>
                </div>
                <div className="case-specs">
                  <span>Prix observé : ~2 500 €</span>
                  <span>Mission type : Pack Essentiel</span>
                  <span>Europe du Nord · vers 1880</span>
                </div>
              </div>

              <div className="case-image-grid">
                <div className="image-card">
                  <img src="/images/bureau-1880.jpg" alt="Bureau ancien à compartiments en bois vers 1880" />
                </div>
                <div className="image-card image-placeholder">
                  <div>
                    <p>Capture de l’annonce d’origine</p>
                    <span>À ajouter dans /public/images/annonce-bureau-1880.jpg</span>
                  </div>
                </div>
              </div>

              <div className="before-after-grid">
                <div className="text-panel before-panel">
                  <p className="panel-label">Avant</p>
                  <p>
                    Bureau ancien à compartiments de rangement, Europe du Nord, vers 1880,
                    après restauration. Bureau ancien fin XIXe siècle, très bon état après restauration,
                    dimensions : H 108 × L 106 × P 58 cm.
                  </p>
                </div>
                <div className="text-panel after-panel">
                  <p className="panel-label">Après</p>
                  <h4>Bureau ancien à compartiments, Europe du Nord vers 1880 — architecture structurée et restauration soignée</h4>
                  <p>
                    Un bureau de la fin du XIXe siècle conçu comme un véritable espace de travail structuré :
                    compartiments, organisation, logique d’usage. Une pièce restaurée professionnellement,
                    prête à intégrer un intérieur actuel.
                  </p>
                  <p>
                    Ce bureau ancien se distingue par une organisation intérieure développée. Il ne s’agit pas
                    simplement d’un support, mais d’un véritable outil de travail pensé pour ordonner et hiérarchiser
                    les gestes : ranger, classer, écrire, conserver.
                  </p>
                  <p>
                    L’ensemble a fait l’objet d’une restauration professionnelle assurant à la fois la stabilité
                    de la pièce et une lecture esthétique nette, tout en respectant son caractère d’origine.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-contact border-top" id="contact">
          <div className="container">
            <div className="contact-box">
              <p className="eyebrow">Contact</p>
              <h2>Le plus simple : nous envoyer 3 objets.</h2>
              <p className="section-intro narrow">
                Photos, prix, dimensions, état — et toute information disponible. Nous vous
                dirons si c’est un bon test et sous quelle formule commencer.
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
        .container { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 32px; }
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(246, 239, 228, 0.92);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #dccbb7;
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 68px; gap: 32px; }
        .nav-logo { font-size: 0.95rem; letter-spacing: 0.08em; font-weight: 600; white-space: nowrap; }
        .nav-links { display: flex; align-items: center; gap: 28px; font-family: Arial, Helvetica, sans-serif; font-size: 0.875rem; color: #6a5648; }
        .hero { padding: 104px 0 84px; background: linear-gradient(180deg, #f6efe4 0%, #f3eadc 100%); }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 48px; align-items: end; }
        .hero-panel { display: flex; justify-content: flex-end; }
        .hero-card { width: 100%; max-width: 320px; background: #fffaf2; border: 1px solid #dccbb7; border-radius: 20px; padding: 24px; box-shadow: 0 10px 30px rgba(88, 62, 40, 0.08); }
        .hero-label, .panel-label, .case-meta, .feature-title, .feature-number, .eyebrow { font-family: Arial, Helvetica, sans-serif; }
        .hero-label { margin: 0 0 12px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #a06d2c; }
        .eyebrow { margin: 0 0 20px; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #9a744d; }
        h1, h2, h3, h4, p, ul { margin-top: 0; }
        h1 { max-width: 900px; margin-bottom: 32px; font-size: clamp(2.7rem, 5.5vw, 5rem); line-height: 1.04; font-weight: 400; letter-spacing: -0.02em; color: #2d241d; }
        h1 em, h2 em { font-style: italic; color: #8d5a1c; }
        h2 { margin-bottom: 20px; font-size: clamp(1.95rem, 3vw, 2.8rem); line-height: 1.14; font-weight: 400; letter-spacing: -0.015em; color: #2d241d; }
        h3 { margin-bottom: 12px; font-size: 1.2rem; line-height: 1.35; font-weight: 600; color: #2d241d; }
        h4 { margin-bottom: 14px; font-size: 1.05rem; line-height: 1.5; font-weight: 600; color: #2d241d; }
        .intro, .section-intro, .text-block p, .card p, .offer-desc, .feature p, .text-panel p, .hero-card p, .pricing-note {
          font-family: Arial, Helvetica, sans-serif; color: #5e5146; line-height: 1.85;
        }
        .intro { max-width: 700px; font-size: 1.1rem; margin-bottom: 40px; }
        .section-intro { font-size: 1.05rem; max-width: 760px; margin-bottom: 0; }
        .section { padding: 96px 0; }
        .section-alt { background: #f0e5d4; }
        .border-top { border-top: 1px solid #dccbb7; }
        .section-head { max-width: 900px; margin-bottom: 52px; }
        .band { background: #fffaf2; border-top: 1px solid #dccbb7; border-bottom: 1px solid #dccbb7; padding: 40px 0; }
        .grid-three { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; }
        .feature { padding: 8px 36px 8px 0; border-right: 1px solid #e3d2be; }
        .feature:last-child { border-right: none; padding-right: 0; padding-left: 36px; }
        .feature:not(:first-child):not(:last-child) { padding-left: 36px; }
        .feature-number { display: block; font-size: 11px; color: #c5a17a; letter-spacing: 0.1em; margin-bottom: 10px; }
        .feature-title { margin-bottom: 8px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #9a744d; font-weight: 700; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .text-block p + p { margin-top: 20px; }
        .pull-quote { margin-top: 32px; padding: 20px 24px; border-left: 2px solid #a06d2c; font-style: italic; font-size: 1.05rem; color: #5a4330; line-height: 1.6; background: #fff7ec; border-radius: 0 10px 10px 0; }
        .cards { display: grid; gap: 20px; }
        .cards-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .cards-two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .card { border: 1px solid #dccbb7; border-radius: 22px; background: #fffaf2; padding: 32px; display: flex; flex-direction: column; transition: box-shadow 0.25s ease, transform 0.2s ease; }
        .card:hover { box-shadow: 0 8px 30px rgba(88, 62, 40, 0.08); transform: translateY(-2px); }
        .card-plain { background: #fff7ec; }
        .card-icon { font-size: 1.4rem; margin-bottom: 20px; color: #c5a17a; letter-spacing: 0.05em; }
        .card-featured { border-width: 1.5px; border-color: #8d5a1c; background: linear-gradient(180deg, #8d5a1c 0%, #6e4416 100%); color: #fff7ec; position: relative; }
        .card-featured h3 { color: #fff7ec; }
        .card-featured .offer-desc, .card-featured ul { color: #f4e7d7; }
        .card-featured .price { color: #f3d2aa; }
        .card-featured .button-primary { background: #fffaf2; color: #6e4416; }
        .badge { display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #6e4416; background: #fffaf2; border-radius: 999px; padding: 4px 12px; margin-bottom: 20px; align-self: flex-start; }
        .offer-head { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 14px; flex-wrap: wrap; }
        .price { font-family: Arial, Helvetica, sans-serif; font-size: 0.9rem; color: #8b6f58; white-space: nowrap; }
        .offer-desc { margin-bottom: 20px; }
        ul { padding-left: 16px; font-family: Arial, Helvetica, sans-serif; color: #5b4b3f; line-height: 1.9; margin-bottom: 28px; flex: 1; }
        .offer-cta { align-self: flex-start; margin-top: auto; }
        .pricing-note { margin-top: 28px; max-width: 860px; font-size: 0.95rem; color: #6e4c2a; }
        .examples-head { margin-bottom: 36px; }
        .examples-stack { display: grid; gap: 32px; }
        .case-study { border: 1px solid #dccbb7; border-radius: 26px; background: #fffaf2; padding: 30px; box-shadow: 0 10px 30px rgba(88, 62, 40, 0.05); }
        .case-top { display: flex; justify-content: space-between; align-items: start; gap: 24px; margin-bottom: 24px; }
        .case-meta { margin: 0 0 8px; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #a06d2c; }
        .case-specs { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; }
        .case-specs span { font-family: Arial, Helvetica, sans-serif; font-size: 0.8rem; color: #7f6856; border: 1px solid #e3d2be; border-radius: 999px; padding: 6px 10px; background: #fff7ec; }
        .case-image-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 22px; }
        .image-card { overflow: hidden; border-radius: 18px; border: 1px solid #e3d2be; background: #f3eadc; min-height: 280px; }
        .image-card img { height: 100%; min-height: 280px; object-fit: cover; }
        .image-placeholder { display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px; color: #7f6856; }
        .image-placeholder p { margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif; font-weight: 600; }
        .image-placeholder span { font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; line-height: 1.6; }
        .before-after-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 18px; }
        .text-panel { border-radius: 18px; padding: 24px; }
        .before-panel { background: #f3eadc; border: 1px solid #e3d2be; }
        .after-panel { background: #fff7ec; border: 1px solid #dccbb7; }
        .panel-label { margin: 0 0 12px; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #9a744d; }
        .section-contact { background: #efe2cf; }
        .contact-box { max-width: 780px; }
        .narrow { max-width: 640px; margin-bottom: 36px; }
        .actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .button { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 24px; border-radius: 999px; font-family: Arial, Helvetica, sans-serif; font-size: 0.9rem; transition: all 0.2s ease; letter-spacing: 0.01em; cursor: pointer; }
        .button-sm { min-height: 38px; padding: 0 18px; font-size: 0.85rem; }
        .button-primary { background: #8d5a1c; color: #fffaf2; }
        .button-primary:hover { background: #6e4416; }
        .button-secondary { border: 1px solid #c9ae91; color: #6e4c2a; background: transparent; }
        .button-secondary:hover { border-color: #a06d2c; background: #fff7ec; }
        .footer { border-top: 1px solid #dccbb7; padding: 36px 0; background: #f6efe4; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
        .footer-logo { font-size: 0.95rem; font-weight: 600; letter-spacing: 0.06em; margin: 0; }
        .footer-copy { font-family: Arial, Helvetica, sans-serif; font-size: 0.8rem; color: #8b6f58; margin: 0; }
        .footer-email { font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #6e4c2a; }
        @media (max-width: 960px) {
          .container { padding: 0 24px; }
          .hero-grid, .grid-three, .cards-three, .cards-two, .split, .case-image-grid, .before-after-grid { grid-template-columns: 1fr; }
          .feature { border-right: none; border-bottom: 1px solid #e3d2be; padding: 0 0 24px 0 !important; }
          .feature:last-child { border-bottom: none; padding-bottom: 0 !important; }
          .hero { padding: 72px 0 64px; }
          .section { padding: 72px 0; }
          .split { gap: 48px; }
          .nav-links a:not(.button) { display: none; }
          .case-top { flex-direction: column; }
          .case-specs { justify-content: flex-start; }
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
        @media (max-width: 480px) {
          .hero { padding: 56px 0 48px; }
          .section { padding: 56px 0; }
          .button { width: 100%; justify-content: center; }
          .actions { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
