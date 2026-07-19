# Portfolio — Arthur Buhl

Portfolio personnel minimaliste et sécurisé, construit avec **Next.js** en **export statique** (aucun serveur à l'exécution, surface d'attaque minimale).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Export 100 % statique (`output: "export"`) → déployable sur n'importe quel hébergeur de fichiers

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build de production

```bash
npm run build      # génère le dossier out/ + applique la CSP par hash
```

Le build produit un site statique dans `out/`. Prévisualiser localement :

```bash
npx serve out
```

## Modifier le contenu

Tout le contenu éditable est centralisé dans `src/data/` :

| Fichier                 | Contenu                                            |
|-------------------------|----------------------------------------------------|
| `src/data/site.ts`      | Nom, rôle, accroche, email, liens (GitHub / LinkedIn / EPITA), chemin du CV |
| `src/data/projects.ts`  | Liste des projets                                  |

Photo de profil : `public/profile.jpeg`.
CV : `public/cv-arthur-buhl.pdf` (référencé par le champ `cv` de `src/data/site.ts`).

## Sécurité

- **CSP stricte par hash SHA-256** : `scripts/apply-csp.mjs` s'exécute après le build, calcule le hash de chaque script inline généré par Next et injecte une `Content-Security-Policy` par fichier (aucun `unsafe-inline` pour les scripts).
- **Headers de sécurité** pour les hébergeurs compatibles :
  - `public/_headers` — Netlify / Cloudflare Pages
  - `vercel.json` — Vercel
  - (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS, COOP)
- Tous les liens externes en `rel="noopener noreferrer"`.
- Fontes **auto-hébergées** (aucune requête vers Google Fonts).
- Aucune dépendance runtime superflue, aucun secret. `npm audit` : 0 vulnérabilité.

## Déploiement

Le site étant statique, il se déploie partout. Pense à mettre à jour `SITE_URL` dans `src/app/layout.tsx` et `src/app/sitemap.ts`, ainsi que l'URL du sitemap dans `public/robots.txt`.

### GitHub Pages
Publier le contenu de `out/` (ex. via GitHub Actions `actions/deploy-pages`).
Note : GitHub Pages ne permet pas d'en-têtes HTTP personnalisés — la protection repose alors sur la CSP `<meta>` (intégrée à chaque page).

### Netlify / Cloudflare Pages
- Build command : `npm run build`
- Publish directory : `out`
- Les en-têtes de `public/_headers` sont appliqués automatiquement.

### Vercel
- Build command : `npm run build`
- Output directory : `out`
- Les en-têtes de `vercel.json` sont appliqués automatiquement.
