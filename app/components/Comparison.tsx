export default function Comparison() {
  const examples = [
    {
      before: {
        title: "Fauteuil club années 1930",
        description: "Fauteuil club en bon état. Bois et tissu. Dimensions : 80x70x90 cm. Prix : 850€."
      },
      after: {
        title: "Fauteuil club en noyer - Atelier Süe et Mare, vers 1930",
        description: "Rare exemplaire de fauteuil club issu de l'atelier Süe et Mare, figures majeures de l'Art Déco français. Structure en noyer massif aux lignes épurées, typiques du style 1930. Le cuir patiné, d'origine, présente une belle usure qui témoigne de son authenticité et de son histoire.\n\nCe modèle, produit en petite série, est particulièrement recherché par les collectionneurs pour son élégance intemporelle et son confort remarquable. Les accotoirs légèrement inclinés et le dossier galbé offrent une assise idéale, tandis que les pieds fuselés en noyer massif apportent une touche de sophistication.\n\nDimensions : 80 x 70 x 90 cm (H). État : très bon pour son âge, avec une patine naturelle qui ajoute à son charme. Le cuir présente quelques marques d'usage cohérentes avec son âge, sans altérer sa structure.\n\nPrix : 2 800€ (estimé entre 2 500€ et 3 500€ selon la demande)."
      }
    },
    {
      before: {
        title: "Table basse années 1950",
        description: "Table basse en bois. Style années 50. Bon état. 120x60 cm. 300€."
      },
      after: {
        title: "Table basse en palissandre - Jean Prouvé, circa 1955",
        description: "Table basse exceptionnelle attribuée à Jean Prouvé, figure emblématique du design industriel français. Pièce rare en palissandre, essence noble et chaleureuse, caractéristique de la production des années 1950.\n\nLa structure en acier laqué noir, typique de l'esthétique Prouvé, contraste élégamment avec le plateau en palissandre aux veines profondes. Les pieds en « compas » sont une signature du designer, alliant robustesse et légèreté visuelle.\n\nCette table, probablement issue d'une petite série ou d'une commande spéciale, présente des proportions parfaites (120 x 60 x 40 cm) qui en font un meuble polyvalent, aussi à l'aise dans un intérieur contemporain que dans un cadre plus classique.\n\nÉtat : très bon, avec une patine naturelle qui met en valeur le bois. Quelques micro-rayures superficielles, cohérentes avec l'âge du meuble, ajoutent à son caractère.\n\nPrix : 3 200€ (estimé entre 2 800€ et 4 000€ selon la provenance)."
      }
    }
  ]

  return (
    <section id="examples" className="section">
      <div className="container">
        <h2 className="section-title">Avant / Après</h2>
        <p className="section-subtitle">Découvrez comment une description experte peut transformer la perception d'une pièce</p>

        {examples.map((example, index) => (
          <div key={index} className="comparison">
            <div className="comparison-item">
              <div className="comparison-label">Avant</div>
              <h3>{example.before.title}</h3>
              <p>{example.before.description}</p>
            </div>
            <div className="comparison-item">
              <div className="comparison-label">Après</div>
              <h3>{example.after.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{example.after.description}</p>
            </div>
          </div>
        ))}

        <div className="text-center">
          <p className="mt-4">Chaque texte est unique et adapté à la pièce. Nous analysons son histoire, ses caractéristiques techniques et son marché pour créer une description qui valorise son authenticité et sa rareté.</p>
        </div>
      </div>
    </section>
  )
}
