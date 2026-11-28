import { useEffect, useState } from 'react';
import { FileText, ImageIcon, Images, PlayCircle } from 'lucide-react';

type MediaPlaceholderProps = {
  chemin: string;
  typeMedia?: 'image' | 'video';
  className?: string;
};

function isConfigured(chemin: string) {
  return Boolean(chemin);
}

export function MediaPlaceholder({
  chemin,
  typeMedia = 'image',
  className = '',
}: MediaPlaceholderProps) {
  const isVideo = typeMedia === 'video';
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-night-700 bg-night-950/60 p-6 text-center ${className}`}
    >
      {isVideo ? (
        <PlayCircle className="text-electric-500/70" size={30} aria-hidden="true" />
      ) : (
        <ImageIcon className="text-electric-500/70" size={30} aria-hidden="true" />
      )}
      <p className="text-sm font-semibold text-night-200">
        {isVideo ? 'Emplacement réservé à votre vidéo' : "Emplacement réservé à votre capture d'écran"}
      </p>
      {chemin ? (
        <p className="break-all text-xs text-night-400">
          Fichier attendu : <span className="font-mono">{chemin}</span>
        </p>
      ) : (
        <p className="max-w-xs text-xs leading-relaxed text-night-400">
          Placez votre fichier dans le dossier « public » du projet, puis indiquez son nom dans
          le fichier de contenu.
        </p>
      )}
    </div>
  );
}

export function MediaFigure({ chemin, typeMedia = 'image', alt, contenirEntier = false }: MediaPlaceholderProps & { alt?: string; contenirEntier?: boolean }) {
  const [erreur, setErreur] = useState(false);
  useEffect(() => setErreur(false), [chemin]);

  if (!isConfigured(chemin) || erreur) {
    return <MediaPlaceholder chemin={chemin} typeMedia={typeMedia} />;
  }
  if (typeMedia === 'video') {
    return (
      <video
        controls
        src={chemin}
        className="w-full rounded-xl border border-night-800 bg-black object-cover"
      />
    );
  }
  return (
    <figure className="overflow-hidden rounded-xl border border-night-800 bg-night-950">
      <img
        src={chemin}
        alt={alt ?? 'Capture du projet'}
        loading="lazy"
        onError={() => setErreur(true)}
        className={
          contenirEntier
            ? 'w-full h-auto object-contain bg-night-950'
            : 'aspect-video w-full object-cover transition-transform duration-300 hover:scale-[1.02]'
        }
      />
    </figure>
  );
}

export function Galerie({ galerie, titre }: { galerie: string[]; titre: string }) {
  const nbEmplacements = Math.max(0, 2 - galerie.length);
  return (
    <div>
      <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-electric-400">
        <Images size={15} aria-hidden="true" />
        Galerie de captures
      </h4>
      {galerie.length === 0 ? (
        <p className="mt-3 text-xs leading-relaxed text-night-400">
          Aucune capture ajoutée pour le moment. Les emplacements ci-dessous accueilleront les
          captures d'écran de « {titre} ».
        </p>
      ) : null}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {galerie.map((chemin, i) => (
          <MediaFigure key={chemin} chemin={chemin} alt={`Capture ${i + 1} — ${titre}`} />
        ))}
        {Array.from({ length: nbEmplacements }).map((_, i) => (
          <MediaPlaceholder key={`placeholder-${i}`} chemin="" />
        ))}
      </div>
    </div>
  );
}

export function RapportLink({ rapport }: { rapport: string }) {
  if (!isConfigured(rapport)) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-night-800 px-4 py-2 text-xs font-medium text-night-500">
        <FileText size={14} aria-hidden="true" />
        Rapport PDF à ajouter
      </span>
    );
  }
  return (
    <a
      href={rapport}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-electric-700/50 bg-electric-950/40 px-4 py-2 text-xs font-semibold text-electric-300 transition hover:border-electric-500 hover:text-electric-200"
    >
      <FileText size={14} aria-hidden="true" />
      Consulter le rapport
    </a>
  );
}
