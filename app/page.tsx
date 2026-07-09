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
}: {
  numero: string;
  titre: string;
}) {
  return (
    <div className="chapter-head">
      <span className="chapter-line" />
      <span className="chapter-label">
        Chapitre {numero} — {titre}
      </span>
      <span className="chapter-line" />
    </div>
  );
}

/* ───────────────────────── DONNÉES ───────────────────────── */
const ETAPES = [
  {
    titre: "Le regard",
    texte:
      "Envoyez photos et contexte. Réponse sous 48 h : intérêt, fourchette de valeur et prix de reprise proposé — appuyés sur trois comparables datés et sourcés.",
  },
  {
    titre: "Le contrat",
    texte:
      "Prix de reprise fixe et conditions de révision posés par écrit. Vous savez à quel prix la pièce sera proposée : rien ne se découvre après coup.",
  },
  {
    titre: "La notice",
    texte:
      "Quatre pages : contexte historique, description d'expert, annotations, recommandation de prix. C'est elle qui justifie l'écart — et rassure l'acheteur.",
  },
  {
    titre: "La vente",
    texte:
      "Diffusion : catalogue, plateformes spécialisées, acheteurs professionnels, Lila D'Algarve. La pièce vendue, vous êtes réglé du prix convenu.",
  },
];

const ETUDES = [
  {
    image: "/etudes/vase.webp",
    alt: "Grand vase en cristal de Bohême bleu cobalt à émaux en relief et dorure",
    avantTitre: "« Cristal de Bohême grand vase émaillée richement décorée dorée »",
    avantTexte:
      "Le titre d'origine, tel qu'en ligne. Ni la teinte, ni la technique des émaux en relief, ni le format hors norme ne sont établis.",
    apresTitre:
      "Grand vase en cristal de Bohême bleu cobalt — émaux en relief peints à la main, dorure à l'or fin",
    apresTexte:
      "« La Bohême est depuis le XVIᵉ siècle l'un des grands centres mondiaux de la verrerie d'art. […] À 59,5 cm, le format place la pièce hors de la production courante, dans la catégorie des pièces d'apparat. »",
    prixLabel: "Affiché 980 €",
    prixValeur: "1 300 – 1 400 €",
    prixNote: "repositionnement défendable, argumenté par comparables",
  },
  {
    image: "/etudes/miroir.webp",
    alt: "Grand miroir japonisant dans le goût de Gabriel Viardot, dragon sculpté et fronton pagode",
    avantTitre:
      "« Gabriel Viardot dans le goût grand Miroir japonisant d'époque 1900s »",
    avantTexte:
      "L'attribution est là, mais rien ne l'argumente : pas de repère sur l'œuvre de Viardot, pas de lecture du décor, pas de comparables.",
    apresTitre:
      "Grand miroir japonisant dans le goût de Gabriel Viardot — dragon en ronde-bosse, fronton pagode, nacre, vers 1900",
    apresTexte:
      "« Le vocabulaire ornemental — dragon, pagode, méandre, nacre — correspond précisément au répertoire documenté de Viardot, figure centrale du japonisme parisien, primé aux Expositions universelles de 1878 et 1889. »",
    prixLabel: "Affiché 12 000 €",
    prixValeur: "16 000 – 20 000 €",
    prixNote: "défendable sans expertise ; davantage avec attribution confirmée",
  },
  {
    image: "/etudes/commode.webp",
    alt: "Commode galbée de style Louis XV en marqueterie florale, bronzes dorés et plateau de marbre",
    avantTitre: "« Commode ancienne style Louis XV »",
    avantTexte:
      "Une description en deux lignes : ni le galbe en arbalète, ni la marqueterie florale, ni le marbre n'étaient nommés.",
    apresTitre:
      "Commode galbée de style Louis XV — marqueterie florale, bronzes dorés et plateau de marbre",
    apresTexte:
      "« Le galbe dit en arbalète — renflement latéral prononcé, ventre saillant — est la forme la plus caractéristique et la plus recherchée de ce répertoire. »",
    prixLabel: "Positionné 1 480 €",
    prixValeur: "prix confirmé, désormais argumenté",
    prixNote: "titre réécrit pour le référencement Proantic et Selency",
  },
];

