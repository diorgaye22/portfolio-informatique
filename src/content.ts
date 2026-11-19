// ============================================================================
// FICHIER DE CONTENU — MODIFIEZ TOUT ICI
// Les textes marqués « [À COMPLÉTER] » attendent vos informations : résultats
// observés, difficultés réelles, captures, rapports. Rien n'est inventé —
// chaque champ provisoire est conçu pour être remplacé par votre propre
// contenu. Les images se placent dans le dossier « public » du projet.
// ============================================================================

import type { FicheProjet } from '@/types';

export const profil = {
  nom: 'Dior Gaye',
  titre: 'Étudiante en Licence 3 Systèmes, Réseaux et Télécommunications',
  accroche:
    "Étudiante en Licence 3 Systèmes, Réseaux et Télécommunications à l'Université Alioune Diop de Bambey, je m'intéresse à l'administration des systèmes, aux infrastructures réseaux, aux services réseau et à la sécurité informatique. Ce portfolio rassemble mes projets académiques et mes travaux pratiques.",
  universite: 'Université Alioune Diop de Bambey',
  ville: 'Dakar, Sénégal',
  photoProfil: '/mon-photo.jpg',
};

export const aPropos = {
  titre: 'À propos',
  paragraphes: [
    "Étudiante en Licence 3 Systèmes, Réseaux et Télécommunications à l'Université Alioune Diop de Bambey (Sénégal), je consacre ma formation à la compréhension et à la mise en œuvre des infrastructures informatiques : administration des systèmes Windows et Linux, conception de réseaux, mise en place de services et sécurisation des environnements.",
    "Mon apprentissage repose essentiellement sur la pratique : configuration de serveurs, installation de services réseau sur Linux, simulation de topologies avec Cisco Packet Tracer et GNS3, et virtualisation de machines avec VMware. Les projets et travaux pratiques présentés dans ce portfolio reflètent ce parcours de formation.",
    "Je souhaite poursuivre dans les domaines de l'administration systèmes et réseaux et de la sécurité informatique, et mettre ces compétences au service d'une équipe professionnelle dans le cadre d'un stage ou d'un premier emploi.",
  ],
  pointsCles: [
    'Administration Windows Server et Linux',
    'Configuration et administration réseau',
    'Services réseau : DNS et DHCP',
    'Virtualisation avec VMware et GNS3',
    'Notions de sécurité informatique',
  ],
};

export const outils = [
  'Windows Server 2019',
  'Linux',
  'Cisco Packet Tracer',
  'VMware',
  'GNS3',
  'BIND9',
  'DNS / DHCP',
];

// Compétences, organisées par domaine. Les descriptions reprennent vos propres
// mots : complétez-les si vous souhaitez détailler davantage.
export const competences = [
  {
    titre: 'Administration système',
    icone: 'Server',
    elements: ['Windows Server 2019', 'Linux et administration système'],
  },
  {
    titre: 'Réseaux',
    icone: 'Network',
    elements: ['Configuration et administration réseau'],
  },
  {
    titre: 'Services réseau',
    icone: 'Globe',
    elements: ['DNS (BIND9)', 'DHCP'],
  },
  {
    titre: 'Virtualisation et simulation',
    icone: 'Layers',
    elements: ['VMware', 'GNS3', 'Cisco Packet Tracer'],
  },
  {
    titre: 'Sécurité informatique',
    icone: 'ShieldCheck',
    elements: ['Notions de sécurité informatique'],
  },
];

