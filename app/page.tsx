"use client";

import { useState, useEffect, useRef } from "react";

/* ───────────────────────── SCROLL REVEAL ───────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───────────────────────── ORNEMENTS ───────────────────────── */
function Losange({ className = "" }: { className?: string }) {
  return <span className={`losange ${className}`} aria-hidden="true" />;
}

function ChapterHead({
  numero,
  titre,
  light = false,
}: {
  numero: string;
  titre: string;
  light?: boolean;
}) {
  return (
    <div className={`chapter-head ${light ? "chapter-head-light" : ""}`}>
      <span className="chapter-line" />
      <span className="chapter-label">
        Chapitre {numero} — {titre}
      </span>
      <span className="chapter-line" />
    </div>
  );
}

/* ───────────────────────── DONNÉES ───────────────────────── */
const OFFRES = [
  {
    numero: "I",
    nom: "Audit Express",
    prix: "390 €",
    duree: "Livré sous 7 jours",
    promesse: "Voir immédiatement ce que vos objets pourraient devenir.",
    contenu: [
      "Analyse de 10 objets de votre catalogue",
      "Réécriture complète de 2 fiches",
      "Recommandations concrètes et priorisées",
      "Appel de restitution de 30 minutes",
    ],
    resultat:
      "Une vision claire des améliorations possibles et de leur impact direct sur vos ventes.",
    badge: "Point d'entrée",
    cta: "Demander un audit",
  },
  {
    numero: "II",
    nom: "Pack Pilote",
    prix: "1 900 €",
    duree: "Mission de 3 à 4 semaines",
    promesse:
      "Transformer votre catalogue en un outil de vente clair et désirable.",
    contenu: [
      "15 fiches premium, recherchées et documentées",
      "Versions longues et courtes pour chaque pièce",
      "Contenus complémentaires (réseaux, newsletter)",
      "Cohérence éditoriale de l'ensemble",
    ],
    resultat:
      "Meilleure lisibilité, valeur perçue augmentée, ventes facilitées.",
    badge: null,
    cta: "Lancer un pilote",
  },
  {
    numero: "III",
    nom: "Abonnement",
    prix: "3 000 – 6 000 € / mois",
    duree: "Engagement trimestriel",
    promesse: "Externaliser la rédaction sans perdre en qualité.",
    contenu: [
      "30 à 60 fiches par mois selon la formule",
      "Optimisation continue des fiches existantes",
      "Interlocuteur dédié, support prioritaire",
      "Reporting mensuel sur les performances",
    ],
    resultat: "Production fluide, catalogue cohérent, gain de temps durable.",
    badge: null,
    cta: "Étudier un abonnement",
  },
  {
    numero: "IV",
    nom: "Système Premium",
    prix: "8 000 – 20 000 €",
    duree: "Mission de 2 à 4 mois",
    promesse: "Transformer votre manière de vendre.",
    contenu: [
      "Refonte complète du catalogue",
      "Storytelling global de la maison",
      "Formation de votre équipe à la méthode",
      "Chartes, gabarits et outils transmis",
    ],
    resultat: "Positionnement haut de gamme et autonomie interne durable.",
    badge: null,
    cta: "Ouvrir la discussion",
  },
];

const FAQ = [
  {
    q: "Pourquoi un audit plutôt qu'une notice à l'unité ?",
    a: "Parce qu'une fiche isolée ne change pas un catalogue. L'Audit Express identifie d'abord où la valeur se perd — vocabulaire, structure, positionnement prix — puis le démontre sur deux de vos pièces. Vous décidez ensuite, preuves en main, de la suite à donner.",
  },
  {
    q: "Travaillez-vous avec les petites structures ?",
    a: "Oui. L'Audit Express (390 €) est précisément conçu pour les marchands et galeries qui veulent mesurer l'impact avant d'engager davantage. Le parcours est progressif : chaque étape se finance par les résultats de la précédente.",
  },
  {
    q: "Qu'est-ce que Lila D'Algarve ?",
    a: "Notre média éditorial, consacré au mobilier ancien et aux arts décoratifs. Les pièces travaillées avec nos clients peuvent y être présentées à une audience de collectionneurs — un canal de visibilité supplémentaire, sans démarche de votre part.",
  },
  {
    q: "Comment garantissez-vous l'exactitude des attributions ?",
    a: "Par la prudence lexicale des maisons de vente : « estampillé », « attribué à », « dans le goût de » n'y sont jamais interchangeables. Chaque affirmation est sourcée ; en cas de doute, la formulation le dit.",
  },
];

