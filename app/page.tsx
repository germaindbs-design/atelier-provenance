"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      tab: "Antiquaire",
      title: "Commode Louis XV en marqueterie",
      meta: "Antiquaire — Paris 7e — Notice catalogue",
      text: "Commode galbée en bois de placage, ouvrant par deux tiroirs sans traverse. Riche décor de marqueterie florale en bois de rose, amarante et buis sur fond de satiné. Ornementation de bronzes ciselés et dorés : chutes feuillagées, sabots et entrées de serrure rocaille. Dessus de marbre brèche d'Alep à profil mouvementé. Travail parisien d'époque Louis XV, vers 1745-1749. Estampille à identifier sous le marbre.",
    },
    {
      tab: "Galerie",
      title: "Huile sur toile — École hollandaise",
      meta: "Galerie — Bruxelles — Texte de présentation",
      text: "Nature morte au citron pelé et verre de vin sur un entablement de pierre. La composition, d'une sobriété toute nordique, joue sur l'opposition entre la translucidité du verre à demi rempli et la matité crayeuse du citron dont la pelure se déroule en spirale. Le traitement de la lumière, rasante et dorée, révèle une main formée dans l'entourage de Pieter Claesz. Huile sur panneau de chêne non parqueté. Hollande, deuxième quart du XVIIe siècle.",
    },
    {
      tab: "Maison de vente",
      title: "Paire de vases en porcelaine de Sèvres",
      meta: "Maison de vente — Lyon — Lot pour vacation",
      text: "Paire de vases ovoïdes couverts en porcelaine dure de Sèvres, à fond bleu nouveau et réserves polylobées ornées de scènes pastorales dans le goût de Boucher. Rehauts de dorure au mat et au brillant figurant des rinceaux feuillagés et des frises de perles. Monture en bronze ciselé et doré à décor de guirlandes de laurier. Marques en bleu au double L entrelacé, lettre-date pour 1773. H. 42 cm.",
    },
  ];

  const faqs = [
    {
      q: "Quels types d'objets traitez-vous ?",
      a: "Mobilier, peintures, sculptures, objets d'art, céramiques, arts décoratifs, orfèvrerie, art asiatique… Mon périmètre couvre l'ensemble des arts décoratifs et beaux-arts, du Moyen Âge au design du XXe siècle.",
    },
    {
      q: "Quel est le délai de livraison habituel ?",
      a: "Comptez 5 à 7 jours ouvrés pour une notice catalogue standard, 10 à 15 jours pour un ensemble catalogue complet. Les projets urgents peuvent être traités sous 48 à 72 h avec un supplément.",
    },
    {
      q: "Comment se déroule une collaboration ?",
      a: "Après un premier échange pour cerner vos besoins, je vous adresse un devis détaillé sous 24 h. Une fois validé, je travaille à partir de vos visuels et informations. Vous recevez le texte pour relecture, avec un aller-retour de corrections inclus.",
    },
    {
      q: "Proposez-vous un tarif pour les volumes importants ?",
      a: "Oui, les offres Catalogue et Sur-mesure incluent des tarifs dégressifs. Au-delà de 20 notices, un forfait personnalisé vous est proposé lors du devis.",
    },
    {
      q: "Travaillez-vous en marque blanche ?",
      a: "Absolument. La majorité de mes clients intègrent les textes sous leur propre nom. La confidentialité est garantie contractuellement.",
    },
  ];

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <span className="navbar-logo">Music &amp; Style</span>
          <ul className="navbar-links">
            <li><a href="#constat">Constat</a></li>
            <li><a href="#methode">Méthode</a></li>
            <li><a href="#offres">Offres</a></li>
            <li><a href="#exemples">Exemples</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#contact" className="navbar-cta">Contact</a>
          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#constat" onClick={() => setMenuOpen(false)}>Constat</a>
        <a href="#methode" onClick={() => setMenuOpen(false)}>Méthode</a>
        <a href="#offres" onClick={() => setMenuOpen(false)}>Offres</a>
        <a href="#exemples" onClick={() => setMenuOpen(false)}>Exemples</a>
        <a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">Rédaction experte pour le marché de l&apos;art</span>
          <h1>
            Vos œuvres méritent <em>les mots justes</em>
          </h1>
          <p className="hero-sub">
            Notices descriptives, catalogues et contenus éditoriaux conçus pour
            les antiquaires, galeristes et maisons de vente.
          </p>
          <div className="hero-actions">
            <a href="#offres" className="button button-dark">Découvrir les offres</a>
            <a href="#contact" className="button button-outline">Demander un devis</a>
          </div>
        </div>
      </section>

      {/* ── CONSTAT ── */}
      <section id="constat" className="section section-dark">
        <div className="container section-center">
          <span className="section-label">Constat</span>
          <h2 className="section-title">L&apos;exigence rédactionnelle, un levier sous-estimé</h2>
          <p className="section-subtitle">
            Sur un marché de l&apos;art en pleine mutation digitale, la qualité du texte
            qui accompagne l&apos;œuvre est devenue un facteur déterminant de vente.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">73 %</div>
              <div className="stat-text">
                des acheteurs d&apos;art déclarent que la qualité de la description
                influence directement leur décision d&apos;achat
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+40 %</div>
              <div className="stat-text">
                d&apos;augmentation des ventes en ligne d&apos;art et d&apos;antiquités
                entre 2019 et 2023
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">85 %</div>
              <div className="stat-text">
                des professionnels estiment manquer de temps pour rédiger
                des textes à la hauteur de leurs pièces
              </div>
            </div>
          </div>
          <p className="stats-sources">
            Sources : <a href="https://www.artbasel.com" target="_blank" rel="noopener noreferrer">Art Basel &amp; UBS Art Market Report 2024</a>,{" "}
            <a href="https://www.hiscox.co.uk" target="_blank" rel="noopener noreferrer">Hiscox Online Art Trade Report 2023</a>,{" "}
            enquête interne Music&nbsp;&amp;&nbsp;Style 2024.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section id="methode" className="section">
        <div className="container section-center">
          <span className="section-label">Méthode</span>
          <h2 className="section-title">Un processus pensé pour les professionnels</h2>
          <p className="section-subtitle">
            Trois étapes pour des textes rigoureux, livrés dans les délais.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Échange &amp; brief</h3>
              <p>
                Nous définissons ensemble le périmètre : type d&apos;objets, ton
                éditorial, contraintes de format et délais.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>Recherche &amp; rédaction</h3>
              <p>
                Analyse iconographique, recherche documentaire et rédaction
                selon les standards du marché de l&apos;art.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Livraison &amp; révision</h3>
              <p>
                Livraison au format souhaité. Un aller-retour de corrections
                est inclus dans chaque prestation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFRES ── */}
      <section id="offres" className="section" style={{ background: "#f3f1ec" }}>
        <div className="container section-center">
          <span className="section-label">Offres</span>
          <h2 className="section-title">Des formules adaptées à chaque besoin</h2>
          <p className="section-subtitle">
            Notices à l&apos;unité, catalogues complets ou accompagnement sur-mesure.
          </p>
          <div className="pricing-grid">
            {/* Essentiel */}
            <div className="pricing-card">
              <div className="pricing-name">Essentiel</div>
              <div className="pricing-price">90 €</div>
              <div className="pricing-unit">par notice</div>
              <ul className="pricing-features">
                <li>Notice descriptive standard</li>
                <li>Jusqu&apos;à 150 mots</li>
                <li>Recherche documentaire de base</li>
                <li>1 aller-retour de corrections</li>
                <li>Livraison sous 5 jours ouvrés</li>
              </ul>
              <a href="#contact" className="button button-outline" style={{ justifyContent: "center" }}>
                Choisir
              </a>
            </div>
            {/* Catalogue — featured */}
            <div className="pricing-card featured">
              <div className="pricing-name">Catalogue</div>
              <div className="pricing-price">75 €</div>
              <div className="pricing-unit">par notice — dès 10 lots</div>
              <ul className="pricing-features">
                <li>Notices détaillées &amp; harmonisées</li>
                <li>Jusqu&apos;à 250 mots par lot</li>
                <li>Recherche approfondie</li>
                <li>Relecture croisée de l&apos;ensemble</li>
                <li>Introduction de catalogue offerte</li>
                <li>Livraison sous 10-15 jours</li>
              </ul>
              <a href="#contact" className="button button-gold" style={{ justifyContent: "center" }}>
                Choisir
              </a>
            </div>
            {/* Sur-mesure */}
            <div className="pricing-card">
              <div className="pricing-name">Sur-mesure</div>
              <div className="pricing-price">Sur devis</div>
              <div className="pricing-unit">projet personnalisé</div>
              <ul className="pricing-features">
                <li>Contenus éditoriaux longs</li>
                <li>Textes de présentation galerie</li>
                <li>Dossiers de presse &amp; publications</li>
                <li>Conseil en ligne éditoriale</li>
                <li>Accompagnement continu</li>
              </ul>
              <a href="#contact" className="button button-outline" style={{ justifyContent: "center" }}>
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXEMPLES ── */}
      <section id="exemples" className="section section-dark">
        <div className="container">
          <span className="section-label">Exemples</span>
          <h2 className="section-title">Quelques réalisations</h2>
          <p className="section-subtitle">
            Extraits anonymisés de notices rédigées pour des professionnels du marché.
          </p>
          <div className="cases-tabs">
            {cases.map((c, i) => (
              <button
                key={i}
                className={`case-tab ${activeCase === i ? "active" : ""}`}
                onClick={() => setActiveCase(i)}
              >
                {c.tab}
              </button>
            ))}
          </div>
          <div className="case-content">
            <h3>{cases[activeCase].title}</h3>
            <div className="case-meta">{cases[activeCase].meta}</div>
            <p>{cases[activeCase].text}</p>
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section id="apropos" className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-label">À propos</span>
              <h3>Une plume au service du marché de l&apos;art</h3>
              <p>
                Formé en histoire de l&apos;art et en communication éditoriale,
                je mets ma connaissance des arts décoratifs et des beaux-arts
                au service des professionnels qui n&apos;ont pas le temps — ou
                l&apos;envie — de rédiger.
              </p>
              <p>
                Chaque texte est pensé pour valoriser l&apos;objet avec rigueur
                et sensibilité, en respectant les codes du marché tout en
                rendant la lecture accessible.
              </p>
              <div className="about-tags">
                <span className="about-tag">Arts décoratifs</span>
                <span className="about-tag">Beaux-arts</span>
                <span className="about-tag">Mobilier XVIIIe</span>
                <span className="about-tag">Céramique</span>
                <span className="about-tag">Orfèvrerie</span>
              </div>
            </div>
            <div className="about-photo">[ Photo à venir ]</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section" style={{ background: "#f3f1ec" }}>
        <div className="container section-center">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  {f.q}
                  <span>{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="section section-gold cta-band">
        <div className="container">
          <h2>Prêt à sublimer vos descriptions ?</h2>
          <p>Demandez un devis gratuit sous 24 h ou envoyez-moi un lot test.</p>
          <a href="#contact" className="button button-light">Demander un devis</a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section section-dark">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="section-label">Contact</span>
              <h3>Parlons de votre projet</h3>
              <p>
                Décrivez-moi votre besoin et recevez un devis personnalisé sous 24 h.
              </p>
              <div className="contact-info">
                <div>
                  <span className="contact-icon">✉</span>
                  contact@musicandstyle.fr
                </div>
                <div>
                  <span className="contact-icon">☎</span>
                  +33 6 00 00 00 00
                </div>
                <div>
                  <span className="contact-icon">◉</span>
                  Paris, France
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci ! Votre message a bien été envoyé.");
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="votre@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Sujet</label>
                <input type="text" placeholder="Ex : Catalogue de vente — 30 lots" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="Décrivez votre projet..." required />
              </div>
              <button type="submit" className="button button-gold">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-logo">Music &amp; Style</div>
            <div className="footer-tagline">Rédaction experte pour le marché de l&apos;art</div>
          </div>
          <div className="footer-links">
            <a href="#offres">Offres</a>
            <a href="#exemples">Exemples</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container">
          <div className="footer-copy">© 2025 Music &amp; Style. Tous droits réservés.</div>
        </div>
      </footer>
    </>
  );
}