// ============================================================================
// FICHES PROJETS — les champs marqués [À COMPLÉTER] sont provisoires.
// Pour chaque image : placez le fichier dans « public » puis vérifiez que le
// chemin ci-dessous correspond à son nom. Laissez une galerie vide tant que
// vous n'avez pas de captures : des emplacements réservés s'affichent.
// ============================================================================
export const projets: FicheProjet[] = [
  {
    slug: 'windows-server-2019',
    titre: 'Administration Windows Server 2019',
    contexte: 'Travaux pratiques — Administration systèmes',
    periode: '2025 – 2026',
    statut: 'Projet de groupe · fiche complète',
    resume:
      "Mise en place et administration d'un environnement Windows Server 2019 dans le cadre des travaux pratiques de la licence : installation du système, configuration des rôles et gestion de l'environnement serveur.",
    problematique: "Comment installer deux serveurs Windows sur des machines virtuelles, les faire cohabiter dans un même domaine Active Directory, automatiser le nommage et l'adressage du réseau, puis protéger les données et contrôler les comptes ? Projet de groupe (groupe 54, encadré par Dr. Gaye) : les manipulations et les captures d'écran ont été réalisées par Dior Gaye.",
    objectifs: [
      "Installer deux serveurs Windows Server 2019 sur des machines virtuelles et leur attribuer une adresse IP statique",
      "Déployer Active Directory : domaine SRT2025G54.sn, puis second contrôleur de domaine",
      "Configurer le DNS (zones directe et inverse, hôtes, alias) et le DHCP (étendue, exclusions, bail)",
      "Mettre en place une sauvegarde planifiée avec quota disque, puis gérer des comptes et des groupes",
    ],
    environnement: [
      "Windows Server 2019 Standard Evaluation (machines virtuelles SRVP-G54 et SRVS-G54)",
      "Oracle VirtualBox (disques VDI dynamiquement alloués : 64 Go et 100 Go)",
      "Poste client Windows pour les tests DHCP et DNS",
      "Outils : Gestionnaire de serveur, Planificateur de tâches, Sauvegarde Windows Server, invite de commandes",
    ],
    schema: '/windows-server-schema.svg',
    schemaLegende:
      "Deux contrôleurs de domaine dans SRT2025G54.sn (réseau 192.168.26.0/24). Le serveur principal héberge aussi le DNS et le DHCP ; un poste client reçoit son adresse par DHCP.",
    etapes: [
      "Création des machines virtuelles dans VirtualBox et installation de Windows Server 2019",
      "Adresse IP statique (serveur principal : 192.168.26.54) et renommage en SRVP-G54 et SRVS-G54",
      "Ajout du rôle AD DS et promotion du serveur principal : nouvelle forêt SRT2025G54.sn",
      "Promotion du serveur secondaire en contrôleur de domaine du domaine existant et vérification dans Sites et services Active Directory",
      "DNS : zone directe DNSSRT2025G54.sn, zone inverse du réseau 192.168, 5 enregistrements d'hôtes avec PTR et 5 alias CNAME",
      "DHCP : étendue 192.168.26.1 à 192.168.26.80, exclusions, options routeur, domaine et DNS, autorisation du serveur",
      "Sauvegarde Windows Server : planification, script .bat lancé chaque jour par le Planificateur de tâches, quota de 15 Go sur le disque de sauvegarde",
      "Création des utilisateurs userFinance et userCompta et des groupes Finance et Compta, avec affectation des membres",
    ],
    commandes: [
      {
        titre: 'Diagnostic DHCP sur le poste client',
        commandes: [
          { commande: 'ipconfig /all', explication: "Afficher la configuration IP reçue du serveur DHCP" },
          { commande: 'ipconfig /release', explication: "Libérer l'adresse obtenue" },
          { commande: 'ipconfig /renew', explication: "Demander le renouvellement de l'adresse" },
        ],
      },
      {
        titre: 'Vérification de la résolution DNS',
        commandes: [
          { commande: 'nslookup', explication: "Interroger le serveur DNS : adresses 192.168.26.1 à .5 vers noms (BDserve, MESserve, FTPserve, IMPserve, APPserve) et alias" },
        ],
      },
    ],
    galerie: ["/img/ws-vm.jpg", "/img/ws-edition.jpg", "/img/ws-rename.jpg", "/img/ws-forest.jpg", "/img/ws-levels.jpg", "/img/ws-sites.jpg", "/img/ws-dyn.jpg", "/img/ws-host.jpg", "/img/ws-dhcp.jpg", "/img/ws-bail.jpg", "/img/ws-ns2.jpg", "/img/ws-ipc.jpg", "/img/ws-bat.jpg", "/img/ws-quota.jpg", "/img/ws-grp.jpg", "/img/ws-bkerr.jpg"],
    resultats: [
      "Résolution DNS vérifiée avec nslookup : noms, adresses et alias répondent",
      "Le poste client obtient une adresse du serveur DHCP ; ipconfig /release puis /renew fonctionnent",
      "Les deux serveurs SRVP-G54 et SRVS-G54 apparaissent dans Sites et services Active Directory",
      "Le groupe Compta contient userCompta et userFinance",
    ],
    difficultes: [
      {
        difficulte: "La sauvegarde a échoué faute de disque de destination disponible.",
        solution: "Ajout d'une partition sur l'espace alloué au serveur, puis reprise de la configuration de sauvegarde.",
      },
    ],
    competences: [
      "Installation et prise en main de Windows Server 2019",
      "Déploiement d'Active Directory et d'un second contrôleur de domaine",
      "Configuration DNS (zones directe et inverse) et DHCP",
      "Sauvegarde planifiée et quotas disque",
      "Gestion des utilisateurs et des groupes",
      "Diagnostic réseau avec ipconfig et nslookup",
    ],
    technologies: ['Windows Server 2019', 'Active Directory', 'DNS', 'DHCP', 'VirtualBox'],
    rapport: '/windows-server-rapport.pdf',
  },
  {
    slug: 'dns-bind9-linux',
    masque: true,
    titre: 'Installation et configuration de DNS avec BIND9 sous Linux',
    contexte: 'Travaux pratiques — Services réseau',
    periode: 'Licence 3',
    statut: 'Fiche en cours de rédaction',
    resume:
      "Installation et configuration du serveur DNS BIND9 sous Linux, avec création de zones de résolution directe et inversée, dans le cadre des travaux pratiques sur les services réseau.",
    problematique:
      "[À COMPLÉTER] Décrivez la problématique : pourquoi mettre en place un serveur DNS, et ce que le TP visait à démontrer (résolution de noms directe et inversée sur un réseau local).",
    objectifs: [
      '[À COMPLÉTER] Exemple — Installer le service BIND9 sur un serveur Linux',
      '[À COMPLÉTER] Exemple — Configurer une zone directe et une zone inversée',
      '[À COMPLÉTER] Exemple — Vérifier la résolution de noms avec les outils de diagnostic',
    ],
    environnement: [
      'Linux (distribution utilisée : [À COMPLÉTER])',
      'BIND9 (serveur DNS)',
      '[À COMPLÉTER] Machines clientes pour les tests de résolution',
    ],
    schema: '/dns-bind9-schema.png',
    schemaLegende:
      '[À COMPLÉTER] Légende du schéma : placez « dns-bind9-schema.png » dans le dossier « public ».',
    etapes: [
      '[À COMPLÉTER] Installation du paquet BIND9',
      '[À COMPLÉTER] Configuration des options principales du service',
      '[À COMPLÉTER] Création de la zone de résolution directe et des enregistrements',
      '[À COMPLÉTER] Création de la zone de résolution inversée',
      '[À COMPLÉTER] Tests de résolution depuis les clients',
    ],
    commandes: [
      {
        titre: '[À COMPLÉTER] Exemple — Installation et vérification du service',
        commandes: [
          { commande: 'sudo apt install bind9 bind9utils', explication: 'Installer BIND9 et ses utilitaires' },
          { commande: 'systemctl status bind9', explication: "Vérifier l'état du service" },
        ],
      },
      {
        titre: '[À COMPLÉTER] Exemple — Tests de résolution',
        commandes: [
          { commande: 'nslookup nom-de-machine', explication: 'Tester la résolution directe' },
          { commande: 'dig -x adresse-ip', explication: 'Tester la résolution inversée' },
        ],
      },
    ],
    galerie: [],
    resultats: [
      '[À COMPLÉTER] Décrivez uniquement ce que vous avez réellement obtenu : zones chargées, tests réussis ou échoués, limites constatées.',
    ],
    difficultes: [
      {
        difficulte: '[À COMPLÉTER] Décrivez une difficulté réellement rencontrée (ex. : erreur dans un fichier de zone)',
        solution: '[À COMPLÉTER] Expliquez comment vous l’avez résolue (ou indiquez « non résolue »)',
      },
    ],
    competences: [
      'Installation et configuration de BIND9',
      'Création de zones DNS directes et inversées',
      'Utilisation des outils de diagnostic DNS (nslookup, dig)',
    ],
    technologies: ['Linux', 'BIND9', 'DNS'],
    rapport: '',
  },
  {
    slug: 'reseaux-cisco-packet-tracer',
    masque: true,
    titre: 'Conception et configuration de réseaux avec Cisco Packet Tracer',
    contexte: 'Travaux pratiques — Réseaux',
    periode: 'Licence 3',
    statut: 'Fiche en cours de rédaction',
    resume:
      "Conception de topologies réseau et configuration d'équipements avec Cisco Packet Tracer : adressage, routage et vérification de la connectivité entre les postes et les réseaux simulés.",
    problematique:
      "[À COMPLÉTER] Décrivez la problématique : quelle topologie fallait-il concevoir, et quelles contraintes d'adressage ou de routage le TP devait-il couvrir.",
    objectifs: [
      '[À COMPLÉTER] Exemple — Concevoir une topologie comportant plusieurs réseaux',
      "[À COMPLÉTER] Exemple — Définir et appliquer un plan d'adressage IP",
      '[À COMPLÉTER] Exemple — Configurer le routage entre les réseaux',
      '[À COMPLÉTER] Exemple — Vérifier la connectivité de bout en bout',
    ],
    environnement: [
      'Cisco Packet Tracer',
      '[À COMPLÉTER] Équipements utilisés (routeurs, commutateurs, postes)',
    ],
    schema: '/cisco-packet-tracer-schema.png',
    schemaLegende:
      '[À COMPLÉTER] Légende du schéma : placez « cisco-packet-tracer-schema.png » dans le dossier « public ».',
    etapes: [
      '[À COMPLÉTER] Construction de la topologie dans Packet Tracer',
      "[À COMPLÉTER] Définition du plan d'adressage",
      "[À COMPLÉTER] Configuration des interfaces et du routage",
      '[À COMPLÉTER] Tests de connectivité (ping, traceroute) et diagnostic',
    ],
    commandes: [
      {
        titre: '[À COMPLÉTER] Exemple — Configuration de base d’un routeur',
        commandes: [
          { commande: 'enable', explication: 'Passer en mode privilégié' },
          { commande: 'configure terminal', explication: 'Entrer en mode de configuration' },
          { commande: 'ip address <adresse> <masque>', explication: 'Attribuer une adresse à une interface' },
        ],
      },
    ],
    galerie: [],
    resultats: [
      '[À COMPLÉTER] Décrivez uniquement ce que vous avez réellement obtenu : réseaux qui communiquent ou non, problèmes de routage observés.',
    ],
    difficultes: [
      {
        difficulte: '[À COMPLÉTER] Décrivez une difficulté réellement rencontrée',
        solution: '[À COMPLÉTER] Expliquez comment vous l’avez résolue (ou indiquez « non résolue »)',
      },
    ],
    competences: [
      'Conception de topologies réseau',
      "Application d'un plan d'adressage IP",
      'Configuration de base des équipements Cisco',
    ],
    technologies: ['Cisco Packet Tracer', 'Réseaux'],
    rapport: '',
  },
  {
    slug: 'virtualisation-vmware-gns3',
    masque: true,
    titre: 'Virtualisation avec VMware et GNS3',
    contexte: 'Travaux pratiques — Virtualisation',
    periode: 'Licence 3',
    statut: 'Fiche en cours de rédaction',
    resume:
      "Utilisation d'outils de virtualisation pour créer et gérer des environnements de travail : machines virtuelles avec VMware et simulation d'équipements réseau avec GNS3, en support des autres travaux pratiques.",
    problematique:
      "[À COMPLÉTER] Décrivez la problématique : pourquoi la virtualisation est indispensable pour les TP (isolation, économie de ressources, reproductibilité des environnements).",
    objectifs: [
      '[À COMPLÉTER] Exemple — Créer et configurer des machines virtuelles sous VMware',
      '[À COMPLÉTER] Exemple — Installer et configurer GNS3',
      "[À COMPLÉTER] Exemple — Intégrer des images d'équipements et construire une topologie de simulation",
    ],
    environnement: [
      'VMware (machines virtuelles)',
      'GNS3 (simulation réseau)',
      '[À COMPLÉTER] Poste hôte utilisé (système, ressources)',
    ],
    schema: '/virtualisation-schema.png',
    schemaLegende:
      '[À COMPLÉTER] Légende du schéma : placez « virtualisation-schema.png » dans le dossier « public ».',
    etapes: [
      '[À COMPLÉTER] Création et configuration des machines virtuelles sous VMware',
      '[À COMPLÉTER] Gestion des ressources et des réseaux virtuels',
      '[À COMPLÉTER] Installation et prise en main de GNS3',
      "[À COMPLÉTER] Intégration des images d'équipements et construction de la topologie",
    ],
    commandes: [
      {
        titre: '[À COMPLÉTER] Exemple — Vérification des réseaux virtuels',
        commandes: [
          { commande: 'ip a', explication: 'Afficher les interfaces réseau d’une machine virtuelle Linux' },
        ],
      },
    ],
    galerie: [],
    resultats: [
      '[À COMPLÉTER] Décrivez uniquement ce que vous avez réellement obtenu : machines fonctionnelles, topologies simulées, limites rencontrées (ressources, compatibilité).',
    ],
    difficultes: [
      {
        difficulte: '[À COMPLÉTER] Décrivez une difficulté réellement rencontrée',
        solution: '[À COMPLÉTER] Expliquez comment vous l’avez résolue (ou indiquez « non résolue »)',
      },
    ],
    competences: [
      'Création et gestion de machines virtuelles avec VMware',
      'Prise en main de GNS3 pour la simulation réseau',
      'Organisation d’environnements de travail virtualisés',
    ],
    technologies: ['VMware', 'GNS3'],
    rapport: '',
  },
  {
    slug: 'cybersecurite-laboratoire',
    masque: true,
    titre: 'Travaux pratiques de cybersécurité en laboratoire',
    contexte: 'Travaux pratiques académiques — Laboratoire',
    periode: 'Licence 3',
    statut: 'Fiche en cours de rédaction',
    resume:
      "Travaux pratiques académiques en laboratoire autour de la sécurité des systèmes et des réseaux : découverte des mécanismes de protection et application de bonnes pratiques sur des environnements de test.",
    problematique:
      "[À COMPLÉTER] Décrivez la problématique : quels risques le TP visait-il à illustrer, et quels mécanismes de protection il fallait mettre en œuvre.",
    objectifs: [
      '[À COMPLÉTER] Exemple — Étudier les mécanismes de protection des systèmes et réseaux',
      '[À COMPLÉTER] Exemple — Appliquer des bonnes pratiques de configuration sur un environnement de test',
      '[À COMPLÉTER] Exemple — Observer le comportement des services sécurisés',
    ],
    environnement: [
      '[À COMPLÉTER] Environnement de laboratoire utilisé',
      '[À COMPLÉTER] Outils de sécurité manipulés',
    ],
    schema: '/cybersecurite-schema.png',
    schemaLegende:
      '[À COMPLÉTER] Légende du schéma : placez « cybersecurite-schema.png » dans le dossier « public ».',
    etapes: [
      '[À COMPLÉTER] Étude des mécanismes de protection',
      "[À COMPLÉTER] Application des bonnes pratiques sur l'environnement de test",
      '[À COMPLÉTER] Observation et analyse du comportement des services',
      '[À COMPLÉTER] Synthèse sous forme de compte rendu de laboratoire',
    ],
    commandes: [
      {
        titre: '[À COMPLÉTER] Exemple — Vérification d’une configuration',
        commandes: [
          { commande: '[À COMPLÉTER]', explication: '[À COMPLÉTER] Explication de la commande' },
        ],
      },
    ],
    galerie: [],
    resultats: [
      '[À COMPLÉTER] Décrivez uniquement ce que vous avez réellement obtenu et observé en laboratoire.',
    ],
    difficultes: [
      {
        difficulte: '[À COMPLÉTER] Décrivez une difficulté réellement rencontrée',
        solution: '[À COMPLÉTER] Expliquez comment vous l’avez résolue (ou indiquez « non résolue »)',
      },
    ],
    competences: [
      'Compréhension des mécanismes de protection des systèmes',
      'Application de bonnes pratiques de sécurité',
      'Rédaction d’un compte rendu de laboratoire',
    ],
    technologies: ['Sécurité', 'Linux', 'Réseaux'],
    rapport: '',
  },
];