/* ───────────────────────── PAGE ───────────────────────── */
export default function Page() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    structure: "",
    pieces: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Demande — " + (formData.name || "Nouveau contact")
    );
    const body = encodeURIComponent(
      "Nom : " + formData.name +
      "\nEmail : " + formData.email +
      "\nStructure : " + formData.structure +
      "\nTaille du catalogue : " + formData.pieces +
      "\n\nMessage :\n" + formData.message
    );
    window.location.href =
      "mailto:contact.atelierprovenance@gmail.com?subject=" + subject + "&body=" + body;
    setFormStatus("sent");
  };

  return (
    <>
      {/* ═══════════ NAV ═══════════ */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <span className="nav-losange" aria-hidden="true" />
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
            <a href="#constat" onClick={() => setMobileMenu(false)}>Le constat</a>
            <a href="#methode" onClick={() => setMobileMenu(false)}>La méthode</a>
            <a href="#parcours" onClick={() => setMobileMenu(false)}>Le parcours</a>
            <a href="#etude" onClick={() => setMobileMenu(false)}>Étude</a>
            <a href="#media" onClick={() => setMobileMenu(false)}>Le média</a>
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMobileMenu(false)}
            >
              Demander un audit
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="hero">
          <div className="hero-frame">
            <Losange className="hero-losange" />
            <p className="hero-surtitre">Atelier éditorial · Mobilier de collection & objets d&apos;art</p>
            <h1>
              La valeur d&apos;un objet
              <br />
              est une histoire <em>bien établie.</em>
            </h1>
            <p className="hero-texte">
              Nous écrivons ce qui manque entre vos pièces et leurs acheteurs :
              audit de catalogue, fiches premium, direction éditoriale complète —
              pour les maisons de vente, galeries et marchands qui veulent que
              leurs objets soient compris, puis désirés.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-plein">
                Demander un Audit Express — 390 €
              </a>
              <a href="#parcours" className="btn btn-filet">
                Découvrir le parcours
              </a>
            </div>
            <div className="hero-cartel">
              <span>Recherche documentée</span>
              <Losange />
              <span>Vocabulaire de maison de vente</span>
              <Losange />
              <span>Résultats mesurés</span>
            </div>
          </div>
          <a href="#constat" className="hero-scroll" aria-label="Défiler">
            <span />
          </a>
        </section>

        {/* ═══════════ CHAPITRE I — LE CONSTAT ═══════════ */}
        <section className="section" id="constat">
          <div className="container">
            <Reveal>
              <ChapterHead numero="I" titre="Le constat" />
              <h2 className="section-titre">
                Les belles pièces ne se vendent pas mal.
                <br />
                <em>Elles se vendent muettes.</em>
              </h2>
            </Reveal>
            <div className="constat-grid">
              <Reveal delay={80}>
                <div className="constat-texte">
                  <p>
                    Sur Selency, Proantic ou Catawiki, des milliers d&apos;objets de
                    qualité attendent des semaines. Non par manque de valeur —
                    par manque de preuves. Description en deux lignes,
                    vocabulaire approximatif, aucun contexte : le prix semble
                    arbitraire, l&apos;acheteur hésite, puis passe.
                  </p>
                  <p>
                    Un catalogue n&apos;est pas une somme d&apos;annonces. C&apos;est le
                    discours d&apos;une maison sur ce qu&apos;elle vend. Quand ce discours
                    manque, c&apos;est la marge qui le paie.
                  </p>
                </div>
              </Reveal>
              <div className="constat-chiffres">
                {[
                  ["70 %", "des annonces haut de gamme sans contexte historique"],
                  ["3×", "plus de vues avec une fiche structurée et documentée"],
                  ["45 j.", "de délai moyen de vente sans texte travaillé"],
                ].map(([n, l], i) => (
                  <Reveal key={i} delay={120 + i * 100}>
                    <div className="chiffre">
                      <p className="chiffre-num">{n}</p>
                      <p className="chiffre-label">{l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CHAPITRE II — LA MÉTHODE ═══════════ */}
        <section className="section section-nuit" id="methode">
          <div className="container">
            <Reveal>
              <ChapterHead numero="II" titre="La méthode" light />
              <h2 className="section-titre section-titre-light">
                Une fiche n&apos;est pas une description.
                <br />
                <em>C&apos;est un argument.</em>
              </h2>
            </Reveal>
            <div className="cartels">
              {[
                {
                  num: "01",
                  titre: "Positionnement",
                  texte:
                    "Comparables récents, analyse du marché, cohérence entre le prix demandé et le discours tenu. Le texte soutient le prix — jamais l'inverse.",
                },
                {
                  num: "02",
                  titre: "Précision",
                  texte:
                    "Époque, style, matériaux, provenance : le vocabulaire des maisons de vente, avec sa prudence — « attribué à » n'est pas « estampillé ».",
                },
                {
                  num: "03",
                  titre: "Narration",
                  texte:
                    "Chaque pièce a traversé quelque chose. Le texte le rend lisible et mémorable : on n'achète pas un meuble ancien, on achète son histoire.",
                },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="cartel">
                    <span className="cartel-num">{c.num}</span>
                    <h3>{c.titre}</h3>
                    <p>{c.texte}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="protocole">
                {[
                  ["Réception", "Photos, contexte, prix envisagé"],
                  ["Recherche", "Comparables, historique, provenance"],
                  ["Rédaction", "Texte structuré, ton de la maison"],
                  ["Déclinaison", "Fiche longue, courte, réseaux"],
                ].map(([t, d], i) => (
                  <div className="protocole-etape" key={i}>
                    <span className="protocole-num">{i + 1}</span>
                    <div>
                      <h4>{t}</h4>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE III — LE PARCOURS ═══════════ */}
        <section className="section" id="parcours">
          <div className="container">
            <Reveal>
              <ChapterHead numero="III" titre="Le parcours" />
              <h2 className="section-titre">
                Quatre étapes,
                <br />
                <em>chacune finance la suivante.</em>
              </h2>
              <p className="section-intro">
                Pas de grille au poids de la notice : un parcours. On commence
                par voir (l&apos;audit), on prouve (le pilote), puis on installe —
                en continu ou en profondeur.
              </p>
            </Reveal>
            <div className="offres">
              {OFFRES.map((o, i) => (
                <Reveal key={i} delay={i * 80}>
                  <article className="offre">
                    <div className="offre-tete">
                      <span className="offre-numero">{o.numero}</span>
                      <div className="offre-identite">
                        <h3>{o.nom}</h3>
                        <p className="offre-promesse">{o.promesse}</p>
                      </div>
                      <div className="offre-prix">
                        {o.badge && <span className="offre-badge">{o.badge}</span>}
                        <p className="offre-montant">{o.prix}</p>
                        <p className="offre-duree">{o.duree}</p>
                      </div>
                    </div>
                    <div className="offre-corps">
                      <div className="offre-col">
                        <h5>Contenu</h5>
                        <ul>
                          {o.contenu.map((c, j) => (
                            <li key={j}>{c}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="offre-col">
                        <h5>Résultat</h5>
                        <p className="offre-resultat">{o.resultat}</p>
                        <a href="#contact" className="btn btn-filet btn-sm">
                          {o.cta}
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="offres-note">
                La plupart des collaborations commencent par l&apos;Audit Express :
                390 €, déductibles de toute mission engagée dans les 60 jours.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE IV — ÉTUDE ═══════════ */}
        <section className="section section-papier" id="etude">
          <div className="container">
            <Reveal>
              <ChapterHead numero="IV" titre="Étude" />
              <h2 className="section-titre">
                Le même objet,
                <br />
                <em>avant et après.</em>
              </h2>
            </Reveal>
            <div className="etude-diptyque">
              <Reveal delay={80}>
                <div className="etude-volet etude-avant">
                  <p className="etude-etiquette">Annonce d&apos;origine</p>
                  <h4>Commode ancienne marqueterie</h4>
                  <p className="etude-texte-avant">
                    « Belle commode ancienne en marqueterie avec dessus marbre.
                    Bronzes dorés. Quelques traces d&apos;usage. Dimensions standard.
                    À venir chercher sur place. »
                  </p>
                  <p className="etude-verdict">
                    Ni époque, ni bois, ni attribution. Le prix demandé n&apos;a
                    aucun texte pour le soutenir.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="etude-volet etude-apres">
                  <p className="etude-etiquette etude-etiquette-or">
                    Fiche Atelier Provenance
                  </p>
                  <h4>Commode galbée d&apos;époque Louis XV, marqueterie de bois de rose</h4>
                  <p className="etude-texte-apres">
                    « Commode à façade galbée toutes faces, Paris, vers 1760.
                    Placage de bois de rose en frisage, ornementation de bronzes
                    ciselés et dorés, dessus de marbre brèche d&apos;Alep. Le galbe,
                    sculpté dans le bâti de chêne, signe le travail des ateliers
                    parisiens du milieu du siècle… »
                  </p>
                  <p className="etude-verdict etude-verdict-or">
                    Datation argumentée, matériaux nommés, contexte d&apos;atelier :
                    l&apos;acheteur comprend ce qu&apos;il paie.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ CHAPITRE V — LE MÉDIA ═══════════ */}
        <section className="section section-nuit" id="media">
          <div className="container media-grid">
            <Reveal>
              <div>
                <ChapterHead numero="V" titre="Le média" light />
                <h2 className="section-titre section-titre-light">
                  Lila <em>D&apos;Algarve</em>
                </h2>
                <p className="media-texte">
                  Notre regard rendu public : un média éditorial consacré au
                  mobilier ancien et aux arts décoratifs. Pièces de collections
                  publiques, détails d&apos;atelier, objets choisis — la preuve,
                  publiée trois fois par semaine, que la précision peut être
                  belle.
                </p>
                <p className="media-texte media-texte-sec">
                  Les pièces travaillées avec nos clients peuvent y être
                  présentées à une audience de collectionneurs.
                </p>
                <a
                  href="https://www.instagram.com/liladalgarve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-filet btn-clair"
                >
                  Suivre sur Instagram
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="media-carte">
                <img
                  src="/Lila-D-Algarve.png"
                  alt="Lila D'Algarve"
                  className="media-logo"
                />
                <div className="media-piliers">
                  {[
                    ["Le regard", "pièces de collections publiques"],
                    ["La pièce", "objets choisis, disponibles"],
                    ["Le détail", "ce que l'œil néglige"],
                  ].map(([t, d], i) => (
                    <div className="media-pilier" key={i}>
                      <h5>{t}</h5>
                      <p>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE VI — CONTACT ═══════════ */}
        <section className="section" id="contact">
          <div className="container contact-grid">
            <Reveal>
              <div>
                <ChapterHead numero="VI" titre="Contact" />
                <h2 className="section-titre">
                  Commencer par
                  <br />
                  <em>un regard sur votre catalogue.</em>
                </h2>
                <p className="section-intro">
                  Décrivez votre structure et votre fonds en quelques lignes.
                  Réponse sous 48 h, avec un premier avis — franc — sur ce
                  qu&apos;un audit pourrait vous apprendre.
                </p>
                <div className="faq-list">
                  {FAQ.map((f, i) => (
                    <div className="faq-item" key={i}>
                      <button
                        className="faq-toggle"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        {f.q}
                        <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                      </button>
                      {openFaq === i && <p className="faq-answer">{f.a}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <form className="formulaire" onSubmit={handleSubmit}>
                <label>
                  Nom
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>
                <label>
                  Structure (galerie, maison de vente, marchand…)
                  <input
                    type="text"
                    value={formData.structure}
                    onChange={(e) => setFormData({ ...formData, structure: e.target.value })}
                  />
                </label>
                <label>
                  Taille du catalogue (approximative)
                  <input
                    type="text"
                    value={formData.pieces}
                    onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
                  />
                </label>
                <label>
                  Votre situation, vos objectifs
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </label>
                <button type="submit" className="btn btn-plein btn-large">
                  Envoyer la demande
                </button>
                {formStatus === "sent" && (
                  <p className="form-confirmation">
                    Votre client email s&apos;est ouvert avec la demande préparée —
                    il ne reste qu&apos;à envoyer.
                  </p>
                )}
                <p className="form-direct">
                  Ou directement :{" "}
                  <a href="mailto:contact.atelierprovenance@gmail.com">
                    contact.atelierprovenance@gmail.com
                  </a>
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-marque">
            <Losange />
            <p className="footer-nom">Atelier Provenance</p>
            <p className="footer-ligne">
              La valeur de vos objets, rendue lisible.
            </p>
          </div>
          <div className="footer-liens">
            <a href="#constat">Le constat</a>
            <a href="#methode">La méthode</a>
            <a href="#parcours">Le parcours</a>
            <a href="#media">Lila D&apos;Algarve</a>
          </div>
          <div className="footer-legal-bloc">
            <a href="/mentions-legales" className="footer-legal">Mentions légales</a>
            <span className="footer-legal-sep">·</span>
            <a href="/cgv" className="footer-legal">CGV</a>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Atelier Provenance
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
