# Portfolio informatique — Dior Gaye

Portfolio professionnel d'une étudiante en Licence 3 Systèmes, Réseaux et Télécommunications (SRT) à l'Université Alioune Diop de Bambey, Sénégal. Il présente des projets d'administration systèmes et réseaux, documentés avec des captures d'écran réelles.

**Site en ligne :** https://dior-gaye.netlify.app

## Projet présenté

**Infrastructure Windows Server 2019** (projet de groupe, 2025 – 2026) : deux contrôleurs de domaine Active Directory, DNS (zones directe et inverse), DHCP, sauvegarde planifiée avec quota, utilisateurs et groupes. La fiche contient le schéma d'architecture, les étapes, 16 captures, les résultats, la difficulté rencontrée et le rapport PDF.

## Contenu du site

- Accueil, À propos, Compétences, Projets, Formations, Contact
- Une fiche détaillée par projet, avec une adresse propre (`#projet-<nom>`)
- Design responsive (ordinateur, tablette, téléphone)

## Technologies

React 18, TypeScript, Vite, Tailwind CSS, lucide-react. Hébergement : Netlify.

## Lancer le projet en local

Prérequis : Node.js 20.19 ou plus (22 recommandé).

```bash
npm install
npm run dev        # serveur de développement
npm run build      # génère le dossier dist/
npm run preview    # prévisualise le build
```

## Structure

```
src/
  content.ts       tous les textes : profil, compétences, projets, formations
  components/      Navbar, Hero, Projets, PageProjet, Contact, etc.
public/            images, schémas et rapports PDF
netlify.toml       configuration de déploiement
```

## Ajouter un projet

1. Déposer les captures, le schéma et le rapport dans `public/`.
2. Ajouter une fiche dans la liste `projets` de `src/content.ts` (copier la fiche Windows Server comme modèle).
3. Pour garder une fiche cachée tant qu'elle n'est pas finie, ajouter `masque: true`.
4. Enregistrer et envoyer sur GitHub : Netlify republie le site automatiquement.

## Déploiement

Le dépôt est relié à Netlify. Commande de build : `npm run build`, dossier publié : `dist`, Node 22 (voir `netlify.toml`).

## Auteure

Dior Gaye — Licence 3 SRT, Université Alioune Diop de Bambey. Coordonnées disponibles sur le site.
