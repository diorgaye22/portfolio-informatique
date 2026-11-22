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

const retourAuxProjets = () => {
  window.location.hash = 'projets';
};

export default function App() {
  const [slug, setSlug] = useState<string | null>(lireSlug);

  useEffect(() => {
    const onHash = () => setSlug(lireSlug());
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
