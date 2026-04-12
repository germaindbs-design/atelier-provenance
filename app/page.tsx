export default function AtelierProvenanceSite() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Atelier Provenance
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-tight md:text-6xl">
            Vous avez les bonnes pièces.
            <br />
            Nous leur donnons le langage qu’elles méritent.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            Rédaction et mise en valeur de mobilier de collection pour antiquaires,
            marchands, galeries et vendeurs de design. Des fiches de vente prêtes à
            publier, claires, désirables et directement exploitables.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Demander un exemple
            </a>
            <a
              href="#offres"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-500"
            >
              Voir les prestations
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Clarté</p>
            <p className="mt-3 text-base leading-7 text-neutral-700">
              Titres positionnants, informations hiérarchisées, lecture immédiate.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Désirabilité</p>
            <p className="mt-3 text-base leading-7 text-neutral-700">
              Mise en valeur sobre du design, de la matière, de l’époque et de la présence.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Exploitation directe</p>
            <p className="mt-3 text-base leading-7 text-neutral-700">
              Versions prêtes à publier pour site, marketplace, newsletter ou réseaux.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20" id="probleme">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Le constat</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
              Beaucoup d’objets sont bien choisis.
              <br />
              Peu sont réellement bien présentés.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-neutral-700">
            <p>
              La plupart des annonces décrivent sans valoriser. Elles informent, mais ne
              donnent ni lecture, ni cohérence, ni projection.
            </p>
            <p>
              Résultat : des objets sous-positionnés, une valeur perçue affaiblie et une
              image de catalogue moins forte qu’elle ne pourrait l’être.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">La proposition</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
              Nous transformons des objets en récits de vente.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Pas pour en dire plus. Pour rendre la valeur visible, clarifier la pièce et
              aider l’acheteur à se projeter.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium">Structuration</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Titre positionnant, informations hiérarchisées, points saillants.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium">Mise en valeur</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Vocabulaire précis, contexte cohérent, justification naturelle du prix.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium">Déclinaisons</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Version longue, version courte, extraits réutilisables selon les besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50" id="offres">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Prestations</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
              Une gamme simple, pour tester, structurer, puis déléguer.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-medium">Audit Express</h3>
                <p className="text-base text-neutral-500">390 €</p>
              </div>
              <p className="mt-5 text-base leading-8 text-neutral-600">
                Une première démonstration concrète pour voir immédiatement ce que vos objets
                pourraient devenir.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700">
                <li>Analyse de 10 objets</li>
                <li>Réécriture complète de 2 fiches</li>
                <li>Recommandations concrètes</li>
                <li>Appel de restitution de 30 minutes</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-2 ring-neutral-900">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-medium">Pack Pilote</h3>
                <p className="text-base text-neutral-500">1 900 €</p>
              </div>
              <p className="mt-5 text-base leading-8 text-neutral-600">
                L’offre centrale pour transformer un premier lot d’objets en catalogue plus
                lisible, plus cohérent et plus vendable.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700">
                <li>15 fiches premium prêtes à publier</li>
                <li>Déclinaisons courtes et longues</li>
                <li>Contenus complémentaires selon les besoins</li>
                <li>Livraison rapide et utilisation immédiate</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-medium">Abonnement</h3>
                <p className="text-base text-neutral-500">3 000 à 6 000 € / mois</p>
              </div>
              <p className="mt-5 text-base leading-8 text-neutral-600">
                Une externalisation fluide de la rédaction catalogue pour les structures qui
                ont du volume et veulent gagner du temps sans perdre en niveau.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700">
                <li>30 à 60 fiches par mois</li>
                <li>Optimisation continue</li>
                <li>Support asynchrone</li>
                <li>Production régulière et homogène</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-medium">Système Premium</h3>
                <p className="text-base text-neutral-500">8 000 à 20 000 €</p>
              </div>
              <p className="mt-5 text-base leading-8 text-neutral-600">
                Pour les catalogues à structurer en profondeur : refonte éditoriale,
                harmonisation, logique de gamme et transmission de méthode.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700">
                <li>Refonte catalogue</li>
                <li>Storytelling global</li>
                <li>Templates et process</li>
                <li>Formation d’équipe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Exemples</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
              Trois cas pour montrer ce que change une fiche bien construite.
            </h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium">Enfilade Karlit, années 1960</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Repositionnement d’une pièce déjà forte : meilleure lecture, meilleure présence,
                meilleure cohérence.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium">Trois chaises années 1950</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Transformation d’un lot utilitaire en ensemble cohérent, lisible et plus désirable.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium">Bureau ancien vers 1880</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Justification du positionnement et du prix par la structure, l’usage et la qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200" id="contact">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Contact</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
              Le plus simple : m’envoyer 2 ou 3 objets.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Photos, prix, dimensions, état, et toute information disponible. Je te dirai si
              c’est un bon test et sous quelle forme commencer.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:contact@atelierprovenance.fr"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Écrire un email
              </a>
              <a
                href="#offres"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-500"
              >
                Revoir les offres
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