// ============================================================================
// FORMATIONS
// ============================================================================
export const formations = [
  {
    intitule: 'Licence 3 — Systèmes, Réseaux et Télécommunications',
    etablissement: 'Université Alioune Diop de Bambey',
    periode: '2026 – aujourd’hui',
    description:
      "Formation axée sur l'administration des systèmes (Windows Server, Linux), la conception et l'administration des réseaux, les services réseau (DNS, DHCP), la virtualisation (VMware, GNS3) et la sécurité informatique.",
  },
  {
    intitule: 'Licence 1-2 — Systèmes, Réseaux et Télécommunications',
    etablissement: 'Université Alioune Diop de Bambey',
    periode: '2024 – 2026',
    description: 'Premières années de la filière SRT.',
  },
  {
    intitule: 'Cisco Networking Academy — Switching, Routing, and Wireless Essentials (SRWE)',
    etablissement: 'Cisco Networking Academy (parcours CCNA)',
    periode: '2026',
    description: 'Formation complémentaire en réseaux.',
  },
  {
    intitule: 'Elements of AI',
    etablissement: 'Université d’Helsinki et Sorbonne Université',
    periode: '2025',
    description: 'Formation suivie en entier.',
  },
  {
    intitule: 'Baccalauréat série S2',
    etablissement: 'Lycée Seydina Limamoulaye, Guédiawaye',
    periode: '2022 – 2023',
    description: '',
  },
];

export const certifications: { intitule: string; organisme: string; annee: string; lien: string }[] = [];

export const contact = {
  titre: 'Contact',
  intro:
    "N'hésitez pas à me contacter pour échanger autour de mon parcours, de mes projets académiques ou d'une opportunité de stage.",
  email: 'dioristagaye@gmail.com',
  telephone: '',
  ville: 'Dakar, Sénégal',
  github: '',
};

export const navigation = [
  { libelle: 'Accueil', ancre: 'accueil' },
  { libelle: 'À propos', ancre: 'a-propos' },
  { libelle: 'Compétences', ancre: 'competences' },
  { libelle: 'Projets', ancre: 'projets' },
  { libelle: 'Formations', ancre: 'formations' },
  { libelle: 'Contact', ancre: 'contact' },
];
