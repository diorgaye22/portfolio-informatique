import { Server, Network, Globe, Layers, ShieldCheck } from 'lucide-react';
import { competences, outils } from '@/content';

const icones: Record<string, typeof Server> = {
  Server,
  Network,
  Globe,
  Layers,
  ShieldCheck,
};

export default function Competences() {
  return (
    <section id="competences" className="scroll-mt-20 border-t border-night-900">
      <div className="section-shell">
        <span className="section-tag">Compétences techniques</span>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Ce que je travaille
        </h2>
        <p className="mt-3 max-w-2xl text-night-400">
          Domaines étudiés et pratiqués au cours de ma licence, à travers les cours et les
          travaux pratiques présentés dans la section Projets.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {competences.map((comp) => {
            const Icone = icones[comp.icone] ?? Server;
            return (
              <article
                key={comp.titre}
                className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-700/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-600/15 text-electric-400 transition-colors group-hover:bg-electric-600/25">
                  <Icone size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {comp.titre}
                </h3>
                <ul className="mt-3 space-y-2">
                  {comp.elements.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-night-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500/70" />
                      {e}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-night-400">
            Outils et technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {outils.map((outil) => (
              <span
                key={outil}
                className="rounded-full border border-night-700 bg-night-900 px-4 py-1.5 text-sm text-night-200 transition-colors hover:border-electric-600 hover:text-electric-300"
              >
                {outil}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
