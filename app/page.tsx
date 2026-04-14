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
                  <p className="stat-label">durée moyenne avant retrait sans description soignée</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">–30 %</p>
                  <p className="stat-label">de décote quand le prix n&apos;est pas justifié par le texte</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt border-top" id="approche">
          <div className="container split">
            <div>
              <p className="eyebrow">Notre approche</p>
              <h2>Une notice n&apos;est pas une description.<br />C&apos;est un argumentaire.</h2>
              <p>
                Avant d&apos;écrire un mot, nous analysons le marché. Quels prix pour des pièces
                comparables ? Qu&apos;est-ce qui justifie le prix affiché ?
              </p>
              <p>
                Ensuite, nous rédigeons. Le texte est construit pour un lecteur qui hésite.
                Chaque phrase a une fonction : contextualiser, rassurer, créer le désir.
              </p>
              <div className="pull-quote">
                Un objet bien décrit ne se vend pas seulement mieux. Il se vend au prix juste,
                plus vite, et sans négociation.
              </div>
            </div>
            <div>
              <div className="process-steps">
                <div className="process-step">
                  <span className="step-num">01</span>
                  <div><h4>Analyse</h4><p>Étude du marché et positionnement de la pièce.</p></div>
                </div>
                <div className="process-step">
                  <span className="step-num">02</span>
                  <div><h4>Recherche</h4><p>Contexte historique, stylistique, provenance.</p></div>
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
        </section>

        <section className="section border-top" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Trois formules. Un même niveau d&apos;exigence.</h2>
            </div>
            <div className="cards cards-three">
              <div className="card">
                <div className="card-badge">Pour commencer</div>
                <div className="offer-head"><h3>Première lecture</h3><span className="price">3 notices · 450 €</span></div>
                <p className="offer-desc">Pour tester la méthode sur trois pièces.</p>
                <ul>
                  <li>3 notices complètes</li>
                  <li>150 € / notice</li>
                  <li>Analyse marché incluse</li>
                  <li>Déclinaison formats courts</li>
                  <li>Livraison sous 5 jours</li>
                </ul>
                <a href="#contact" className="button button-primary offer-cta">Choisir</a>
              </div>
              <div className="card card-featured">
                <div className="card-badge badge-light">Recommandé</div>
                <div className="offer-head"><h3>Ensemble</h3><span className="price">10 notices · 1 200 €</span></div>
                <p className="offer-desc">Pour donner une vraie consistance à votre catalogue.</p>
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
        </section> <section className="section section-alt border-top" id="exemples">
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

            <div className="examples-stack">
              <article className={`case-study ${openExample === 1 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 1 ? null : 1)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 1 · Fauteuil club, vers 1930</p>
                    <h3>Rendre à un objet usé sa dignité de pièce de caractère.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 850 €</span>
                      <span>Cuir patiné · chêne</span>
                      <span>Plateforme : Leboncoin</span>
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
                          Fauteuil club ancien cuir marron. Bon état général,
                          cuir un peu usé sur les accoudoirs. Très confortable.
                          Dimensions : H 85 × L 80 × P 90 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après — format court</p>
                        <p className="panel-sublabel">Adapté à une publication Instagram ou Leboncoin premium</p>
                        <h4>Fauteuil club, circa 1930 — cuir havane patiné, structure chêne massif</h4>
                        <p>
                          Un club des années 1930 dans son jus, avec ce que cela suppose de
                          caractère et de vécu. Le cuir havane a pris cette patine profonde
                          que seules les décennies produisent — usure franche sur les accoudoirs,
                          teinte inégale sur l&apos;assise, coutures apparentes encore solides.
                        </p>
                        <p>
                          La structure en chêne massif est saine. L&apos;assise reste ferme,
                          le dossier enveloppant. C&apos;est un fauteuil qui a servi — et qui
                          peut servir encore, tel quel, dans un intérieur qui assume ses objets
                          plutôt que de les dissimuler.
                        </p>
                        <p>H 85 × L 80 × P 90 cm · France, circa 1930.</p>
                      </div>
                    </div>
                    <div className="case-analysis">
                      <p className="panel-label">Ce qui change</p>
                      <ul>
                        <li>L&apos;usure devient un argument (patine, vécu, caractère) au lieu d&apos;un défaut à excuser.</li>
                        <li>La datation et l&apos;origine sont précisées — elles justifient le prix.</li>
                        <li>Le texte s&apos;adresse à un acheteur qui cherche de l&apos;authenticité, pas du neuf.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </article>

              <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 2 · Suite de 3 chaises, années 1950</p>
                    <h3>Transformer un lot banal en ensemble cohérent et désirable.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 480 €</span>
                      <span>Métal laqué · velours vert</span>
                      <span>Plateforme : Selency</span>
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
                          3 chaises années 50 métal et velours vert, idéales
                          pour bureau ou table, bon état, velours nettoyé,
                          traces d&apos;usage sur le métal. H 83 × L 60 × P 53 cm.
                        </p>
                      </div>
                      <div className="text-panel after-panel">
                        <p className="panel-label">Après — format court</p>
                        <p className="panel-sublabel">Adapté à une publication Instagram ou Selency</p>
                        <h4>Suite de trois chaises, circa 1955 — structure métal laqué noir, velours vert sapin</h4>
                        <p>
                          Un ensemble rare à trouver complet : trois chaises cohérentes dans
                          leur ligne et dans leur matière. La rigueur du métal laqué noir
                          répond à la douceur du velours vert sapin — un contraste qui situe
                          immédiatement la pièce dans l&apos;esthétique moderniste des années 1950.
                        </p>
                        <p>
                          L&apos;assise est confortable et le velours en bon état, nettoyé
                          récemment. Le piétement présente de légères traces d&apos;usage qui
                          confirment l&apos;authenticité sans altérer la lecture d&apos;ensemble.
                          Trois chaises identiques de cette période, c&apos;est un petit événement.
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

              <article className={`case-study ${openExample === 3 ? "is-open" : ""}`}>
                <button className="case-toggle" onClick={() => setOpenExample(openExample === 3 ? null : 3)}>
                  <div className="case-toggle-left">
                    <p className="case-meta">Exemple 3 · Bureau ministre, époque Art déco</p>
                    <h3>Donner à un meuble imposant le texte qu&apos;il mérite.</h3>
                    <div className="case-specs">
                      <span>Prix affiché : 2 200 €</span>
                      <span>Palissandre · laiton</span>
                      <span>Plateforme : Proantic</span>
                    </div>
                  </div>
                  <div className="case-toggle-icon">{openExample === 3 ? "−" : "+"}</div>
                </button>
                {openExample === 3 && (
                  <div className="case-body">
                    <div className="case-columns">
                      <div className="text-panel before-panel">
                        <p className="panel-label">Avant</p>
                        <p>
                          Bureau ministre Art déco en palissandre. Très beau meuble,
                          4 tiroirs, poignées en laiton d&apos;origine. Restauré. Bon état.
                          H 78 × L 140 × P 72 cm.
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
                        <li>« Très beau meuble » (subjectif) devient un argumentaire matériel précis.</li>
                        <li>La restauration est qualifiée (« avec discernement ») — elle rassure au lieu d&apos;inquiéter.</li>
                        <li>Le texte crée une image mentale : le bureau dans un intérieur, en usage.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

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
                  <p>Marchand d&apos;art. Une connaissance concrète des objets, des prix et des acheteurs.</p>
                </div>
                <div className="about-card">
                  <h4>Rédaction</h4>
                  <p>Rédacteur spécialisé. Le texte comme outil de valorisation, pas comme décoration.</p>
                </div>
                <div className="about-card">
                  <h4>Veille culturelle</h4>
                  <p>Analyse des mouvements de goût, des tendances de marché et des codes esthétiques.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt border-top" id="faq">
          <div className="container split">
            <div>
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Tout ce qu&apos;il faut savoir<br /><em>avant de commencer.</em></h2>
            </div>
            <div className="faq-list">
              {[
                { q: "Que contient exactement une notice ?", a: "Une analyse du positionnement marché, une notice longue (250-400 mots) avec contexte historique et argumentaire, une version courte pour les plateformes, et des extraits réutilisables pour les réseaux sociaux." },
                { q: "Comment se passe la première notice offerte ?", a: "Vous nous envoyez les photos et informations d'un objet. Nous rédigeons la notice complète, sans engagement. Si le résultat vous convient, nous discutons d'une formule." },
                { q: "Quels types d'objets traitez-vous ?", a: "Mobilier de collection, luminaires, objets d'art décoratif, céramiques, pièces de design. Du XVIIe au design contemporain, avec une attention particulière pour les XIXe et XXe siècles." },
                { q: "Quels sont les délais de livraison ?", a: "5 jours ouvrés pour la formule Première lecture, 10 jours pour un Ensemble de 10 notices. Les projets Catalogue font l'objet d'un calendrier sur mesure." },
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
      </footer> <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: Georgia, "Times New Roman", Times, serif; color: #1a1613; background: #f6efe4; line-height: 1.7; font-size: 16px; }
        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }
        em { font-style: italic; }

        /* NAV */
        .nav { position: sticky; top: 0; background: #f6efe4ee; backdrop-filter: blur(12px); border-bottom: 1px solid #dccbb7; z-index: 100; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; position: relative; }
        .nav-logo { font-size: 1.05rem; font-weight: 700; letter-spacing: 0.04em; color: #1a1613; }
        .nav-links { display: flex; align-items: center; gap: 32px; font-family: Arial, Helvetica, sans-serif; font-size: 0.82rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .nav-links a { color: #5c4f3a; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1613; }
        .mobile-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #1a1613; }

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

        /* SPLIT */
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .text-block h2 { font-size: 2rem; font-weight: 400; line-height: 1.3; margin-bottom: 20px; }
        .text-block p { color: #5c4f3a; margin-bottom: 16px; }

        /* STAT GRID */
        .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .stat-card { background: #f6efe4; border: 1px solid #dccbb7; padding: 28px 24px; }
        .stat-number { font-size: 2rem; font-weight: 700; color: #1a1613; display: block; margin-bottom: 4px; }
        .stat-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem; color: #8a7a62; letter-spacing: 0.04em; }

        /* CARDS */
        .cards-three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .card { background: #f6efe4; border: 1px solid #dccbb7; padding: 36px 28px; position: relative; display: flex; flex-direction: column; }
        .card-featured { background: #1a1613; color: #f6efe4; border-color: #1a1613; }
        .card-featured .offer-desc, .card-featured .price { color: #c4b49e; }
        .card-featured li { color: #dccbb7; }
        .card-featured li::before { color: #8a7a62; }
        .card-badge { display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border: 1px solid #dccbb7; margin-bottom: 20px; align-self: flex-start; color: #8a7a62; }
        .badge-light { border-color: #5c4f3a; color: #c4b49e; }
        .offer-head { margin-bottom: 12px; }
        .offer-head h3 { font-size: 1.3rem; font-weight: 400; }
        .price { font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #5c4f3a; }
        .offer-desc { color: #5c4f3a; font-size: 0.95rem; margin-bottom: 20px; }
        .card ul { margin-bottom: 28px; }
        .card li { padding: 6px 0; font-size: 0.9rem; color: #5c4f3a; border-bottom: 1px solid #ede4d4; }
        .card-featured li { border-bottom-color: #2c261e; }
        .card li::before { content: "— "; color: #8a7a62; }
        .offer-cta { margin-top: auto; text-align: center; justify-content: center; width: 100%; }
        .offer-guarantee { text-align: center; margin-top: 40px; padding: 28px; border: 1px dashed #dccbb7; font-size: 0.95rem; color: #5c4f3a; }

        /* EXAMPLES */
        .examples-stack { display: flex; flex-direction: column; gap: 16px; }
        .case-study { border: 1px solid #dccbb7; background: #f6efe4; }
        .case-study.is-open { border-color: #1a1613; }
        .case-toggle { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 28px; background: none; border: none; cursor: pointer; text-align: left; gap: 24px; font-family: inherit; color: inherit; }
        .case-toggle-left { flex: 1; }
        .case-meta { font-family: Arial, Helvetica, sans-serif; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #8a7a62; margin-bottom: 6px; }
        .case-toggle h3 { font-size: 1.15rem; font-weight: 400; line-height: 1.4; }
        .case-specs { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; }
        .case-toggle-icon { font-size: 1.5rem; color: #8a7a62; flex-shrink: 0; }
        .case-body { padding: 0 28px 28px; }
        .case-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .text-panel { padding: 24px; font-size: 0.92rem; line-height: 1.7; }
        .text-panel p { margin-bottom: 12px; }
        .text-panel h4 { font-size: 1rem; font-weight: 600; margin-bottom: 12px; }
        .before-panel { background: #ede4d4; border: 1px solid #dccbb7; }
        .after-panel { background: #1a1613; color: #f6efe4; border: 1px solid #1a1613; }
        .after-panel .panel-sublabel { color: #8a7a62; }
        .panel-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: #8a7a62; margin-bottom: 12px; }
        .case-analysis { padding: 24px; background: #ede4d4; border: 1px solid #dccbb7; }
        .case-analysis ul { margin-top: 12px; }
        .case-analysis li { padding: 6px 0; font-size: 0.9rem; color: #5c4f3a; }
        .case-analysis li::before { content: "→ "; color: #8a7a62; }

        /* ABOUT */
        .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .about-card { background: #ede4d4; border: 1px solid #dccbb7; padding: 24px; }
        .about-card h4 { font-size: 0.95rem; margin-bottom: 8px; }
        .about-card p { font-size: 0.88rem; color: #5c4f3a; }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid #dccbb7; }
        .faq-toggle { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 20px 24px; background: none; border: none; cursor: pointer; font-family: inherit; font-size: 0.95rem; text-align: left; color: #1a1613; gap: 16px; }
        .faq-icon { font-size: 1.3rem; color: #8a7a62; flex-shrink: 0; }
        .faq-answer { padding: 0 24px 20px; }
        .faq-answer p { font-size: 0.92rem; color: #5c4f3a; }

        /* CONTACT */
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
        .form-success { padding: 40px; background: #ede4d4; border: 1px solid #dccbb7; text-align: center; }
        .form-success h3 { margin-bottom: 12px; }
        .form-success p { color: #5c4f3a; font-size: 0.92rem; }

        /* FOOTER */
        .footer { padding: 32px 0; border-top: 1px solid #dccbb7; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; }
        .footer-logo { font-size: 0.95rem; font-weight: 700; letter-spacing: 0.04em; margin-bottom: 4px; }
        .footer-copy { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; }
        .footer-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
        .footer-email, .footer-phone { font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem; color: #5c4f3a; transition: color 0.2s; }
        .footer-email:hover, .footer-phone:hover { color: #1a1613; }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .hero-grid, .split, .cards-three, .case-columns, .form-row { grid-template-columns: 1fr; }
          .hero { padding: 72px 0 56px; }
          .section { padding: 72px 0; }
          .split { gap: 40px; }
          .mobile-toggle { display: block; }
          .nav-links { display: none; position: absolute; top: 100%; left: 0; right: 0; background: #f6efe4; border-bottom: 1px solid #dccbb7; flex-direction: column; padding: 24px; gap: 16px; }
          .nav-links.nav-open { display: flex; }
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
          .footer-right { align-items: flex-start; }
          .about-cards { grid-template-columns: 1fr 1fr; }
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
