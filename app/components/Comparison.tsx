"use client";

export default function Comparison({
  openExample,
  setOpenExample
}: {
  openExample: number | null;
  setOpenExample: (value: number | null) => void;
}) {
  return (
    <section className="section section-alt border-top" id="exemples">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Exemples</p>
          <h2>Trois cas, avant et après.</h2>
          <p className="section-intro">
            Chaque exemple part d'une annonce réelle trouvée en ligne et montre
            ce que la rédaction change — sur la lisibilité, la désirabilité,
            la cohérence avec le prix affiché.
          </p>
        </div>

        <article className={`case-study ${openExample === 0 ? "is-open" : ""}`}>
          <button className="case-toggle" onClick={() => setOpenExample(openExample === 0 ? null : 0)}>
            <div className="case-toggle-left">
              <p className="case-meta">Exemple 1 · Bureau ministre, années 1930</p>
              <h3>Donner à un meuble fonctionnel la densité d'un objet de collection.</h3>
              <div className="case-specs">
                <span>Prix affiché : 1 200 €</span>
                <span>Palissandre · laiton</span>
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
                    Bureau ministre années 30 en bon état général.
                    Plateau en palissandre, tiroirs fonctionnels.
                    Dimensions : H 78 × L 140 × P 72 cm.
                  </p>
                </div>
                <div className="text-panel after-panel">
                  <p className="panel-label">Après — format long</p>
                  <p className="panel-sublabel">Adapté à Selency ou Leboncoin</p>
                  <h4>Bureau ministre Art déco, circa 1935 — placage palissandre, poignées laiton d'origine</h4>
                  <p>
                    Ce bureau ministre incarne l'élégance sobre et fonctionnelle
                    de l'Art déco français. Réalisé vers 1935, il présente un
                    placage de palissandre aux veinures profondes, soigneusement
                    sélectionné pour créer un effet de symétrie sur le plateau.
                  </p>
                  <p>
                    La structure en chêne massif assure une stabilité remarquable,
                    tandis que les quatre tiroirs en façade, équipés de poignées
                    en laiton d'origine, coulissent avec une précision horlogère.
                  </p>
                  <p>
                    La restauration a respecté l'intégrité de la pièce : le bois
                    a été nettoyé sans altérer sa patine, les tiroirs ont été
                    ajustés pour un fonctionnement optimal, et la quincaillerie
                    a été conservée dans son état d'origine.
                  </p>
                  <p>H 78 × L 140 × P 72 cm · France, circa 1935.</p>
                </div>
              </div>
              <div className="case-analysis">
                <p className="panel-label">Ce qui change</p>
                <ul>
                  <li>Le vocabulaire technique ("placage", "quincaillerie") rassure l'acheteur.</li>
                  <li>La période est précisée ("circa 1935") pour cibler les collectionneurs.</li>
                  <li>La restauration est présentée comme un atout, pas comme une correction.</li>
                </ul>
              </div>
            </div>
          )}
        </article>

        {/* Ajoutez les autres exemples (1 et 2) de la même manière */}
      </div>
    </section>
  );
}
