import { useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Target,
  MonitorSmartphone,
  Network,
  ListChecks,
  Terminal,
  CheckCircle2,
  Wrench,
  GraduationCap,
  HelpCircle,
  BadgeCheck,
} from 'lucide-react';
import type { FicheProjet } from '@/types';
import { navigation } from '@/content';
import { Galerie, RapportLink, MediaFigure } from '@/components/MediaSlots';

type Props = {
  projet: FicheProjet;
  onRetour: () => void;
};

function SectionFiche({
  icone: Icone,
  titre,
  children,
}: {
  icone: typeof Target;
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-electric-400">
        <Icone size={15} aria-hidden="true" />
        {titre}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ListePuces({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-night-200">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PageProjet({ projet, onRetour }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onRetour();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onRetour, projet.slug]);

  const naviguerVers = (ancre: string) => {
    window.location.hash = ancre;
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <button
          type="button"
          onClick={onRetour}
          className="inline-flex items-center gap-2 rounded-full border border-night-700 px-4 py-2 text-xs font-semibold text-night-300 transition hover:border-electric-500 hover:text-electric-300"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Retour aux projets
        </button>

        <nav aria-label="Navigation secondaire" className="mt-6 flex flex-wrap gap-2">
          {navigation.map((item) => (
            <button
              key={item.ancre}
              type="button"
              onClick={() => naviguerVers(item.ancre)}
              className="rounded-full border border-night-800 px-4 py-1.5 text-xs font-medium text-night-400 transition hover:border-electric-600 hover:text-electric-300"
            >
              {item.libelle}
            </button>
          ))}
        </nav>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-night-400">
            <span className="rounded-full bg-electric-600/15 px-3 py-1 font-medium text-electric-300">
              {projet.contexte}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} aria-hidden="true" />
              {projet.periode}
            </span>
            <span className="rounded-full border border-night-700 px-3 py-1 text-night-300">
              {projet.statut}
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {projet.titre}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-night-300">{projet.resume}</p>
        </header>

        <SectionFiche icone={HelpCircle} titre="Contexte et problématique">
          <p className="text-sm leading-relaxed text-night-200">{projet.problematique}</p>
        </SectionFiche>

        <SectionFiche icone={Target} titre="Objectifs techniques">
          <ListePuces items={projet.objectifs} />
        </SectionFiche>

        <SectionFiche icone={MonitorSmartphone} titre="Environnement de travail et logiciels utilisés">
          <ListePuces items={projet.environnement} />
        </SectionFiche>

        <SectionFiche icone={Network} titre="Architecture ou schéma technique">
          <MediaFigure chemin={projet.schema} alt={`Schéma technique — ${projet.titre}`} />
          <p className="mt-3 text-xs leading-relaxed text-night-400">{projet.schemaLegende}</p>
        </SectionFiche>

        <SectionFiche icone={ListChecks} titre="Étapes de réalisation">
          <ol className="space-y-3">
            {projet.etapes.map((etape, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-night-200">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric-600/15 text-xs font-semibold text-electric-300">
                  {i + 1}
                </span>
                {etape}
              </li>
            ))}
          </ol>
        </SectionFiche>

        {projet.commandes.length > 0 && (
          <SectionFiche icone={Terminal} titre="Commandes et configurations importantes">
            <div className="space-y-5">
              {projet.commandes.map((bloc, i) => (
                <div key={i} className="card overflow-hidden">
                  <p className="border-b border-night-800 bg-night-950/60 px-5 py-3 text-sm font-semibold text-night-100">
                    {bloc.titre}
                  </p>
                  <div className="divide-y divide-night-800/60">
                    {bloc.commandes.map((c, j) => (
                      <div key={j} className="px-5 py-3">
                        <code className="block break-all rounded-md bg-night-950 px-3 py-2 font-mono text-xs text-electric-300">
                          {c.commande}
                        </code>
                        <p className="mt-2 text-xs text-night-400">{c.explication}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionFiche>
        )}

        <SectionFiche icone={BadgeCheck} titre="Captures d'écran des manipulations">
          <Galerie galerie={projet.galerie} titre={projet.titre} />
        </SectionFiche>

        <SectionFiche icone={CheckCircle2} titre="Résultats réellement obtenus">
          <ListePuces items={projet.resultats} />
        </SectionFiche>

        <SectionFiche icone={Wrench} titre="Difficultés rencontrées et solutions apportées">
          <div className="space-y-4">
            {projet.difficultes.map((d, i) => (
              <div key={i} className="card p-5">
                <p className="text-sm font-semibold text-night-100">Difficulté</p>
                <p className="mt-1 text-sm leading-relaxed text-night-300">{d.difficulte}</p>
                <p className="mt-4 text-sm font-semibold text-electric-300">Solution apportée</p>
                <p className="mt-1 text-sm leading-relaxed text-night-300">{d.solution}</p>
              </div>
            ))}
          </div>
        </SectionFiche>

        <SectionFiche icone={GraduationCap} titre="Compétences acquises">
          <ListePuces items={projet.competences} />
        </SectionFiche>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-night-800 pt-6">
          <div className="flex flex-wrap gap-2">
            {projet.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-night-700 px-3 py-1 text-xs text-night-300"
              >
                {t}
              </span>
            ))}
          </div>
          <RapportLink rapport={projet.rapport} />
        </footer>

        <div className="mt-10">
          <button
            type="button"
            onClick={onRetour}
            className="btn-ghost"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Retour à la liste des projets
          </button>
        </div>
      </div>
    </div>
  );
}
