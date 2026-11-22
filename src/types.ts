export type BlocCommande = {
  titre: string;
  commandes: { commande: string; explication: string }[];
};

export type FicheProjet = {
  slug: string;
  masque?: boolean; // true = fiche non affichée sur le site (données conservées)
  titre: string;
  contexte: string;
  periode: string;
  statut: string;
  resume: string;
  problematique: string;
  objectifs: string[];
  environnement: string[];
  schema: string; // image du schéma technique (dossier « public »)
  schemaLegende: string;
  etapes: string[];
  commandes: BlocCommande[];
  galerie: string[];
  resultats: string[];
  difficultes: { difficulte: string; solution: string }[];
  competences: string[];
  technologies: string[];
  rapport: string;
  cadreEthique?: string; // bandeau rappelant le cadre légal/autorisé (labo isolé)
  vulnerabilites?: { vulnerabilite: string; mesure: string }[];
  limites?: string[]; // limites du rapport / pistes d'amélioration identifiées
};

export type MediaItem = string;

export type Projet = FicheProjet;

export type Formation = {
  intitule: string;
  etablissement: string;
  periode: string;
  description: string;
};
