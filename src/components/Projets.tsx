import {
  Calendar,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { projets } from '@/content';
import type { Projet } from '@/types';
import { RapportLink } from '@/components/MediaSlots';

function CarteProjet({ projet }: { projet: Projet }) {
  return (
    <article className="card-light flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400">
      <div className="flex flex-wrap items-center gap-3 text-xs text-night-600">
        <span className="rounded-full bg-electric-100 px-3 py-1 font-medium text-electric-700">
          {projet.contexte}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={13} aria-hidden="true" />
          {projet.periode}
        </span>
        <span className="ml-auto rounded-full border border-night-300 px-3 py-1 text-night-600">
          {projet.statut}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-night-900">{projet.titre}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-night-700">{projet.resume}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {projet.technologies.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-full border border-night-300 px-3 py-1 text-xs text-night-600"
          >
            <Wrench size={11} aria-hidden="true" />
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={`#projet-${projet.slug}`} className="btn-primary !px-5 !py-2.5 text-xs">
          Voir la fiche détaillée
          <ArrowRight size={14} aria-hidden="true" />
        </a>
        <RapportLink rapport={projet.rapport} />
      </div>
    </article>
  );
}

export default function Projets() {
  return (
    <section id="projets" className="scroll-mt-20 border-t border-night-900 bg-night-900/40">
      <div className="section-shell">
        <span className="section-tag">Projets académiques et travaux pratiques</span>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Projets réalisés dans le cadre de ma licence
        </h2>
        <p className="mt-3 max-w-2xl text-night-400">
          Chaque projet dispose d'une fiche détaillée : contexte et problématique, objectifs,
          environnement, schéma technique, étapes de réalisation, commandes, captures d'écran,
          résultats obtenus, difficultés rencontrées et compétences acquises.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projets.filter((p) => !p.masque).map((p) => (
            <CarteProjet key={p.slug} projet={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
