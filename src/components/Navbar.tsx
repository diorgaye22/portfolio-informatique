import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, profil } from '@/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('accueil');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navigation
        .map((n) => document.getElementById(n.ancre))
        .filter((el): el is HTMLElement => el !== null);
      let current = sections[0]?.id ?? 'accueil';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 140) current = section.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (ancre: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active === ancre
        ? 'bg-electric-600/20 text-electric-300'
        : 'text-night-300 hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-night-800 bg-night-950/90 py-2 shadow-lg shadow-black/30 backdrop-blur'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#accueil"
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          {profil.nom}
          <span className="ml-2 hidden text-xs font-medium uppercase tracking-widest text-electric-400 sm:inline">
            Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.ancre} href={`#${item.ancre}`} className={linkClass(item.ancre)}>
              {item.libelle}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="rounded-lg border border-night-700 p-2 text-night-200 transition hover:border-electric-600 hover:text-electric-300 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="mx-4 mt-2 rounded-2xl border border-night-800 bg-night-950/95 p-3 shadow-xl backdrop-blur lg:hidden"
          aria-label="Navigation mobile"
        >
          {navigation.map((item) => (
            <a
              key={item.ancre}
              href={`#${item.ancre}`}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                active === item.ancre
                  ? 'bg-electric-600/20 text-electric-300'
                  : 'text-night-300 hover:bg-night-900 hover:text-white'
              }`}
            >
              {item.libelle}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
