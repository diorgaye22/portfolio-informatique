import { useState } from 'react';
import { ArrowDown, MapPin, GraduationCap, UserCircle } from 'lucide-react';
import { profil, aPropos, outils } from '@/content';

export function Hero() {
  const [photoErreur, setPhotoErreur] = useState(false);
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(33,119,235,0.18),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-electric-600/10 blur-3xl"
      />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-up">
          <span className="section-tag">
            <GraduationCap size={14} aria-hidden="true" />
            {profil.universite}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profil.nom}
            <span className="mt-3 block text-xl font-semibold text-electric-400 sm:text-2xl lg:text-3xl">
              {profil.titre}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-night-300 sm:text-lg">
            {profil.accroche}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-night-400">
            <MapPin size={16} className="text-electric-400" aria-hidden="true" />
            {profil.ville}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projets" className="btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-ghost">
              Me contacter
            </a>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <div className="card w-72 overflow-hidden p-2">
            <div className="flex aspect-[3/4] items-center justify-center rounded-xl bg-night-950">
              {photoErreur ? (
                <div className="flex flex-col items-center gap-2 p-6 text-center">
                  <UserCircle size={56} className="text-night-700" aria-hidden="true" />
                  <p className="text-xs text-night-500">
                    Photo à venir
                  </p>
                </div>
              ) : (
                <img
                  src={profil.photoProfil}
                  alt={`Photo de ${profil.nom}`}
                  className="h-full w-full rounded-xl object-cover"
                  onError={() => setPhotoErreur(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#a-propos"
        aria-label="Aller à la section À propos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-night-800 p-3 text-night-400 transition hover:border-electric-500 hover:text-electric-300"
      >
        <ArrowDown size={18} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}

export function APropos() {
  return (
    <section id="a-propos" className="scroll-mt-20 border-t border-night-900 bg-night-900/40">
      <div className="section-shell">
        <span className="section-tag">À propos</span>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {aPropos.paragraphes.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-night-300">
                {p}
              </p>
            ))}
          </div>
          <div className="card h-fit p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-electric-400">
              En quelques points
            </h3>
            <ul className="mt-4 space-y-3">
              {aPropos.pointsCles.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-night-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
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
