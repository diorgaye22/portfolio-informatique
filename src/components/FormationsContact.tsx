import { GraduationCap, BadgeCheck, ExternalLink, Mail, Phone, MapPin, Github } from 'lucide-react';
import { formations, certifications, contact } from '@/content';
import type { Formation } from '@/types';

export function Formations() {
  const items: Formation[] = formations;
  return (
    <section id="formations" className="scroll-mt-20 border-t border-night-900 bg-night-900/40">
      <div className="section-shell">
        <span className="section-tag">Formations et certifications</span>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Mon parcours
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-electric-400">
              <GraduationCap size={16} aria-hidden="true" />
              Formations
            </h3>
            <ol className="relative mt-6 space-y-8 border-l border-night-800 pl-6">
              {items.map((f, i) => (
                <li key={i} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full border-2 border-electric-500 bg-night-950"
                  />
                  <p className="text-xs font-medium uppercase tracking-wider text-night-400">
                    {f.periode}
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold text-white">
                    {f.intitule}
                  </h4>
                  <p className="mt-0.5 text-sm text-electric-300">{f.etablissement}</p>
                  {f.description ? <p className="mt-2 text-sm leading-relaxed text-night-300">{f.description}</p> : null}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-electric-400">
              <BadgeCheck size={16} aria-hidden="true" />
              Certifications
            </h3>
            {certifications.length === 0 ? (
              <div className="card mt-6 p-6">
                <p className="text-sm text-night-300">
                  Aucune certification renseignée pour le moment. Les certifications obtenues
                  seront ajoutées ici.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {certifications.map((c, i) => (
                  <div key={i} className="card flex items-start justify-between gap-4 p-5">
                    <div>
                      <h4 className="font-display text-base font-semibold text-white">
                        {c.intitule}
                      </h4>
                      <p className="mt-1 text-sm text-night-400">
                        {c.organisme} · {c.annee}
                      </p>
                    </div>
                    {c.lien ? (
                      <a
                        href={c.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Vérifier la certification ${c.intitule}`}
                        className="shrink-0 rounded-lg border border-night-700 p-2 text-night-300 transition hover:border-electric-500 hover:text-electric-300"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const moyens: { icone: typeof Mail; label: string; valeur: string; href?: string }[] = [];
  if (contact.email) moyens.push({ icone: Mail, label: 'Email', valeur: contact.email, href: `mailto:${contact.email}` });
  if (contact.telephone) moyens.push({ icone: Phone, label: 'Téléphone', valeur: contact.telephone, href: `tel:${contact.telephone.replace(/\s/g, '')}` });
  if (contact.ville) moyens.push({ icone: MapPin, label: 'Localisation', valeur: contact.ville });
  if (contact.github) moyens.push({ icone: Github, label: 'GitHub', valeur: contact.github, href: contact.github });

  return (
    <section id="contact" className="scroll-mt-20 border-t border-night-900">
      <div className="section-shell">
        <span className="section-tag">Contact</span>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          {contact.titre}
        </h2>
        <p className="mt-3 max-w-2xl text-night-400">{contact.intro}</p>

        {moyens.length > 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moyens.map(({ icone: Icone, label, valeur, href }) => {
              const contenu = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-600/15 text-electric-400">
                    <Icone size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-night-500">
                      {label}
                    </span>
                    <span className="block break-all text-sm font-medium text-night-100">
                      {valeur}
                    </span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card flex items-center gap-4 p-5 transition hover:border-electric-700/60"
                >
                  {contenu}
                </a>
              ) : (
                <div key={label} className="card flex items-center gap-4 p-5">
                  {contenu}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="card mt-10 p-6">
            <p className="text-sm text-night-300">
              [À MODIFIER] Aucune coordonnée renseignée pour le moment. Ajoutez votre email, votre
              numéro de téléphone ou vos profils professionnels dans le fichier de contenu —
              chaque élément laissé vide reste masqué.
            </p>
          </div>
        )}

        <footer className="mt-20 border-t border-night-800 pt-8 text-center text-xs text-night-500">
          © {new Date().getFullYear()} — Portfolio personnel. Tous droits réservés.
        </footer>
      </div>
    </section>
  );
}
