# Publier la refonte — 3 commandes

Ouvrir un terminal (PowerShell) dans ce dossier
(`Desktop\Projet\Atelier Provenance\06 Site internet\atelier-provenance`) :

```powershell
git add -A
git commit -m "Refonte complète : identité Galerie muséale + nouvelles offres"
git push origin main
```

Vercel détecte le push et redéploie automatiquement le site.

## Vérifier avant de pousser (facultatif)

```powershell
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Ce qui a changé (juillet 2026)

- Identité « Galerie muséale » alignée sur le template Instagram : ivoire
  #FAF6EE, encre #2E2820, or ancien #9C7A3C, Cormorant Garamond, motif du
  filet à coins carrés.
- Structure en chapitres (I. Constat, II. Méthode, III. Parcours, IV. Étude,
  V. Le média, VI. Contact).
- Offres remplacées par le parcours revu : Audit Express 390 € → Pack Pilote
  1 900 € → Abonnement 3 000–6 000 €/mois → Système Premium 8 000–20 000 €,
  chacune présentée en Promesse / Contenu / Résultat / Prix.
- Positionnement B2B (maisons de vente, galeries, marchands), audit déductible.
- Formulaire de contact orienté structure/catalogue, FAQ réécrite.
- Pages mentions légales et CGV conservées et restylées ; les CGV (articles
  1 à 4) ont été mises à jour avec la nouvelle grille (Audit Express, Pack
  Pilote, Abonnement, Système Premium), acomptes et délais correspondants.
