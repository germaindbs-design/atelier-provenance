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
                    <p className="stat-label">plus de vues avec une description structurée</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-number">45 j.</p>
                    <p className="stat-label">durée moyenne de vente sans texte optimisé</p>
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
                <h2>Une notice n&apos;est pas une description.<br /><em>C&apos;est un argument de vente.</em></h2>
                <p className="section-intro section-intro-light">
                  Décrire un meuble, tout le monde peut le faire. Donner à un acheteur les raisons
                  précises de passer à l&apos;acte — c&apos;est un autre métier. Chaque texte est
                  construit pour créer de la clarté, de la confiance, et du désir.
                </p>
              </div>
            </Reveal>
            <div className="pillars">
              {[
                { num: "01", title: "Positionnement", desc: "Analyse du marché, comparables récents, cohérence entre le prix et le discours." },
                { num: "02", title: "Précision", desc: "Vocabulaire technique juste — époque, style, matériaux, provenance. Pas d'à-peu-près." },
                { num: "03", title: "Narration", desc: "Chaque pièce a une histoire. Le texte la rend lisible, mémorable, désirable." },
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
                <h2>Un processus simple,<br /><em>un résultat précis.</em></h2>
                <p>
                  Chaque mission suit le même protocole — parce que la rigueur
                  est ce qui sépare un bon texte d&apos;un texte à peu près.
                </p>
              </div>
            </Reveal>
            <div>
              <div className="process-steps">
                {[
                  { num: "01", title: "Réception", desc: "Photos, contexte, prix envisagé — vous envoyez, nous analysons." },
                  { num: "02", title: "Recherche", desc: "Comparables, historique, provenance." },
                  { num: "03", title: "Rédaction", desc: "Texte structuré, vocabulaire précis, ton adapté." },
                  { num: "04", title: "Déclinaison", desc: "Notice longue, version courte, version réseaux." },
                ].map((s, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="process-step">
                      <span className="step-num">{s.num}</span>
                      <div><h4>{s.title}</h4><p>{s.desc}</p></div>
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
                <h2>Trois formules,<br /><em>un même niveau d&apos;exigence.</em></h2>
              </div>
            </Reveal>
            <div className="offers-grid">
              {[
                {
                  name: "Essentiel",
                  price: "45 €",
                  unit: "par pièce",
                  desc: "Pour les pièces courantes qui méritent mieux qu'une description de trois lignes.",
                  features: ["Notice rédigée (≈ 150 mots)", "Vocabulaire technique vérifié", "1 format prêt à publier", "Livraison 5 jours ouvrés"],
                  cta: "Choisir Essentiel",
                },
                {
                  name: "Signature",
                  price: "90 €",
                  unit: "par pièce",
                  desc: "Pour les pièces qui justifient un argumentaire complet et structuré.",
                  features: ["Notice développée (≈ 300 mots)", "Recherche de comparables", "Contexte historique et stylistique", "2 formats (annonce + fiche)", "Livraison 5 jours ouvrés"],
                  cta: "Choisir Signature",
                  featured: true,
                },
                {
                  name: "Catalogue",
                  price: "Sur devis",
                  unit: "à partir de 10 pièces",
                  desc: "Pour les marchands et galeries qui veulent un ensemble cohérent.",
                  features: ["Notices complètes par pièce", "Ligne éditoriale unifiée", "Formats multiples par pièce", "Tarif dégressif", "Interlocuteur unique"],
                  cta: "Demander un devis",
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
                            salon ou salle à manger.
                          </p>
                        </div>
                        <div className="text-panel after-panel">
                          <p className="panel-label">Après</p>
                          <p>
                            Enfilade trois portes en teck massif, Scandinavie, circa 1960.
                            Le travail des portes coulissantes — montées sur rail laiton
                            d&apos;origine — témoigne d&apos;une fabrication soignée, probablement
                            d&apos;atelier, avec assemblages à tenons visibles en bout de caisson.
                          </p>
                          <p>
                            Le teck a pris cette patine miel que seules les pièces
                            correctement entretenues développent après six décennies.
                            Piètement fuselé, lignes tendues, proportions justes :
                            c&apos;est le vocabulaire d&apos;un design qui ne cherche pas l&apos;effet
                            mais la justesse.
                          </p>
                          <p>L 200 × P 45 × H 82 cm · Scandinavie, circa 1960.</p>
                        </div>
                      </div>
                      <div className="case-analysis">
                        <p className="panel-label">Ce qui change</p>
                        <ul>
                          <li>Le texte identifie des marqueurs de qualité précis (rail laiton, tenons, teck massif).</li>
                          <li>La patine devient un argument de valeur, pas un défaut.</li>
                          <li>Le vocabulaire positionne la pièce dans un segment « mobilier de collection ».</li>
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
                            où le confort domestique commençait à dialoguer avec les formes
                            industrielles.
                          </p>
                          <p>
                            Le velours a été nettoyé — il conserve un tombé souple et une teinte
                            cohérente. La structure métallique porte quelques traces d&apos;usage qui
                            ne compromettent ni la stabilité ni l&apos;élégance d&apos;ensemble.
                          </p>
                          <p>H 83 × L 60 × P 53 cm · France, années 1950.</p>
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
              </Reveal>

              {/* EXEMPLE 3 */}
              <Reveal>
                <article className={`case-study ${openExample === 2 ? "is-open" : ""}`}>
                  <button className="case-toggle" onClick={() => setOpenExample(openExample === 2 ? null : 2)}>
                    <div className="case-toggle-left">
                      <p className="case-meta">Exemple 3 · Bureau ministre Art déco, circa 1935</p>
                      <h3>Donner à une pièce de caractère le texte qu&apos;elle mérite.</h3>
                      <div className="case-specs">
                        <span>Prix affiché : 2 400 €</span>
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
                            Bureau Art déco en palissandre, 4 tiroirs, poignées
                            laiton. Restauré. Bon état général. H 78 × L 140 × P 72 cm.
                            Années 1930.
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
                          <li>Le format court est pensé pour les plateformes spécialisées — dense, précis, sans remplissage.</li>
                          <li>La restauration est valorisée comme un signe de soin, pas comme un aveu de faiblesse.</li>
                          <li>Le texte installe une image mentale — « le genre de pièce qui compose un intérieur ».</li>
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
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="about-cards">
                  <div className="about-card">
                    <h4>Lettres &amp; philosophie</h4>
                    <p>Ancien professeur. Le travail sur la langue et la précision du vocabulaire vient de là.</p>
                  </div>
                  <div className="about-card">
                    <h4>Marché de l&apos;art</h4>
                    <p>Marchand, acheteur, rédacteur. Une connaissance concrète des objets et de leur circulation.</p>
                  </div>
                  <div className="about-card">
                    <h4>Rédaction spécialisée</h4>
                    <p>Notices, fiches, catalogues. Chaque format a ses règles — et ses exigences.</p>
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
                { q: "La première notice est vraiment gratuite ?", a: "Oui. Vous envoyez les photos et les informations, nous rédigeons la notice. Si le résultat vous convient, nous continuons. Sinon, vous gardez le texte — sans contrepartie." },
                { q: "Quels types d'objets acceptez-vous ?", a: "Mobilier ancien et vintage, objets d'art, luminaires, céramiques, pièces de design. Si l'objet a une valeur à défendre, nous pouvons écrire dessus." },
                { q: "Quel est le délai de livraison ?", a: "5 jours ouvrés pour les formules Essentiel et Signature. Les missions Catalogue font l'objet d'un planning sur mesure." },
                { q: "Travaillez-vous avec des particuliers ?", a: "Principalement avec des professionnels — marchands, galeristes, antiquaires, maisons de vente. Mais un particulier qui vend une pièce de qualité est le bienvenu." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="faq-item" key={i}>
                    <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && <div className="faq-answer"><p>{item.a}</p></div>}
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
            </Reveal>
            <Reveal delay={150}>
              <div>
                {formStatus === "sent" ? (
                  <div className="form-success">
                    <div className="form-success-icon">✓</div>
                    <h3>Message préparé.</h3>
                    <p>Votre client email s&apos;est ouvert avec les informations pré-remplies. Si ce n&apos;est pas le cas, écrivez-nous directement à contact.atelierprovenance@gmail.com</p>
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
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onBlur={() => markTouched("name")}
                          className={touched.name && formData.name.length > 0 ? "field-valid" : touched.name ? "field-invalid" : ""}
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
                        placeholder="3, 10, catalogue complet…"
                        value={formData.pieces}
                        onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onBlur={() => markTouched("message")}
                        className={touched.message && formData.message.length > 0 ? "field-valid" : touched.message ? "field-invalid" : ""}
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

        /* ── NAVBAR ── */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          background: transparent;
        }
        .nav-scrolled {
          background: rgba(246, 239, 228, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 14px 0;
          box-shadow: 0 1px 0 rgba(26, 22, 19, 0.08);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-logo {
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          font-weight: 400;
          transition: opacity 0.3s;
        }
        .nav-logo:hover { opacity: 0.7; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
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
          transition: width 0.3s ease;
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

        /* ── BUTTONS ── */
        .button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .button-primary {
          background: #1a1613;
          color: #f6efe4;
        }
        .button-primary:hover {
          background: #c8956c;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(200, 149, 108, 0.25);
        }
        .button-secondary {
          border: 1px solid #1a1613;
          color: #1a1613;
          background: transparent;
        }
        .button-secondary:hover {
          background: #1a1613;
          color: #f6efe4;
          transform: translateY(-1px);
        }
        .button-sm { padding: 10px 20px; font-size: 0.75rem; }
        .button-arrow::after { content: " →"; transition: transform 0.3s; display: inline-block; }
        .button-arrow:hover::after { transform: translateX(4px); }

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
          letter-spacing: -0.01em;
        }
        .hero h1 em { color: #c8956c; }
        .eyebrow {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b8854e;
          margin-bottom: 16px;
          display: block;
        }
        .eyebrow-light { color: #d4a574; }
        .intro { font-size: 1.08rem; color: #5c4f3a; margin-bottom: 32px; }
        .actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
        .hero-free {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          color: #b8854e;
          letter-spacing: 0.04em;
        }
        .hero-card {
          background: rgba(26, 22, 19, 0.04);
          border: 1px solid rgba(200, 149, 108, 0.2);
          backdrop-filter: blur(8px);
          padding: 36px 32px;
          transition: border-color 0.4s;
        }
        .hero-card:hover { border-color: rgba(200, 149, 108, 0.45); }
        .hero-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8854e;
          margin-bottom: 20px;
        }
        .hero-list { display: flex; flex-direction: column; gap: 14px; }
        .hero-list li {
          font-size: 0.95rem;
          color: #3d3428;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .list-icon { color: #c8956c; font-size: 0.5rem; margin-top: 7px; flex-shrink: 0; }

        /* ── SECTIONS ── */
        .section { padding: 96px 0; }
        .section-alt { background: #f0e6d6; }
        .section-dark { background: #1a1613; color: #f6efe4; }
        .border-top { border-top: 1px solid #dccbb7; }
        .section-dark.border-top { border-top-color: rgba(255,255,255,0.08); }
        .section-head { text-align: center; max-width: 640px; margin: 0 auto 56px; }
        .section-head h2 {
          font-size: 2.3rem;
          font-weight: 400;
          line-height: 1.25;
          margin-bottom: 16px;
        }
        .section-head h2 em { color: #c8956c; }
        .section-head-light h2 em { color: #d4a574; }
        .section-intro { font-size: 1.02rem; color: #5c4f3a; }
        .section-intro-light { color: #a89880; }

        /* ── SPLIT ── */
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        h2 { font-size: 2rem; font-weight: 400; line-height: 1.3; margin-bottom: 20px; }
        h2 em { color: #c8956c; }
        .split p { color: #5c4f3a; margin-bottom: 16px; }
        .section-dark .split p { color: #a89880; }

        /* ── STAT GRID ── */
        .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .stat-card {
          background: #f6efe4;
          border: 1px solid #dccbb7;
          padding: 28px 24px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(200, 149, 108, 0.12);
          border-color: #c8956c;
        }
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #c8956c;
          display: block;
          margin-bottom: 4px;
        }
        .stat-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          color: #8a7a62;
          letter-spacing: 0.04em;
        }

        /* ── PILLARS ── */
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .pillar-card {
          padding: 36px 28px;
          border: 1px solid rgba(200, 149, 108, 0.15);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pillar-card:hover {
          border-color: rgba(200, 149, 108, 0.4);
          transform: translateY(-4px);
          background: rgba(200, 149, 108, 0.04);
        }
        .pillar-num {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          color: #d4a574;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 16px;
        }
        .pillar-card h3 { font-size: 1.2rem; font-weight: 400; margin-bottom: 12px; }
        .pillar-card p { font-size: 0.92rem; color: #a89880; line-height: 1.6; }

        /* ── PROCESS ── */
        .process-steps { display: flex; flex-direction: column; gap: 0; }
        .process-step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 24px 0;
          border-bottom: 1px solid #dccbb7;
          transition: all 0.3s;
        }
        .process-step:hover { padding-left: 8px; }
        .process-step:last-child { border-bottom: none; }
        .step-num {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          color: #c8956c;
          letter-spacing: 0.1em;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .process-step h4 { font-size: 1.05rem; font-weight: 600; margin-bottom: 4px; }
        .process-step p { font-size: 0.9rem; color: #5c4f3a; margin-bottom: 0; }

        /* ── OFFERS ── */
        .offers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .offer-card {
          background: #f6efe4;
          border: 1px solid #dccbb7;
          padding: 40px 28px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .offer-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(200, 149, 108, 0.15);
        }
        .offer-featured {
          border-color: #c8956c;
          background: #1a1613;
          color: #f6efe4;
          box-shadow: 0 8px 32px rgba(26, 22, 19, 0.2);
        }
        .offer-featured:hover {
          box-shadow: 0 16px 48px rgba(200, 149, 108, 0.25);
        }
        .offer-badge {
          position: absolute;
          top: -12px;
          left: 28px;
          background: #c8956c;
          color: #1a1613;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          font-weight: 600;
        }
        .offer-name {
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
        }
        .offer-price { font-size: 2rem; font-weight: 700; margin-bottom: 2px; color: #c8956c; }
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

        /* ── CASE STUDIES ── */
        .examples-stack { display: flex; flex-direction: column; gap: 16px; }
        .case-study {
          border: 1px solid #dccbb7;
          background: #f6efe4;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .case-study:hover { border-color: #c8956c; }
        .case-study.is-open { border-color: #1a1613; }
        .case-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 28px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 24px;
          font-family: inherit;
          color: inherit;
        }
        .case-toggle-left { flex: 1; }
        .case-meta {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b8854e;
          margin-bottom: 6px;
        }
        .case-toggle h3 { font-size: 1.15rem; font-weight: 400; line-height: 1.4; }
        .case-specs {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
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
          padding-left: 16px;
          position: relative;
        }
        .case-analysis li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #c8956c;
        }

        /* ── ABOUT
