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

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Atelier Provenance</p>
              <h1>Vos pièces ont une valeur.<br /><em>Il reste à la rendre lisible.</em></h1>
              <p className="intro">
                Rédaction de notices pour le mobilier de collection et les objets d&apos;art.
                Chaque texte est construit pour soutenir le prix, clarifier l&apos;objet et le
                rendre véritablement désirable — pas seulement visible.
              </p>
              <div className="actions">
                <a href="#contact" className="button button-primary">Envoyer un objet à analyser</a>
                <a href="#offres" className="button button-secondary">Voir les prestations</a>
              </div>
              <p className="hero-free">Première notice offerte, sans engagement.</p>
            </div>
            <div className="hero-panel">
              <div className="hero-card">
                <p className="hero-label">En bref</p>
                <ul className="hero-list">
                  <li>Analyse du marché et du positionnement prix</li>
                  <li>Vocabulaire juste, ton adapté à votre clientèle</li>
                  <li>Formats prêts à publier sur tous vos canaux</li>
                  <li>Livraison sous 5 jours ouvrés</li>
                  <li>Première notice offerte</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
                  <p className="stat-label">durée moyenne de vente sans rédaction soignée</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="approche">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Approche</p>
              <h2>Ce que fait réellement une notice bien écrite.</h2>
              <p className="section-intro">
                Une bonne description ne se contente pas de lister des caractéristiques.
                Elle construit un argumentaire silencieux qui travaille pour vous,
                24 heures sur 24.
              </p>
            </div>
            <div className="grid-4">
              <div className="pillar">
                <h3>Identifier</h3>
                <p>Époque, style, matériaux, techniques — chaque élément est nommé avec précision pour asseoir la crédibilité.</p>
              </div>
              <div className="pillar">
                <h3>Contextualiser</h3>
                <p>L&apos;objet est replacé dans son courant, son époque, sa filiation. L&apos;acheteur comprend ce qu&apos;il regarde.</p>
              </div>
              <div className="pillar">
                <h3>Justifier</h3>
                <p>Le prix devient lisible parce que chaque ligne apporte un argument concret : rareté, état, provenance.</p>
              </div>
              <div className="pillar">
                <h3>Séduire</h3>
                <p>Le ton juste, sans excès. Une écriture qui donne envie de posséder l&apos;objet, pas seulement de le regarder.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top" id="methode">
          <div className="container split">
            <div>
              <p className="eyebrow">Méthode</p>
              <h2>Un processus simple, un résultat précis.</h2>
              <p>
                Chaque notice suit le même processus rigoureux. Vous envoyez les informations
                dont vous disposez, je fais le reste.
              </p>
            </div>
            <div>
              <div className="process-steps">
                <div className="process-step">
                  <span className="step-num">01</span>
                  <div><h4>Réception</h4><p>Photos, dimensions, prix souhaité, informations connues.</p></div>
                </div>
                <div className="process-step">
                  <span className="step-num">02</span>
                  <div><h4>Recherche</h4><p>Vérification stylistique, provenance.</p></div>
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
        </section>PARTIE 2 / 3 — Collez directement à la suite de la partie 1 :
        <section className="section" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Trois formules, un même niveau d&apos;exigence.</h2>
              <p className="section-intro">
                Chaque formule est pensée pour un usage précis. Vous choisissez le format,
                je m&apos;occupe du reste.
              </p>
            </div>
            <div className="cards-three">
              <div className="card">
                <span className="card-badge">Essentiel</span>
                <div className="offer-head">
                  <h3>Notice individuelle</h3>
                  <p className="price">À partir de 45 €</p>
                </div>
                <p className="offer-desc">Pour une pièce isolée à mettre en valeur rapidement.</p>
                <ul>
                  <li>Recherche stylistique et contextuelle</li>
                  <li>Texte long format (200–400 mots)</li>
                  <li>Version courte pour annonce en ligne</li>
                  <li>1 révision incluse</li>
                  <li>Livraison sous 5 jours ouvrés</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">Commencer</a>
              </div>
              <div className="card card-featured">
                <span className="card-badge badge-light">Recommandé</span>
                <div className="offer-head">
                  <h3>Pack 5 notices</h3>
                  <p className="price">200 € — soit 40 € / notice</p>
                </div>
                <p className="offer-desc">Pour un stock à valoriser ou une vitrine en ligne à refondre.</p>
                <ul>
                  <li>Tout le contenu de la formule Essentiel</li>
                  <li>Cohérence de ton sur l&apos;ensemble du lot</li>
                  <li>Déclinaison réseaux sociaux incluse</li>
                  <li>2 révisions par notice</li>
                  <li>Livraison sous 7 jours ouvrés</li>
                </ul>
                <a href="#contact" className="button button-light offer-cta">Choisir ce pack</a>
              </div>
              <div className="card">
                <span className="card-badge">Sur mesure</span>
                <div className="offer-head">
                  <h3>Catalogue / partenariat</h3>
                  <p className="price">Sur devis</p>
                </div>
                <p className="offer-desc">Pour les volumes importants ou les collaborations régulières.</p>
                <ul>
                  <li>Volume à partir de 10 notices</li>
                  <li>Tarif dégressif selon volume</li>
                  <li>Charte éditoriale dédiée</li>
                  <li>Révisions illimitées</li>
                  <li>Interlocuteur unique et réactif</li>
                </ul>
                <a href="#contact" className="button button-secondary offer-cta">Discuter du projet</a>
              </div>
            </div>
            <div className="offer-guarantee">
              <p><strong>Première notice offerte</strong> — Envoyez une pièce, recevez la notice rédigée. Vous décidez ensuite.</p>
            </div>
          </div>
        </section>

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

            <div className="cases">
              <article className={`case-study ${openExample === 0 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 0 ? null : 0)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 1 · Commode Louis XVI, époque XVIIIe</p>
                    <h3>Passer d&apos;une description plate à un argumentaire de vente.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 2 400 €</span>
                      <span>Noyer · dessus marbre</span>
                      <span>Plateforme : Proantic</span>
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
                          Commode Louis XVI en noyer, dessus marbre gris. Trois tiroirs,
                          poignées en bronze. Bon état, traces d&apos;usage normales.
                          H 85 × L 120 × P 55 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après — notice complète</p>
                        <p className="panel-sublabel">Format long, optimisé pour fiche produit</p>
                        <h4>Commode Louis XVI en noyer massif, époque XVIIIe — dessus marbre gris veiné</h4>
                        <p>
                          Cette commode d&apos;époque Louis XVI témoigne d&apos;un savoir-faire provincial
                          maîtrisé, dans la lignée des ateliers du Sud-Ouest de la France.
                          Le noyer massif, choisi pour la finesse de son grain, présente une
                          patine dorée acquise au fil de deux siècles d&apos;usage — signe
                          d&apos;authenticité autant que de noblesse du matériau.
                        </p>
                        <p>
                          La façade s&apos;organise en trois tiroirs à traverses, équipés de leurs
                          entrées de serrure et poignées en bronze d&apos;origine. Le dessus en
                          marbre gris veiné repose librement sur le bâti, selon l&apos;usage de
                          l&apos;époque. L&apos;ensemble conserve une belle cohérence structurelle.
                        </p>
                        <p>H 85 × L 120 × P 55 cm · France, dernier quart du XVIIIe siècle.</p>
                      </div>
                    </div>
                    <div className="case-analysis">
                      <p className="panel-label">Ce qui change</p>
                      <ul>
                        <li>L&apos;objet est situé géographiquement et stylistiquement — il n&apos;est plus générique.</li>
                        <li>Le vocabulaire (« patine dorée », « traverses », « bronze d&apos;origine ») installe la crédibilité.</li>
                        <li>Le prix de 2 400 € devient lisible : l&apos;acheteur comprend ce qu&apos;il paie.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </article>

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
                        <p className="panel-label">Après — format court</p>
                        <p className="panel-sublabel">Adapté à Selency ou Instagram</p>
                        <h4>Suite de trois chaises modernistes, circa 1950 — métal laqué noir et velours vert amande</h4>
                        <p>
                          Un ensemble rare dans cette configuration. Le piétement en métal laqué
                          noir dessine une ligne nette, presque graphique, caractéristique du
                          mobilier fonctionnaliste des années 50. L&apos;assise en velours vert amande
                          — regarni avec soin — apporte la juste dose de confort et de couleur.
                        </p>
                        <p>
                          Les traces d&apos;usage sur le métal participent de l&apos;authenticité de
                          l&apos;ensemble. C&apos;est un lot cohérent, prêt à meubler une salle à manger,
                          un bureau ou un espace d&apos;accueil avec caractère.
                        </p>
                        <p>H 83 × L 60 × P 53 cm · France, circa 1950.</p>
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

              <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 3 · Bureau Art déco, années 1930</p>
                    <h3>Donner à un meuble restauré l&apos;assise narrative qu&apos;il mérite.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 1 800 €</span>
                      <span>Palissandre · laiton</span>
                      <span>Plateforme : Leboncoin</span>
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
                          Bureau Art déco palissandre, 4 tiroirs, poignées laiton, restauré.
                          Très bon état. H 78 × L 140 × P 72 cm. Prix : 1 800 €.
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
                        <li>« Restauré » devient un argument positif (« menée avec discernement »).</li>
                        <li>Le mot « ministre » ajoute une typologie — l&apos;acheteur sait ce qu&apos;il cherche.</li>
                        <li>La dernière phrase crée une image mentale qui dépasse la fiche technique.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="parcours">
          <div className="container split">
            <div>
              <p className="eyebrow">À propos</p>
              <h2>Qui rédige vos notices.</h2>
              <p>
                Formé en histoire de l&apos;art et en rédaction, je travaille depuis plusieurs
                années à l&apos;intersection du marché de l&apos;art et de l&apos;écriture. Chaque texte
                que je produis s&apos;appuie sur une recherche rigoureuse et une connaissance
                concrète du marché.
              </p>
              <p>
                Mon objectif est simple : que vos pièces soient présentées à la hauteur
                de ce qu&apos;elles sont — et que vos prix n&apos;aient plus besoin d&apos;être justifiés
                à l&apos;oral.
              </p>
            </div>
            <div>
              <div className="about-cards">
                <div className="about-card">
                  <h4>Formation</h4>
                  <p>Histoire de l&apos;art, arts décoratifs, rédaction éditoriale</p>
                </div>
                <div className="about-card">
                  <h4>Spécialité</h4>
                  <p>Mobilier XVIIIe–XXe, objets d&apos;art, design vintage</p>
                </div>
                <div className="about-card">
                  <h4>Clients</h4>
                  <p>Antiquaires, galeristes, marchands en ligne, maisons de vente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Ce que vous voulez savoir avant de commencer.</h2>
            </div>
            <div className="faq-list">
              {[
                { q: "Que contient exactement une notice ?", a: "Une notice comprend un texte long (200 à 400 mots) structuré pour une fiche produit, une version courte pour les plateformes de vente en ligne, et si besoin une déclinaison pour les réseaux sociaux. Chaque texte est accompagné d'un titre optimisé." },
                { q: "Quelles informations devez-vous fournir ?", a: "L'idéal : des photos sous plusieurs angles, les dimensions, le prix envisagé, et toute information dont vous disposez (époque, provenance, restaurations). Si vous avez peu d'éléments, je complète par mes propres recherches." },
                { q: "Quel est le délai de livraison ?", a: "5 jours ouvrés pour une notice individuelle, 7 jours pour un pack de 5. Les volumes plus importants font l'objet d'un calendrier sur mesure." },
                { q: "La première notice est vraiment offerte ?", a: "Oui. Vous envoyez une pièce, je rédige la notice complète. Si le résultat vous convient, on continue. Sinon, vous gardez le texte, sans aucun engagement." },
                { q: "Travaillez-vous avec des particuliers ?", a: "Principalement avec des professionnels — marchands, galeristes, antiquaires, maisons de vente. Mais un particulier qui vend une pièce de qualité est le bienvenu." },
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

        <section className="section section-dark" id="contact">
          <div className="container split">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Envoyez une pièce, recevez votre première notice.</h2>
              <p>
                Décrivez brièvement votre besoin. Je reviens vers vous sous 24 heures
                avec une proposition claire.
              </p>
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
            <div>
              {formStatus === "sent" ? (
                <div className="form-success">
                  <h3>Message préparé.</h3>
                  <p>Votre client mail va s&apos;ouvrir avec les informations pré-remplies. Il vous suffit d&apos;envoyer.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Nom</label>
                      <input id="name" type="text" required placeholder="Votre nom" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" required placeholder="votre@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="phone">Téléphone</label>
                      <input id="phone" type="tel" placeholder="06 00 00 00 00" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="form-field">
                      <label htmlFor="platform">Plateforme de vente</label>
                      <input id="platform" type="text" placeholder="Proantic, Selency, autre…" value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="pieces">Nombre de pièces à rédiger</label>
                    <input id="pieces" type="text" placeholder="3, 10, catalogue complet…" value={formData.pieces} onChange={(e) => setFormData({ ...formData, pieces: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Décrivez brièvement vos pièces</label>
                    <textarea id="message" rows={5} required placeholder="Période, matière, état, prix envisagé…" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" className="button button-primary">Envoyer</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

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
      </footer>PARTIE 3 / 3 — Collez directement à la suite de la partie 2 :
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: Georgia, "Times New Roman", Times, serif; color: #1a1613; background: #f6efe4; line-height: 1.7; font-size: 16px; }
        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }
        em { font-style: italic; }

        /* NAV */
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: #f6efe4ee; backdrop-filter: blur(12px); border-bottom: 1px solid #dccbb7; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .nav-logo { font-size: 1.1rem; font-weight: 700; letter-spacing: 0.04em; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem; letter-spacing: 0.06em; text-transform: uppercase; color: #5c4f3a; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1613; }
        .mobile-toggle { display: none; background: none; border: none; font-size: 1.4rem; cursor: pointer; color: #1a1613; }

        /* HERO */
        .hero { padding: 140px 0 80px; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 64px; align-items: center; }
        .eyebrow { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: #8a7a62; margin-bottom: 16px; }
        .hero h1 { font-size: 2.8rem; font-weight: 400; line-height: 1.2; margin-bottom: 24px; color: #1a1613; }
        .intro { font-size: 1.08rem; color: #5c4f3a; margin-bottom: 32px; max-width: 540px; }
        .actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }
        .hero-free { font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem; color: #8a7a62; letter-spacing: 0.04em; }
        .hero-panel { display: flex; align-items: center; }
        .hero-card { background: #2c261e; color: #c4b49a; padding: 36px 32px; width: 100%; }
        .hero-card h4 { color: #f6efe4; }
        .hero-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: #8a7a62; margin-bottom: 16px; }
        .hero-list li { padding: 8px 0; font-size: 0.92rem; color: #c4b49a; border-bottom: 1px solid #3a322a; }
        .hero-list li:last-child { border-bottom: none; }

        /* BUTTONS */
        .button { display: inline-flex; align-items: center; gap: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 28px; border: none; cursor: pointer; transition: all 0.25s ease; }
        .button-primary { background: #1a1613; color: #f6efe4; }
        .button-primary:hover { background: #2c261e; }
        .button-secondary { border: 1px solid #1a1613; color: #1a1613; background: transparent; }
        .button-secondary:hover { background: #1a1613; color: #f6efe4; }
        .button-light { background: #f6efe4; color: #1a1613; }
        .button-light:hover { background: #ede4d4; }
        .button-sm { padding: 10px 20px; font-size: 0.75rem; }
        .button-arrow::after { content: "→"; }

        /* SECTIONS */
        .section { padding: 80px 0; }
        .section-alt { background: #ede4d4; }
        .section-dark { background: #2c261e; color: #c4b49a; }
        .section-dark h2, .section-dark h3, .section-dark h4 { color: #f6efe4; }
        .section-dark p { color: #c4b49a; }
        .section-dark .eyebrow { color: #a89274; }
        .border-top { border-top: 1px solid #dccbb7; }
        .section-head { text-align: center; max-width: 640px; margin: 0 auto 56px; }
        .section-head h2 { font-size: 2rem; font-weight: 400; line-height: 1.3; margin-bottom: 16px; }
        .section-intro { color: #5c4f3a; font-size: 1.02rem; }
        .section-dark .section-intro { color: #c4b49a; }

        /* SPLIT */
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .text-block h2 { font-size: 2rem; font-weight: 400; line-height: 1.3; margin-bottom: 20px; }
        .text-block p { color: #5c4f3a; margin-bottom: 16px; }

        /* STAT GRID */
        .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .stat-card { background: #f6efe4; border: 1px solid #dccbb7; padding: 28px 24px; }
        .stat-number { font-size: 2rem; font-weight: 700; color: #1a1613; display: block; margin-bottom: 4px; }
        .stat-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem; color: #8a7a62; letter-spacing: 0.04em; }

        /* PILLARS */
        .pillars { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
        .pillar { padding: 28px 24px; border: 1px solid #dccbb7; }
        .pillar h3 { font-size: 1.1rem; margin-bottom: 8px; }
        .pillar p { font-size: 0.92rem; color: #5c4f3a; }

        /* PROCESS */
        .process-steps { display: flex; flex-direction: column; gap: 20px; }
        .process-step { display: flex; gap: 20px; align-items: flex-start; padding: 20px; border: 1px solid #dccbb7; }
        .step-num { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; font-weight: 700; color: #8a7a62; min-width: 28px; }
        .process-step h4 { font-size: 1rem; margin-bottom: 4px; }
        .process-step p { font-size: 0.88rem; color: #5c4f3a; }

        /* CARDS */
        .cards-three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .card { background: #f6efe4; border: 1px solid #dccbb7; padding: 36px 28px; position: relative; display: flex; flex-direction: column; }
        .card-featured { background: #2c261e; color: #f6efe4; border-color: #2c261e; }
        .card-featured .offer-desc, .card-featured .price { color: #c4b49a; }
        .card-featured li { color: #c4b49a; border-bottom-color: #3a322a; }
        .card-featured li::before { color: #a89274; }
        .card-badge { display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border: 1px solid #dccbb7; margin-bottom: 20px; align-self: flex-start; color: #8a7a62; }
        .badge-light { border-color: #5c4f3a; color: #c4b49a; }
        .offer-head { margin-bottom: 12px; }
        .offer-head h3 { font-size: 1.3rem; font-weight: 400; }
        .price { font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #5c4f3a; }
        .offer-desc { color: #5c4f3a; font-size: 0.95rem; margin-bottom: 20px; }
        .card ul { margin-bottom: 28px; }
        .card li { padding: 6px 0; font-size: 0.9rem; color: #5c4f3a; border-bottom: 1px solid #ede4d4; }
        .card li::before { content: "— "; color: #8a7a62; }
        .offer-cta { margin-top: auto; text-align: center; justify-content: center; width: 100%; }
        .offer-guarantee { text-align: center; margin-top: 40px; padding: 28px; border: 1px dashed #dccbb7; font-size: 0.95rem; color: #5c4f3a; }

        /* CASES */
        .cases { display: flex; flex-direction: column; gap: 16px; }
        .case-study { border: 1px solid #dccbb7; background: #f6efe4; }
        .case-toggle { width: 100%; display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; padding: 28px; background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; }
        .case-toggle-left { flex: 1; }
        .case-meta { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #8a7a62; margin-bottom: 8px; }
        .case-toggle h3 { font-size: 1.15rem; font-weight: 400; color: #1a1613; line-height: 1.4; }
        .case-specs { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 12px; }
        .case-specs span { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; padding: 4px 12px; border: 1px solid #dccbb7; }
        .case-toggle-icon { font-size: 1.5rem; color: #8a7a62; line-height: 1; min-width: 28px; text-align: center; }
        .case-body { padding: 0 28px 28px; }
        .case-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .text-panel { padding: 24px; font-size: 0.92rem; line-height: 1.7; }
        .text-panel h4 { font-size: 1rem; font-weight: 700; margin-bottom: 12px; }
        .text-panel p { margin-bottom: 10px; }
        .panel-sublabel { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; color: #8a7a62; margin-bottom: 12px; }
        .before-panel { background: #ede4d4; border: 1px solid #dccbb7; }
        .after-panel { background: #2c261e; color: #c4b49a; border: 1px solid #3a322a; }
        .after-panel h4 { color: #f6efe4; }
        .after-panel p { color: #c4b49a; }
        .after-panel .panel-sublabel { color: #8a7a62; }
        .panel-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: #8a7a62; margin-bottom: 12px; }
        .case-analysis { padding: 24px; background: #ede4d4; border: 1px solid #dccbb7; }
        .case-analysis ul { margin-top: 12px; }
        .case-analysis li { padding: 6px 0; font-size: 0.9rem; color: #5c4f3a; }
        .case-analysis li::before { content: "→ "; color: #8a7a62; }

        /* ABOUT */
        .about-cards { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .about-card { padding: 24px; border: 1px solid #3a322a; }
        .about-card h4 { font-size: 0.95rem; margin-bottom: 6px; color: #f6efe4; }
        .about-card p { font-size: 0.88rem; color: #c4b49a; }

        /* FAQ */
        .faq-list { max-width: 720px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid #dccbb7; }
        .faq-toggle { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 0; background: none; border: none; cursor: pointer; font-family: inherit; font-size: 1rem; color: #1a1613; text-align: left; }
        .faq-icon { font-size: 1.3rem; color: #8a7a62; min-width: 24px; text-align: center; }
        .faq-answer { padding: 0 0 20px; }
        .faq-answer p { color: #5c4f3a; font-size: 0.92rem; }

        /* CONTACT */
        .section-dark .contact-methods { display: flex; gap: 24px; margin-top: 24px; flex-wrap: wrap; }
        .section-dark .contact-method { display: flex; align-items: center; gap: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #c4b49a; padding: 12px 20px; border: 1px solid #3a322a; transition: all 0.2s; }
        .section-dark .contact-method:hover { border-color: #f6efe4; color: #f6efe4; }
        .contact-methods { display: flex; gap: 24px; margin-top: 24px; flex-wrap: wrap; }
        .contact-method { display: flex; align-items: center; gap: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #5c4f3a; padding: 12px 20px; border: 1px solid #dccbb7; transition: all 0.2s; }
        .contact-method:hover { border-color: #1a1613; color: #1a1613; }
        .contact-icon { font-size: 1.1rem; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-field label { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase; color: #8a7a62; }
        .form-field input, .form-field textarea { padding: 12px 16px; border: 1px solid #dccbb7; background: #ede4d4; font-family: inherit; font-size: 0.92rem; color: #1a1613; outline: none; transition: border-color 0.2s; }
        .form-field input:focus, .form-field textarea:focus { border-color: #1a1613; }
        .section-dark .form-field input, .section-dark .form-field textarea { background: #3a322a; color: #f6efe4; border-color: #4a4238; }
        .section-dark .form-field input:focus, .section-dark .form-field textarea:focus { border-color: #c4b49a; }
        .section-dark .form-field label { color: #c4b49a; }
        .section-dark .form-field input::placeholder, .section-dark .form-field textarea::placeholder { color: #8a7a62; }
        .form-success { padding: 40px; background: #3a322a; border: 1px solid #4a4238; text-align: center; }
        .form-success h3 { margin-bottom: 12px; color: #f6efe4; }
        .form-success p { color: #c4b49a; font-size: 0.92rem; }

        /* FOOTER */
        .footer { padding: 40px 0; border-top: 1px solid #dccbb7; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-logo { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
        .footer-copy { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; }
        .footer-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
        .footer-email, .footer-phone { font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem; color: #5c4f3a; }
        .footer-email:hover, .footer-phone:hover { color: #1a1613; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-grid, .split, .cards-three, .case-columns { grid-template-columns: 1fr; }
          .pillars { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; position: fixed; top: 64px; left: 0; right: 0; background: #f6efe4; flex-direction: column; padding: 24px; gap: 16px; border-bottom: 1px solid #dccbb7; }
          .nav-open { display: flex; }
          .mobile-toggle { display: block; }
          .hero h1 { font-size: 2.2rem; }
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
          .pillars { grid-template-columns: 1fr; }
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
