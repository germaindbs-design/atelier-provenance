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
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const faqs = [
    { q: "Que contient exactement une notice ?", a: "Une notice comprend un texte principal (description valorisante de l\u0027objet), les dimensions, la datation, l\u0027origine quand elle est identifiable, et un positionnement par rapport au marché. Le tout est livré prêt à copier-coller sur votre plateforme." },
    { q: "Comment se passe la commande ?", a: "Vous m\u0027envoyez des photos de l\u0027objet, ses dimensions, et les informations dont vous disposez via le formulaire. Je vous recontacte sous 24 h pour confirmer la commande et le délai." },
    { q: "Quel est le délai de livraison ?", a: "5 jours ouvrés pour une notice unique, 7 jours pour un pack de 5. Les catalogues font l\u0027objet d\u0027un planning sur mesure." },
    { q: "Et si le texte ne me convient pas ?", a: "Une révision est incluse dans chaque notice. Vous pouvez demander des ajustements de ton, de longueur ou de détails sans surcoût." },
    { q: "La première notice est vraiment offerte ?", a: "Oui. Vous m\u0027envoyez un objet, je rédige la notice, vous jugez du résultat. Aucun engagement, aucune carte bancaire." },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Demande — " + (formData.name || "Nouveau prospect")
    );
    const body = encodeURIComponent(
      "Nom : " + formData.name + "\nEmail : " + formData.email + "\nTéléphone : " + formData.phone + "\nPlateforme : " + formData.platform + "\nNombre de pièces : " + formData.pieces + "\n\nMessage :\n" + formData.message
    );
    window.location.href = "mailto:contact.atelierprovenance@gmail.com?subject=" + subject + "&body=" + body;
    setFormStatus("sent");
  };
  
  return (
    <>
      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
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
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="hero">
          <div className="hero-bg" style={{ transform: `translateY(${heroOffset}px)` }} />
          <div className="hero-grain" />
          <div className="container hero-grid">
            <Reveal>
              <div>
                <p className="eyebrow">Atelier Provenance</p>
                <h1>Vos pièces ont une valeur.<br /><em>Il reste à la rendre lisible.</em></h1>
                <p className="intro">
                  Rédaction de notices pour le mobilier de collection et les objets d&apos;art.
                  Chaque texte est construit pour soutenir le prix, clarifier l&apos;objet et le
                  rendre véritablement désirable — pas seulement visible.
                </p>
                <div className="actions">
                  <a href="#contact" className="button button-primary button-arrow">Envoyer un objet à analyser</a>
                  <a href="#offres" className="button button-secondary">Voir les prestations</a>
                </div>
                <p className="hero-free">Première notice offerte, sans engagement.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="hero-panel">
                <div className="hero-card">
                  <p className="hero-label">En bref</p>
                  <ul className="hero-list">
                    <li><span className="list-icon">◆</span> Analyse du marché et du positionnement prix</li>
                    <li><span className="list-icon">◆</span> Vocabulaire juste, ton adapté à votre clientèle</li>
                    <li><span className="list-icon">◆</span> Formats prêts à publier sur tous vos canaux</li>
                    <li><span className="list-icon">◆</span> Livraison sous 5 jours ouvrés</li>
                    <li><span className="list-icon">◆</span> Première notice offerte</li>
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
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="stat-grid">
                  <div className="stat-card">
                    <p className="stat-number">70 %</p>
                    <p className="stat-label">des annonces haut de gamme sans contexte historique</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-number">3×</p>
                    <p className="stat-label">plus de clics sur une annonce bien rédigée</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-number">+40 %</p>
                    <p className="stat-label">de marge possible avec un positionnement juste</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-number">5 jours</p>
                    <p className="stat-label">délai moyen de livraison d&apos;une notice</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ APPROCHE ═══════════════════════ */}
        <section className="section" id="approche">
          <div className="container container-narrow text-center">
            <Reveal>
              <p className="eyebrow">L&apos;approche</p>
              <h2>Chaque notice suit un processus rigoureux en quatre étapes.</h2>
            </Reveal>
          </div>
          <div className="container steps-grid">
            {[
              { num: "01", title: "Analyse de l'objet", desc: "Étude des photos, dimensions, matériaux, époque. Identification des points forts et des éléments différenciants." },
              { num: "02", title: "Recherche contextuelle", desc: "Vérification des références stylistiques, comparaison avec des pièces similaires vendues, positionnement prix." },
              { num: "03", title: "Rédaction de la notice", desc: "Écriture d'un texte structuré qui valorise l'objet, clarifie son origine et justifie le prix demandé." },
              { num: "04", title: "Livraison & ajustements", desc: "Envoi du texte prêt à publier. Une révision incluse pour ajuster le ton ou les détails si nécessaire." },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="step-card">
                  <span className="step-num">{step.num}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

{/* ═══════════════════════ OFFRES ═══════════════════════ */}
<section className="section border-top" id="offres">
  <div className="container container-narrow text-center">
    <Reveal>
      <p className="eyebrow">Prestations</p>
      <h2>Des formats adaptés à chaque besoin.</h2>
    </Reveal>
  </div>
  <div className="container offers-grid">
    {[
      {
        name: "Première lecture",
        price: "450 €",
        unit: "3 notices incluses",
        desc: "Pour découvrir le service et mesurer l'impact sur vos premières pièces.",
        features: ["3 notices complètes", "Recherche contextuelle par pièce", "1 révision par notice", "Livraison sous 7 jours"],
        cta: "Commencer avec 3 notices",
        featured: false,
      },
      {
        name: "Ensemble",
        price: "1 200 €",
        unit: "10 notices — soit 120 € / pièce",
        desc: "Pour les vendeurs réguliers qui veulent un catalogue cohérent et efficace.",
        features: ["10 notices complètes", "Ligne éditoriale unifiée", "Recherche contextuelle par pièce", "1 révision par notice", "Livraison échelonnée sous 15 jours"],
        cta: "Choisir ce pack",
        featured: true,
      },
      {
        name: "Catalogue",
        price: "Sur devis",
        unit: "à partir de 20 pièces",
        desc: "Pour les marchands et galeries qui veulent professionnaliser l'ensemble de leur inventaire.",
        features: ["Notices complètes par pièce", "Tarif dégressif selon volume", "Ligne éditoriale sur mesure", "Formats multiples (web, print, foire)", "Interlocuteur unique"],
        cta: "Demander un devis",
        featured: false,
      },
    ].map((offer, i) => (
      <Reveal key={i} delay={i * 120}>
        <div className={`offer-card ${offer.featured ? "offer-featured" : ""}`}>
          {offer.featured && <span className="offer-badge">Recommandé</span>}
          <h3 className="offer-name">{offer.name}</h3>
          <p className="offer-price">{offer.price}</p>
          <p className="offer-unit">{offer.unit}</p>
          <p className="offer-desc">{offer.desc}</p>
          <ul className="offer-features">
            {offer.features.map((f, j) => (
              <li key={j}><span className="check">✓</span> {f}</li>
            ))}
          </ul>
          <a href="#contact" className={`button offer-cta ${offer.featured ? "button-primary" : "button-secondary"}`}>
            {offer.cta}
          </a>
        </div>
      </Reveal>
    ))}
  </div>

  {/* ── Services complémentaires ── */}
  <div className="container" style={{ marginTop: "64px" }}>
    <Reveal>
      <div className="container-narrow text-center" style={{ marginBottom: "40px" }}>
        <p className="eyebrow">En complément</p>
        <h3>Services annexes</h3>
      </div>
    </Reveal>
    <div className="steps-grid">
      {[
        {
          title: "Formation en rédaction",
          price: "200 € / personne",
          desc: "Apprenez à rédiger des notices efficaces pour vos pièces courantes. Idéal pour les équipes de galeries et les vendeurs autonomes.",
        },
        {
          title: "Audit de catalogue",
          price: "300 €",
          desc: "Analyse complète de vos fiches existantes avec recommandations concrètes : structure, vocabulaire, positionnement prix.",
        },
        {
          title: "Forfait galerie",
          price: "Sur devis",
          desc: "Rédaction mensuelle de fiches pour les galeries. Un flux régulier, un ton constant, une charge mentale en moins.",
        },
      ].map((s, i) => (
        <Reveal key={i} delay={i * 100}>
          <div className="step-card">
            <h4 style={{ marginBottom: "4px" }}>{s.title}</h4>
            <p style={{ color: "#c8956c", fontWeight: 600, fontSize: "0.95rem", marginBottom: "12px" }}>{s.price}</p>
            <p style={{ fontSize: "0.88rem", color: "#5c4f3a" }}>{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>

  <Reveal delay={100}>
    <div className="container">
      <div className="offer-guarantee">
        Première notice offerte — vous jugez sur pièce, sans engagement.
      </div>
    </div>
  </Reveal>
</section>

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
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Demande — " + (formData.name || "Nouveau prospect")
    );
    const body = encodeURIComponent(
      "Nom : " + formData.name + "\nEmail : " + formData.email + "\nTéléphone : " + formData.phone + "\nPlateforme : " + formData.platform + "\nNombre de pièces : " + formData.pieces + "\n\nMessage :\n" + formData.message
    );
    window.location.href = "mailto:contact.atelierprovenance@gmail.com?subject=" + subject + "&body=" + body;
    setFormStatus("sent");
  };

  const faqs = [
    { q: "Que contient exactement une notice ?", a: "Une notice comprend un texte principal (description valorisante de l'objet), les dimensions, la datation, l'origine quand elle est identifiable, et un positionnement par rapport au marché. Le tout est livré prêt à copier-coller sur votre plateforme." },
    { q: "Comment se passe la commande ?", a: "Vous m'envoyez des photos de l'objet, ses dimensions, et les informations dont vous disposez via le formulaire. Je vous recontacte sous 24 h pour confirmer la commande et le délai." },
    { q: "Quel est le délai de livraison ?", a: "5 jours ouvrés pour une notice unique, 7 jours pour un pack de 5. Les catalogues font l'objet d'un planning sur mesure." },
    { q: "Et si le texte ne me convient pas ?", a: "Une révision est incluse dans chaque notice. Vous pouvez demander des ajustements de ton, de longueur ou de détails sans surcoût." },
    { q: "La première notice est vraiment offerte ?", a: "Oui. Vous m'envoyez un objet, je rédige la notice, vous jugez du résultat. Aucun engagement, aucune carte bancaire." },
  ];

  return (
    <>
      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
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
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="hero">
          <div className="hero-bg" style={{ transform: `translateY(${heroOffset}px)` }} />
          <div className="hero-grain" />
          <div className="container hero-grid">
            <Reveal>
              <div>
                <p className="eyebrow">Atelier Provenance</p>
                <h1>Vos pièces ont une valeur.<br /><em>Il reste à la rendre lisible.</em></h1>
                <p className="intro">
                  Rédaction de notices pour le mobilier de collection et les objets d&apos;art.
                  Chaque texte est construit pour soutenir le prix, clarifier l&apos;objet et le
                  rendre véritablement désirable — pas seulement visible.
                </p>
                <div className="actions">
                  <a href="#contact" className="button button-primary button-arrow">Envoyer un objet à analyser</a>
                  <a href="#offres" className="button button-secondary">Voir les prestations</a>
                </div>
                <p className="hero-free">Première notice offerte, sans engagement.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="hero-panel">
                <div className="hero-card">
                  <p className="hero-label">En bref</p>
                  <ul className="hero-list">
                    <li><span className="list-icon">◆</span> Analyse du marché et du positionnement prix</li>
                    <li><span className="list-icon">◆</span> Vocabulaire juste, ton adapté à votre clientèle</li>
                    <li><span className="list-icon">◆</span> Formats prêts à publier sur tous vos canaux</li>
                    <li><span className="list-icon">◆</span> Livraison sous 5 jours ouvrés</li>
                    <li><span className="list-icon">◆</span> Première notice offerte</li>
                  </ul>
                </div>
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
                  Chaque exemple part d&apos;une annonce réelle trouvée en ligne et montre
                  ce que la rédaction change — sur la lisibilité, la désirabilité,
                  la cohérence avec le prix affiché.
                </p>
              </div>
            </Reveal>

            <div className="examples-stack">
              {/* EXEMPLE 1 */}
              <Reveal>
                <article className={`case-study ${openExample === 0 ? "is-open" : ""}`}>
                  <button className="case-toggle" onClick={() => setOpenExample(openExample === 0 ? null : 0)}>
                    <div className="case-toggle-left">
                      <p className="case-meta">Exemple 1 · Enfilade scandinave, circa 1960</p>
                      <h3>Passer d&apos;une description plate à un texte qui justifie le prix.</h3>
                      <div className="case-specs">
                        <span>Prix affiché : 1 850 €</span>
                        <span>Teck · laiton · 200 cm</span>
                        <span>Plateforme : Selency</span>
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
                            Enfilade scandinave en teck des années 60, bon état
                            avec quelques traces d&apos;usage. 3 portes coulissantes,
                            pieds compas. L 200 × P 45 × H 82 cm. Idéale pour
                            un salon ou une salle à manger.
                          </p>
                        </div>
                        <div className="text-panel after-panel">
                          <p className="panel-label">Après</p>
                          <p>
                            Enfilade à trois corps en teck massif, Danemark, circa 1960.
                            Le modèle reprend les codes du design scandinave de la période —
                            lignes basses, façade rythmée par trois portes coulissantes et
                            piètement fuselé en compas — avec une qualité d&apos;exécution
                            qui suggère une production d&apos;atelier plutôt qu&apos;une fabrication
                            en grande série.
                          </p>
                          <p>
                            Les poignées en laiton patiné apportent un contrepoint chaleureux
                            au veinage du teck. L&apos;intérieur offre un rangement généreux.
                            Quelques traces d&apos;usage témoignent d&apos;une pièce vécue,
                            sans altérer la solidité ni l&apos;allure de l&apos;ensemble.
                          </p>
                          <p>L 200 × P 45 × H 82 cm · Danemark, circa 1960.</p>
                        </div>
                      </div>
                      <div className="case-analysis">
                        <p className="panel-label">Ce qui change</p>
                        <ul>
                          <li>L&apos;origine géographique et la datation ancrent l&apos;objet dans une histoire.</li>
                          <li>Le vocabulaire technique (piètement fuselé, façade rythmée) crédibilise la pièce.</li>
                          <li>L&apos;usure devient un argument (patine, vécu, caractère) au lieu d&apos;un défaut à excuser.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>

              {/* EXEMPLE 2 */}
              <Reveal>
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
                          <p className="panel-label">Après</p>
                          <p>
                            Suite de trois chaises en métal laqué noir et velours vert amande,
                            France, années 1950. L&apos;assise enveloppante et le dossier légèrement
                            incurvé évoquent les productions des ateliers français d&apos;après-guerre,
                            où le confort domestique commençait à dialoguer avec les formes industrielles.
                          </p>
                          <p>
                            Le velours a été nettoyé — il conserve un tombé souple et une teinte
                            cohérente sur les trois assises. La structure métallique porte quelques
                            marques d&apos;usage qui n&apos;altèrent ni la stabilité ni l&apos;élégance d&apos;ensemble.
                          </p>
                          <p>H 83 × L 60 × P 53 cm · France, années 1950.</p>
                        </div>
                      </div>
                      <div className="case-analysis">
                        <p className="panel-label">Ce qui change</p>
                        <ul>
                          <li>Le lot devient une « suite » — un terme qui suggère la cohérence et la rareté.</li>
                          <li>L&apos;usure devient un argument (patine, vécu, caractère) au lieu d&apos;un défaut à excuser.</li>
                          <li>La datation et l&apos;origine sont précisées — elles justifient le prix.</li>
                          <li>Le texte s&apos;adresse à un acheteur qui cherche de l&apos;authenticité, pas du neuf.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>

              {/* EXEMPLE 3 */}
              <Reveal>
                <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                  <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
                    <div className="case-toggle-left">
                      <p className="case-meta">Exemple 3 · Bureau ministre Art déco, circa 1935</p>
                      <h3>Donner à un meuble classique la présentation qu&apos;il mérite.</h3>
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
                            Bureau ministre Art déco en palissandre, années 30.
                            4 tiroirs, poignées laiton. Restauré. Bon état.
                            H 78 × L 140 × P 72 cm. Prix : 2 200 €.
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
                          <li>Le titre seul donne envie de lire — il est informatif et évocateur.</li>
                          <li>La restauration devient un gage de sérieux, pas un aveu de faiblesse.</li>
                          <li>Le texte installe une atmosphère — l&apos;acheteur se projette.</li>
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
        <section className="section border-top" id="parcours">
          <div className="container split">
            <Reveal>
              <div>
                <p className="eyebrow">À propos</p>
                <h2>Qui rédige vos notices.</h2>
                <p>
                  Passionné de mobilier ancien et formé à l&apos;histoire de l&apos;art, je travaille
                  depuis plusieurs années à la croisée du marché de l&apos;art et de la rédaction
                  spécialisée. Mon approche combine rigueur documentaire et sensibilité
                  commerciale.
                </p>
                <p>
                  Chaque objet mérite un texte qui lui rend justice. Pas un argumentaire
                  marketing, mais une description honnête, précise et engageante —
                  le genre de texte qui donne confiance à l&apos;acheteur et fierté au vendeur.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="about-highlights">
                <div className="highlight-card">
                  <p className="highlight-number">200+</p>
                  <p className="highlight-label">notices rédigées</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-number">50+</p>
                  <p className="highlight-label">vendeurs accompagnés</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-number">98 %</p>
                  <p className="highlight-label">de clients satisfaits</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ FAQ ═══════════════════════ */}
        <section className="section" id="faq">
          <div className="container container-narrow">
            <Reveal>
              <div className="text-center">
                <p className="eyebrow">Questions fréquentes</p>
                <h2>Tout ce que vous devez savoir.</h2>
              </div>
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`faq-item ${openFaq === i ? "faq-open" : ""}`}>
                    <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{faq.q}</span>
                      <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && <div className="faq-answer"><p>{faq.a}</p></div>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CONTACT ═══════════════════════ */}
        <section className="section border-top" id="contact">
          <div className="container container-narrow">
            <Reveal>
              <div className="text-center">
                <p className="eyebrow">Contact</p>
                <h2>Envoyez-moi un objet à analyser.</h2>
                <p className="section-intro">
                  Première notice offerte. Décrivez votre pièce ou votre besoin,
                  je vous recontacte sous 24 h.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="form-wrap">
                {formStatus === "sent" ? (
                  <div className="form-success">
                    <p className="form-success-icon">✓</p>
                    <p className="form-success-title">Message envoyé</p>
                    <p>Je vous recontacte sous 24 h. Merci pour votre confiance.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="name">Nom</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onBlur={() => markTouched("name")}
                          className={touched.name && formData.name.length > 0 ? "field-valid" : ""}
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
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onBlur={() => markTouched("email")}
                          className={touched.email && isValidEmail(formData.email) ? "field-valid" : touched.email ? "field-invalid" : ""}
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
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="platform">Plateforme de vente</label>
                        <input
                          id="platform"
                          type="text"
                          placeholder="Selency, Proantic, Leboncoin…"
                          value={formData.platform}
                          onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="pieces">Nombre de pièces à rédiger</label>
                      <input
                        id="pieces"
                        type="text"
                        placeholder="1, 5, 10…"
                        value={formData.pieces}
                        onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="message">Décrivez votre besoin</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Décrivez l'objet, joignez des photos si possible, précisez vos attentes…"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onBlur={() => markTouched("message")}
                        className={touched.message && formData.message.length > 0 ? "field-valid" : ""}
                      />
                    </div>
                    <button type="submit" className="button button-primary button-arrow">Envoyer</button>
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
            <p className="footer-copy">© {new Date().getFullYear()} — Rédaction de mobilier de collection</p>
          </div>
          <div className="footer-right">
            <a href="mailto:contact.atelierprovenance@gmail.com" className="footer-email">contact.atelierprovenance@gmail.com</a>
            <a href="tel:+33751420733" className="footer-phone">07 51 42 07 33</a>
          </div>
        </div>
      </footer>Vous avez raison. Le fichier est trop long pour un seul message. Je vais le découper en 3 parties que vous collerez l'une après l'autre dans le même fichier app/page.tsx.

PARTIE 1 — Collez ceci en premier :
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
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Demande — " + (formData.name || "Nouveau prospect")
    );
    const body = encodeURIComponent(
      "Nom : " + formData.name + "\nEmail : " + formData.email + "\nTéléphone : " + formData.phone + "\nPlateforme : " + formData.platform + "\nNombre de pièces : " + formData.pieces + "\n\nMessage :\n" + formData.message
    );
    window.location.href = "mailto:contact.atelierprovenance@gmail.com?subject=" + subject + "&body=" + body;
    setFormStatus("sent");
  };

  const faqs = [
    { q: "Que contient exactement une notice ?", a: "Une notice comprend un texte principal (description valorisante de l'objet), les dimensions, la datation, l'origine quand elle est identifiable, et un positionnement par rapport au marché. Le tout est livré prêt à copier-coller sur votre plateforme." },
    { q: "Comment se passe la commande ?", a: "Vous m'envoyez des photos de l'objet, ses dimensions, et les informations dont vous disposez via le formulaire. Je vous recontacte sous 24 h pour confirmer la commande et le délai." },
    { q: "Quel est le délai de livraison ?", a: "5 jours ouvrés pour une notice unique, 7 jours pour un pack de 5. Les catalogues font l'objet d'un planning sur mesure." },
    { q: "Et si le texte ne me convient pas ?", a: "Une révision est incluse dans chaque notice. Vous pouvez demander des ajustements de ton, de longueur ou de détails sans surcoût." },
    { q: "La première notice est vraiment offerte ?", a: "Oui. Vous m'envoyez un objet, je rédige la notice, vous jugez du résultat. Aucun engagement, aucune carte bancaire." },
  ];

  return (
    <>
      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
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
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="hero">
          <div className="hero-bg" style={{ transform: `translateY(${heroOffset}px)` }} />
          <div className="hero-grain" />
          <div className="container hero-grid">
            <Reveal>
              <div>
                <p className="eyebrow">Atelier Provenance</p>
                <h1>Vos pièces ont une valeur.<br /><em>Il reste à la rendre lisible.</em></h1>
                <p className="intro">
                  Rédaction de notices pour le mobilier de collection et les objets d&apos;art.
                  Chaque texte est construit pour soutenir le prix, clarifier l&apos;objet et le
                  rendre véritablement désirable — pas seulement visible.
                </p>
                <div className="actions">
                  <a href="#contact" className="button button-primary button-arrow">Envoyer un objet à analyser</a>
                  <a href="#offres" className="button button-secondary">Voir les prestations</a>
                </div>
                <p className="hero-free">Première notice offerte, sans engagement.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="hero-panel">
                <div className="hero-card">
                  <p className="hero-label">En bref</p>
                  <ul className="hero-list">
                    <li><span className="list-icon">◆</span> Analyse du marché et du positionnement prix</li>
                    <li><span className="list-icon">◆</span> Vocabulaire juste, ton adapté à votre clientèle</li>
                    <li><span className="list-icon">◆</span> Formats prêts à publier sur tous vos canaux</li>
                    <li><span className="list-icon">◆</span> Livraison sous 5 jours ouvrés</li>
                    <li><span className="list-icon">◆</span> Première notice offerte</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        
      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
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

      {/* ═══════════════════════ STYLES ═══════════════════════ */}
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: Georgia, "Times New Roman", Times, serif;
          color: #1a1613;
          background: #f6efe4;
          line-height: 1.7;
          font-size: 16px;
          overflow-x: hidden;
        }
        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .container-narrow { max-width: 780px; }
        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }
        em { font-style: italic; }
        .text-center { text-align: center; }
        .border-top { border-top: 1px solid rgba(200, 149, 108, 0.2); }

        /* ── BUTTONS ── */
        .button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .button-primary {
          background: #b8854e;
          color: #fff;
        }
        .button-primary:hover { background: #a3733f; }
        .button-secondary {
          background: transparent;
          color: #1a1613;
          border: 1px solid #c8956c;
        }
        .button-secondary:hover { background: rgba(200, 149, 108, 0.1); }
        .button-sm { padding: 10px 20px; font-size: 0.8rem; }
        .button-arrow::after { content: "→"; transition: transform 0.3s; }
        .button-arrow:hover::after { transform: translateX(4px); }

        /* ── NAV ── */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: all 0.4s;
        }
        .nav-scrolled {
          background: rgba(246, 239, 228, 0.95);
          backdrop-filter: blur(12px);
          padding: 14px 0;
          box-shadow: 0 1px 0 rgba(200, 149, 108, 0.15);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-size: 1.15rem;
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a:not(.button) {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          position: relative;
          transition: color 0.3s;
        }
        .nav-links a:not(.button)::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c8956c;
          transition: width 0.3s;
        }
        .nav-links a:not(.button):hover::after { width: 100%; }
        .nav-links a:not(.button):hover { color: #c8956c; }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #1a1613;
          transition: transform 0.3s;
        }
        .mobile-toggle:hover { transform: scale(1.1); }

        /* ── HERO ── */
        .hero {
          position: relative;
          padding: 160px 0 100px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: -60px;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(ellipse at 75% 20%, rgba(200, 149, 108, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(184, 122, 60, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(218, 175, 120, 0.06) 0%, transparent 70%);
          z-index: 0;
          will-change: transform;
        }
        .hero-grain {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          z-index: 1;
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero h1 {
          font-size: 3.1rem;
          font-weight: 400;
          line-height: 1.18;
          margin-bottom: 24px;
        }
        .eyebrow {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b8854e;
          margin-bottom: 16px;
          font-weight: 600;
        }
        .intro {
          font-size: 1.08rem;
          color: #5c4f3a;
          margin-bottom: 32px;
          max-width: 540px;
        }
        .actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }
        .hero-free {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          color: #8a7a62;
          font-style: italic;
        }
        .hero-panel { display: flex; justify-content: flex-end; }
        .hero-card {
          background: #1a1613;
          color: #f6efe4;
          padding: 40px;
          max-width: 400px;
          width: 100%;
        }
        .hero-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c8956c;
          margin-bottom: 20px;
        }
        .hero-list { display: flex; flex-direction: column; gap: 14px; }
        .hero-list li {
          font-size: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
        }
        .list-icon { color: #c8956c; font-size: 0.5rem; margin-top: 6px; flex-shrink: 0; }

        /* ── SECTIONS ── */
        .section { padding: 100px 0; }
        .section-head { text-align: center; margin-bottom: 60px; }
        .section-head h2 { margin-bottom: 16px; }
        .section-intro { font-size: 1.02rem; color: #5c4f3a; max-width: 600px; margin: 0 auto; }
        h2 { font-size: 2.2rem; font-weight: 400; line-height: 1.25; }
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .split p { color: #5c4f3a; margin-bottom: 16px; }

        /* ── STATS ── */
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-card {
          background: #1a1613;
          color: #f6efe4;
          padding: 28px;
          text-align: center;
        }
        .stat-number { font-size: 2rem; font-weight: 400; color: #d4a574; margin-bottom: 4px; }
        .stat-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #a89880; line-height: 1.4; }

        /* ── STEPS ── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .step-card {
          background: #fff;
          border: 1px solid rgba(200, 149, 108, 0.15);
          padding: 32px 24px;
        }
        .step-num {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: #c8956c;
          display: block;
          margin-bottom: 16px;
        }
        .step-title { font-size: 1.05rem; font-weight: 600; margin-bottom: 12px; }
        .step-desc { font-size: 0.88rem; color: #5c4f3a; line-height: 1.6; }

        /* ── OFFERS ── */
        .offers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .offer-card {
          background: #fff;
          border: 1px solid rgba(200, 149, 108, 0.15);
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .offer-featured {
          background: #1a1613;
          color: #f6efe4;
          border-color: #2a2520;
        }
        .offer-badge {
          position: absolute;
          top: -12px;
          left: 28px;
          background: #c8956c;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 14px;
        }
        .offer-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .offer-price { font-size: 2rem; font-weight: 400; margin-bottom: 2px; color: #c8956c; }
        .offer-featured .offer-price { color: #d4a574; }
        .offer-unit {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem;
          color: #8a7a62;
          margin-bottom: 16px;
        }
        .offer-desc { font-size: 0.92rem; color: #5c4f3a; margin-bottom: 24px; line-height: 1.6; }
        .offer-featured .offer-desc { color: #a89880; }
        .offer-features { margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px; }
        .offer-features li { font-size: 0.88rem; display: flex; align-items: flex-start; gap: 8px; }
        .check { color: #c8956c; font-weight: 700; flex-shrink: 0; }
        .offer-featured .offer-features li { color: #d4c4a8; }
        .offer-cta { margin-top: auto; text-align: center; justify-content: center; width: 100%; }
        .offer-featured .button-primary:hover { background: #c8956c; }
        .offer-guarantee {
          text-align: center;
          margin-top: 40px;
          padding: 28px;
          border: 1px dashed #c8956c;
          font-size: 0.95rem;
          color: #5c4f3a;
          background: rgba(200, 149, 108, 0.04);
        }

        /* ── EXAMPLES ── */
        .examples-stack { display: flex; flex-direction: column; gap: 20px; margin-top: 48px; }
        .case-study {
          background: #fff;
          border: 1px solid rgba(200, 149, 108, 0.15);
          transition: border-color 0.3s;
        }
        .case-study.is-open { border-color: #c8956c; }
        .case-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 24px;
        }
        .case-toggle-left { flex: 1; }
        .case-meta {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b8854e;
          margin-bottom: 8px;
        }
        .case-toggle h3 { font-size: 1.1rem; font-weight: 400; margin-bottom: 8px; }
        .case-specs {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem;
          color: #8a7a62;
        }
        .case-toggle-icon { font-size: 1.5rem; color: #c8956c; flex-shrink: 0; transition: transform 0.3s; }
        .case-study.is-open .case-toggle-icon { transform: rotate(180deg); }
        .case-body { padding: 0 28px 28px; }
        .case-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .text-panel { padding: 24px; font-size: 0.92rem; line-height: 1.7; }
        .text-panel p { margin-bottom: 12px; }
        .text-panel h4 { font-size: 1rem; font-weight: 600; margin-bottom: 12px; }
        .before-panel { background: #ede4d4; border: 1px solid #dccbb7; }
        .after-panel { background: #1a1613; color: #f6efe4; border: 1px solid #2a2520; }
        .panel-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8854e;
          margin-bottom: 12px;
          display: block;
        }
        .after-panel .panel-label { color: #d4a574; }
        .panel-sublabel {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          color: #8a7a62;
          margin-bottom: 12px;
          font-style: italic;
        }
        .case-analysis {
          background: rgba(200, 149, 108, 0.06);
          border: 1px solid rgba(200, 149, 108, 0.15);
          padding: 24px;
        }
        .case-analysis ul { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
        .case-analysis li {
          font-size: 0.88rem;
          color: #5c4f3a;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .case-analysis li::before { content: "—"; color: #c8956c; flex-shrink: 0; }

        /* ── ABOUT ── */
        .about-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .highlight-card {
          background: #1a1613;
          color: #f6efe4;
          padding: 28px;
          text-align: center;
        }
        .highlight-number { font-size: 2rem; color: #d4a574; margin-bottom: 4px; }
        .highlight-label { font-family: Arial, Helvetica, sans-serif; font-size: 0.78rem; color: #a89880; }

        /* ── FAQ ── */
        .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          background: #fff;
          border: 1px solid rgba(200, 149, 108, 0.15);
          transition: border-color 0.3s;
        }
        .faq-open { border-color: #c8956c; }
        .faq-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 1rem;
          text-align: left;
          gap: 16px;
        }
        .faq-icon { font-size: 1.3rem; color: #c8956c; flex-shrink: 0; }
        .faq-answer { padding: 0 24px 20px; }
        .faq-answer p { font-size: 0.92rem; color: #5c4f3a; line-height: 1.7; }

        /* ── FORM ── */
        .form-wrap {
          background: #fff;
          border: 1px solid rgba(200, 149, 108, 0.15);
          padding: 48px;
          margin-top: 48px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-field { display: flex; flex-direction: column; margin-bottom: 20px; }
        .form-row .form-field { margin-bottom: 0; }
        .form-field label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          color: #5c4f3a;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .form-field input,
        .form-field textarea {
          font-family: Georgia, serif;
          font-size: 0.95rem;
          padding: 14px 16px;
          border: 1px solid #dccbb7;
          background: #faf6f0;
          color: #1a1613;
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
        }
        .form-field input:focus,
        .form-field textarea:focus {
          border-color: #c8956c;
          box-shadow: 0 0 0 3px rgba(200, 149, 108, 0.1);
        }
        .field-valid { border-color: #7a9a6a !important; }
        .field-invalid { border-color: #c0392b !important; }
        .form-success {
          text-align: center;
          padding: 48px 24px;
        }
        .form-success-icon {
          font-size: 2.5rem;
          color: #7a9a6a;
          margin-bottom: 16px;
        }
        .form-success-title {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }
        .form-success p { color: #5c4f3a; }

        /* ── FOOTER ── */
        .footer {
          background: #1a1613;
          color: #f6efe4;
          padding: 48px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-logo { font-size: 1.1rem; margin-bottom: 4px; }
        .footer-copy { font-family: Arial, Helvetica, sans-serif; font-size: 0.75rem; color: #8a7a62; }
        .footer-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
        .footer-email, .footer-phone {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          color: #d4a574;
          transition: color 0.3s;
        }
        .footer-email:hover, .footer-phone:hover { color: #f6efe4; }

        /* ── SCROLL REVEAL ── */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero h1 { font-size: 2.2rem; }
          .hero { padding: 130px 0 70px; }
          .split { grid-template-columns: 1fr; gap: 40px; }
          .steps-grid { grid-template-columns: 1fr 1fr; }
          .offers-grid { grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
          .case-columns { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .form-wrap { padding: 32px 24px; }
          h2 { font-size: 1.7rem; }
          .section { padding: 70px 0; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr; }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(246, 239, 228, 0.98);
backdrop-filter: blur(12px);
flex-direction: column;
padding: 20px 24px;
gap: 12px;
}
