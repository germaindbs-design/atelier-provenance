"use client";

import { useState } from "react";

export default function Page() {
  const [openExample, setOpenExample] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    pieces: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">Atelier Provenance</a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${mobileMenu ? "nav-open" : ""}`}>
            <a href="#approche" onClick={() => setMobileMenu(false)}>Approche</a>
            <a href="#offres" onClick={() => setMobileMenu(false)}>Prestations</a>
            <a href="#exemples" onClick={() => setMobileMenu(false)}>Exemples</a>
            <a href="#parcours" onClick={() => setMobileMenu(false)}>À propos</a>
            <a href="#contact" className="button button-primary button-sm" onClick={() => setMobileMenu(false)}>
              Prendre contact
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
                Vos pièces ont une valeur.<br />
                <em>Il reste à la rendre lisible.</em>
              </h1>
              <p className="intro">
                Rédaction de notices pour le mobilier de collection et les objets
                d&apos;art. Chaque texte est construit pour soutenir le prix, clarifier
                l&apos;objet et le rendre véritablement désirable — pas seulement visible.
              </p>
              <div className="actions">
                <a href="#contact" className="button button-primary">Envoyer un objet à analyser</a>
                <a href="#offres" className="button button-secondary">Voir les prestations</a>
              </div>
              <p className="hero-free">↳ Première notice offerte, sans engagement.</p>
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

        <section className="section border-top" id="probleme">
          <div className="container split">
            <div className="text-block">
              <p className="eyebrow">Le constat</p>
              <h2>
                La plupart des annonces ne sont pas à la hauteur des pièces
                qu&apos;elles présentent.
              </h2>
              <p>
                Sur Selency, Proantic, Leboncoin ou Catawiki, des milliers d&apos;objets
                de qualité restent en ligne pendant des semaines — parfois des mois.
                Pas parce qu&apos;ils manquent de valeur, mais parce que rien dans leur
                présentation ne permet à l&apos;acheteur de comprendre cette valeur.
              </p>
              <p>
                Descriptions en deux lignes. Vocabulaire approximatif. Aucun
                contexte historique. Pas de référence au marché. Le prix semble
                arbitraire. L&apos;acheteur hésite, puis passe à autre chose.
              </p>
              <p>
                Le problème n&apos;est jamais l&apos;objet. C&apos;est toujours la manière dont
                il est présenté.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <p className="stat-number">70 %</p>
                  <p className="stat-label">
                    des annonces haut de gamme n&apos;ont aucun contexte historique ou stylistique
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">3×</p>
                  <p className="stat-label">
                    plus de vues en moyenne sur une annonce avec une description structurée
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">45 j.</p>
                  <p className="stat-label">
                    durée moyenne d&apos;une annonce sans description soignée avant retrait
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">–30 %</p>
                  <p className="stat-label">
                    de décote fréquente sur des pièces dont le prix n&apos;est pas justifié par le texte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt border-top" id="approche">
          <div className="container split">
            <div className="text-block">
              <p className="eyebrow">Notre approche</p>
              <h2>
                Une notice n&apos;est pas une description.<br />
                C&apos;est un argumentaire.
              </h2>
              <p>
                Avant d&apos;écrire un mot, nous analysons le marché. Quels sont les
                prix pratiqués pour des pièces comparables ? Quel est le
                positionnement réel de l&apos;objet ? Qu&apos;est-ce qui, dans son histoire,
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

        <section className="section border-top" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Trois formules claires. Un même niveau d&apos;exigence.</h2>
              <p className="section-intro">
                Chaque formule inclut l&apos;analyse marché, la rédaction complète et
                les déclinaisons multi-formats. La première notice est offerte
                pour vous permettre de juger du résultat.
              </p>
            </div>

            <div className="cards cards-three">
              <div className="card">
                <div className="card-badge">Pour commencer</div>
                <div className="offer-head">
                  <h3>Première lecture</h3>
                  <span className="price">3 notices · 450 €</span>
                </div>
                <p className="offer-desc">
                  Pour tester la méthode sur trois pièces et mesurer la différence.
                </p>
                <ul>
                  <li>3 notices complètes</li>
                  <li>150 € / notice</li>
                  <li>Analyse marché incluse</li>
                  <li>Déclinaison formats courts</li>
                  <li>Livraison sous 5 jours</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">Choisir cette formule</a>
              </div>

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
                <a href="#contact" className="button button-light offer-cta">Choisir cette formule</a>
              </div>

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
                  <li>Rédaction de l&apos;ensemble du catalogue</li>
                  <li>Harmonisation du ton et du style</li>
                  <li>Direction éditoriale globale</li>
                  <li>Positionnement prix argumenté</li>
                  <li>Formats adaptés à chaque canal</li>
                  <li>Calendrier de livraison sur mesure</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">Demander un devis</a>
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

        <section className="section section-alt border-top" id="exemples">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Exemples</p>
              <h2>Trois cas concrets, avant et après.</h2>
              <p className="section-intro">
                Chaque exemple part d&apos;une annonce type et montre ce que la
                rédaction change — sur la lisibilité, la désirabilité et la
                cohérence avec le prix affiché.
              </p>
            </div>

            <div className="examples-stack">
              <article className={`case-study ${openExample === 1 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 1 ? null : 1)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 1 · Commode Louis XV en noyer</p>
                    <h3>Transformer une fiche technique en argumentaire de vente.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 2 800 €</span>
                      <span>Noyer · marqueterie</span>
                      <span>Proantic</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">{openExample === 1 ? "−" : "+"}</div>
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
                            <li>Le mot « restaurations » sans précision crée du doute</li>
                            <li>Rien ne justifie le prix de 2 800 € par rapport à des commodes similaires à 1 500 €</li>
                            <li>Pas de mention de la provenance, de l&apos;atelier ou de la rareté</li>
                          </ul>
                        </div>
                      </div>
                      <div className="case-after">
                        <h4>Après — Notice complète</h4>
                        <div className="case-text-block case-text-after">
                          <p>
                            <strong>Commode Louis XV en noyer et marqueterie de bois de rose — Travail provincial, milieu du XVIIIe siècle</strong>
                          </p>
                          <p>
                            Cette commode à façade galbée illustre le savoir-faire
                            des ateliers provinciaux du milieu du XVIIIe siècle,
                            dans la tradition des grands ébénistes parisiens. Le
                            bâti en noyer massif — essence noble et recherchée —
                            accueille un décor de marqueterie en bois de rose
                            disposé en feuilles, dont le veinage dessine des motifs
                            d&apos;une remarquable régularité.
                          </p>
                          <p>
                            Les trois tiroirs, sans traverse apparente, ouvrent sur
                            des entrées de serrure en bronze doré à décor rocaille,
                            d&apos;origine. Le dessus en marbre gris de Sainte-Anne,
                            d&apos;un seul tenant, présente un profil mouluré
                            caractéristique de la période.
                          </p>
                          <p>
                            Des restaurations d&apos;usage ont été effectuées sur le
                            placage du plateau et le fond d&apos;un tiroir — elles
                            n&apos;altèrent ni la lecture esthétique ni la solidité de
                            l&apos;ensemble. Sur le marché actuel, les commodes Louis XV
                            en marqueterie de cette qualité se négocient entre 2 500
                            et 4 200 €. Le prix de 2 800 € situe cette pièce dans
                            le bas de la fourchette.
                          </p>
                          <p>H 85 × L 120 × P 55 cm. Livraison possible en France métropolitaine.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 2 · Paire de fauteuils bridge, années 1950</p>
                    <h3>Faire d&apos;un lot banal un ensemble cohérent et désirable.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 680 €</span>
                      <span>Hêtre · velours</span>
                      <span>Selency</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">{openExample === 2 ? "−" : "+"}</div>
                </button>
                {openExample === 2 && (
                  <div className="case-body">
                    <div className="case-columns">
                      <div className="case-before">
                        <h4>Avant</h4>
                        <div className="case-text-block">
                          <p>
                            « 2 fauteuils bridge années 50. Velours vert. Bois
                            clair. Bon état. 680 € les deux. »
                          </p>
                        </div>
                        <div className="case-analysis">
                          <h4>Diagnostic</h4>
                          <ul>
                            <li>Description en une ligne — aucun effort de contextualisation</li>
                            <li>« Bois clair » ne dit rien sur l&apos;essence ni la qualité</li>
                            <li>Aucune mention du confort, de la patine ou du style</li>
                            <li>Le prix semble posé au hasard</li>
                          </ul>
                        </div>
                      </div>
                      <div className="case-after">
                        <h4>Après — Notice courte (Selency)</h4>
                        <div className="case-text-block case-text-after">
                          <p>
                            <strong>Paire de fauteuils bridge en hêtre blond et velours vert amande — France, années 1950</strong>
                          </p>
                          <p>
                            Deux fauteuils bridge à dossier incurvé, typiques de la
                            production française des années 1950. Structure en hêtre
                            massif, blond et veiné, aux lignes sobres qui annoncent
                            déjà le modernisme scandinave sans renoncer au confort
                            bourgeois.
                          </p>
                          <p>
                            L&apos;assise et le dossier ont été retapissés dans un velours
                            vert amande — choix qui respecte l&apos;esprit d&apos;époque tout
                            en apportant une fraîcheur contemporaine. Hauteur
                            d&apos;assise idéale pour une table de salle à manger ou un
                            bureau.
                          </p>
                          <p>
                            Les fauteuils bridge de cette période, en paire et en
                            bon état, se raréfient sur le marché. Prix constaté
                            pour des modèles comparables : 600 à 900 € la paire.
                            680 € — un prix cohérent pour un ensemble prêt à vivre.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              <article className={`case-study ${openExample === 3 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 3 ? null : 3)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 3 · Lampe Jieldé, modèle Signal</p>
                    <h3>Justifier un prix élevé sur un objet industriel devenu iconique.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 520 €</span>
                      <span>Acier · articulée</span>
                      <span>Leboncoin</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">{openExample === 3 ? "−" : "+"}</div>
                </button>
                {openExample === 3 && (
                  <div className="case-body">
                    <div className="case-columns">
                      <div className="case-before">
                        <h4>Avant</h4>
                        <div className="case-text-block">
                          <p>
                            « Lampe Jieldé 2 bras, couleur graphite. Fonctionne.
                            Quelques traces. 520 €. »
                          </p>
                        </div>
                        <div className="case-analysis">
                          <h4>Diagnostic</h4>
                          <ul>
                            <li>Aucune mention du modèle exact ni de l&apos;année de fabrication</li>
                            <li>« Quelques traces » sans contexte = défaut perçu</li>
                            <li>520 € pour une lampe sans histoire = prix difficile à défendre</li>
                            <li>Pas de référence au statut d&apos;icône du design industriel français</li>
                          </ul>
                        </div>
                      </div>
                      <div className="case-after">
                        <h4>Après — Notice complète</h4>
                        <div className="case-text-block case-text-after">
                          <p>
                            <strong>Lampe Jieldé Signal SI333 à deux bras articulés — Finition graphite d&apos;origine, fabrication française</strong>
                          </p>
                          <p>
                            Conçue en 1950 par Jean-Louis Domecq pour équiper les
                            ateliers industriels lyonnais, la Jieldé Signal est
                            devenue l&apos;une des lampes les plus emblématiques du
                            design français. Son système d&apos;articulation sans fil
                            apparent — breveté — reste inégalé en termes
                            d&apos;ingéniosité mécanique.
                          </p>
                          <p>
                            Ce modèle SI333 à deux bras conserve sa finition graphite
                            d&apos;origine. Les marques d&apos;usage visibles sur le fût et
                            les rotules témoignent d&apos;une vie en atelier — elles
                            constituent précisément ce que les collectionneurs et
                            les décorateurs recherchent : une patine authentique,
                            impossible à reproduire.
                          </p>
                          <p>
                            Sur le marché actuel, les Jieldé Signal vintage en état
                            de fonctionnement se négocient entre 450 et 750 € selon
                            le nombre de bras et l&apos;état de la finition. 520 € pour
                            un modèle deux bras avec patine d&apos;origine : prix
                            parfaitement situé.
                          </p>
                          <p>Électrification vérifiée. Livraison soignée possible.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

        <section className="section border-top" id="parcours">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">À propos</p>
              <h2>Qui rédige vos notices.</h2>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Atelier Provenance est né d&apos;un constat simple : le marché du
                  mobilier de collection regorge de pièces remarquables présentées
                  de manière médiocre. Des objets qui méritent mieux que deux lignes
                  et un prix sans justification.
                </p>
                <p>
                  Derrière ce projet, un parcours qui croise plusieurs mondes :
                  l&apos;enseignement des lettres et de la philosophie — où l&apos;on apprend
                  à structurer un argument et à choisir chaque mot ; le marché de
                  l&apos;art — où l&apos;on comprend ce qui fait la valeur d&apos;un objet au-delà
                  de sa matière ; la rédaction professionnelle — où l&apos;on écrit pour
                  convaincre, pas pour décorer ; et l&apos;observation des mouvements
                  culturels — où l&apos;on saisit pourquoi certains objets résonnent
                  avec leur époque.
                </p>
                <p>
                  Cette combinaison est exactement ce qui manque à la plupart des
                  annonces : un regard qui comprend l&apos;objet, un vocabulaire qui le
                  situe, et une écriture qui donne envie de l&apos;acquérir.
                </p>
              </div>
              <div className="about-cards">
                <div className="about-card">
                  <h4>Lettres et philosophie</h4>
                  <p>Formation à l&apos;argumentation, à la précision du langage et à la pensée structurée.</p>
                </div>
                <div className="about-card">
                  <h4>Marché de l&apos;art</h4>
                  <p>Expérience directe de la vente, de l&apos;estimation et du positionnement des objets.</p>
                </div>
                <div className="about-card">
                  <h4>Rédaction</h4>
                  <p>Écriture professionnelle orientée conversion : chaque phrase a une fonction.</p>
                </div>
                <div className="about-card">
                  <h4>Veille culturelle</h4>
                  <p>Lecture des tendances esthétiques, des mouvements de goût et de leur impact sur le marché.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt border-top" id="faq">
          <div className="container container-narrow">
            <div className="section-head">
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Ce que vous voulez probablement savoir.</h2>
            </div>
            <div className="faq-list">
              {[
                {
                  q: "La première notice est vraiment gratuite ?",
                  a: "Oui. Vous nous envoyez un objet, nous rédigeons la notice complète. Pas de carte bancaire, pas d'engagement. Vous jugez du résultat et décidez ensuite si vous souhaitez poursuivre.",
                },
                {
                  q: "Quels types d'objets traitez-vous ?",
                  a: "Mobilier de collection (XVIIe au XXe siècle), design vintage, luminaires, objets d'art, arts décoratifs. Si votre objet a une histoire et un prix à défendre, nous pouvons en écrire la notice.",
                },
                {
                  q: "Comment se passe la commande ?",
                  a: "Vous nous envoyez des photos de l'objet, les informations dont vous disposez (époque, provenance, état) et le prix envisagé. Nous analysons, rédigeons et livrons la notice sous 5 jours ouvrés, prête à publier.",
                },
                {
                  q: "Sur quelles plateformes publiez-vous ?",
                  a: "Nous ne publions pas directement — nous rédigeons les textes et vous les livrons dans les formats adaptés à vos canaux : Selency, Proantic, Leboncoin, Catawiki, Drouot Digital, votre propre site, Instagram.",
                },
                {
                  q: "Qu'est-ce qui justifie le prix d'une notice ?",
                  a: "Chaque notice inclut une analyse du marché (prix pratiqués pour des pièces comparables), une recherche historique et stylistique, et une rédaction professionnelle en plusieurs formats. Ce n'est pas une description — c'est un outil de vente.",
                },
                {
                  q: "Proposez-vous des tarifs pour les gros volumes ?",
                  a: "Oui. Le pack de 10 notices est à 120 €/notice au lieu de 150 €. Pour les catalogues de 20 pièces ou plus, nous proposons un accompagnement sur devis avec un tarif dégressif et un calendrier de livraison adapté.",
                },
              ].map((item, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-toggle"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-top" id="contact">
          <div className="container container-narrow">
            <div className="section-head">
              <p className="eyebrow">Contact</p>
              <h2>Envoyez-nous un objet à analyser.</h2>
              <p className="section-intro">
                Première notice offerte, sans engagement. Décrivez votre besoin
                ou envoyez-nous directement un lien vers l&apos;annonce existante.
              </p>
            </div>

            {formStatus === "sent" ? (
              <div className="form-success">
                <h3>Message préparé.</h3>
                <p>
                  Votre client email va s&apos;ouvrir avec les informations pré-remplies.
                  Si ce n&apos;est pas le cas, écrivez-nous directement à{" "}
                  <a href="mailto:contact.atelierprovenance@gmail.com">
                    contact.atelierprovenance@gmail.com
                  </a>
                </p>
                <button
                  className="button button-secondary"
                  onClick={() => setFormStatus(null)}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Votre nom ou celui de votre galerie"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="platform">Plateforme de vente</label>
                    <select
                      id="platform"
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
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
                  <label htmlFor="pieces">Nombre de pièces à traiter</label>
                  <select
                    id="pieces"
                    value={formData.pieces}
                    onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
                  >
                    <option value="">— Sélectionner —</option>
                    <option value="1">1 (notice offerte)</option>
                    <option value="3">3 (Première lecture — 450 €)</option>
                    <option value="10">10 (Ensemble — 1 200 €)</option>
                    <option value="20+">20+ (Catalogue — sur devis)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Décrivez votre besoin ou l&apos;objet à traiter</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Type d'objet, époque, prix envisagé, lien vers l'annonce existante…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="button button-primary">
                  Envoyer la demande
                </button>
              </form>
            )}

            <div className="contact-alt">
              <p>Vous pouvez aussi nous écrire directement :</p>
              <div className="contact-methods">
                <a href="mailto:contact.atelierprovenance@gmail.com" className="contact-method">
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

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <p className="footer-logo">Atelier Provenance</p>
            <p className="footer-copy">
              © {new Date().getFullYear()} — Rédaction pour le mobilier de collection et les objets d&apos;art
            </p>
          </div>
          <div className="footer-right">
            <a href="mailto:contact.atelierprovenance@gmail.com" className="footer-email">
              contact.atelierprovenance@gmail.com
            </a>
            <a href="tel:+33751420733" className="footer-phone">
              07 51 42 07 33
            </a>
          </div>
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

        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .container-narrow { max-width: 720px; }
        .section { padding: 80px 0; }
        .section-alt { background: #f0e8d8; }
        .border-top { border-top: 1px solid #dccbb7; }
        .section-head { text-align: center; margin-bottom: 48px; }
        .section-intro { max-width: 600px; margin: 0 auto; color: #6b5744; font-size: 1.05rem; }
        .eyebrow {
          font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em;
          color: #a06d2c; margin-bottom: 12px;
          font-family: Arial, Helvetica, sans-serif; font-weight: 600;
        }

        .nav {
          position: sticky; top: 0; z-index: 100;
          background: #f6efe4ee; backdrop-filter: blur(12px);
          border-bottom: 1px solid #dccbb7; padding: 14px 0;
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-size: 1.1rem; font-weight: 700; letter-spacing: 0.02em; }
        .nav-links {
          display: flex; align-items: center; gap: 28px;
          font-size: 0.88rem; font-family: Arial, Helvetica, sans-serif;
        }
        .nav-links a:not(.button):hover { color: #a06d2c; }
        .mobile-toggle {
          display: none; background: none; border: none;
          font-size: 1.4rem; cursor: pointer; color: #2d241d; padding: 4px 8px;
        }

        .button {
          display: inline-flex; align-items: center; justify-content: center;
          font-family: Arial, Helvetica, sans-serif; font-size: 0.88rem;
          font-weight: 600; border-radius: 999px; padding: 12px 28px;
          cursor: pointer; transition: all 0.2s ease; border: none; text-decoration: none;
        }
        .button-primary { background: #2d241d; color: #f0e8d8; }
        .button-primary:hover { background: #463a2e; }
        .button-secondary { background: transparent; color: #2d241d; border: 1px solid #2d241d; }
        .button-secondary:hover { background: #2d241d; color: #f0e8d8; }
        .button-light { background: #f0e8d8; color: #2d241d; }
        .button-light:hover { background: #fff; }
        .button-sm { padding: 8px 20px; font-size: 0.82rem; }

        .hero { padding: 100px 0 80px; }
        .hero-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; align-items: start; }
        .intro { font-size: 1.1rem; color: #5a4330; max-width: 540px; line-height: 1.85; margin-bottom: 32px; }
        .actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-free { margin-top: 16px; font-size: 0.9rem; color: #a06d2c; font-style: italic; }
        .hero-panel { padding-top: 8px; }
        .hero-card {
          background: #fffaf2; border: 1px solid #dccbb7;
          border-radius: 20px; padding: 28px 28px 24px;
        }
        .hero-label {
          font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em;
          color: #a06d2c; margin-bottom: 16px;
          font-family: Arial, Helvetica, sans-serif; font-weight: 600;
        }
        .hero-list { list-style: none; padding: 0; margin: 0; }
        .hero-list li {
          padding: 10px 0; border-top: 1px solid #ebe0d0;
          font-size: 0.92rem; color: #5a4330; line-height: 1.6;
        }

        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .text-block p { color: #4a3728; }
        .pull-quote {
          margin-top: 36px; padding: 22px 28px;
          border-left: 2px solid #a06d2c; font-style: italic;
          font-size: 1.05rem; color: #5a4330; line-height: 1.65;
          background: #fff7ec; border-radius: 0 12px 12px 0;
        }

        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .stat-card {
          background: #fffaf2; border: 1px solid #dccbb7;
          border-radius: 16px; padding: 24px; text-align: center;
        }
        .stat-number { font-size: 2rem; font-weight: 700; color: #a06d2c; margin-bottom: 8px; line-height: 1; }
        .stat-label { font-size: 0.82rem; color: #6b5744; line-height: 1.5; font-family: Arial, Helvetica, sans-serif; }

        .process-steps { display: flex; flex-direction: column; gap: 24px; }
        .process-step {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 20px 24px; background: #fffaf2;
          border: 1px solid #dccbb7; border-radius: 16px;
        }
        .step-num {
          font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem;
          font-weight: 700; color: #a06d2c; background: #f6efe4;
          border: 1px solid #dccbb7; border-radius: 999px;
          width: 36px; height: 36px; display: flex;
          align-items: center; justify-content: center; flex-shrink: 0;
        }
        .process-step p { font-size: 0.92rem; color: #6b5744; }

        .cards { display: grid; gap: 20px; align-items: stretch; }
        .cards-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .card {
          background: #fffaf2; border: 1px solid #dccbb7;
          border-radius: 20px; padding: 32px;
          display: flex; flex-direction: column; position: relative;
        }
        .card-badge {
          display: inline-block; font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.08em; padding: 4px 12px; border-radius: 999px;
          background: #f0e8d8; color: #a06d2c; border: 1px solid #dccbb7;
          margin-bottom: 16px; width: fit-content;
        }
        .badge-light { background: #a06d2c; color: #fff; border-color: #a06d2c; }
        .card-featured { background: #2d241d; border-color: #2d241d; color: #f0e8d8; }
        .card-featured ul { color: #c4b49e; }
        .card-featured .offer-desc { color: #c4b49e; }
        .card-featured .price { color: #c4b49e; }
        .offer-head { margin-bottom: 12px; }
        .offer-head h3 { font-size: 1.4rem; }
        .price { font-family: Arial, Helvetica, sans-serif; font-size: 0.88rem; color: #8a7560; }
        .offer-desc { color: #6b5744; font-size: 0.95rem; margin-bottom: 20px; }
        .card ul { list-style: none; padding: 0; margin: 0 0 28px; flex: 1; }
        .card ul li {
          padding: 7px 0; font-size: 0.88rem; border-top: 1px solid #ebe0d020;
          font-family: Arial, Helvetica, sans-serif;
        }
        .card ul li:first-child { border-top: 1px solid #dccbb740; }
        .offer-cta { margin-top: auto; text-align: center; }
        .offer-guarantee {
          margin-top: 36px; text-align: center; padding: 24px 32px;
          background: #fff7ec; border: 1px solid #dccbb7; border-radius: 16px;
        }
        .offer-guarantee p { font-size: 0.95rem; color: #5a4330; }

        .examples-stack { display: flex; flex-direction: column; gap: 12px; }
        .case-study {
          border: 1px solid #dccbb7; border-radius: 20px;
          background: #fffaf2; overflow: hidden; transition: box-shadow 0.2s ease;
        }
        .case-study.is-open { box-shadow: 0 8px 40px rgba(88, 62, 40, 0.1); }
        .case-toggle {
          width: 100%; background: none; border: none; padding: 28px 32px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; cursor: pointer; text-align: left; color: inherit; font-family: inherit;
        }
        .case-toggle:hover { background: #fff7ec; }
        .case-toggle-left { flex: 1; }
        .case-toggle-icon {
          font-size: 1.5rem; color: #a06d2c; font-weight: 300; flex-shrink: 0;
          width: 32px; height: 32px; display: flex; align-items: center;
          justify-content: center; border: 1px solid #dccbb7; border-radius: 999px;
          font-family: Arial, Helvetica, sans-serif;
        }
        .case-meta {
          font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: #a06d2c; margin-bottom: 8px; font-weight: 600;
        }
        .case-specs { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 8px; }
        .case-specs span {
          font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem;
          color: #8a7560; background: #f0e8d8; padding: 4px 12px;
          border-radius: 999px; border: 1px solid #dccbb7;
        }
        .case-body { padding: 0 32px 32px; }
        .case-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .case-before, .case-after { padding: 24px; border-radius: 16px; }
        .case-before { background: #f6efe4; border: 1px solid #dccbb7; }
        .case-after { background: #2d241d; color: #f0e8d8; border: 1px solid #2d241d; }
        .case-after h4 { color: #c4b49e; }
        .case-text-block { font-size: 0.92rem; line-height: 1.8; }
        .case-text-after { color: #d4c8b4; }
        .case-text-after strong { color: #f0e8d8; }
        .case-analysis { margin-top: 20px; }
        .case-analysis ul { padding-left: 18px; margin: 0; }
        .case-analysis li { font-size: 0.85rem; color: #6b5744; margin-bottom: 6px; line-height: 1.6; }

        .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .about-text p { color: #4a3728; }
        .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .about-card {
          background: #fffaf2; border: 1px solid #dccbb7;
          border-radius: 16px; padding: 24px;
        }
        .about-card h4 { font-size: 0.95rem; color: #a06d2c; }
        .about-card p { font-size: 0.88rem; color: #6b5744; }

        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item {
          background: #fffaf2; border: 1px solid #dccbb7;
          border-radius: 16px; overflow: hidden;
        }
        .faq-toggle {
          width: 100%; background: none; border: none; padding: 20px 24px;
          cursor: pointer; font-weight: 600; font-size: 1rem;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; text-align: left; color: inherit; font-family: inherit;
        }
        .faq-toggle:hover { background: #fff7ec; }
        .faq-icon {
          font-size: 1.3rem; color: #a06d2c; font-weight: 300;
          flex-shrink: 0; font-family: Arial, Helvetica, sans-serif;
        }
        .faq-answer { padding: 0 24px 20px; }
        .faq-answer p { font-size: 0.92rem; color: #6b5744; }

        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label {
          font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem;
          font-weight: 600; color: #5a4330; letter-spacing: 0.02em;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          font-family: Georgia, serif; font-size: 0.95rem;
          padding: 12px 16px; border: 1px solid #dccbb7;
          border-radius: 12px; background: #fffaf2; color: #2d241d;
          transition: border-color 0.2s ease; outline: none;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #a06d2c;
        }
        .form-group textarea { resize: vertical; min-height: 120px; }
        .form-group select { cursor: pointer; }

        .form-success {
          text-align: center; padding: 48px 32px;
          background: #fffaf2; border: 1px solid #dccbb7; border-radius: 20px;
        }
        .form-success h3 { color: #a06d2c; }
        .form-success a { color: #a06d2c; text-decoration: underline; }

        .contact-alt {
          margin-top: 40px; text-align: center;
          padding-top: 32px; border-top: 1px solid #dccbb7;
        }
        .contact-alt p { font-size: 0.92rem; color: #6b5744; margin-bottom: 16px; }
        .contact-methods { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
        .contact-method {
          display: flex; align-items: center; gap: 8px;
          font-family: Arial, Helvetica, sans-serif; font-size: 0.88rem;
          color: #5a4330; padding: 10px 20px; background: #fffaf2;
          border: 1px solid #dccbb7; border-radius: 999px;
          transition: all 0.2s ease;
        }
        .contact-method:hover { background: #fff7ec; border-color: #a06d2c; }
        .contact-icon { font-size: 1.1rem; }

        .footer {
          background: #2d241d; color: #c4b49e; padding: 32px 0;
          border-top: 1px solid #4a3728;
        }
        .footer-inner {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .footer-logo { font-size: 1rem; font-weight: 700; color: #f0e8d8; margin-bottom: 4px; }
        .footer-copy { font-size: 0.82rem; color: #8a7560; font-family: Arial, Helvetica, sans-serif; }
        .footer-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
        .footer-email, .footer-phone {
          font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem;
          color: #c4b49e; transition: color 0.2s ease;
        }
        .footer-email:hover, .footer-phone:hover { color: #f0e8d8; }

        @media (max-width: 960px) {
          .hero-grid, .split, .cards-three, .case-columns, .about-content, .form-row {
            grid-template-columns: 1fr;
          }
          .hero { padding: 72px 0 56px; }
          .section { padding: 72px 0; }
          .split { gap: 40px; }
          .mobile-toggle { display: block; }
          .nav-links {
            display: none; position: absolute; top: 100%; left: 0; right: 0;
            background: #f6efe4; border-bottom: 1px solid #dccbb7;
            flex-direction: column; padding: 24px; gap: 16px;
          }
          .nav-links.nav-open { display: flex; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .footer-right { align-items: flex-start; }
          .about-cards { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .about-cards { grid-template-columns: 1fr; }
          .contact-methods { flex-direction: column; align-items: center; }
          .case-toggle { padding: 20px; }
          .case-body { padding: 0 20px 20px; }
        }

        @media (max-width: 480px) {
          .hero { padding: 56px 0 48px; }
          .section { padding: 56px 0; }
          .button { width: 100%; justify-content: center; }
          .actions { flex-direction: column; }
