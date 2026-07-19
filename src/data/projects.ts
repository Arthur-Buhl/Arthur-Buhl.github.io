export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

// Projets réels et éditables. Ajoute / modifie librement.
export const projects: Project[] = [
  {
    title: "Finance Dashboard",
    description:
      "Application full-stack de gestion de finances personnelles : connexion aux comptes bancaires via l'API Plaid, catégorisation automatique des transactions et tableau de bord interactif des dépenses.",
    tech: ["TypeScript", "Plaid API", "Full-stack"],
    repo: "https://github.com/Arthur-Buhl/Finance-Dashboard",
    featured: true,
  },
  {
    title: "Compilateur Tiger en C++",
    description:
      "Développement d'un compilateur pour le langage Tiger à EPITA : analyse lexicale et syntaxique, construction et manipulation de l'AST. Lexer/parser avec RE-flex et Bison, et parcours de l'arbre via le design pattern Visitor.",
    tech: ["C++", "Compilation", "Flex / Bison", "AST", "Visitor"],
  },
  {
    title: "Serveur HTTP en C",
    description:
      "Serveur web minimaliste en C, capable de traiter des requêtes HTTP et de servir du contenu statique : serveur TCP sur sockets POSIX, gestion des requêtes GET, génération des réponses et des erreurs (400, 404).",
    tech: ["C", "Sockets POSIX", "TCP", "HTTP"],
  },
  {
    title: "Shell UNIX en C",
    description:
      "Implémentation d'un shell UNIX en C permettant l'exécution de commandes système : analyse et interprétation des commandes, gestion des processus, support des pipes et des redirections.",
    tech: ["C", "Processus", "Pipes", "Redirections"],
  },
];
