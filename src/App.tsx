import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Hero, APropos } from '@/components/HeroAPropos';
import Competences from '@/components/Competences';
import Projets from '@/components/Projets';
import PageProjet from '@/components/PageProjet';
import ProjetCybersecurite from '@/components/ProjetCybersecurite';
import { Formations, Contact } from '@/components/FormationsContact';
import { projets } from '@/content';

const lireSlug = (): string | null => {
  const m = window.location.hash.match(/^#projet-(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
};

// Ancres internes à une page de projet : un changement vers l'une de ces ancres
// doit seulement faire défiler la page en cours, pas renvoyer à l'accueil.
const ANCRES_INTERNES_PROJET = ['methodologie'];

const retourAuxProjets = () => {
  window.location.hash = 'projets';
};

export default function App() {
  const [slug, setSlug] = useState<string | null>(lireSlug);

  useEffect(() => {
    const onHash = () => {
      const nouveauSlug = lireSlug();
      if (nouveauSlug) {
        setSlug(nouveauSlug);
        return;
      }
      const ancre = window.location.hash.slice(1);
      if (ANCRES_INTERNES_PROJET.includes(ancre)) return; // on reste sur la page de projet actuelle
      setSlug(null);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const projet = slug ? projets.find((p) => p.slug === slug && !p.masque) : undefined;

  useEffect(() => {
    if (projet) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const id = window.location.hash.slice(1);
    if (id) {
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
      );
    }
  }, [projet]);

  if (projet) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          {projet.slug === 'cybersecurite-laboratoire' ? (
            <ProjetCybersecurite projet={projet} onRetour={retourAuxProjets} />
          ) : (
            <PageProjet projet={projet} onRetour={retourAuxProjets} />
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <APropos />
        <Competences />
        <Projets />
        <Formations />
        <Contact />
      </main>
    </div>
  );
}