const TARIFS = [
  {
    nom: "La notice",
    prix: "150 €",
    unite: "l'unité",
    texte:
      "Une pièce, quatre pages, trois versions de texte : dossier complet, fiche plateforme, format réseaux.",
    vedette: false,
    badge: null,
  },
  {
    nom: "Pack 3 notices",
    prix: "450 €",
    unite: "150 € la notice",
    texte:
      "Trois pièces de votre choix. Le format le plus courant pour éprouver la méthode sur votre propre stock.",
    vedette: false,
    badge: null,
  },
  {
    nom: "Pack 10 notices",
    prix: "1 200 €",
    unite: "120 € la notice",
    texte:
      "Pour un fonds cohérent ou une sélection de pièces dormantes. Ton et structure harmonisés sur l'ensemble.",
    vedette: true,
    badge: "−20 %",
  },
  {
    nom: "Catalogue",
    prix: "Sur devis",
    unite: "",
    texte:
      "Harmonisation complète d'un catalogue : ton de la maison, structure des fiches, positionnement des prix.",
    vedette: false,
    badge: null,
  },
];

const FAQ = [
  {
    q: "Combien coûte le dépôt-vente ?",
    a: "Rien. Le prix de reprise est convenu à l'entrée et garanti par contrat ; notre rémunération est l'écart entre ce prix et le prix de revente que la documentation permet d'obtenir. Cet écart est contractualisé dès le départ — vous savez à quel prix votre pièce est proposée.",
  },
  {
    q: "Qui fixe le prix de reprise ?",
    a: "Il se convient ensemble, sur la base d'au moins trois comparables datés et sourcés : résultats d'adjudication récents d'abord, annonces actives de pièces équivalentes ensuite, corrigés selon l'état. L'argumentaire vous est transmis — c'est le même qui figure en page 4 de la notice.",
  },
  {
    q: "Et si la pièce ne se vend pas ?",
    a: "Le contrat prévoit un point à 60 jours : le prix est revu ensemble, ou la pièce vous est restituée sans frais. Elle reste votre propriété jusqu'à la vente.",
  },
  {
    q: "Pourquoi des notices à 150 € si elle est incluse au dépôt ?",
    a: "Deux situations distinctes. Si vous nous confiez la vente, la notice fait partie du dépôt — elle est notre outil de travail. Si vous préférez vendre vous-même, sur vos propres canaux, la notice devient une prestation : c'est l'offre de fiches professionnelles.",
  },
  {
    q: "Comment garantissez-vous l'exactitude des attributions ?",
    a: "Par la prudence lexicale des maisons de vente : « estampillé », « attribué à », « dans le goût de » n'y sont jamais interchangeables. Chaque affirmation est sourcée ; l'analyse s'appuie sur photos et documents, sans inspection physique — et la notice le signale.",
  },
  {
    q: "Qu'est-ce que Lila D'Algarve ?",
    a: "Notre média éditorial, consacré au mobilier ancien et aux arts décoratifs. Les pièces en dépôt peuvent y être présentées à une audience de collectionneurs — un canal de diffusion supplémentaire, sans démarche de votre part.",
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
    demande: "Proposer une pièce en dépôt-vente",
    piece: "",
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
      formData.demande + " — " + (formData.name || "Nouveau contact")
    );
    const body = encodeURIComponent(
      "Nom : " + formData.name +
      "\nEmail : " + formData.email +
      "\nDemande : " + formData.demande +
      "\nPièce / catalogue : " + formData.piece +
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
            <a href="#depot" onClick={() => setMobileMenu(false)}>Le dépôt-vente</a>
            <a href="#etudes" onClick={() => setMobileMenu(false)}>Études</a>
            <a href="#fiches" onClick={() => setMobileMenu(false)}>Les fiches</a>
            <a href="#methode" onClick={() => setMobileMenu(false)}>La méthode</a>
            <a href="#media" onClick={() => setMobileMenu(false)}>Le média</a>
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMobileMenu(false)}
            >
              Proposer une pièce
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="hero-surtitre tag">
                <Losange />
                Dépôt-vente &amp; documentation · Mobilier ancien, objets d&apos;art
              </p>
              <h1>
                Confiez la pièce.
                <br />
                Nous établissons sa valeur,
                <br />
                <em>puis nous la vendons.</em>
              </h1>
              <p className="hero-texte">
                Atelier Provenance reprend meubles et objets anciens en
                dépôt-vente : un prix de reprise fixe, garanti par contrat, une
                notice documentée de quatre pages, et une diffusion travaillée
                auprès des acheteurs — en France et à l&apos;international. Vous ne
                payez rien : notre rémunération est l&apos;écart que la
                documentation permet.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-plein">
                  Proposer une pièce
                </a>
                <a href="#fiches" className="btn btn-filet">
                  Fiches professionnelles — dès 150 €
                </a>
              </div>
              <div className="hero-garanties tag">
                <span>Reprise fixe garantie</span>
                <Losange />
                <span>Notice 4 pages incluse</span>
                <Losange />
                <span>Aucun frais vendeur</span>
              </div>
            </div>
            <Reveal delay={150} className="hero-figure">
              <figure className="figure">
                <img
                  src="/etudes/commode.webp"
                  alt="Commode galbée de style Louis XV, marqueterie florale et bronzes dorés"
                  width={900}
                  height={1200}
                />
                <figcaption className="figure-cartel">
                  <p>Commode galbée de style Louis XV, marqueterie florale</p>
                  <span>Notice réf. 1731171</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE I — LE DÉPÔT-VENTE ═══════════ */}
        <section className="section section-papier" id="depot">
          <div className="container">
            <Reveal>
              <ChapterHead numero="I" titre="Le dépôt-vente" />
              <h2 className="section-titre">
                Un prix garanti pour vous.
                <br />
                <em>Un argument pour l&apos;acheteur.</em>
              </h2>
            </Reveal>
            <div className="depot-grid">
              <Reveal delay={80}>
                <div className="depot-principe">
                  <p>
                    Une belle pièce mal documentée se vend en dessous de sa
                    valeur — ou ne se vend pas. Le dépôt-vente d&apos;Atelier
                    Provenance repose sur un principe simple :{" "}
                    <strong>
                      nous convenons ensemble d&apos;un prix de reprise fixe,
                    </strong>{" "}
                    que vous touchez quelle que soit l&apos;issue de la négociation.
                    La pièce reste votre propriété jusqu&apos;à la vente.
                  </p>
                  <p>
                    Nous produisons ensuite la notice qui documente et rassure,
                    puis nous proposons la pièce au-dessus de ce prix.{" "}
                    <strong>
                      L&apos;écart est notre rémunération — il est inscrit au
                      contrat,
                    </strong>{" "}
                    pas découvert après coup. Vous savez à quel prix votre
                    pièce est présentée, et à qui.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="depot-encadre">
                  <h3>
                    Ce que le dépôt <em>comprend</em>
                  </h3>
                  <ul className="depot-liste">
                    <li>
                      <Losange />
                      <span>
                        <strong>Estimation argumentée</strong> — trois
                        comparables datés et sourcés, transmis avec la
                        proposition
                      </span>
                    </li>
                    <li>
                      <Losange />
                      <span>
                        <strong>Notice de quatre pages</strong> — contexte,
                        description d&apos;expert, annotations, recommandation de
                        prix
                      </span>
                    </li>
                    <li>
                      <Losange />
                      <span>
                        <strong>Diffusion complète</strong> — catalogue,
                        plateformes spécialisées, acheteurs professionnels,
                        média Lila D&apos;Algarve
                      </span>
                    </li>
                    <li>
                      <Losange />
                      <span>
                        <strong>Clause de révision</strong> — point à 60 jours :
                        prix revu ensemble ou pièce restituée, sans frais
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="etapes">
                {ETAPES.map((e, i) => (
                  <div className="etape" key={i}>
                    <span className="etape-num">{i + 1}.</span>
                    <h4>{e.titre}</h4>
                    <p>{e.texte}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="profils">
              <Reveal delay={80}>
                <div className="profil">
                  <span className="tag">Antiquaires &amp; marchands</span>
                  <h4>Vos invendus sont un capital immobilisé.</h4>
                  <p>
                    Une pièce qui dort depuis six mois ne manque pas de valeur —
                    elle manque d&apos;argument. Le dépôt-notice la réactive sans
                    que vous déboursiez rien, et sans qu&apos;elle quitte votre
                    inventaire avant d&apos;être vendue.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="profil">
                  <span className="tag">Particuliers &amp; successions</span>
                  <h4>Une reprise ferme, sans rien à gérer.</h4>
                  <p>
                    Un meuble de famille, une succession, une pièce isolée :
                    vous recevez un prix garanti, sans mise en ligne à rédiger,
                    sans négociation à mener. Nous nous chargeons du reste,
                    enlèvement compris lorsque la pièce le permet.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <p className="depot-note">
                Transparence de mandataire : <strong>vous savez toujours à quel
                prix votre pièce est proposée.</strong> C&apos;est ce qui rend le
                modèle défendable — et recommandable.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE II — ÉTUDES ═══════════ */}
        <section className="section" id="etudes">
          <div className="container">
            <Reveal>
              <ChapterHead numero="II" titre="Études" />
              <h2 className="section-titre">
                Trois pièces réelles,
                <br />
                <em>avant et après.</em>
              </h2>
              <p className="section-intro">
                Notices produites sur des pièces de la Maison Charlot
                Antiquités &amp; Brocante (Bourgogne). À gauche, l&apos;annonce telle
                qu&apos;elle était en ligne ; à droite, ce que la recherche a
                établi — et ce que cela change au prix.
              </p>
            </Reveal>
            <div className="etudes">
              {ETUDES.map((e, i) => (
                <Reveal key={i} delay={i * 60}>
                  <article className="etude">
                    <figure className="figure etude-figure">
                      <img src={e.image} alt={e.alt} loading="lazy" />
                      <figcaption className="figure-cartel">
                        <p>{e.apresTitre.split(" — ")[0]}</p>
                        <span>Étude {["I", "II", "III"][i]}</span>
                      </figcaption>
                    </figure>
                    <div className="etude-corps">
                      <div className="etude-volet etude-volet-avant">
                        <span className="etude-etiquette tag">
                          Annonce d&apos;origine
                        </span>
                        <h4>{e.avantTitre}</h4>
                        <p>{e.avantTexte}</p>
                      </div>
                      <div className="etude-volet etude-volet-apres">
                        <span className="etude-etiquette etude-etiquette-or tag">
                          Notice Atelier Provenance
                        </span>
                        <h4>{e.apresTitre}</h4>
                        <p>{e.apresTexte}</p>
                      </div>
                      <div className="etude-prix">
                        <span className="tag">{e.prixLabel}</span>
                        <span className="etude-prix-valeur">
                          → <em>{e.prixValeur}</em>
                        </span>
                        <span className="tag">{e.prixNote}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="etudes-source">
                Recommandations de prix issues des notices livrées, réf.
                1730555, 1731201 et 1731171 — comparables : adjudications
                récentes et annonces actives, sources citées en page 4 de
                chaque notice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE III — LES FICHES ═══════════ */}
        <section className="section section-papier" id="fiches">
          <div className="container">
            <Reveal>
              <ChapterHead numero="III" titre="Les fiches professionnelles" />
              <h2 className="section-titre">
                Vous préférez vendre vous-même ?
                <br />
                <em>Nous écrivons la fiche.</em>
              </h2>
              <p className="section-intro">
                Pour les marchands, galeries et vendeurs qui gardent la main
                sur la vente : la même notice de quatre pages, déclinée pour la
                plateforme de votre choix et pour vos réseaux. Une grille
                simple, sans engagement.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="tarifs">
                {TARIFS.map((t, i) => (
                  <article
                    className={`tarif ${t.vedette ? "tarif-vedette" : ""}`}
                    key={i}
                  >
                    {t.badge && <span className="tarif-badge">{t.badge}</span>}
                    <span className="tag">{t.nom}</span>
                    <p className="tarif-prix">{t.prix}</p>
                    <p className="tarif-unite">{t.unite}</p>
                    <p>{t.texte}</p>
                    <a href="#contact" className="btn btn-filet btn-sm">
                      Commander
                    </a>
                  </article>
                ))}
              </div>
            </Reveal>
            <div className="fiches-contenu">
              <Reveal delay={80}>
                <div>
                  <h4>Chaque notice comprend</h4>
                  <ul className="fiches-liste">
                    <li>
                      <Losange />
                      <span>
                        Recherche documentée : contexte historique, atelier ou
                        manufacture, trois comparables datés et sourcés
                      </span>
                    </li>
                    <li>
                      <Losange />
                      <span>
                        Description d&apos;expert : matériaux, techniques, état de
                        conservation sans euphémisme
                      </span>
                    </li>
                    <li>
                      <Losange />
                      <span>
                        Recommandation de prix argumentée — jamais un chiffre
                        sec
                      </span>
                    </li>
                    <li>
                      <Losange />
                      <span>
                        Trois versions livrées : dossier PDF de quatre pages,
                        fiche plateforme prête à coller, format réseaux
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div>
                  <h4>Pour toutes les plateformes</h4>
                  <div className="plateformes">
                    {[
                      "Proantic",
                      "Selency",
                      "Catawiki",
                      "1stDibs",
                      "eBay",
                      "Leboncoin",
                      "Votre site",
                    ].map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: 24,
                      color: "var(--taupe)",
                      fontSize: "1rem",
                    }}
                  >
                    Chaque plateforme a ses codes — longueur, champs, mots-clés
                    de recherche. La version courte est calibrée pour celle où
                    la pièce est en vente ; sur Catawiki, les lots décrits en
                    détail se vendent 30 à 50 % plus souvent, selon les données
                    de la plateforme.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <p className="fiches-note">
                Première collaboration : <strong>une notice vitrine offerte</strong>{" "}
                sur la pièce de votre choix — sans engagement. Vous jugez sur
                pièce.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE IV — LA MÉTHODE ═══════════ */}
        <section className="section section-nuit" id="methode">
          <div className="container">
            <Reveal>
              <ChapterHead numero="IV" titre="La méthode" />
              <h2 className="section-titre section-titre-light">
                Une fiche n&apos;est pas une description.
                <br />
                <em>C&apos;est un argument.</em>
              </h2>
            </Reveal>
            <div className="cartels">
              {[
                {
                  num: "01 — Positionnement",
                  titre: "Le texte soutient le prix",
                  texte:
                    "Comparables récents, analyse du marché, cohérence entre le prix demandé et le discours tenu. Jamais l'inverse.",
                },
                {
                  num: "02 — Précision",
                  titre: "Le vocabulaire des maisons de vente",
                  texte:
                    "Époque, style, matériaux, provenance — avec leur prudence : « attribué à » n'est pas « estampillé ».",
                },
                {
                  num: "03 — Narration",
                  titre: "On achète une histoire",
                  texte:
                    "Chaque pièce a traversé quelque chose. Le texte le rend lisible et mémorable — sans un superlatif.",
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
            <Reveal delay={120}>
              <p className="methode-prudence">
                Analyse assistée par IA, <em>contrôlée par un expert humain</em> :
                chaque affirmation est sourcée, chaque estimation s&apos;appuie sur
                photos et documents — et quand le doute existe, la formulation
                le dit.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CHAPITRE V — LE MÉDIA ═══════════ */}
        <section className="section" id="media">
          <div className="container media-grid">
            <Reveal>
              <div>
                <ChapterHead numero="V" titre="Le média" />
                <h2 className="section-titre">
                  Lila <em>D&apos;Algarve</em>
                </h2>
                <p className="media-texte" style={{ color: "var(--taupe)" }}>
                  Notre regard rendu public : un média éditorial consacré au
                  mobilier ancien et aux arts décoratifs. Pièces de collections
                  publiques, détails d&apos;atelier, objets choisis — la preuve,
                  publiée trois fois par semaine, que la précision peut être
                  belle.
                </p>
                <p
                  className="media-texte-sec"
                  style={{ color: "var(--taupe)" }}
                >
                  Les pièces en dépôt chez Atelier Provenance peuvent y être
                  présentées à une audience de collectionneurs.
                </p>
                <a
                  href="https://www.instagram.com/liladalgarve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-filet"
                >
                  Suivre sur Instagram
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="media-carte">
                <img
                  src="/Lila-D-Algarve.png"
                  alt="Lila D'Algarve — média éditorial"
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
        <section className="section section-papier" id="contact">
          <div className="container contact-grid">
            <Reveal>
              <div>
                <ChapterHead numero="VI" titre="Contact" />
                <h2 className="section-titre">
                  Commencer par
                  <br />
                  <em>un regard sur la pièce.</em>
                </h2>
                <p className="section-intro">
                  Décrivez la pièce ou le catalogue en quelques lignes — un
                  lien d&apos;annonce suffit. Réponse sous 48 h, avec un premier
                  avis franc : intérêt, fourchette, et ce qu&apos;un dépôt ou une
                  notice pourrait y changer.
                </p>
                <div className="faq-list">
                  {FAQ.map((f, i) => (
                    <div className="faq-item" key={i}>
                      <button
                        className="faq-toggle"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        {f.q}
                        <span className="faq-icon">
                          {openFaq === i ? "−" : "+"}
                        </span>
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  Votre demande
                  <select
                    value={formData.demande}
                    onChange={(e) =>
                      setFormData({ ...formData, demande: e.target.value })
                    }
                  >
                    <option>Proposer une pièce en dépôt-vente</option>
                    <option>Commander des fiches professionnelles</option>
                    <option>Notice vitrine offerte</option>
                    <option>Autre demande</option>
                  </select>
                </label>
                <label>
                  La pièce ou le catalogue (type, époque, lien éventuel)
                  <input
                    type="text"
                    value={formData.piece}
                    onChange={(e) =>
                      setFormData({ ...formData, piece: e.target.value })
                    }
                  />
                </label>
                <label>
                  Votre message
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
            <a href="#depot">Le dépôt-vente</a>
            <a href="#etudes">Études</a>
            <a href="#fiches">Les fiches professionnelles</a>
            <a href="#media">Lila D&apos;Algarve</a>
          </div>
          <div className="footer-legal-bloc">
            <a href="/mentions-legales" className="footer-legal">
              Mentions légales
            </a>
            <span className="footer-legal-sep">·</span>
            <a href="/cgv" className="footer-legal">
              CGV
            </a>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Atelier Provenance
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
