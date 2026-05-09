"use client";

import { useState, useEffect, useRef } from "react";

/* ───────────────────────── HOOK SCROLL REVEAL ───────────────────────── */
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* ───────────────────────── COMPOSANT REVEAL ───────────────────────── */
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

/* ───────────────────────── PAGE ───────────────────────── */
export default function Page() {
  const [openExample, setOpenExample] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    pieces: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [heroOffset, setHeroOffset] = useState(0);
  useEffect(() => {
    const handleParallax = () => setHeroOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const markTouched = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Demande — " + (formData.name || "Nouveau prospect")
    );
    const body = encodeURIComponent(
      "Nom : " +
        formData.name +
        "\nEmail : " +
        formData.email +
        "\nTéléphone : " +
        formData.phone +
        "\nPlateforme : " +
        formData.platform +
        "\nNombre de pièces : " +
        formData.pieces +
        "\n\nMessage :\n" +
        formData.message
    );
    window.location.href =
      "mailto:contact.atelierprovenance@gmail.com?subject=" +
      subject +
      "&body=" +
      body;
    setFormStatus("sent");
  };

  return (
    <>
      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <img
              src="/Logo.png"
              alt="Atelier Provenance"
              className="nav-logo-img"
            />
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${mobileMenu ? "nav-open" : ""}`}>
            <a href="#approche" onClick={() => setMobileMenu(false)}>
              Approche
            </a>
            <a href="#offres" onClick={() => setMobileMenu(false)}>
              Prestations
            </a>
            <a href="#exemples" onClick={() => setMobileMenu(false)}>
              Exemples
            </a>
            <a href="#parcours" onClick={() => setMobileMenu(false)}>
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
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="hero">
          <div
            className="hero-bg"
            style={{ transform: `translateY(${heroOffset}px)` }}
          />
          <div className="hero-grain" />
          <div className="container hero-grid">
            <Reveal>
              <div>
                <p className="eyebrow">Atelier Provenance</p>
                <h1>
                  Vos pièces ont une valeur.
                  <br />
                  <em>Il reste à la rendre lisible.</em>
                </h1>
                <p className="intro">
                  Rédaction de notices pour le mobilier de collection et les
                  objets d&apos;art. Chaque texte est construit pour soutenir le
                  prix, clarifier l&apos;objet et le rendre véritablement
                  désirable — pas seulement visible.
                </p>
                <div className="actions">
                  <a
                    href="#contact"
                    className="button button-primary button-arrow"
                  >
                    Envoyer un objet à analyser
                  </a>
                  <a href="#offres" className="button button-secondary">
                    Voir les prestations
                  </a>
                </div>
                <p className="hero-free">
                  Première notice offerte, sans engagement.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="hero-panel">
                <div className="hero-card">
                  <p className="hero-label">En bref</p>
                  <ul className="hero-list">
                    <li>
                      <span className="list-icon">◆</span> Analyse du marché et
                      du positionnement prix
                    </li>
                    <li>
                      <span className="list-icon">◆</span> Vocabulaire juste,
                      ton adapté à votre clientèle
                    </li>
                    <li>
                      <span className="list-icon">◆</span> Formats prêts à
                      publier sur tous vos canaux
                    </li>
                    <li>
                      <span className="list-icon">◆</span> Livraison sous 5
                      jours ouvrés
                    </li>
                    <li>
                      <span className="list-icon">◆</span> Première notice
                      offerte
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ CONSTAT ═══════════════════════ */}
        <section className="section border-top" id="probleme">
          <div className="container split">
            <Reveal>
              <div>
                <p className="eyebrow">Le constat</p>
                <h2>
                  La plupart des annonces ne sont pas à la hauteur des pièces
                  qu&apos;elles présentent.
                </h2>
                <p>
                  Sur Selency, Proantic, Leboncoin ou Catawiki, des milliers
                  d&apos;objets de qualité restent en ligne pendant des semaines.
                  Pas parce qu&apos;ils manquent de valeur, mais parce que rien dans
                  leur présentation ne permet à l&apos;acheteur de comprendre cette
                  valeur.
                </p>
                <p>
                  Descriptions en deux lignes. Vocabulaire approximatif. Aucun
                  contexte historique. Le prix semble arbitraire. L&apos;acheteur
                  hésite, puis passe à autre chose.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="stat-grid">
                  <div className="stat-card">
                    <p className="stat-number">70 %</p>
                    <p className="stat-label">
                      des annonces haut de gamme sans contexte historique
                    </p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-number">3×</p>
                    <p className="stat-label">
                      plus de vues avec une description structurée
                    </p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-number">45 j.</p>
                    <p className="stat-label">
                      durée moyenne de vente sans texte optimisé
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ APPROCHE ═══════════════════════ */}
        <section className="section section-dark" id="approche">
          <div className="container">
            <Reveal>
              <div className="section-head section-head-light">
                <p className="eyebrow eyebrow-light">L&apos;approche</p>
                <h2>
                  Une notice n&apos;est pas une description.
                  <br />
                  <em>C&apos;est un argument de vente.</em>
                </h2>
                <p className="section-intro section-intro-light">
                  Décrire un meuble, tout le monde peut le faire. Donner à un
                  acheteur les raisons précises de passer à l&apos;acte — c&apos;est un
                  autre métier. Chaque texte est construit pour créer de la
                  clarté, de la confiance, et du désir.
                </p>
              </div>
            </Reveal>
            <div className="pillars">
              {[
                {
                  num: "01",
                  title: "Positionnement",
                  desc: "Analyse du marché, comparables récents, cohérence entre le prix et le discours.",
                },
                {
                  num: "02",
                  title: "Précision",
                  desc: "Vocabulaire technique juste — époque, style, matériaux, provenance. Pas d'à-peu-près.",
                },
                {
                  num: "03",
                  title: "Narration",
                  desc: "Chaque pièce a une histoire. Le texte la rend lisible, mémorable, désirable.",
                },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="pillar-card">
                    <span className="pillar-num">{p.num}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ PROCESSUS ═══════════════════════ */}
        <section className="section border-top" id="processus">
          <div className="container split">
            <Reveal>
              <div>
                <p className="eyebrow">Fonctionnement</p>
                <h2>
                  Un processus simple,
                  <br />
                  <em>un résultat précis.</em>
                </h2>
                <p>
                  Chaque mission suit le même protocole — parce que la rigueur
                  est ce qui sépare un bon texte d&apos;un texte à peu près.
                </p>
              </div>
            </Reveal>
            <div>
              <div className="process-steps">
                {[
                  {
                    num: "01",
                    title: "Réception",
                    desc: "Photos, contexte, prix envisagé — vous envoyez, nous analysons.",
                  },
                  {
                    num: "02",
                    title: "Recherche",
                    desc: "Comparables, historique, provenance.",
                  },
                  {
                    num: "03",
                    title: "Rédaction",
                    desc: "Texte structuré, vocabulaire précis, ton adapté.",
                  },
                  {
                    num: "04",
                    title: "Déclinaison",
                    desc: "Notice longue, version courte, version réseaux.",
                  },
                ].map((s, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="process-step">
                      <span className="step-num">{s.num}</span>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ OFFRES ═══════════════════════ */}
        <section className="section section-alt border-top" id="offres">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <p className="eyebrow">Prestations</p>
                <h2>
                  Trois formules,
                  <br />
                  <em>un même niveau d&apos;exigence.</em>
                </h2>
                <p className="section-intro">
                  Chaque formule inclut la recherche, la rédaction et toutes les
                  déclinaisons nécessaires. Pas de supplément caché.
                </p>
              </div>
            </Reveal>
            <div className="offers-grid">
              {/* ── LOT DE 3 — point d'entrée ── */}
              <Reveal delay={0}>
                <div className="offer-card">
                  <h3 className="offer-name">Lot de 3</h3>
                  <p className="offer-price">450 €</p>
                  <p className="offer-unit">point d&apos;entrée · livraison sous 7 jours</p>
                  <p className="offer-desc">
                    Pour découvrir le service sur un premier lot et mesurer
                    concrètement ce que la rédaction change.
                  </p>
                  <ul className="offer-features">
                    {[
                      "3 notices complètes",
                      "Recherche & identification",
                      "Analyse marché / comparables",
                      "Toutes déclinaisons incluses",
                      "Cohérence éditoriale du lot",
                      "Diffusion dans le catalogue Lila D'Algarve",
                    ].map((f, j) => (
                      <li key={j}>
                        <span className="check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="button button-secondary offer-cta"
                  >
                    Commencer par 3 notices
                  </a>
                </div>
              </Reveal>

              {/* ── LOT DE 10 — mis en avant ── */}
              <Reveal delay={120}>
                <div className="offer-card offer-featured">
                  <span className="offer-badge">Recommandé</span>
                  <h3 className="offer-name">Lot de 10</h3>
                  <p className="offer-price">1 200 €</p>
                  <p className="offer-unit">120 € / notice · livraison sous 10 jours</p>
                  <p className="offer-desc">
                    Pour les marchands et galeries qui veulent un catalogue
                    cohérent, avec tarif préférentiel et direction éditoriale.
                  </p>
                  <ul className="offer-features">
                    {[
                      "10 notices complètes",
                      "Recherche & identification",
                      "Analyse marché / comparables",
                      "Toutes déclinaisons incluses",
                      "Alignement éditorial du catalogue",
                      "Interlocuteur unique",
                      "Diffusion dans le catalogue Lila D'Algarve",
                    ].map((f, j) => (
                      <li key={j}>
                        <span className="check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="button button-primary offer-cta"
                  >
                    Choisir ce lot
                  </a>
                </div>
              </Reveal>

              {/* ── CATALOGUE SUR DEVIS ── */}
              <Reveal delay={240}>
                <div className="offer-card">
                  <h3 className="offer-name">Catalogue</h3>
                  <p className="offer-price offer-price-devis">Sur devis</p>
                  <p className="offer-unit">20 pièces ou plus · calendrier sur mesure</p>
                  <p className="offer-desc">
                    Pour un accompagnement complet — harmonisation du ton,
                    direction éditoriale, positionnement prix sur l&apos;ensemble
                    du catalogue.
                  </p>
                  <ul className="offer-features">
                    {[
                      "Notices complètes par pièce",
                      "Harmonisation du ton éditorial",
                      "Direction éditoriale",
                      "Positionnement prix argumenté",
                      "Calendrier et interlocuteur dédiés",
                      "Diffusion dans le catalogue Lila D'Algarve",
                    ].map((f, j) => (
                      <li key={j}>
                        <span className="check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="button button-secondary offer-cta"
                  >
                    Demander un devis
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ── LILA D'ALGARVE CALLOUT ── */}
            <Reveal delay={100}>
              <div className="lda-banner">
                <div className="lda-banner-inner">
                  <div>
                    <p className="lda-eyebrow">Inclus dans toutes les formules</p>
                    <p className="lda-title">
                      Chaque pièce rédigée est publiée dans{" "}
                      <em>Lila D&apos;Algarve</em>
                    </p>
                    <p className="lda-desc">
                      Notre catalogue éditorial diffuse vos notices auprès d&apos;une
                      audience d&apos;acheteurs et de collectionneurs. Un canal de
                      visibilité supplémentaire, sans démarche de votre part.
                    </p>
                  </div>
                  <div className="lda-badge">
                    <img src="/Lila-D-Algarve.png" alt="Lila D'Algarve" className="lda-logo-img" />
                    <span className="lda-badge-sub">Catalogue & réseaux</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="offer-guarantee">
                Première notice offerte — vous jugez sur pièce, sans engagement.
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ EXEMPLES ═══════════════════════ */}
        <section className="section border-top" id="exemples">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <p className="eyebrow">Exemples</p>
                <h2>Trois cas, avant et après.</h2>
                <p className="section-intro">
                  Chaque exemple part d&apos;une annonce réelle trouvée en ligne et
                  montre ce que la rédaction change — sur la lisibilité, la
                  désirabilité, la cohérence avec le prix affiché.
                </p>
              </div>
            </Reveal>

            <div className="examples-stack">

              {/* EXEMPLE 1 — Commode Louis XV */}
              <Reveal>
                <article className={`case-study ${openExample === 0 ? "is-open" : ""}`}>
                  <button className="case-toggle" onClick={() => setOpenExample(openExample === 0 ? null : 0)}>
                    <div className="case-toggle-left">
                      <p className="case-meta">Exemple 1 · Commode galbée Louis XV</p>
                      <h3>Transformer une description générique en notice qui justifie 1 480 €.</h3>
                      <div className="case-specs">
                        <span>Prix affiché : 1 480 €</span>
                        <span>Marqueterie · bronzes · marbre</span>
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
                          <p>Commode galbée de style Louis XV en marqueterie et bois de rose, présentant une silhouette galbée caractéristique. Bon état général. Garnitures présentes. Traces d&apos;usage cohérentes avec son état.</p>
                        </div>
                        <div className="text-panel after-panel">
                          <p className="panel-label">Après</p>
                          <p>Silhouette en arbalète à deux tiroirs sans traverse, la façade entièrement animée par une marqueterie florale d&apos;une densité remarquable : lys, roses et feuillages en médaillon central sur fond de bois de rose en chevrons.</p>
                          <p>Les bronzes dorés — chutes d&apos;angle feuillagées, entrée de serrure rocaille, sabots enroulés — sont d&apos;origine et conservent un bel éclat. Plateau de marbre veiné violet et crème, bords chantournés.</p>
                          <p>Une pièce lisible et bien aboutie, dont la qualité d&apos;exécution la distingue nettement des reproductions ordinaires du même style.</p>
                        </div>
                      </div>
                      <div className="case-analysis">
                        <p className="panel-label">Ce qui change</p>
                        <ul>
                          <li>Le galbe &laquo;&nbsp;en arbalète&nbsp;&raquo; et les tiroirs sans traverse sont nommés — ce sont les marqueurs des meilleures commodes Louis XV.</li>
                          <li>Le marbre et les bronzes d&apos;origine, absents de l&apos;annonce initiale, deviennent des arguments centraux.</li>
                          <li>Le prix de 1 480 € devient cohérent — il est ancré dans des éléments vérifiables.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>

              {/* EXEMPLE 2 — Vase bohémien */}
              <Reveal>
                <article className={`case-study ${openExample === 1 ? "is-open" : ""}`}>
                  <button className="case-toggle" onClick={() => setOpenExample(openExample === 1 ? null : 1)}>
                    <div className="case-toggle-left">
                      <p className="case-meta">Exemple 2 · Grand vase cristal de Bohême</p>
                      <h3>Repositionner une pièce sous-évaluée grâce à une lecture de marché.</h3>
                      <div className="case-specs">
                        <span>Prix affiché : 980 €</span>
                        <span>Cristal cobalt · émaux · or fin</span>
                        <span>Plateforme : Proantic</span>
                      </div>
                    </div>
                    <div className="case-toggle-icon">{openExample === 1 ? "−" : "+"}</div>
                  </button>
                  {openExample === 1 && (
                    <div className="case-body">
                      <div className="case-columns">
                        <div className="text-panel before-panel">
                          <p className="panel-label">Avant</p>
                          <p>Magnifique vase en Cristal de Bohême richement décoré de motifs fleuris, entièrement peint à la main et doré. En parfait état aucun éclat, étiquette d&apos;origine présente. Hauteur 59.5cm.</p>
                        </div>
                        <div className="text-panel after-panel">
                          <p className="panel-label">Après</p>
                          <p>Silhouette balustre à col évasé, cristal soufflé bleu cobalt intense, dorure à l&apos;or fin sur fond brossé mat. Le décor floral — fleurs blanches et feuilles vertes en émaux en relief dans un cartouche ovale — est peint à la main et cuit au four.</p>
                          <p>Format imposant de 59,5 cm. État parfait : aucun éclat, dorure homogène, étiquette d&apos;origine présente. Une pièce qui n&apos;a pas besoin d&apos;être mise en scène pour convaincre.</p>
                        </div>
                      </div>
                      <div className="case-analysis">
                        <p className="panel-label">Ce qui change</p>
                        <ul>
                          <li>L&apos;émaillage à chaud en relief est identifié — c&apos;est ce qui distingue cette pièce des vases décorés par impression.</li>
                          <li>Le format 59,5 cm est mis en avant comme argument : la majorité des vases comparables font 30 à 45 cm.</li>
                          <li>La notice inclut une recommandation de repositionnement à 1 300 – 1 400 €, comparables de marché à l&apos;appui.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>

              {/* EXEMPLE 3 — Miroir Viardot */}
              <Reveal>
                <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                  <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
                    <div className="case-toggle-left">
                      <p className="case-meta">Exemple 3 · Miroir japonisant dans le goût de Gabriel Viardot</p>
                      <h3>Positionner une pièce rare dans son contexte de marché pour défendre un prix élevé.</h3>
                      <div className="case-specs">
                        <span>Prix affiché : 12 000 €</span>
                        <span>Bois sculpté · nacre · dragon</span>
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
                          <p>Rare et exceptionnel Miroir Style Gabriel Viardot à décors Japonisant, Représentant Plusieurs dragons. Fabrication d&apos;époque 1900. Vraiment un magnifique Miroir de belle manufacture, pièce unique. Provient d&apos;une belle demeure.</p>
                        </div>
                        <div className="text-panel after-panel">
                          <p className="panel-label">Après</p>
                          <p>Cadre en bois sculpté à décor japonisant d&apos;une richesse exceptionnelle : dragon en ronde-bosse dont le corps enroulé court sur toute la traverse supérieure, fronton en pagode à double corniche retroussée, panneaux de frise géométrique et incrustations de nacre.</p>
                          <p>Ce vocabulaire ornemental est celui que Gabriel Viardot (1830–1906) a développé et rendu célèbre, primé aux Expositions universelles de 1878 et 1889. Format monumental — environ 220 cm de hauteur. Dans son jus, patine cohérente d&apos;époque.</p>
                        </div>
                      </div>
                      <div className="case-analysis">
                        <p className="panel-label">Ce qui change</p>
                        <ul>
                          <li>Le dragon est décrit précisément — ronde-bosse, corps enroulé, détail des écailles — ce qui trahit la main d&apos;un sculpteur expérimenté.</li>
                          <li>L&apos;attribution à Viardot est contextualisée avec des références historiques vérifiables.</li>
                          <li>La notice recommande un repositionnement à 16 000 – 20 000 € sans expertise, au-delà avec attribution confirmée.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ═══════════════════════ À PROPOS ═══════════════════════ */}
        <section className="section section-alt border-top" id="parcours">
          <div className="container split">
            <Reveal>
              <div>
                <p className="eyebrow">À propos</p>
                <h2>
                  Un regard formé aux textes,
                  <br />
                  <em>exercé sur les objets.</em>
                </h2>
                <p className="about-name">Germain</p>
                <p>
                  Atelier Provenance est né d&apos;un constat simple : les objets
                  qui méritent d&apos;être racontés sont rarement bien racontés.
                </p>
                <p>
                  Le marché de l&apos;art est venu tôt — acheteur et vendeur assez
                  jeune, avant même que ça ait un nom. Une sensibilité aux
                  objets, à ce qu&apos;ils portent, à ce qui fait qu&apos;on s&apos;arrête
                  devant l&apos;un plutôt qu&apos;un autre.
                </p>
                <p>
                  Les études sont venues confirmer autre chose : deux masters —
                  l&apos;un en lettres, l&apos;autre en philosophie — et quelques années
                  d&apos;enseignement dans chacune. Ce qu&apos;on apprend là, c&apos;est à lire
                  un texte jusqu&apos;à ce qu&apos;il cède quelque chose, à chercher ce
                  qui fait sens plutôt que ce qui fait effet, à trouver le mot
                  juste — pas celui qui impressionne.
                </p>
                <p>
                  Atelier Provenance est l&apos;endroit où ces deux trajectoires se
                  rejoignent. Chaque notice est rédigée personnellement — pas de
                  délégation, pas d&apos;automatisation. Un regard, une exigence,
                  un texte.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="about-cards">
                  <div className="about-card">
                    <h4>Marché de l&apos;art</h4>
                    <p>
                      Acheteur et vendeur depuis longtemps. Une connaissance
                      concrète des objets, de leur valeur, et de ce qui fait
                      qu&apos;une pièce trouve preneur.
                    </p>
                  </div>
                  <div className="about-card">
                    <h4>Lettres &amp; philosophie</h4>
                    <p>
                      Deux masters, plusieurs années d&apos;enseignement. Le travail
                      sur la langue, la précision du vocabulaire et la rigueur
                      du raisonnement viennent de là.
                    </p>
                  </div>
                  <div className="about-card">
                    <h4>Rédaction spécialisée</h4>
                    <p>
                      Notices, fiches, catalogues — chaque format a ses règles
                      et ses exigences. Aucune automatisation, chaque texte
                      écrit à la main.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ FAQ ═══════════════════════ */}
        <section className="section border-top" id="faq">
          <div className="container container-narrow">
            <Reveal>
              <div className="section-head">
                <p className="eyebrow">Questions fréquentes</p>
                <h2>Ce que nos clients demandent.</h2>
              </div>
            </Reveal>
            <div className="faq-list">
              {[
                {
                  q: "La première notice est vraiment gratuite ?",
                  a: "Oui. Vous envoyez les photos et les informations, nous rédigeons la notice. Si le résultat vous convient, nous continuons. Sinon, vous gardez le texte — sans contrepartie.",
                },
                {
                  q: "Que comprend exactement une notice ?",
                  a: "Chaque notice inclut la recherche (identification, comparables, contexte historique), la rédaction principale et trois déclinaisons : version longue pour les plateformes spécialisées, version courte pour les annonces généralistes, version adaptée aux réseaux sociaux.",
                },
                {
                  q: "Qu'est-ce que le catalogue Lila D'Algarve ?",
                  a: "Lila D'Algarve est notre catalogue éditorial — un espace où nous diffusons les pièces rédigées auprès d'une audience d'acheteurs et de collectionneurs. Chaque notice publiée y est référencée, vous offrant un canal de visibilité supplémentaire sans démarche de votre part.",
                },
                {
                  q: "Quels types d'objets acceptez-vous ?",
                  a: "Mobilier ancien et vintage, objets d'art, luminaires, céramiques, pièces de design. Si l'objet a une valeur à défendre, nous pouvons écrire dessus.",
                },
                {
                  q: "Quel est le délai de livraison ?",
                  a: "7 jours ouvrés pour un lot de 3, 10 jours pour un lot de 10. Les missions catalogue font l'objet d'un planning sur mesure.",
                },
                {
                  q: "Travaillez-vous avec des particuliers ?",
                  a: "Principalement avec des professionnels — marchands, galeristes, antiquaires, maisons de vente. Mais un particulier qui vend une pièce de qualité est le bienvenu.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="faq-item">
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CONTACT ═══════════════════════ */}
        <section className="section section-dark border-top" id="contact">
          <div className="container split">
            <Reveal>
              <div>
                <p className="eyebrow eyebrow-light">Contact</p>
                <h2>
                  Un objet suffit
                  <br />
                  <em>pour commencer.</em>
                </h2>
                <p>
                  Envoyez-nous les photos et quelques informations sur votre
                  pièce — période, matière, état, prix envisagé. Nous vous
                  répondons sous 48 heures avec la notice rédigée, gratuitement
                  et sans engagement.
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
                    <span className="contact-icon">☏</span>
                    <span>07 51 42 07 33</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                {formStatus === "sent" ? (
                  <div className="form-success">
                    <div className="form-success-icon">✓</div>
                    <h3>Message préparé.</h3>
                    <p>
                      Votre client email s&apos;est ouvert avec les informations
                      pré-remplies. Si ce n&apos;est pas le cas, écrivez-nous
                      directement à contact.atelierprovenance@gmail.com
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="name">Nom</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          onBlur={() => markTouched("name")}
                          className={
                            touched.name && formData.name.length > 0
                              ? "field-valid"
                              : touched.name
                              ? "field-invalid"
                              : ""
                          }
                        />
                      </div>
                      <div className="form-field">
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
                          onBlur={() => markTouched("email")}
                          className={
                            touched.email && isValidEmail(formData.email)
                              ? "field-valid"
                              : touched.email
                              ? "field-invalid"
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="phone">Téléphone</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="06 00 00 00 00"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="platform">Plateforme de vente</label>
                        <input
                          id="platform"
                          type="text"
                          placeholder="Selency, Proantic, Leboncoin…"
                          value={formData.platform}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              platform: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="pieces">Nombre de pièces</label>
                      <input
                        id="pieces"
                        type="text"
                        placeholder="1, 3, 10, catalogue complet…"
                        value={formData.pieces}
                        onChange={(e) =>
                          setFormData({ ...formData, pieces: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="message">Décrivez brièvement vos pièces</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Période, matière, état, prix envisagé…"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onBlur={() => markTouched("message")}
                        className={
                          touched.message && formData.message.length > 0
                            ? "field-valid"
                            : touched.message
                            ? "field-invalid"
                            : ""
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="button button-primary button-arrow"
                    >
                      Envoyer
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-logo">Atelier Provenance</p>
            <p className="footer-copy">
              © {new Date().getFullYear()} — Rédaction de mobilier de collection
            </p>
          </div>
          <div className="footer-center">
            <p className="footer-lda">
              Un projet{" "}
              <span className="footer-lda-name">Lila D&apos;Algarve</span>
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

    </>
  );
}
