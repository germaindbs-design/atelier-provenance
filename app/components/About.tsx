"use client";

export default function About({
  openFaq,
  setOpenFaq
}: {
  openFaq: number | null;
  setOpenFaq: (value: number | null) => void;
}) {
  return (
    <section className="section border-top" id="parcours">
      <div className="container split">
        <div>
          <p className="eyebrow">À propos</p>
          <h2>Un regard formé aux textes,<br /><em>exercé sur les objets.</em></h2>
          <p>
            Atelier Provenance est né d'un double parcours : l'enseignement
            des lettres et de la philosophie d'abord, puis le marché de l'art
            — comme marchand, comme rédacteur, comme observateur des mouvements
            de goût et de valeur.
          </p>
          <p>
            Cette trajectoire n'est pas un détour. C'est elle qui permet de
            lire un objet comme on lit un texte : en cherchant ce qui fait sens,
            ce qui justifie l'attention, ce qui mérite d'être dit — et dans
            quel ordre.
          </p>
        </div>
        <div>
          <div className="about-cards">
            <div className="about-card">
              <h4>Lettres & philosophie</h4>
              <p>Ancien professeur. Le travail sur la langue et la précision du vocabulaire vient de là.</p>
            </div>
            <div className="about-card">
              <h4>Marché de l'art</h4>
              <p>10 ans d'expérience comme marchand et rédacteur pour des maisons de vente.</p>
            </div>
            <div className="about-card">
              <h4>Approche sur mesure</h4>
              <p>Chaque mission est traitée personnellement, sans délégation ni automatisation.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '64px' }}>
        <div className="faq-grid">
          {[
            { q: "Pourquoi faire appel à un rédacteur spécialisé ?", a: "Parce que le vocabulaire du mobilier ancien est technique et précis. Une description approximative peut faire perdre 30 à 50 % de la valeur perçue d'un objet." },
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
  );
}
