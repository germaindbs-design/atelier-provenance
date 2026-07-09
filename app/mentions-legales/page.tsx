export default function MentionsLegales() {
  return (
    <>
      <main className="legal-page">
        <div className="container legal-container">

          <div className="legal-header">
            <a href="/" className="legal-back">← Retour</a>
            <p className="eyebrow">Informations légales</p>
            <h1>Mentions légales</h1>
          </div>

          <div className="legal-body">

            <section className="legal-section">
              <h2>Éditeur du site</h2>
              <p><strong>Germain Dubois</strong></p>
              <p>Micro-entrepreneur</p>
              <p>SIREN : 104 842 760 — SIRET : 104 842 760 00019</p>
              <p>Activité : Rédaction spécialisée pour le mobilier de collection et les objets d&apos;art</p>
              <p>Email : <a href="mailto:contact.atelierprovenance@gmail.com">contact.atelierprovenance@gmail.com</a></p>
              <p>Téléphone : <a href="tel:+33751420733">07 51 42 07 33</a></p>
            </section>

            <section className="legal-section">
              <h2>Crédits iconographiques</h2>
              <p>
                Les photographies d&apos;œuvres illustrant les études du site sont des
                images d&apos;illustration de pièces comparables, issues des collections
                en libre accès (Open Access) du Metropolitan Museum of Art de New York,
                placées dans le domaine public sous licence CC0.
              </p>
            </section>

            <section className="legal-section">
              <h2>Hébergement</h2>
              <p><strong>Vercel Inc.</strong></p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
            </section>

            <section className="legal-section">
              <h2>Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site — textes, notices, structure éditoriale —
                est la propriété exclusive de Germain Dubois / Atelier Provenance.
                Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
              </p>
              <p>
                Les notices rédigées dans le cadre des prestations Atelier Provenance font
                l&apos;objet d&apos;une licence d&apos;usage décrite dans les Conditions Générales de Vente.
              </p>
            </section>

            <section className="legal-section">
              <h2>Données personnelles</h2>
              <p>
                Les informations collectées via le formulaire de contact (nom, email, téléphone)
                sont utilisées exclusivement pour répondre aux demandes et assurer le suivi
                des prestations. Elles ne sont ni cédées, ni revendues à des tiers.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
                de vos données. Pour exercer ces droits, contactez-nous à :
                contact.atelierprovenance@gmail.com
              </p>
            </section>

            <section className="legal-section">
              <h2>Cookies</h2>
              <p>
                Ce site n&apos;utilise pas de cookies de traçage ou de publicité.
                Aucune donnée de navigation n&apos;est collectée à des fins commerciales.
              </p>
            </section>

            <section className="legal-section">
              <h2>Responsabilité</h2>
              <p>
                Atelier Provenance s&apos;efforce de maintenir les informations publiées
                sur ce site à jour et exactes. Toutefois, la responsabilité de
                l&apos;éditeur ne saurait être engagée en cas d&apos;erreur ou d&apos;omission.
                Les estimations de prix figurant dans les notices sont indicatives
                et ne constituent pas une expertise formelle.
              </p>
            </section>

          </div>
        </div>
      </main>

    </>
  );
}
