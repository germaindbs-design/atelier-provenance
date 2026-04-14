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
                  <p className="stat-label">durée moyenne en ligne d&apos;une annonce mal rédigée</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="approche">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Approche</p>
              <h2>Chaque objet a un argument de vente.<br /><em>Il suffit de le formuler.</em></h2>
              <p className="section-intro">
                Ce que nous rédigeons ne ressemble ni à une fiche produit ni à un texte de catalogue.
                C&apos;est un argumentaire de vente pensé pour l&apos;acheteur : clair, structuré, calibré
                pour le canal de diffusion.
              </p>
            </div>
            <div className="grid-3">
              <div className="feature-card">
                <h3>Positionnement prix</h3>
                <p>
                  Chaque texte est écrit en fonction du prix affiché. On ne décrit pas
                  un objet à 350 € comme un objet à 3 500 €. Le registre, la longueur
                  et le niveau de détail s&apos;ajustent.
                </p>
              </div>
              <div className="feature-card">
                <h3>Vocabulaire technique</h3>
                <p>
                  Essence du bois, type d&apos;assemblage, mouvement stylistique, signatures
                  d&apos;époque — le texte intègre les termes que l&apos;acheteur averti cherche
                  et que les moteurs de recherche indexent.
                </p>
              </div>
              <div className="feature-card">
                <h3>Formats adaptés</h3>
                <p>
                  Une notice longue pour votre site. Une version courte pour Selency
                  ou Proantic. Une accroche pour Instagram. Chaque canal a ses codes,
                  chaque texte les respecte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top" id="methode">
          <div className="container split">
            <div>
              <p className="eyebrow">Méthode</p>
              <h2>Un processus simple,<br /><em>des textes précis.</em></h2>
              <p>
                Vous envoyez vos photos et quelques informations. Nous faisons le reste :
                recherche, rédaction, mise en forme. Vous recevez des textes prêts à
                publier, dans les formats dont vous avez besoin.
              </p>
            </div>
            <div>
              <div className="process-steps">
                <div className="process-step">
                  <span className="step-num">01</span>
                  <div><h4>Réception</h4><p>Photos, dimensions, prix, contexte de vente.</p></div>
                </div>
                <div className="process-step">
                  <span className="step-num">02</span>
                  <div><h4>Recherche</h4><p>Analyse stylistique, provenance.</p></div>
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

        <section className="section section-dark" id="offres">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Prestations</p>
              <h2>Des formats clairs,<br /><em>un prix par pièce.</em></h2>
            </div>
            <div className="grid-3">
              <div className="offer-card">
                <h3>Notice unique</h3>
                <p className="offer-price">45 €<span> / pièce</span></p>
                <ul>
                  <li>Recherche historique et stylistique</li>
                  <li>Texte long (300-400 mots)</li>
                  <li>Version courte incluse</li>
                  <li>Livraison sous 5 jours</li>
                </ul>
                <a href="#contact" className="button button-light offer-cta">Commander</a>
              </div>
              <div className="offer-card offer-popular">
                <span className="offer-badge">Recommandé</span>
                <h3>Pack 5 pièces</h3>
                <p className="offer-price">180 €<span> soit 36 € / pièce</span></p>
                <ul>
                  <li>Tout le contenu de la notice unique</li>
                  <li>Version réseaux sociaux offerte</li>
                  <li>Cohérence éditoriale sur le lot</li>
                  <li>Livraison sous 7 jours</li>
                </ul>
                <a href="#contact" className="button button-light offer-cta">Commander</a>
              </div>
              <div className="offer-card">
                <h3>Catalogue</h3>
                <p className="offer-price">Sur devis</p>
                <ul>
                  <li>À partir de 10 pièces</li>
                  <li>Tarif dégressif</li>
                  <li>Charte éditoriale sur mesure</li>
                  <li>Interlocuteur unique</li>
                </ul>
                <a href="#contact" className="button button-light offer-cta">Demander un devis</a>
              </div>
            </div>
            <p className="offer-guarantee">Première notice offerte — sans engagement. Vous jugez sur pièce.</p>
          </div>
        </section>PARTIE 2 / 3 — Collez directement à la suite de la partie 1 :
        <section className="section border-top" id="exemples">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Exemples</p>
              <h2>Avant / après :<br /><em>la différence est dans le texte.</em></h2>
              <p className="section-intro">
                Trois objets courants sur les plateformes de vente. À gauche, l&apos;annonce
                telle qu&apos;on la trouve habituellement. À droite, la version retravaillée
                par l&apos;Atelier Provenance.
              </p>
            </div>

            {[
              {
                title: "Enfilade scandinave — années 1960",
                before:
                  "Enfilade scandinave en teck, années 60. Bon état général, quelques traces d'usage. Dimensions : L 180 × P 45 × H 75 cm. Prix : 1 200 €.",
                after:
                  "Enfilade en teck massif, Danemark, circa 1962. Lignes épurées caractéristiques du modernisme scandinave : façade en léger porte-à-faux, piétement fuselé en retrait, poignées sculptées intégrées aux ouvrants. Deux caissons latéraux à portes battantes ouvrant chacun sur une étagère réglable ; partie centrale à trois tiroirs montés sur coulisses en bois. Finition huilée d'origine présentant une patine blonde homogène. Légères traces d'usage sur le plateau, cohérentes avec l'âge du meuble et sans altération structurelle. Dimensions : L 180 × P 45 × H 75 cm. Provenance : succession privée, région parisienne. Un certificat d'authenticité peut être établi sur demande.",
                tag: "Mobilier scandinave",
              },
              {
                title: "Paire d'appliques en bronze doré — XIXe siècle",
                before:
                  "Paire d'appliques en bronze doré, style Louis XVI. Très bon état. Hauteur : 38 cm. Prix : 850 € la paire.",
                after:
                  "Paire d'appliques à deux bras de lumière en bronze ciselé et doré, d'époque Napoléon III, reprenant le vocabulaire ornemental Louis XVI. Fût central en forme de carquois rubané, flanqué de rinceaux d'acanthe ; bras en col de cygne terminés par des bobèches à décor de perles. Dorure au mercure d'origine présentant une belle usure à la feuille sur les reliefs, caractéristique d'une dorure ancienne non reprise. Hauteur : 38 cm, saillie : 24 cm. Électrifiées aux normes, prêtes à poser. Provenance : hôtel particulier, VIIᵉ arrondissement de Paris.",
                tag: "Luminaires anciens",
              },
              {
                title: "Fauteuil de bureau Art déco — années 1930",
                before:
                  "Fauteuil de bureau Art déco, bois et cuir. Restauré. Prix : 1 600 €.",
                after:
                  "Fauteuil de bureau tournant en palissandre de Rio et cuir havane, France, circa 1930-1935. Dossier gondole légèrement incurvé, accotoirs pleins galbés prolongeant l'assise en une ligne continue — construction caractéristique de la production Art déco française haut de gamme. Piètement à quatre branches en étoile, reposant sur des roulettes en laiton d'origine. Le cuir, refait à l'identique par un sellier parisien, présente un tannage végétal traditionnel et une teinte havane fidèle aux coloris de l'époque. Mécanisme de bascule et de réglage en hauteur en parfait état de fonctionnement. Hauteur d'assise : 46 cm, largeur hors accotoirs : 62 cm. Provenance : cabinet d'architecte, Lyon.",
                tag: "Sièges XXe",
              },
            ].map((ex, i) => (
              <div key={i} className="example-block">
                <button
                  className={`example-toggle ${openExample === i ? "example-open" : ""}`}
                  onClick={() => setOpenExample(openExample === i ? null : i)}
                >
                  <span className="example-tag">{ex.tag}</span>
                  <span className="example-title">{ex.title}</span>
                  <span className="example-chevron">{openExample === i ? "−" : "+"}</span>
                </button>
                {openExample === i && (
                  <div className="example-panels">
                    <div className="before-panel">
                      <p className="panel-label">Avant</p>
                      <p className="panel-sublabel">Annonce type, telle qu&apos;on la trouve en ligne</p>
                      <p>{ex.before}</p>
                    </div>
                    <div className="after-panel">
                      <p className="panel-label">Après — Atelier Provenance</p>
                      <p className="panel-sublabel">Notice rédigée, prête à publier</p>
                      <p>{ex.after}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="parcours">
          <div className="container split">
            <div>
              <p className="eyebrow">À propos</p>
              <h2>Un regard formé aux textes,<br /><em>affûté par le marché.</em></h2>
              <p>
                L&apos;Atelier Provenance est né d&apos;un constat simple : sur le marché de l&apos;art
                et du mobilier de collection, la qualité des objets dépasse presque toujours
                la qualité des textes qui les accompagnent.
              </p>
              <p>
                Derrière l&apos;atelier, un parcours en deux versants. D&apos;abord celui de
                l&apos;enseignement — dix années passées à enseigner les lettres et la
                philosophie, à former un regard critique et une exigence de clarté.
                Puis celui du marché — marchand d&apos;art, rédacteur spécialisé,
                analyste des dynamiques culturelles et des tendances du marché de l&apos;art.
              </p>
              <p>
                Cette double formation — universitaire et commerciale — est précisément
                ce qui permet à chaque notice de tenir sur les deux plans : la rigueur
                du texte et l&apos;efficacité de l&apos;argumentaire de vente.
              </p>
            </div>
            <div>
              <div className="about-card">
                <h4>Formation</h4>
                <ul>
                  <li>Professeur de lettres et de philosophie — 10 ans d&apos;enseignement</li>
                  <li>Marchand d&apos;art — achat, expertise, vente</li>
                  <li>Rédacteur spécialisé — marché de l&apos;art et objets de collection</li>
                  <li>Analyste des dynamiques culturelles et tendances du marché</li>
                </ul>
              </div>
              <div className="about-card">
                <h4>Engagement éditorial</h4>
                <ul>
                  <li>Chaque texte est relu et vérifié avant livraison</li>
                  <li>Vocabulaire sourcé — pas d&apos;approximation</li>
                  <li>Un seul interlocuteur, du brief à la livraison</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top" id="faq">
          <div className="container faq-container">
            <div className="section-head">
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Ce que nos clients<br /><em>demandent souvent.</em></h2>
            </div>
            {[
              {
                q: "Quel type d'objets prenez-vous en charge ?",
                a: "Mobilier de collection, luminaires, objets d'art, céramiques, pièces de design du XXᵉ siècle. Si votre pièce a une valeur historique, stylistique ou marchande à défendre, elle entre dans notre champ.",
              },
              {
                q: "De quoi avez-vous besoin pour commencer ?",
                a: "Photos (3 à 6 suffisent), dimensions, prix de vente envisagé, et toute information que vous possédez déjà (provenance, époque, signature…). On s'occupe du reste.",
              },
              {
                q: "Quel est le délai de livraison ?",
                a: "5 jours ouvrés pour une notice unique, 7 jours pour un pack de 5 pièces. Les commandes catalogue font l'objet d'un planning sur mesure.",
              },
              {
                q: "Puis-je demander des modifications ?",
                a: "Oui. Chaque notice inclut un aller-retour de correction. Les ajustements sont généralement mineurs : le texte est calibré dès la première version.",
              },
              {
                q: "Sur quelles plateformes publiez-vous ?",
                a: "Nous ne publions pas à votre place, mais nous adaptons chaque texte au format de votre canal : Selency, Proantic, Leboncoin, Catawiki, Instagram, ou votre propre site.",
              },
              {
                q: "La première notice est-elle vraiment offerte ?",
                a: "Oui. Vous envoyez une pièce, nous rédigeons la notice complète. Si le résultat vous convient, on continue. Sinon, vous repartez avec un texte utilisable, sans rien devoir.",
              },
            ].map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-toggle ${openFaq === i ? "faq-open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-chevron">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="faq-answer"><p>{item.a}</p></div>}
              </div>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="contact">
          <div className="container contact-container">
            <div className="section-head">
              <p className="eyebrow">Contact</p>
              <h2>Envoyez une pièce,<br /><em>recevez votre première notice.</em></h2>
              <p className="section-intro">
                Décrivez brièvement votre besoin. Nous revenons vers vous sous 24 h
                avec une proposition claire.
              </p>
            </div>
            <div className="contact-grid">
              <form onSubmit={handleSubmit} className="contact-form">
                {formStatus === "sent" ? (
                  <div className="form-success">
                    <p>✓ Votre messagerie s&apos;est ouverte. Envoyez le mail pour finaliser votre demande.</p>
                    <button type="button" className="button button-primary" onClick={() => setFormStatus(null)}>
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <>
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
                        <select id="platform" value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })}>
                          <option value="">Sélectionner</option>
                          <option value="selency">Selency</option>
                          <option value="proantic">Proantic</option>
                          <option value="leboncoin">Leboncoin</option>
                          <option value="catawiki">Catawiki</option>
                          <option value="site-propre">Mon propre site</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="pieces">Nombre de pièces à décrire</label>
                      <input id="pieces" type="number" min="1" value={formData.pieces} onChange={(e) => setFormData({ ...formData, pieces: e.target.value })} />
                    </div>
                    <div className="form-field">
                      <label htmlFor="message">Décrivez brièvement votre besoin</label>
                      <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    <button type="submit" className="button button-primary">Envoyer la demande</button>
                  </>
                )}
              </form>
              <div className="contact-info">
                <div className="contact-info-card">
                  <h4>Coordonnées</h4>
                  <p>Téléphone : <a href="tel:+33751420733">07 51 42 07 33</a></p>
                  <p>Email : <a href="mailto:contact.atelierprovenance@gmail.com">contact.atelierprovenance@gmail.com</a></p>
                </div>
                <div className="contact-info-card">
                  <h4>Délai de réponse</h4>
                  <p>Nous répondons sous 24 h, du lundi au vendredi.</p>
                </div>
                <div className="contact-info-card">
                  <h4>Première notice</h4>
                  <p>Offerte et sans engagement. Vous jugez sur pièce.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-brand">Atelier Provenance</p>
          <p className="footer-copy">© {new Date().getFullYear()} — Rédaction spécialisée pour le mobilier de collection et les objets d&apos;art.</p>
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
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(246,239,228,.92); backdrop-filter: blur(12px); border-bottom: 1px solid #e0d5c4; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .nav-logo { font-size: 18px; font-weight: 700; letter-spacing: .5px; }
        .nav-links { display: flex; align-items: center; gap: 32px; font-size: 14px; }
        .nav-links a:hover { color: #8a7a62; }
        .mobile-toggle { display: none; background: none; border: none; font-size: 22px; cursor: pointer; color: #1a1613; }

        /* BUTTON */
        .button { display: inline-block; padding: 14px 28px; border-radius: 6px; font-size: 14px; font-family: inherit; letter-spacing: .4px; cursor: pointer; transition: all .25s; border: none; }
        .button-sm { padding: 10px 20px; }
        .button-primary { background: #1a1613; color: #f6efe4; }
        .button-primary:hover { background: #3a322a; }
        .button-light { background: transparent; color: #1a1613; border: 1px solid #1a1613; }
        .button-light:hover { background: #1a1613; color: #f6efe4; }
        .section-dark .button-primary { background: #f6efe4; color: #1a1613; }
        .section-dark .button-primary:hover { background: #dccbb7; color: #1a1613; }
        .section-dark .button-light { background: transparent; color: #dccbb7; border: 1px solid #dccbb7; }
        .section-dark .button-light:hover { background: #dccbb7; color: #2c261e; }

        /* HERO */
        .hero { padding: 160px 0 100px; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .eyebrow { font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; color: #8a7a62; margin-bottom: 12px; }
        .hero h1 { font-size: 44px; line-height: 1.2; margin-bottom: 24px; font-weight: 700; }
        .intro { font-size: 17px; color: #5a4f42; margin-bottom: 32px; }
        .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
        .hero-visual { background: #eae2d4; border-radius: 10px; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; }
        .hero-quote { padding: 40px; max-width: 400px; }
        .hero-quote blockquote { font-size: 17px; font-style: italic; color: #5a4f42; margin-bottom: 12px; }
        .hero-quote cite { font-size: 13px; color: #8a7a62; }

        /* SECTIONS */
        .section { padding: 100px 0; }
        .border-top { border-top: 1px solid #e0d5c4; }
        .section-dark { background: #2c261e; color: #dccbb7; }
        .section-dark h2, .section-dark h3, .section-dark h4 { color: #f6efe4; }
        .section-dark p, .section-dark li { color: #c4b49a; }
        .section-dark .eyebrow { color: #a89274; }
        .section-dark em { color: #dccbb7; }
        .section-head { text-align: center; max-width: 640px; margin: 0 auto 64px; }
        .section-head h2 { font-size: 36px; line-height: 1.25; margin-bottom: 16px; }
        .section-intro { font-size: 16px; color: #5a4f42; }
        .section-dark .section-intro { color: #c4b49a; }

        /* SPLIT */
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .split h2 { font-size: 36px; line-height: 1.25; margin-bottom: 24px; }
        .split p { margin-bottom: 16px; color: #5a4f42; }
        .section-dark .split p { color: #c4b49a; }

        /* PROCESS */
        .process-step { display: flex; gap: 20px; margin-bottom: 28px; }
        .step-num { font-size: 28px; font-weight: 700; color: #d4c5a9; line-height: 1; min-width: 40px; }
        .section-dark .step-num { color: #a89274; }
        .process-step h4 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
        .process-step p { margin-bottom: 0; font-size: 15px; }

        /* OFFERS */
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-bottom: 40px; }
        .offer-card { background: #3a322a; border: 1px solid #4a4238; border-radius: 10px; padding: 40px 32px; display: flex; flex-direction: column; position: relative; }
        .offer-card h3 { font-size: 20px; margin-bottom: 8px; color: #f6efe4; }
        .offer-price { font-size: 32px; font-weight: 700; margin-bottom: 24px; color: #dccbb7; }
        .offer-price span { font-size: 14px; font-weight: 400; color: #a89274; }
        .offer-card ul { margin-bottom: 32px; flex-grow: 1; }
        .offer-card li { padding: 6px 0; font-size: 15px; color: #c4b49a; }
        .offer-card li::before { content: "✓ "; color: #a89274; font-weight: 700; }
        .offer-popular { border-color: #a89274; }
        .offer-badge { position: absolute; top: -12px; left: 32px; background: #a89274; color: #2c261e; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 14px; border-radius: 20px; font-weight: 700; }
        .offer-cta { width: 100%; text-align: center; }
        .offer-guarantee { text-align: center; font-size: 15px; font-style: italic; color: #a89274; }

        /* EXAMPLES */
        .example-block { margin-bottom: 16px; }
        .example-toggle { width: 100%; display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: #eae2d4; border: none; border-radius: 8px; cursor: pointer; font-family: inherit; font-size: 16px; text-align: left; transition: background .2s; }
        .example-toggle:hover { background: #e0d5c4; }
        .example-open { border-radius: 8px 8px 0 0; }
        .example-tag { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #8a7a62; white-space: nowrap; }
        .example-title { flex-grow: 1; font-weight: 600; }
        .example-chevron { font-size: 22px; color: #8a7a62; }
        .example-panels { display: grid; grid-template-columns: 1fr 1fr; border-radius: 0 0 8px 8px; overflow: hidden; }
        .before-panel { padding: 32px; background: #eae2d4; }
        .after-panel { padding: 32px; background: #2c261e; color: #c4b49a; border: 1px solid #3a322a; }
        .after-panel h4 { color: #f6efe4; }
        .after-panel p { color: #c4b49a; }
        .panel-label { font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; margin-bottom: 4px; }
        .after-panel .panel-label { color: #a89274; }
        .panel-sublabel { font-size: 13px; color: #8a7a62; margin-bottom: 16px; }
        .after-panel .panel-sublabel { color: #a89274; }

        /* ABOUT */
        .about-card { background: #3a322a; border: 1px solid #4a4238; border-radius: 10px; padding: 28px; margin-bottom: 20px; }
        .about-card h4 { font-size: 15px; font-weight: 700; margin-bottom: 12px; color: #f6efe4; }
        .about-card li { padding: 4px 0; font-size: 15px; color: #c4b49a; }
        .about-card li::before { content: "— "; color: #a89274; }

        /* FAQ */
        .faq-container { max-width: 720px; }
        .faq-item { margin-bottom: 8px; }
        .faq-toggle { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 0; background: none; border: none; border-bottom: 1px solid #e0d5c4; cursor: pointer; font-family: inherit; font-size: 16px; font-weight: 600; text-align: left; color: #1a1613; }
        .faq-chevron { font-size: 20px; color: #8a7a62; }
        .faq-answer { padding: 12px 0 20px; }
        .faq-answer p { font-size: 15px; color: #5a4f42; }

        /* CONTACT */
        .contact-container { max-width: 900px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-field label { font-size: 13px; font-weight: 600; color: #f6efe4; }
        .form-field input,
        .form-field select,
        .form-field textarea { padding: 12px 14px; border: 1px solid #4a4238; border-radius: 6px; font-family: inherit; font-size: 15px; background: #3a322a; color: #f6efe4; transition: border .2s; }
        .form-field input::placeholder,
        .form-field textarea::placeholder { color: #8a7a62; }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus { outline: none; border-color: #a89274; }
        .form-field select { cursor: pointer; }
        .form-success { text-align: center; padding: 40px 0; }
        .form-success p { margin-bottom: 16px; font-size: 16px; color: #c4b49a; }

        /* CONTACT INFO */
        .contact-info { display: flex; flex-direction: column; gap: 20px; }
        .contact-info-card { background: #3a322a; border: 1px solid #4a4238; border-radius: 10px; padding: 24px; }
        .contact-info-card h4 { font-size: 14px; font-weight: 700; margin-bottom: 8px; color: #f6efe4; }
        .contact-info-card p { font-size: 15px; color: #c4b49a; margin-bottom: 4px; }
        .contact-info-card a { color: #dccbb7; border-bottom: 1px solid #a89274; }
        .contact-info-card a:hover { color: #f6efe4; }

        /* FOOTER */
        .footer { background: #2c261e; padding: 40px 0; border-top: 1px solid #3a322a; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; }
        .footer-brand { font-weight: 700; font-size: 16px; color: #f6efe4; }
        .footer-copy { font-size: 13px; color: #8a7a62; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .mobile-toggle { display: block; }
          .nav-links { display: none; position: absolute; top: 64px; left: 0; right: 0; background: #f6efe4; flex-direction: column; padding: 24px; gap: 16px; border-bottom: 1px solid #e0d5c4; }
          .nav-open { display: flex; }
          .hero-grid, .split, .grid-3, .example-panels, .contact-grid, .form-row { grid-template-columns: 1fr; }
          .hero { padding: 120px 0 60px; }
          .hero h1 { font-size: 32px; }
          .section { padding: 64px 0; }
          .section-head h2, .split h2 { font-size: 28px; }
          .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </>
  );
}
