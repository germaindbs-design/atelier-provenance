"use client";

import { useState } from "react";

export default function Page() {
  const [openExample, setOpenExample] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    pieces: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demande — ${formData.name || "Nouveau prospect"}`
    );
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\nPlateforme : ${formData.platform}\nNombre de pièces : ${formData.pieces}\n\nMessage :\n${formData.message}`
    );
    window.location.href = `mailto:contact.atelierprovenance@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus("sent");
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            Atelier Provenance
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${mobileMenu ? "nav-open" : ""}`}>
            <a
              href="#approche"
              onClick={() => setMobileMenu(false)}
            >
              Approche
            </a>
            <a
              href="#offres"
              onClick={() => setMobileMenu(false)}
            >
              Prestations
            </a>
            <a
              href="#exemples"
              onClick={() => setMobileMenu(false)}
            >
              Exemples
            </a>
            <a
              href="#parcours"
              onClick={() => setMobileMenu(false)}
            >
              À propos
            </a>
            <a
              href="#contact"
              className="button button-primary button-sm"
              onClick={() => setMobileMenu(false)}
            >
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
                Rédaction de notices pour le mobilier de collection et les objets
                d'art. Chaque texte est construit pour soutenir le prix, clarifier
                l'objet et le rendre véritablement désirable — pas seulement
                visible.
              </p>
              <div className="actions">
                <a href="#contact" className="button button-primary">
                  Envoyer un objet à analyser
                </a>
                <a href="#offres" className="button button-secondary">
                  Voir les prestations
                </a>
              </div>
              <p className="hero-free">
                ↳ Première notice offerte, sans engagement.
              </p>
            </div>
            <div className="hero-panel">
              <div className="hero-card">
                <p className="hero-label">En bref</p>
                <ul className="hero-list">
                  <li>Analyse du marché et du positionnement prix avant toute rédaction</li>
                  <li>Vocabulaire juste, ton adapté à votre clientèle</li>
                  <li>Formats prêts à publier — Selency, Proantic, Drouot, réseaux</li>
                  <li>Livraison sous 5 jours ouvrés</li>
                  <li>Première notice offerte pour juger du résultat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLÈME */}
        <section className="section border-top" id="probleme">
          <div className="container split">
            <div className="text-block">
              <p className="eyebrow">Le constat</p>
              <h2>
                La plupart des annonces ne sont pas à la hauteur des pièces
                qu'elles présentent.
              </h2>
              <p>
                Sur Selency, Proantic, Leboncoin ou Catawiki, des milliers d'objets
                de qualité restent en ligne pendant des semaines — parfois des mois.
                Pas parce qu'ils manquent de valeur, mais parce que rien dans leur
                présentation ne permet à l'acheteur de comprendre cette valeur.
              </p>
              <p>
                Descriptions en deux lignes. Vocabulaire approximatif. Aucun
                contexte historique. Pas de référence au marché. Le prix semble
                arbitraire. L'acheteur hésite, puis passe à autre chose.
              </p>
              <p>
                Le problème n'est jamais l'objet. C'est toujours la manière dont
                il est présenté.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <p className="stat-number">70 %</p>
                  <p className="stat-label">
                    des annonces haut de gamme n'ont aucun contexte historique ou
                    stylistique
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">3×</p>
                  <p className="stat-label">
                    plus de vues en moyenne sur une annonce avec une description
                    structurée et détaillée
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">45 j.</p>
                  <p className="stat-label">
                    durée moyenne d'une annonce sans description soignée avant
                    retrait ou baisse de prix
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">–30 %</p>
                  <p className="stat-label">
                    de décote fréquente sur des pièces dont le prix n'est pas
                    justifié par le texte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPROCHE */}
        <section className="section section-alt border-top" id="approche">
          <div className="container split">
            <div className="text-block">
              <p className="eyebrow">Notre approche</p>
              <h2>
                Une notice n'est pas une description.
                <br />
                C'est un argumentaire.
              </h2>
              <p>
                Avant d'écrire un mot, nous analysons le marché. Quels sont les
                prix pratiqués pour des pièces comparables ? Quel est le
                positionnement réel de l'objet ? Qu'est-ce qui, dans son histoire,
                sa fabrication ou sa rareté, justifie le prix affiché ?
              </p>
              <p>
                Ensuite, nous rédigeons. Le texte est construit pour un lecteur
                qui hésite — pas pour un expert qui sait déjà. Chaque phrase a une
                fonction : contextualiser, rassurer, créer le désir.
              </p>
              <p>
                Le résultat est un texte prêt à publier, décliné selon vos canaux :
                notice complète pour votre site ou Proantic, version courte pour
                Selency ou les réseaux, version catalogue si nécessaire.
              </p>
              <div className="pull-quote">
                « Un objet bien décrit ne se vend pas seulement mieux. Il se vend
                au prix juste, plus vite, et sans négociation. »
              </div>
            </div>
            <div>
              <div className="process-steps">
                <div className="process-step">
                  <span className="step-num">01</span>
                  <div>
                    <h4>Analyse</h4>
                    <p>
                      Étude du marché, des prix pratiqués et du positionnement
                      de la pièce dans son segment.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <span className="step-num">02</span>
                  <div>
                    <h4>Recherche</h4>
                    <p>
                      Contexte historique, stylistique, attribution, provenance —
                      tout ce qui justifie le prix.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <span className="step-num">03</span>
                  <div>
                    <h4>Rédaction</h4>
                    <p>
                      Texte structuré, vocabulaire précis, ton adapté à votre
                      clientèle et à la plateforme.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <span className="step-num">04</span>
                  <div>
                    <h4>Déclinaison</h4>
                    <p>
                      Livraison en plusieurs formats : notice longue, version
                      courte, version réseaux sociaux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section className="section border-top" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Trois formules claires. Un même niveau d'exigence.</h2>
              <p className="section-intro">
                Chaque formule inclut l'analyse marché, la rédaction complète et
                les déclinaisons multi-formats. La première notice est offerte
                pour vous permettre de juger du résultat.
              </p>
            </div>

            <div className="cards cards-three">
              {/* OFFRE DÉCOUVERTE */}
              <div className="card">
                <div className="card-badge">Pour commencer</div>
                <div className="offer-head">
                  <h3>Première lecture</h3>
                  <span className="price">3 notices · 450 €</span>
                </div>
                <p className="offer-desc">
                  Pour tester la méthode sur trois pièces et mesurer la
                  différence.
                </p>
                <ul>
                  <li>3 notices complètes</li>
                  <li>150 € / notice</li>
                  <li>Analyse marché incluse</li>
                  <li>Déclinaison formats courts</li>
                  <li>Livraison sous 5 jours</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Choisir cette formule
                </a>
              </div>

              {/* OFFRE ENSEMBLE — FEATURED */}
              <div className="card card-featured">
                <div className="card-badge badge-light">Recommandé</div>
                <div className="offer-head">
                  <h3>Ensemble</h3>
                  <span className="price">10 notices · 1 200 €</span>
                </div>
                <p className="offer-desc">
                  Pour traiter un ensemble cohérent et donner une vraie
                  consistance éditoriale à votre catalogue.
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
                  Choisir cette formule
                </a>
              </div>

              {/* OFFRE CATALOGUE */}
              <div className="card">
                <div className="card-badge">Pour les galeries</div>
                <div className="offer-head">
                  <h3>Catalogue</h3>
                  <span className="price">Sur devis</span>
                </div>
                <p className="offer-desc">
                  Accompagnement complet pour les galeries et marchands avec un
                  catalogue de 20 pièces ou plus.
                </p>
                <ul>
                  <li>Rédaction de l'ensemble du catalogue</li>
                  <li>Harmonisation du ton et du style</li>
                  <li>Direction éditoriale globale</li>
                  <li>Positionnement prix argumenté</li>
                  <li>Formats adaptés à chaque canal</li>
                  <li>Calendrier de livraison sur mesure</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">
                  Demander un devis
                </a>
              </div>
            </div>

            <div className="offer-guarantee">
              <p>
                <strong>↳ Première notice offerte.</strong> Envoyez-nous un objet,
                nous rédigeons la notice — sans engagement, sans carte bancaire.
                Vous jugez du résultat et décidez ensuite.
              </p>
            </div>
          </div>
        </section>

        {/* EXEMPLES */}
        <section className="section section-alt border-top" id="exemples">
          <div className="container">
            <div className="section-head examples-head">
              <p className="eyebrow">Exemples</p>
              <h2>Trois cas concrets, avant et après.</h2>
              <p className="section-intro">
                Chaque exemple part d'une annonce réelle et montre ce que la
                rédaction change — sur la lisibilité, la désirabilité et la
                cohérence avec le prix affiché.
              </p>
            </div>

            <div className="examples-stack">
              {/* CAS 1 */}
              <article
                className={`case-study ${openExample === 1 ? "is-open" : ""}`}
              >
                <button
                  className="case-toggle"
                  onClick={() =>
                    setOpenExample(openExample === 1 ? null : 1)
                  }
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">
                      Exemple 1 · Commode Louis XV en noyer
                    </p>
                    <h3>
                      Transformer une fiche technique en argumentaire de vente.
                    </h3>
                    <div className="case-specs">
                      <span>Prix affiché : 2 800 €</span>
                      <span>Noyer · marqueterie</span>
                      <span>Proantic</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 1 ? "−" : "+"}
                  </div>
                </button>
                {openExample === 1 && (
                  <div className="case-body">
                    <div className="case-columns">
                      <div className="case-before">
                        <h4>Avant</h4>
                        <div className="case-text-block">
                          <p>
                            « Commode Louis XV en noyer, époque XVIIIe. Trois
                            tiroirs, dessus marbre gris. Marqueterie de bois de
                            rose. Bon état général, quelques restaurations.
                            H 85 × L 120 × P 55 cm. 2 800 €. »
                          </p>
                        </div>
                        <div className="case-analysis">
                          <h4>Diagnostic</h4>
                          <ul>
                            <li>Aucun contexte historique ou stylistique</li>
                            <li>
                              Le mot « restaurations » sans précision crée du
                              doute
                            </li>
                            <li>
                              Rien ne justifie le prix de 2 800 € par rapport à
                              des commodes similaires à 1 500 €
                            </li>
                            <li>
                              Pas de mention de la provenance, de l'atelier ou
                              de la rareté du modèle
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="case-after">
                        <h4>Après — Notice complète</h4>
                        <div className="case-text-block case-text-after">
                          <p>
                            <strong>
                              Commode Louis XV en noyer et marqueterie de bois de
                              rose — Travail provincial, milieu du XVIIIe siècle
                            </strong>
                          </p>
                          <p>
                            Cette commode à façade galbée illustre le savoir-faire
                            des ateliers provinciaux du milieu du XVIIIe siècle,
                            dans la tradition des grands ébénistes parisiens. Le
                            bâti en noyer massif — essence noble et recherchée —
                            accueille un décor de marqueterie en bois de rose
                            disposé en feuilles, dont le veinage dessine des motifs
                            d'une remarquable régularité.
                          </p>
                          <p>
                            Les trois tiroirs, sans traverse apparente, ouvrent sur
                            des entrées de serrure en bronze doré à décor rocaille,
                            d'origine. Le dessus en marbre gris de Sainte-Anne,
                            d'un seul tenant, présente un profil mouluré
                            caractéristique de la période. Les pieds cambrés, bien
                            conservés, confirment l'ancienneté de la pièce.
                          </p>
                          <p>
                            Des restaurations d'usage ont été effectuées sur le
                            placage du plateau et le fond d'un tiroir — elles
                            n'altèrent ni la lecture esthétique ni la solidité de
                            l'ensemble. La commode a été recirée dans les règles,
                            sans vernis moderne.
                          </p>
                          <p>
                            Sur le marché actuel, les commodes Louis XV en
                            marqueterie de cette qualité se négocient entre 2 500
                            et 4 200 € selon la provenance et l'état. Le prix
                            proposé de 2 800 € situe cette pièce dans le bas de
                            la fourchette — ce qui en fait une acquisition
                            particulièrement pertinente pour un amateur ou un
                            décorateur.
                          </p>
                          <p>
                            H 85 × L 120 × P 55 cm. Livraison possible en France
                            métropolitaine.
                          </p>
                        </div>
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
                  onClick={() =>
                    setOpenExample(openExample === 2 ? null : 2)
                  }
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">
                      Exemple 2 · Paire de fauteuils bridge, années 1950
                    </p>
                    <h3>
                      Faire d'un lot banal un ensemble cohérent et désirable.
                    </h3>
                    <div className="case-specs">
                      <span>Prix affiché : 680 €</span>
                      <span>Hêtre · velours</span>
                      <span>Selency</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 2 ? "−" : "+"}
                  </div>
                </button>
                {openExample === 2 && (
                  <div className="case-body">
                    <div className="case-columns">
                      <div className="case-before">
                        <h4>Avant</h4>
                        <div className="case-text-block">
                          <p>
                            « Paire de fauteuils bridge vintage années 50. Tissu
                            velours vert. Bon état. 680 € les deux. »
                          </p>
                        </div>
                        <div className="case-analysis">
                          <h4>Diagnostic</h4>
                          <ul>
                            <li>
                              « Vintage années 50 » — trop vague, ne situe
                              aucun courant ni aucune influence
                            </li>
                            <li>
                              Aucune mention du matériau de la structure, du
                              type d'assise ou du confort
                            </li>
                            <li>
                              « Bon état » ne suffit pas — l'acheteur veut
                              savoir si le tissu est d'origine ou changé
                            </li>
                            <li>
                              Pas de mise en contexte : pourquoi ces fauteuils
                              valent 680 € et pas 350 €
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="case-after">
                        <h4>Après — Notice complète</h4>
                        <div className="case-text-block case-text-after">
                          <p>
                            <strong>
                              Paire de fauteuils bridge en hêtre teinté et velours
                              vert amande — France, années 1950
                            </strong>
                          </p>
                          <p>
                            Deux fauteuils bridge à dossier cintré, dans le goût
                            des productions françaises du début des années 1950,
                            marquées par un retour aux lignes épurées après les
                            formes massives de la décennie précédente. La structure
                            en hêtre teinté acajou, légère et stable, repose sur
                            quatre pieds fuselés reliés par une entretoise en H —
                            signe d'une fabrication soignée.
                          </p>
                          <p>
                            L'assise et le dossier ont été retapissés dans un
                            velours vert amande de belle tenue, qui respecte
                            l'esprit chromatique de l'époque sans chercher une
                            restitution littérale. Le confort est réel : assise
                            ferme, dossier enveloppant, proportions pensées pour
                            un usage quotidien autant que décoratif.
                          </p>
                          <p>
                            Les fauteuils bridge des années 1950, longtemps
                            sous-cotés, connaissent un regain d'intérêt marqué
                            depuis trois ans, portés par la tendance du mobilier
                            mid-century accessible. Les paires en bon état se
                            négocient entre 500 et 900 € selon la qualité de la
                            retapisserie. À 680 €, cette paire se situe dans une
                            fourchette cohérente et attractive.
                          </p>
                          <p>H 76 × L 58 × P 62 cm (chaque). Vendus par deux.</p>
                        </div>
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
                  onClick={() =>
                    setOpenExample(openExample === 3 ? null : 3)
                  }
                >
                  <div className="case-toggle-left">
                    <p className="case-meta">
                      Exemple 3 · Lampe de bureau Jumo, modèle 600
                    </p>
                    <h3>
                      Identifier un objet, lui redonner son nom et son prix.
                    </h3>
                    <div className="case-specs">
                      <span>Prix affiché : 180 €</span>
                      <span>Métal laqué · laiton</span>
                      <span>Leboncoin</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">
                    {openExample === 3 ? "−" : "+"}
                  </div>
                </button>
                {openExample === 3 && (
                  <div className="case-body">
                    <div className="case-columns">
                      <div className="case-before">
                        <h4>Avant</h4>
                        <div className="case-text-block">
                          <p>
                            « Lampe de bureau ancienne, métal vert. Fonctionne.
                            180 €. »
                          </p>
                        </div>
                        <div className="case-analysis">
                          <h4>Diagnostic</h4>
                          <ul>
                            <li>
                              L'objet n'est pas identifié — il s'agit d'une
                              Jumo modèle 600, une référence collectionnée
                            </li>
                            <li>
                              Le prix de 180 € est très en dessous du marché
                              pour ce modèle en état fonctionnel
                            </li>
                            <li>
                              Aucune mention de la marque, du modèle, de
                              l'époque ou de la cote actuelle
                            </li>
                            <li>
                              « Fonctionne » est le strict minimum — rien sur
                              l'état esthétique, la patine, l'authenticité
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="case-after">
                        <h4>Après — Notice complète</h4>
                        <div className="case-text-block case-text-after">
                          <p>
                            <strong>
                              Lampe de bureau Jumo, modèle 600 — France, circa 1940
                            </strong>
                          </p>
                          <p>
                            Lampe articulée en métal laqué vert sombre et laiton,
                            produite par la manufacture Jumo (marque fondée par
                            Yves Jujeau et Pierre &amp; André Mounique en 1935 à
                            Paris). Le modèle 600, l'un des plus emblématiques de
                            la marque, est reconnaissable à son bras à deux
                            segments, son réflecteur cylindrique orientable et sa
                            base circulaire lestée.
                          </p>
                          <p>
                            L'exemplaire présenté conserve sa laque d'origine, avec
                            une patine d'usage qui témoigne d'une utilisation
                            régulière sans dommage structurel. Les articulations
                            fonctionnent correctement, le câble a été remplacé aux
                            normes. La pièce est immédiatement utilisable.
                          </p>
                          <p>
                            Les lampes Jumo, longtemps ignorées du marché, ont été
                            réévaluées depuis une dizaine d'années. Les modèles 600
                            en laque d'origine se négocient aujourd'hui entre 280 et
                            450 € selon l'état et la couleur. Le prix proposé est
                            nettement inférieur à la cote — ce qui en fait une
                            opportunité tant pour un collectionneur que pour un
                            amateur de design industriel français.
                          </p>
                          <p>H 45 cm (déployée). Base Ø 16 cm.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section className="section border-top" id="parcours">
          <div className="container split">
            <div className="text-block">
              <p className="eyebrow">À propos</p>
              <h2>Un regard formé par les textes, les objets et le marché.</h2>
              <p>
                Atelier Provenance est né d'un constat simple : sur les
                plateformes de vente, la plupart des objets de qualité sont
                présentés en dessous de ce qu'ils méritent. Pas par négligence,
                mais parce que décrire un objet avec justesse — de manière à
                soutenir un prix, créer un désir et rassurer un acheteur — est un
                métier à part entière.
              </p>
              <p>
                Derrière ce service, un parcours qui croise plusieurs mondes :
                l'enseignement des lettres et de la philosophie, où l'on apprend à
                peser chaque mot ; le marché de l'art, où l'on apprend à lire un
                objet, une époque, une cote ; la rédaction et l'analyse des
                mouvements culturels, où l'on apprend à sentir ce qui fait la
                valeur d'une chose aux yeux de ceux qui la cherchent.
              </p>
              <p>
                Ce croisement est précisément ce qui manque dans la plupart des
                annonces : une capacité à écrire avec précision, une connaissance
                du marché, et le sens de ce qui rend un objet désirable — pas
                seulement descriptible.
              </p>
              <div className="pull-quote">
                « L'enjeu n'est pas d'écrire plus. C'est d'écrire juste — pour
                que le prix devienne une évidence, pas une question. »
              </div>
            </div>
            <div>
              <div className="about-cards">
                <div className="about-card">
                  <h4>Lettres &amp; philosophie</h4>
                  <p>
                    Ancien professeur. La rigueur du texte, le choix du mot,
                    la construction de l'argument — appliqués à chaque notice.
                  </p>
                </div>
                <div className="about-card">
                  <h4>Marché de l'art</h4>
                  <p>
                    Marchand d'art. Connaissance directe des mécanismes de
                    valorisation, des tendances et des attentes des acheteurs.
                  </p>
                </div>
                <div className="about-card">
                  <h4>Analyse culturelle</h4>
                  <p>
                    Rédacteur et observateur des courants esthétiques. Savoir
                    pourquoi un objet parle à son époque — et comment le dire.
                  </p>
                </div>
                <div className="about-card">
                  <h4>Rédaction spécialisée</h4>
                  <p>
                    Chaque texte est calibré pour convaincre un acheteur qui
                    hésite — pas pour impressionner un expert qui sait déjà.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt border-top" id="faq">
          <div className="container container-narrow">
            <div className="section-head">
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Ce que vous vous demandez probablement.</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Pourquoi une première notice gratuite ?</summary>
                <p>
                  Parce que le meilleur argument, c'est le résultat. Envoyez-nous
                  un objet, nous rédigeons la notice — vous jugez de la qualité et
                  vous décidez ensuite. Pas d'engagement, pas de carte bancaire.
                </p>
              </details>
              <details className="faq-item">
                <summary>Quels types d'objets traitez-vous ?</summary>
                <p>
                  Mobilier de collection (toutes époques), luminaires, objets d'art,
                  céramiques, argenterie, design du XXe siècle. Si votre pièce a une
                  histoire et un prix à justifier, elle entre dans notre champ.
                </p>
              </details>
              <details className="faq-item">
                <summary>Quel est le délai de livraison ?</summary>
                <p>
                  5 jours ouvrés pour la formule Première lecture (3 notices), 10
                  jours pour la formule Ensemble (10 notices), sur mesure pour les
                  catalogues. Si vous avez une urgence, nous pouvons en discuter.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  De quoi avez-vous besoin pour rédiger une notice ?
                </summary>
                <p>
                  Des photos de l'objet (face, dos, détails, marques éventuelles),
                  les dimensions, le prix envisagé, et tout ce que vous savez déjà
                  sur la pièce. Nous nous chargeons du reste — recherche,
                  contextualisation, rédaction.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Est-ce que ça fonctionne vraiment pour vendre ?
                </summary>
                <p>
                  Une annonce bien rédigée ne garantit pas la vente — mais elle
                  supprime les principales raisons pour lesquelles un acheteur
                  hésite : le manque d'information, le doute sur le prix, l'absence
                  de contexte. C'est la différence entre une pièce qui reste en
                  ligne trois mois et une pièce qui trouve preneur en deux semaines.
                </p>
              </details>
              <details className="faq-item">
                <summary>Vous vendez les objets vous-mêmes ?</summary>
                <p>
                  Non. Nous ne sommes ni galerie, ni intermédiaire de vente. Nous
                  rédigeons — c'est notre seul métier. Vos objets, vos canaux, vos
                  prix. Nous apportons les mots.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section border-top" id="contact">
          <div className="container container-narrow">
            <div className="section-head">
              <p className="eyebrow">Contact</p>
              <h2>Envoyez-nous un objet. On vous montre ce qu'on en fait.</h2>
              <p className="section-intro">
                Décrivez votre besoin ou envoyez-nous directement les photos d'un
                objet. La première notice est offerte — sans engagement.
              </p>
            </div>

            {formStatus === "sent" ? (
              <div className="form-success">
                <h3>Message préparé.</h3>
                <p>
                  Votre messagerie devrait s'ouvrir avec le message pré-rempli.
                  Si ce n'est pas le cas, écrivez-nous directement à{" "}
                  <a href="mailto:contact.atelierprovenance@gmail.com">
                    contact.atelierprovenance@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Votre nom ou celui de votre galerie"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone (optionnel)</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="07 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="platform">
                      Plateforme de vente
                    </label>
                    <select
                      id="platform"
                      value={formData.platform}
                      onChange={(e) =>
                        setFormData({ ...formData, platform: e.target.value })
                      }
                    >
                      <option value="">— Sélectionner —</option>
                      <option value="selency">Selency</option>
                      <option value="proantic">Proantic</option>
                      <option value="leboncoin">Leboncoin</option>
                      <option value="catawiki">Catawiki</option>
                      <option value="drouot">Drouot Digital</option>
                      <option value="site-propre">Mon propre site</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pieces">
                    Nombre de pièces à traiter
                  </label>
                  <select
                    id="pieces"
                    value={formData.pieces}
                    onChange={(e) =>
                      setFormData({ ...formData, pieces: e.target.value })
                    }
                  >
                    <option value="">— Sélectionner —</option>
                    <option value="1">1 (notice offerte)</option>
                    <option value="3">3 (Première lecture)</option>
                    <option value="10">10 (Ensemble)</option>
                    <option value="20+">20+ (Catalogue)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Décrivez votre besoin ou l'objet à traiter
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Type d'objet, époque, prix envisagé, lien vers l'annonce existante…"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="button button-primary">
                  Envoyer la demande
                </button>
              </form>
            )}

            <div className="contact-alt">
              <p>
                Vous pouvez aussi nous écrire directement :
              </p>
              <div className="contact-methods">
                <a
                  href="mailto:contact.atelierprovenance@gmail.com"
                  className="contact-method"
                >
                  <span className="contact-icon">✉</span>
                  <span>contact.atelierprovenance@gmail.com</span>
                </a>
                <a href="tel:+33751420733" className="contact-method">
                  <span className="contact-icon">☎</span>
                  <span>07 51 42 07 33</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <p className="footer-logo">Atelier Provenance</p>
            <p className="footer-copy">
              © {new Date().getFullYear()} — Rédaction pour le mobilier de
              collection et les objets d'art
            </p>
          </div>
          <div className="footer-right">
            <a
              href="mailto:contact.atelierprovenance@gmail.com"
              className="footer-email"
            >
              contact.atelierprovenance@gmail.com
            </a>
            <a href="tel:+33751420733" className="footer-phone">
              07 51 42 07 33
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #2d241d;
          background: #f6efe4;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
        }

        h1,
        h2,
        h3,
        h4 {
          margin: 0 0 20px;
          line-height: 1.2;
        }
        h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
        }
        h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400;
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        p {
          margin: 0 0 16px;
          line-height: 1.85;
        }
        p:last-child {
          margin-bottom: 0;
        }
        em {
          font-style: italic;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .container-narrow {
          max-width: 720px;
        }
        .section {
          padding: 80px 0;
        }
        .section-alt {
          background: #f0e8d8;
        }
        .border-top {
          border-top: 1px solid #dccbb7;
        }
        .section-head {
          text-align: center;
          margin-bottom: 48px;
        }
        .section-intro {
          max-width: 600px;
          margin: 0 auto;
          color: #6b5744;
          font-size: 1.05rem;
        }
        .eyebrow {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #a06d2c;
          margin-bottom: 12px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
        }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #f6efe4ee;
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #dccbb7;
          padding: 14px 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 0.88rem;
          font-family: Arial, Helvetica, sans-serif;
        }
        .nav-links a:not(.button):hover {
          color: #a06d2c;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.4rem;
          cursor: pointer;
          color: #2d241d;
          padding: 4px 8px;
        }

        /* BUTTONS */
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 999px;
          padding: 12px 28px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          text-decoration: none;
        }
        .button-primary {
          background: #2d241d;
          color: #f0e8d8;
        }
        .button-primary:hover {
          background: #463a2e;
        }
        .button-secondary {
          background: transparent;
          color: #2d241d;
          border: 1px solid #2d241d;
        }
        .button-secondary:hover {
          background: #2d241d;
          color: #f0e8d8;
        }
        .button-light {
          background: #f0e8d8;
          color: #2d241d;
        }
        .button-light:hover {
          background: #fff;
        }
        .button-sm {
          padding: 8px 20px;
          font-size: 0.82rem;
        }

        /* HERO */
        .hero {
          padding: 100px 0 80px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 60px;
          align-items: start;
        }
        .intro {
          font-size: 1.1rem;
          color: #5a4330;
          max-width: 540px;
          line-height: 1.85;
          margin-bottom: 32px;
        }
        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hero-free {
          margin-top: 16px;
          font-size: 0.9rem;
          color: #a06d2c;
          font-style: italic;
        }
        .hero-panel {
          padding-top: 8px;
        }
        .hero-card {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 20px;
          padding: 28px 28px 24px;
        }
        .hero-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #a06d2c;
          margin-bottom: 16px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
        }
        .hero-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .hero-list li {
          padding: 10px 0;
          border-top: 1px solid #ebe0d0;
          font-size: 0.92rem;
          color: #5a4330;
          line-height: 1.6;
        }

        /* SPLIT */
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .text-block p {
          color: #4a3728;
        }
        .text-block p + p {
          margin-top: 20px;
        }

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

        /* STATS */
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-card {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 16px;
          padding: 24px;
          text-align: center;
        }
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #a06d2c;
          margin-bottom: 8px;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.82rem;
          color: #6b5744;
          line-height: 1.5;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* PROCESS */
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .process-step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 20px 24px;
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 16px;
        }
        .step-num {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          color: #a06d2c;
          background: #f6efe4;
          border: 1px solid #dccbb7;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .process-step p {
          font-size: 0.92rem;
          color: #6b5744;
        }

        /* OFFRES */
        .cards {
          display: grid;
          gap: 20px;
          align-items: stretch;
        }
        .cards-three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .card {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .card-badge {
          display: inline-block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: 999px;
          background: #f0e8d8;
          color: #a06d2c;
          border: 1px solid #dccbb7;
          margin-bottom: 16px;
          width: fit-content;
        }
        .badge-light {
          background: #a06d2c;
          color: #fff;
          border-color: #a06d2c;
        }
        .card-featured {
          background: #2d241d;
          border-color: #2d241d;
          color: #f0e8d8;
        }
        .card-featured ul {
          color: #c4b49e;
        }
        .card-featured .offer-desc {
          color: #c4b49e;
        }
        .card-featured .price {
          color: #c4b49e;
        }

        .offer-head {
          margin-bottom: 12px;
        }
        .offer-head h3 {
          font-size: 1.4rem;
        }
        .price {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.88rem;
          color: #8a7560;
        }
        .offer-desc {
          color: #6b5744;
          font-size: 0.95rem;
          margin-bottom: 20px;
        }
        .card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          flex: 1;
        }
        .card ul li {
          padding: 7px 0;
          font-size: 0.88rem;
          border-top: 1px solid #ebe0d020;
          font-family: Arial, Helvetica, sans-serif;
        }
        .card ul li:first-child {
          border-top: 1px solid #dccbb740;
        }
        .offer-cta {
          margin-top: auto;
          text-align: center;
        }

        .offer-guarantee {
          margin-top: 36px;
          text-align: center;
          padding: 24px 32px;
          background: #fff7ec;
          border: 1px solid #dccbb7;
          border-radius: 16px;
        }
        .offer-guarantee p {
          font-size: 0.95rem;
          color: #5a4330;
        }

        /* EXAMPLES */
        .examples-head {
          text-align: center;
        }
        .examples-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

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
          width: 100%;
          background: none;
          border: none;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          cursor: pointer;
          text-align: left;
          color: inherit;
          font-family: inherit;
        }
        .case-toggle:hover {
          background: #fff7ec;
        }

        .case-toggle-left {
          flex: 1;
        }
        .case-toggle-icon {
          font-size: 1.5rem;
          color: #a06d2c;
          font-weight: 300;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dccbb7;
          border-radius: 999px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .case-meta {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #a06d2c;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .case-specs {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .case-specs span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          color: #8a7560;
          background: #f0e8d8;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid #dccbb7;
        }

        .case-body {
          padding: 0 32px 32px;
        }
        .case-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .case-before,
        .case-after {
          padding: 24px;
          border-radius: 16px;
        }
        .case-before {
          background: #f6efe4;
          border: 1px solid #dccbb7;
        }
        .case-after {
          background: #2d241d;
          color: #f0e8d8;
          border: 1px solid #2d241d;
        }
        .case-after h4 {
          color: #c4b49e;
        }
        .case-text-block {
          font-size: 0.92rem;
          line-height: 1.8;
        }
        .case-text-after {
          color: #d4c8b4;
        }
        .case-text-after strong {
          color: #f0e8d8;
        }
        .case-analysis {
          margin-top: 20px;
        }
        .case-analysis ul {
          padding-left: 18px;
          margin: 0;
        }
        .case-analysis li {
          font-size: 0.85rem;
          color: #6b5744;
          margin-bottom: 6px;
          line-height: 1.6;
        }

        /* ABOUT */
        .about-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .about-card {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 16px;
          padding: 24px;
        }
        .about-card p {
          font-size: 0.88rem;
          color: #6b5744;
        }

        /* FAQ */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-item {
          background: #fffaf2;
          border: 1px solid #dccbb7;
          border-radius: 16px;
          overflow: hidden;
        }
        .faq-item summary {
          padding: 20px 24px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-item summary::after {
          content: "+";
          font-size: 1.3rem;
          color: #a06d2c;
          font-weight: 300;
          font-
