export default function Comparison() {
  return (
    <div className="comparison-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
      <div className="before" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>Avant</h3>
        <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '1rem' }}>
          "Fauteuil ancien en bois. Bon état. Prix : 800 €."
        </p>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', color: '#888' }}>
          <p>Problèmes :</p>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li>• Description trop courte</li>
            <li>• Aucune justification du prix</li>
            <li>• Pas d'histoire ni d'émotion</li>
            <li>• Pas de détails techniques</li>
          </ul>
        </div>
      </div>

      <div className="after" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>Après</h3>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Fauteuil club en noyer massif, années 1930 - Pièce unique de l'ébéniste René Prou</strong>
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Ce fauteuil club exceptionnel, réalisé par l'ébéniste René Prou dans les années 1930, incarne l'élégance intemporelle du design français. Son dossier légèrement incliné et ses accoudoirs galbés offrent un confort remarquable, tandis que le noyer massif patiné par le temps révèle une teinte chaude et profonde.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Caractéristiques techniques :</strong>
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          <li>• Structure en noyer massif</li>
          <li>• Garnissage d'origine en crin végétal et laine</li>
          <li>• Revêtement en velours de soie (restauré par nos soins)</li>
          <li>• Dimensions : H 85 cm x L 70 cm x P 65 cm</li>
          <li>• Poids : 22 kg</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Provenance et valeur :</strong> Ce modèle, rare sur le marché, est très recherché par les collectionneurs. Un exemplaire similaire s'est vendu 1 200 € chez Sotheby's en 2022. Notre estimation : 800-1 000 €.
        </p>
        <div style={{ background: '#f0f7f0', padding: '1rem', borderRadius: '4px', color: '#2a5a3a' }}>
          <p>Résultats :</p>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li>• Justification claire du prix</li>
            <li>• Création d'un désir d'achat</li>
            <li>• Mise en avant de la rareté</li>
            <li>• Détails techniques pour rassurer l'acheteur</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
