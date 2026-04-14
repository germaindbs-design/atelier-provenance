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
      {/* ── NAVIGATION ── */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">Atelier Provenance</a>
          <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            {mobileMenu ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${mobileMenu ? "nav-open" : ""}`}>
            <a href="#approche" onClick={() => setMobileMenu(false)}>Approche</a>
            <a href="#offres" onClick={() => setMobileMenu(false)}>Prestations</a>
            <a href="#exemples" onClick={() => setMobileMenu(false)}>Exemples</a>
            <a href="#parcours" onClick={() => setMobileMenu(false)}>À propos</a>
            <a href="#contact" className="button button-primary button-sm" onClick={() => setMobileMenu(false)}>Prendre contact</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Rédaction spécialisée — mobilier de collection</p>
            <h1>Vos pièces méritent<br /><em>les mots justes.</em></h1>
            <p className="lead">
              Atelier Provenance rédige des notices expertes pour le mobilier ancien
              et vintage. Des textes qui justifient le prix, créent le désir
              et accélèrent la vente — sur toutes les plateformes.
            </p>
            <div className="actions">
              <a href="#contact" className="button button-primary">Première notice offerte</a>
              <a href="#exemples" className="button button-outline">Voir des exemples</a>
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-visual-text">Photo à venir</span>
          </div>
        </div>
      </section>

      {/* ── PROBLÈME ── */}
      <section className="section border-top" id="probleme">
        <div className="container split">
          <div>
            <p className="eyebrow">Le constat</p>
            <h2>La plupart des annonces ne sont pas à la hauteur des pièces qu&apos;elles présentent.</h2>
            <p>
              Sur Selency, Proantic, Leboncoin ou Catawiki, des milliers d&apos;objets de qualité
              restent en ligne pendant des semaines. Pas parce qu&apos;ils manquent de valeur,
              mais parce que rien dans leur présentation ne permet à l&apos;acheteur de comprendre
              cette valeur.
            </p>
            <p>
              Descriptions en deux lignes. Vocabulaire approximatif. Aucun contexte historique.
              Le prix semble arbitraire. L&apos;acheteur hésite, puis passe à autre chose.
            </p>
          </div>
          <div>
            <div className="stat-grid">
              <div className="stat-card">
                <p className="stat-number">70 %</p>
                <p className="stat-label">des annonces haut de gamme sans contexte historique</p>
              </div>
              <div className="stat-card">
                <p className="stat-number">3×</p>
                <p className="stat-label">plus de vues avec une description structurée</p>
              </div>
              <div className="stat-card">
                <p className="stat-number">45 j.</p>
                <p className="stat-label">délai moyen de vente d&apos;une pièce mal décrite</p>
              </div>
              <div className="stat-card">
                <p className="stat-number">−30 %</p>
                <p className="stat-label">de négociation quand le prix est argumenté</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROCHE ── */}
      <section className="section section-alt border-top" id="approche">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Approche</p>
            <h2>Ce que nous faisons — et comment.</h2>
            <p className="section-intro">
              Chaque notice est le résultat d&apos;un travail de recherche, d&apos;analyse
              et de rédaction. Pas de modèle générique : chaque pièce est traitée
              comme un cas singulier.
            </p>
          </div>
          <div className="text-block">
            <div className="split">
              <div>
                <h3>Une notice, trois fonctions.</h3>
                <p>
                  <strong>Informer.</strong> Identifier l&apos;époque, le style, les matériaux,
                  la provenance quand elle est traçable. Donner à l&apos;acheteur les repères
                  qui transforment un objet flou en pièce identifiable.
                </p>
                <p>
                  <strong>Justifier.</strong> Contextualiser le prix par des éléments vérifiables —
                  cote, rareté, état du marché, comparables récents. L&apos;acheteur doit
                  comprendre pourquoi ce prix est cohérent.
                </p>
                <p>
                  <strong>Donner envie.</strong> Trouver l&apos;angle, le détail, la phrase qui fait
                  passer de la curiosité au désir. Sans surenchère — avec précision.
                </p>
              </div>
              <div>
                <h3>Le processus, étape par étape.</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <span className="step-num">01</span>
                    <div><h4>Réception</h4><p>Photos, dimensions, informations connues.</p></div>
                  </div>
                  <div className="process-step">
                    <span className="step-num">02</span>
                    <div><h4>Recherche</h4><p>Identification, comparables, historique, provenance.</p></div>
                  </div>
                  <div className="process-step">
                    <span className="step-num">03</span>
                    <div><h4>Rédaction</h4><p>Texte structuré, vocabulaire précis, ton adapté.</p></div>
                  </div>
                  <div className="process-step">
                    <span className="step-num">04</span>
                    <div><h4>Déclinaison</h4><p>Notice longue, version courte, version réseaux.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFRES ── */}
      <section className="section border-top" id="offres">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Prestations</p>
            <h2>Trois formules, un même niveau d&apos;exigence.</h2>
            <p className="section-intro">
              Chaque formule inclut la recherche, la rédaction et les déclinaisons
              nécessaires. Pas de supplément caché. La première notice est offerte.
            </p>
          </div>
          <div className="offers-grid">
            <div className="card">
              <div className="card-badge">Vendeurs</div>
              <div className="offer-head"><h3>Notice</h3><span className="price">150 €</span></div>
              <p className="offer-desc">Une pièce, une notice complète, prête à publier.</p>
              <ul>
                <li>1 notice complète</li>
                <li>Recherche &amp; identification</li>
                <li>Analyse marché / comparables</li>
                <li>3 déclinaisons (longue, courte, réseaux)</li>
                <li>Livraison sous 5 jours</li>
              </ul>
              <a href="#contact" className="button button-outline offer-cta">Choisir</a>
            </div>
            <div className="card card-featured">
              <div className="card-badge">Marchands</div>
              <div className="offer-head"><h3>Lot 10</h3><span className="price">1 200 €</span></div>
              <p className="offer-desc">Dix pièces avec cohérence éditoriale et tarif préférentiel.</p>
              <ul>
                <li>10 notices complètes</li>
                <li>120 € / notice</li>
                <li>Analyse marché incluse</li>
                <li>Toutes déclinaisons</li>
                <li>Alignement éditorial</li>
                <li>Livraison sous 10 jours</li>
              </ul>
              <a href="#contact" className="button button-light offer-cta">Choisir</a>
            </div>
            <div className="card">
              <div className="card-badge">Galeries</div>
              <div className="offer-head"><h3>Catalogue</h3><span className="price">Sur devis</span></div>
              <p className="offer-desc">Accompagnement complet pour 20 pièces ou plus.</p>
              <ul>
                <li>Catalogue complet</li>
                <li>Harmonisation du ton</li>
                <li>Direction éditoriale</li>
                <li>Positionnement prix argumenté</li>
                <li>Calendrier sur mesure</li>
              </ul>
              <a href="#contact" className="button button-primary offer-cta">Demander un devis</a>
            </div>
          </div>
          <div className="offer-guarantee">
            <p><strong>Première notice offerte.</strong> Envoyez-nous un objet, nous rédigeons la notice sans engagement. Vous jugez du résultat.</p>
          </div>
        </div>
      </section>

      {/* ── EXEMPLES ── */}
      <section className="section section-alt border-top" id="exemples">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Exemples</p>
            <h2>Trois cas, avant et après.</h2>
            <p className="section-intro">
              Chaque exemple part d&apos;une annonce réelle trouvée en ligne et montre
              ce que la rédaction change — sur la lisibilité, la désirabilité,
              la cohérence avec le prix affiché.
            </p>
          </div>

          {/* Exemple 1 */}
          <article className={`case-study ${openExample === 0 ? "is-open" : ""}`}>
            <button className="case-toggle" onClick={() => setOpenExample(openExample === 0 ? null : 0)}>
              <div className="case-toggle-left">
                <p className="case-meta">Exemple 1 · Fauteuil club, circa 1935</p>
                <h3>De « fauteuil cuir ancien » à une pièce identifiée et désirable.</h3>
                <div className="case-specs">
                  <span>Prix affiché : 1 800 €</span>
                  <span>Cuir havane · structure hêtre</span>
                  <span>Plateforme : Leboncoin</span>
                </div>
              </div>
              <div className="case-toggle-icon">{openExample === 0 ? "−" : "+"}</div>
            </button>
            {openExample === 0 && (
              <div className="case-body">
                <div className="case-columns">
                  <div className="text-panel before-panel">
                    <p className="panel-label">Avant</p>
                    <p>
                      Fauteuil club en cuir ancien, bon état général, cuir
                      patiné avec quelques marques d&apos;usage, très confortable.
                      Dimensions : H 85 × L 82 × P 90 cm. À venir chercher
                      sur place.
                    </p>
                  </div>
                  <div className="text-panel after-panel">
                    <p className="panel-label">Après — notice complète</p>
                    <h4>Fauteuil club moustache, circa 1935 — cuir havane patiné, structure hêtre massif</h4>
                    <p>
                      Ce fauteuil club moustache des années 1930 porte la patine
                      lente et régulière d&apos;un cuir qui a vécu sans souffrir.
                      Le modèle — reconnaissable à ses accoudoirs arrondis en
                      « moustache » — est l&apos;un des archétypes du club français,
                      produit en série limitée par les ateliers parisiens de
                      l&apos;entre-deux-guerres.
                    </p>
                    <p>
                      La structure en hêtre massif est saine, les ressorts
                      d&apos;origine en bon état, le cuir havane présente une
                      patine uniforme avec de légères variations de teinte qui
                      confirment son authenticité. Aucune déchirure, aucune
                      restauration visible.
                    </p>
                    <p>
                      Sur le marché actuel, les clubs moustache en cuir
                      d&apos;origine se négocient entre 1 500 et 2 500 € selon
                      l&apos;état. Cette pièce, dans sa condition actuelle, se
                      situe dans la fourchette haute par la qualité de sa
                      patine et l&apos;intégrité de sa structure.
                    </p>
                    <p>H 85 × L 82 × P 90 cm · France, circa 1935.</p>
                  </div>
                </div>
                <div className="case-analysis">
                  <p className="panel-label">Ce qui change</p>
                  <ul>
                    <li>Le modèle est identifié (« moustache ») — l&apos;acheteur sait ce qu&apos;il regarde.</li>
                    <li>Le prix est contextualisé par une fourchette marché vérifiable.</li>
                    <li>Les défauts (« marques d&apos;usage ») deviennent des qualités (« patine d&apos;origine »).</li>
                  </ul>
                </div>
              </div>
            )}
          </article>

          {/* Exemple 2 */}
          <article className={`case-study ${openExample === 1 ? "is-open" : ""}`}>
            <button className="case-toggle" onClick={() => setOpenExample(openExample === 1 ? null : 1)}>
              <div className="case-toggle-left">
                <p className="case-meta">Exemple 2 · Suite de 3 chaises, années 1950</p>
                <h3>Transformer un lot banal en ensemble cohérent et désirable.</h3>
                <div className="case-specs">
                  <span>Prix affiché : 480 €</span>
                  <span>Métal laqué · velours vert</span>
                  <span>Plateforme : Selency</span>
                </div>
              </div>
              <div className="case-toggle-icon">{openExample === 1 ? "−" : "+"}</div>
            </button>
            {openExample === 1 && (
              <div className="case-body">
                <div className="case-columns">
                  <div className="text-panel before-panel">
                    <p className="panel-label">Avant</p>
                    <p>
                      3 chaises années 50 métal et velours vert, idéales
                      pour bureau ou table, bon état, velours nettoyé,
                      traces d&apos;usage sur le métal. H 83 × L 60 × P 53 cm.
                    </p>
                  </div>
                  <div className="text-panel after-panel">
                    <p className="panel-label">Après — notice complète</p>
                    <h4>Suite de trois chaises modernistes, circa 1955 — métal laqué noir, velours vert amande</h4>
                    <p>
                      Un ensemble de trois chaises qui résume l&apos;esthétique
                      des années 1950 : lignes nettes, piétement en métal
                      laqué noir, assise généreuse recouverte d&apos;un velours
                      vert amande. Le modèle, probablement issu d&apos;un
                      atelier français, reprend les codes du mobilier
                      moderniste — fonctionnel, sobre, élégant sans
                      ostentation.
                    </p>
                    <p>
                      L&apos;ensemble est cohérent : les trois pièces présentent
                      la même patine, le même tissu, le même degré d&apos;usure
                      — ce qui confirme une provenance commune. Le velours a
                      été nettoyé, le métal présente de légères traces
                      d&apos;usage qui participent à l&apos;authenticité de
                      l&apos;ensemble.
                    </p>
                    <p>
                      Les suites de chaises vintage en bon état sont
                      aujourd&apos;hui très recherchées pour composer des
                      intérieurs mixtes (table contemporaine + assises
                      vintage). Ce type de lot se vend habituellement entre
                      400 et 650 € sur Selency.
                    </p>
                    <p>H 83 × L 60 × P 53 cm · France, circa 1955.</p>
                  </div>
                </div>
                <div className="case-analysis">
                  <p className="panel-label">Ce qui change</p>
                  <ul>
                    <li>Le lot devient un « ensemble rare » — la rareté justifie le prix unitaire.</li>
                    <li>Le vocabulaire positionne l&apos;objet (moderniste, esthétique années 50).</li>
                    <li>Les traces d&apos;usage sont neutralisées par le mot « authenticité ».</li>
                  </ul>
                </div>
              </div>
            )}
          </article>

          {/* Exemple 3 */}
          <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
            <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
              <div className="case-toggle-left">
                <p className="case-meta">Exemple 3 · Bureau ministre Art déco</p>
                <h3>Donner à un meuble imposant la présentation qu&apos;il mérite.</h3>
                <div className="case-specs">
                  <span>Prix affiché : 2 200 €</span>
                  <span>Palissandre · laiton</span>
                  <span>Plateforme : Proantic</span>
                </div>
              </div>
              <div className="case-toggle-icon">{openExample === 2 ? "−" : "+"}</div>
            </button>
            {openExample === 2 && (
              <div className="case-body">
                <div className="case-columns">
                  <div className="text-panel before-panel">
                    <p className="panel-label">Avant</p>
                    <p>
                      Bureau Art déco palissandre avec 4 tiroirs, poignées
                      laiton, bon état, quelques traces sur le plateau.
                      Dimensions : H 78 × L 140 × P 72 cm. Livraison possible.
                    </p>
                  </div>
                  <div className="text-panel after-panel">
                    <p className="panel-label">Après — format court</p>
                    <p className="panel-sublabel">Adapté à Proantic ou Drouot Digital</p>
                    <h4>Bureau ministre Art déco, circa 1935 — placage palissandre, poignées laiton d&apos;origine</h4>
                    <p>
                      Un bureau qui impose sa présence sans élever la voix. Le placage de
                      palissandre déploie ses veinures sur un plateau généreux, encadré par
                      des montants nets et une géométrie typiquement Art déco. Quatre tiroirs
                      en façade, poignées en laiton d&apos;origine — chaque détail confirme la
                      cohérence de la pièce.
                    </p>
                    <p>
                      La restauration a été menée avec discernement : stabilité structurelle
                      assurée, patine du bois préservée, quincaillerie intacte. C&apos;est un
                      meuble de travail autant qu&apos;un meuble de caractère — le genre de
                      pièce qui compose un intérieur comme on écrit une phrase.
                    </p>
                    <p>H 78 × L 140 × P 72 cm · France, circa 1935.</p>
                  </div>
                </div>
                <div className="case-analysis">
                  <p className="panel-label">Ce qui change</p>
                  <ul>
                    <li>Le bureau devient un personnage — « impose sa présence sans élever la voix ».</li>
                    <li>Le format court est adapté aux plateformes spécialisées.</li>
                    <li>Les « traces sur le plateau » disparaissent au profit d&apos;une restauration valorisée.</li>
                  </ul>
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section className="section border-top" id="parcours">
        <div className="container split">
          <div>
            <p className="eyebrow">À propos</p>
            <h2>Un regard formé aux textes,<br /><em>exercé sur les objets.</em></h2>
            <p>
              Atelier Provenance est né d&apos;un double parcours : l&apos;enseignement
              des lettres et de la philosophie d&apos;abord, puis le marché de l&apos;art
              — comme marchand, comme rédacteur, comme observateur des mouvements
              de goût et de valeur.
            </p>
            <p>
              Cette trajectoire n&apos;est pas un détour. C&apos;est elle qui permet de
              lire un objet comme on lit un texte : en cherchant ce qui fait sens,
              ce qui justifie l&apos;attention, ce qui mérite d&apos;être dit — et dans
              quel ordre.
            </p>
            <p>
              Chaque mission est traitée personnellement, sans délégation ni
              automatisation. Un interlocuteur, un regard, une exigence.
            </p>
          </div>
          <div>
            <div className="about-cards">
              <div className="about-card">
                <h4>Lettres &amp; philosophie</h4>
                <p>Ancien professeur. Le travail sur la langue et la précision du vocabulaire vient de là.</p>
              </div>
              <div className="about-card">
                <h4>Marché de l&apos;art</h4>
                <p>Marchand, acheteur, vendeur. La connaissance des prix et des attentes acheteurs vient de là.</p>
              </div>
              <div className="about-card">
                <h4>Rédaction spécialisée</h4>
                <p>Des centaines de notices rédigées pour des pièces de 200 à 15 000 €.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt border-top" id="faq">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Ce que vous voulez savoir.</h2>
          </div>
          <div className="faq-list">
            {[
              { q: "Que comprend exactement une notice ?", a: "Chaque notice inclut : une recherche d'identification (époque, style, matériaux), une analyse des comparables sur le marché, et la rédaction en trois formats — notice complète, version courte, version réseaux sociaux." },
              { q: "Combien de temps faut-il pour recevoir une notice ?", a: "Comptez 5 jours ouvrés pour une notice individuelle, 10 jours pour un lot de 10. Les catalogues complets font l'objet d'un calendrier sur mesure." },
              { q: "Que signifie « première notice offerte » ?", a: "Envoyez-nous les photos et informations sur une pièce. Nous rédigeons la notice complète gratuitement et sans engagement. C'est notre manière de démontrer la valeur du travail." },
              { q: "Travaillez-vous avec des particuliers ?", a: "Principalement avec des professionnels — marchands, galeristes, antiquaires, maisons de vente. Mais un particulier qui vend une pièce de qualité est le bienvenu." },
              { q: "Comment envoyez-vous les notices ?", a: "Par email, dans un document formaté prêt à copier-coller sur votre plateforme de vente. Nous pouvons aussi adapter le format à vos besoins spécifiques." },
              { q: "Proposez-vous un abonnement ou un suivi régulier ?", a: "Pas d'abonnement formel, mais nous travaillons en flux continu avec plusieurs marchands. Un tarif dégressif s'applique naturellement au-delà de 10 notices par mois." },
            ].map((item, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="faq-answer"><p>{item.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section border-top" id="contact">
        <div className="container split">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Un objet suffit<br /><em>pour commencer.</em></h2>
            <p>
              Envoyez-nous les photos et quelques informations sur votre pièce —
              période, matière, état, prix envisagé. Nous vous répondons sous
              48 heures avec la notice rédigée, gratuitement et sans engagement.
            </p>
            <div className="contact-methods">
              <a href="mailto:contact.atelierprovenance@gmail.com" className="contact-method">
                <span className="contact-icon">✉</span>
                <span>contact.atelierprovenance@gmail.com</span>
              </a>
              <a href="tel:+33751420733" className="contact-method">
                <span className="contact-icon">☏</span>
                <span>07 51 42 07 33</span>
              </a>
            </div>
          </div>
          <div>
            {formStatus === "sent" ? (
              <div className="form-success">
                <h3>Message préparé.</h3>
                <p>Votre client email s&apos;est ouvert avec les informations pré-remplies. Si ce n&apos;est pas le cas, écrivez-nous directement à contact.atelierprovenance@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Nom</label>
                    <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Téléphone</label>
                    <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="platform">Plateforme de vente</label>
                    <input id="platform" type="text" placeholder="Selency, Proantic, autre…" value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="pieces">Nombre de pièces à rédiger</label>
                  <input id="pieces" type="text" placeholder="1, 5, 20…" value={formData.pieces} onChange={(e) => setFormData({ ...formData, pieces: e.target.value })} />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="Décrivez brièvement vos pièces ou votre besoin…" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                </div>
                <button type="submit" className="button button-primary">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-logo">Atelier Provenance</p>
            <p className="footer-copy">© {new Date().getFullYear()} — Rédaction de mobilier de collection</p>
          </div>
          <div className="footer-right">
            <a href="mailto:contact.atelierprovenance@gmail.com" className="footer-email">contact.atelierprovenance@gmail.com</a>
            <a href="tel:+33751420733" className="footer-phone">07 51 42 07 33</a>
          </div>
        </div>
      </footer>

      {/* ── STYLES ── */}
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: Georgia, "Times New Roman", Times, serif; color: #1a1613; background: #f6efe4; line-height: 1.7; font-size: 16px; }
        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }
        em { font-style: italic; }

        /* BUTTONS */
        .button { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem; letter-spacing: 0.06em; border: 1px solid transparent; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
        .button-primary { background: #1a1613; color: #f6efe4; border-color: #1a1613; }
        .button-primary:hover { background: #2e2820; }
        .button-outline { background: transparent; color: #1a1613; border-color: #1a1613; }
        .button-outline:hover { background: #1a1613; color: #f6efe4; }
        .button-light { background: #f6efe4; color: #1a1613; border-color: #f6efe4; }
        .button-light:hover { background: #ede4d4; }
        .button-sm { padding: 8px 20px; font-size: 0.75rem; }

        /* NAV */
        .nav { position: sticky; top: 0; z-index: 100; background: #f6efe4; border-bottom: 1px solid #dccbb7; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .nav-logo { font-size: 1.1rem; font-weight: 400; letter-spacing: 0.02em; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase; color: #5c4f3a; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1613; }
        .mobile-toggle { display: none; background: none; border: none; font-size: 1.4rem; cursor: pointer; color: #1a1613; }

        /* HERO */
        .hero { padding: 100px 0 80px; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .hero h1 { font-size: 2.8rem; line-height: 1.2; margin-bottom: 24px; font-weight: 400; }
        .hero p.lead { font-size: 1.1rem; color: #5c4f3a; margin-bottom: 32px; max-width: 520px; }
        .eyebrow { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: #8a7a62; margin-bottom: 16px; }
        .actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .hero-visual { background: #ede4d4; border: 1px solid #dccbb7; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; }
        .hero-visual-text { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; letter-spacing: 0.08em; text-transform: uppercase; }

        /* SECTIONS */
        .section { padding: 96px 0; }
        .section-alt { background: #ede4d4; }
        .border-top { border-top: 1px solid #dccbb7; }
        .section-head { max-width: 640px; margin-bottom: 56px; }
        .section-head h2 { font-size: 2rem; font-weight: 400; line-height: 1.3; margin-bottom: 16px; }
        .section-intro { color: #5c4f3a; font-size: 1rem; }

        /* SPLIT LAYOUT */
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .split h2 { font-size: 2rem; font-weight: 400; line-height: 1.3; margin-bottom: 20px; }
        .split p { margin-bottom: 16px; color: #3a3228; }

        /* STAT GRID */
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .stat-card { background: #ede4d4; border: 1px solid #dccbb7; padding: 24px; }
        .stat-number { font-size: 2rem; font-weight: 400; color: #1a1613; margin-bottom: 4px; }
        .stat-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; letter-spacing: 0.04em; }

        /* TEXT BLOCK */
        .text-block { background: #f6efe4; border: 1px solid #dccbb7; padding: 48px; }
        .text-block h3 { font-size: 1.4rem; font-weight: 400; margin-bottom: 20px; }
        .text-block p { margin-bottom: 16px; color: #3a3228; font-size: 0.95rem; }

        /* PROCESS */
        .process-steps { margin-top: 24px; }
        .process-step { display: flex; gap: 20px; padding: 20px 0; border-bottom: 1px solid #dccbb7; }
        .process-step:last-child { border-bottom: none; }
        .step-num { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; letter-spacing: 0.08em; min-width: 32px; padding-top: 4px; }
        .process-step h4 { font-size: 1rem; font-weight: 400; margin-bottom: 4px; }
        .process-step p { font-size: 0.88rem; color: #5c4f3a; margin-bottom: 0; }

        /* CARDS / OFFERS */
        .offers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .card { background: #f6efe4; border: 1px solid #dccbb7; padding: 40px 32px; display: flex; flex-direction: column; }
        .card-featured { background: #1a1613; color: #f6efe4; border-color: #1a1613; }
        .card-featured .offer-desc { color: #a89880; }
        .card-featured .card-badge { background: #f6efe4; color: #1a1613; }
        .card-featured ul li { color: #d4c8b4; border-color: #2e2820; }
        .card-badge { font-family: Arial, Helvetica, sans-serif; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; background: #ede4d4; color: #5c4f3a; padding: 4px 12px; display: inline-block; margin-bottom: 24px; align-self: flex-start; }
        .offer-head { margin-bottom: 16px; }
        .offer-head h3 { font-size: 1.6rem; font-weight: 400; margin-bottom: 4px; }
        .price { font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #8a7a62; }
        .card-featured .price { color: #a89880; }
        .offer-desc { font-size: 0.9rem; color: #5c4f3a; margin-bottom: 24px; }
        .card ul { margin-bottom: 32px; flex-grow: 1; }
        .card ul li { padding: 8px 0; border-bottom: 1px solid #dccbb7; font-size: 0.88rem; color: #3a3228; }
        .offer-cta { margin-top: auto; text-align: center; justify-content: center; width: 100%; }
        .offer-guarantee { text-align: center; margin-top: 40px; padding: 28px; border: 1px dashed #dccbb7; font-size: 0.95rem; color: #5c4f3a; }

        /* CASE STUDIES */
        .case-study { border: 1px solid #dccbb7; margin-bottom: 16px; background: #f6efe4; }
        .section-alt .case-study { background: #f6efe4; }
        .case-toggle { width: 100%; display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; padding: 32px; background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; color: inherit; }
        .case-toggle:hover { background: rgba(0,0,0,0.02); }
        .case-toggle-left { flex: 1; }
        .case-meta { font-family: Arial, Helvetica, sans-serif; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: #8a7a62; margin-bottom: 8px; }
        .case-toggle h3 { font-size: 1.2rem; font-weight: 400; line-height: 1.4; margin-bottom: 12px; }
        .case-specs { display: flex; gap: 16px; flex-wrap: wrap; }
        .case-specs span { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; color: #8a7a62; letter-spacing: 0.04em; padding: 4px 10px; border: 1px solid #dccbb7; }
        .case-toggle-icon { font-size: 1.5rem; color: #8a7a62; min-width: 32px; text-align: center; padding-top: 4px; }
        .case-body { padding: 0 32px 32px; }
        .case-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .text-panel { padding: 28px; font-size: 0.9rem; line-height: 1.7; }
        .text-panel p { margin-bottom: 12px; }
        .text-panel h4 { font-size: 1rem; font-weight: 400; margin-bottom: 12px; font-style: italic; }
        .before-panel { background: #f6efe4; border: 1px solid #dccbb7; }
        .after-panel { background: #1a1613; color: #f6efe4; border: 1px solid #1a1613; }
        .after-panel .panel-sublabel { color: #8a7a62; }
        .panel-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: #8a7a62; margin-bottom: 12px; }
        .panel-sublabel { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; color: #5c4f3a; margin-bottom: 16px; }
        .case-analysis { padding: 24px; background: #ede4d4; border: 1px solid #dccbb7; }
        .case-analysis ul { margin-top: 12px; }
        .case-analysis li { padding: 6px 0; font-size: 0.9rem; color: #5c4f3a; }
        .case-analysis li::before { content: "→ "; color: #8a7a62; }

        /* ABOUT */
        .about-cards { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .about-card { background: #ede4d4; border: 1px solid #dccbb7; padding: 28px; }
        .about-card h4 { font-size: 1rem; font-weight: 400; margin-bottom: 8px; }
        .about-card p { font-size: 0.88rem; color: #5c4f3a; margin-bottom: 0; }

        /* FAQ */
        .faq-list { max-width: 720px; }
        .faq-item { border-bottom: 1px solid #dccbb7; }
        .faq-toggle { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 0; background: none; border: none; cursor: pointer; font-family: inherit; font-size: 1rem; color: #1a1613; text-align: left; gap: 16px; }
        .faq-toggle:hover { color: #5c4f3a; }
        .faq-icon { font-size: 1.2rem; color: #8a7a62; min-width: 24px; text-align: center; }
        .faq-answer { padding: 0 0 20px; }
        .faq-answer p { font-size: 0.92rem; color: #5c4f3a; line-height: 1.7; }

        /* CONTACT */
        .contact-methods { display: flex; gap: 24px; margin-top: 32px; flex-wrap: wrap; }
        .contact-method { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border: 1px solid #dccbb7; font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem; transition: all 0.2s; }
        .contact-method:hover { background: #ede4d4; }
        .contact-icon { font-size: 1.2rem; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-field label { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: #8a7a62; }
        .form-field input, .form-field textarea { padding: 12px 16px; border: 1px solid #dccbb7; background: #f6efe4; font-family: Georgia, "Times New Roman", Times, serif; font-size: 0.92rem; color: #1a1613; transition: border-color 0.2s; }
        .form-field input:focus, .form-field textarea:focus { outline: none; border-color: #1a1613; }
        .form-field textarea { resize: vertical; }
        .form-success { background: #ede4d4; border: 1px solid #dccbb7; padding: 32px; }
        .form-success h3 { font-size: 1.2rem; font-weight: 400; margin-bottom: 8px; }
        .form-success p { font-size: 0.9rem; color: #5c4f3a; }

        /* FOOTER */
        .footer { background: #1a1613; color: #f6efe4; padding: 40px 0; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-logo { font-size: 1rem; margin-bottom: 4px; }
        .footer-copy { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; color: #8a7a62; }
        .footer-right { display: flex; gap: 24px; }
        .footer-email, .footer-phone { font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem; color: #a89880; transition: color 0.2s; }
        .footer-email:hover, .footer-phone:hover { color: #f6efe4; }

        /* MOBILE */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { max-height: 300px; }
          .split { grid-template-columns: 1fr; gap: 48px; }
          .offers-grid { grid-template-columns: 1fr; }
          .case-columns { grid-template-columns: 1fr; }
          .nav-links { display: none; position: absolute; top: 64px; left: 0; right: 0; background: #f6efe4; flex-direction: column; padding: 24px; border-bottom: 1px solid #dccbb7; gap: 16px; }
          .nav-open { display: flex; }
          .mobile-toggle { display: block; }
          .form-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .about-cards { grid-template-columns: 1fr; }
          .contact-methods { flex-direction: column; }
          .case-toggle { padding: 20px; }
          .case-body { padding: 0 20px 20px; }
          .hero h1 { font-size: 2rem; }
          .section-head h2, .text-block h2 { font-size: 1.6rem; }
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
