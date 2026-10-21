# Site Graine de Baobab

Site web statique de l'association **Graine de Baobab – Solidarité France Bénin**.
Il est écrit en HTML, CSS et JavaScript « à la main » : pas de framework, pas
d'installation, pas de compilation. Pour le voir, il suffit d'ouvrir un fichier
`.html` dans le navigateur, ou de déposer le dossier sur un hébergement statique.

---

## 1. Où se trouve quoi

```
site-baobab/
├─ index.html                      Accueil
├─ notre-equipe.html               Nous connaître > Notre équipe
├─ notre-histoire.html             Nous connaître > Notre histoire
├─ insecurite-alimentaire.html     Nos actions > Insécurité alimentaire
├─ insertion-professionnelle.html  Nos actions > Insertion professionnelle
├─ numerique-pour-tous.html        Nos actions > Numérique pour tous
├─ infos-pratiques.html            Le Bénin > Infos pratiques
├─ tourisme-solidaire.html         Le Bénin > Tourisme solidaire
├─ nous-rejoindre.html             S'engager > Nous rejoindre
├─ contact.html                    Nous contacter (coordonnées + formulaire)
│
├─ css/
│  ├─ variables.css    Couleurs, polices, espacements : TOUT ce que tu changes le plus souvent
│  ├─ base.css         Styles de départ : texte, titres, liens, images
│  ├─ layout.css       Structure : conteneurs, sections, grilles, en-tête et menu
│  ├─ components.css   Briques réutilisables : boutons, cartes, tableaux, frise, formulaires…
│  └─ icons.css        Petites icônes dessinées en SVG
│
├─ js/
│  ├─ navigation.js    Menu : ouverture du tiroir mobile et des sous-menus
│  └─ formulaires.js   Envoi du formulaire de contact et de la newsletter
│
├─ images/             Photos (format WebP) et logo
├─ CNAME               Nom de domaine du site (grainedebaobabong.eu) : ne pas supprimer
└─ README.md           Ce fichier
```

**Règle d'or :** chaque fichier a un seul rôle. Si tu veux changer l'*apparence*,
tu ouvres un fichier `.css`. Si tu veux changer un *texte*, tu ouvres le fichier
`.html` de la page.

---

## 2. Changer une couleur, une police, un espacement

Ouvre **`css/variables.css`**. Toutes les valeurs y sont, avec un commentaire :

```css
--color-terracotta: #A8552A;   /* couleur d'accent (boutons principaux) */
--color-green: #3F6B3A;        /* vert baobab (don, liens, positif) */
--font-title: 'Fraunces', Georgia, serif;
--space-md: 1.5rem;
```

Change la valeur, enregistre, recharge la page : le changement s'applique sur
**tout le site**. Il n'y a rien d'autre à modifier.

| Je veux changer… | Variable |
|---|---|
| La couleur des boutons principaux | `--color-terracotta` (et `--color-terracotta-dark` au survol) |
| La couleur du bouton « Faire un don » et des liens | `--color-green` (et `--color-green-dark`) |
| La couleur des titres | `--color-brown` |
| La couleur du texte | `--color-text` |
| Le fond des pages | `--color-cream` |
| Le fond des bandes alternées | `--color-sand` |
| La police des titres / du texte | `--font-title` / `--font-text` |
| Les tailles de texte | `--text-…` |
| L'espace entre les sections | `--section-padding` |
| La largeur maximale du site | `--max-width` |

**Attention aux contrastes :** garde un texte clair sur une couleur foncée (ou
l'inverse). Pour vérifier une paire de couleurs, utilise par exemple
[webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
(vise 4,5 ou plus).

### Changer de police

1. Choisis une police sur [fonts.google.com](https://fonts.google.com).
2. Dans **chaque page** `.html`, remplace la ligne `<link … fonts.googleapis.com/css2?family=…>`
   par le lien que Google te donne (la ligne est dans le `<head>`, sous le commentaire « Polices »).
3. Dans `css/variables.css`, remplace le nom de la police dans `--font-title` ou `--font-text`.

---

## 3. Changer un texte

Ouvre le fichier `.html` de la page et cherche le texte (`Cmd + F`). Modifie-le
**entre les balises**, sans toucher aux balises elles-mêmes :

```html
<p>Voici un paragraphe.</p>      ← tu changes seulement « Voici un paragraphe. »
```

Chaque grande partie de la page est précédée d'un commentaire `<!-- … -->` qui
indique de quelle section il s'agit.

**Pense aussi à :** le titre de l'onglet (`<title>`) et la description pour Google
(`<meta name="description">`) tout en haut de chaque page.

### Rubriques « à venir » de l'accueil
Sur `index.html`, les cartes Actualités, Témoignages et Galerie contiennent un
paragraphe `Plus de contenu à venir...` (classe `placeholder-note`).
Quand tu as le contenu, remplace-le ou supprime ce paragraphe.

---

## 4. Changer ou ajouter une image

1. Dépose l'image dans `images/`. **Nom sans espaces ni accents**, en minuscules
   avec des tirets : `equipe-marie.webp`, pas `Photo Marie 1.PNG`.
2. **Allège-la avant** : une photo de téléphone fait 3 à 5 Mo, c'est beaucoup trop.
   Vise moins de 200 Ko, et une largeur de 1200 px maximum (600 px pour un portrait).
   Format conseillé : **WebP**. Sur Mac, si tu as ImageMagick :
   ```bash
   magick ma-photo.jpg -resize 1200x -quality 80 ma-photo.webp
   ```
   Sinon : [squoosh.app](https://squoosh.app) (gratuit, dans le navigateur).
3. Dans le HTML, pour **remplacer** une photo, change seulement son nom dans `src="images/…"`.
   Pour en **ajouter** une, copie une balise `<img>` existante :
   ```html
   <img src="images/ma-photo.webp" alt="Description courte de la photo"
        width="1200" height="800" loading="lazy">
   ```
   - `alt` : décris la photo en une phrase (utile pour l'accessibilité et Google).
   - `width` / `height` : les dimensions réelles de l'image (évite que la page « saute » au chargement).
   - `loading="lazy"` : l'image ne se charge que quand on arrive dessus. Ne le mets pas sur la toute première image de la page.

Le logo est `images/logo-baobab.png` : garde ses proportions, ne l'étire pas.

> Les anciennes photos (non utilisées sur le site) ont été sauvegardées hors du projet,
> dans `~/Documents/site-baobab-images-sauvegarde/`. Elles restent aussi dans l'historique Git.

### Cadrer une photo d'équipe
Les portraits sont carrés. Si un visage est mal cadré, ajoute
`style="object-position: 80%"` à la balise `<img>` (0 % = on voit le bord
gauche/haut, 100 % = le bord droit/bas). C'est le seul style « dans le HTML »
volontaire, avec les barres du graphique (voir plus bas).

---

## 5. Ajouter une nouvelle page

1. **Copie** une page proche de ce que tu veux (par exemple `nous-rejoindre.html`
   pour une page simple) et donne-lui un nom clair : `mon-nouvel-article.html`
   (minuscules, tirets, pas d'accents).
2. Dans la copie, change :
   - le `<title>` et la `<meta name="description">` dans le `<head>` ;
   - le contenu entre `<main id="contenu"> … </main>`.
   **Ne touche pas** à l'en-tête (`<header>`), au bandeau newsletter ni aux scripts.
3. **Ajoute-la au menu** : le menu (`<header class="site-header">`) est **recopié dans
   chaque page**. Ajoute ta ligne dans le sous-menu voulu, **dans les 10 pages** :
   ```html
   <li><a href="mon-nouvel-article.html">Mon nouvel article</a></li>
   ```
   Astuce : `Cmd + Shift + F` dans ton éditeur, cherche `notre-histoire.html`
   et tu verras tous les endroits où faire pareil.
4. Teste-la (voir partie 7).

### Structure d'une page
```html
<main id="contenu">

  <!-- Introduction : un titre et un paragraphe centrés -->
  <section class="section section--light section--intro">
    <div class="section-content">
      <h1 class="hero-title">Titre de la page</h1>
      <p>Paragraphe d'introduction.</p>
    </div>
  </section>

  <!-- Une section de contenu sur fond beige -->
  <section class="section section--alt">
    <div class="container">
      <h2>Mon titre</h2>
      <p>Mon texte.</p>
    </div>
  </section>

</main>
```
- Une page n'a **qu'un seul `<h1>`**. Ensuite `<h2>`, puis `<h3>`, dans l'ordre.
- `section--light` = fond crème, `section--alt` = fond beige : alterne-les pour rythmer la page.

---

## 6. Réutiliser les styles existants

Tu n'as **rien à écrire en CSS** pour la plupart des besoins : tu combines des
classes qui existent déjà. Voici les principales.

### Mise en page
| Classe | Effet |
|---|---|
| `container` | Contenu centré, largeur maximale (à mettre dans une section) |
| `section-content` | Contenu centré plus étroit, pour du texte |
| `section` + `section--light` / `section--alt` | Bande pleine largeur, fond crème / beige |
| `grid` | Cartes côte à côte, qui passent à la ligne toutes seules |
| `grid grid--2` | Toujours 2 colonnes sur ordinateur, 1 sur téléphone |
| `grid grid--narrow` / `grid--medium` / `grid--wide` | Cartes plus étroites / moyennes / plus larges |
| `text-center` | Texte centré |

### Briques
```html
<!-- Une carte blanche -->
<div class="card">
  <h3>Titre</h3>
  <p>Texte</p>
</div>

<!-- Plusieurs cartes qui se rangent toutes seules -->
<div class="grid">
  <div class="card"><h3>Un</h3><p>…</p></div>
  <div class="card"><h3>Deux</h3><p>…</p></div>
  <div class="card"><h3>Trois</h3><p>…</p></div>
</div>

<!-- Boutons -->
<a class="btn btn-primary" href="contact.html">Nous contacter</a>
<a class="btn btn-secondary" href="…">Faire un don</a>

<!-- Une icône (voir css/icons.css pour la liste) -->
<span class="icon icon-mail" aria-hidden="true"></span>
<span class="icon icon-globe icon--lg" aria-hidden="true"></span>   <!-- grande, centrée -->
```

### Briques plus spécifiques (copie un exemple existant)
| Besoin | Où trouver un exemple |
|---|---|
| Frise horizontale « Moments forts » | `notre-histoire.html` (`timeline`) |
| Photo + texte dans une carte | `notre-equipe.html` (`person`) |
| Tableau | `insertion-professionnelle.html` (`data-table`) |
| Graphique en barres | `insertion-professionnelle.html` (`chart-…`) |
| Galerie de photos | `insecurite-alimentaire.html` (`gallery-item`) |
| Liste d'étapes numérotées | `insecurite-alimentaire.html` (`competence-item`) |
| Cartes « bilan » vert / terracotta | `insecurite-alimentaire.html` (`bilan-success`, `bilan-failure`) |
| Formulaire | `contact.html` |
| Programme jour par jour | `tourisme-solidaire.html` (`map-step`) |

**Graphique :** la hauteur de chaque barre se règle avec `style="--value: 41"`
(un pourcentage, de 0 à 100).

### Ajouter une icône
Ouvre `css/icons.css`. Copie une ligne `.icon-…` et remplace le dessin par un SVG
24x24 (par exemple depuis [lucide.dev](https://lucide.dev)). Le haut du fichier
explique la méthode.

### Si tu dois écrire du CSS
- Mets-le dans le fichier du bon rôle (voir partie 1), **sous un petit commentaire**
  qui explique à quoi il sert.
- Utilise les **variables** (`var(--color-green)`, `var(--space-md)`…) plutôt que
  des valeurs écrites en dur : si tu changes la variable un jour, tout suit.
- Écris le CSS pour le **téléphone d'abord**, puis ajoute les cas plus larges avec
  `@media (min-width: 48rem)` (tablette) ou `64rem` (ordinateur).

---

## 7. Tester le site

### Sur l'ordinateur
Ouvre simplement un fichier `.html` (double-clic) dans Chrome, Safari ou Firefox.

**Mieux (rechargement fidèle, et obligatoire pour tester les envois de formulaires) :**
lance un petit serveur local depuis le dossier du projet :
```bash
python3 -m http.server 8080
```
puis ouvre <http://localhost:8080>. (Arrêt : `Ctrl + C`.) Si le port est déjà pris,
essaie `8081`.

> **Piège :** si tu modifies un fichier et que rien ne change, fais un rechargement
> forcé : **`Cmd + Shift + R`** (Mac) ou `Ctrl + Shift + R` (Windows). Le navigateur
> garde parfois l'ancien CSS en mémoire.

### Voir le rendu téléphone et tablette (sans téléphone)
Dans Chrome :
1. Clic droit sur la page > **Inspecter** (ou `Cmd + Option + I`).
2. Clique sur l'icône « appareil mobile » en haut à gauche du panneau (ou `Cmd + Shift + M`).
3. Choisis un modèle (iPhone, iPad…) ou une largeur : **375 px** (téléphone),
   **768 px** (tablette), **1280 px** (ordinateur).

Ce que tu dois vérifier :
- aucune **barre de défilement horizontale** (la page ne doit pas « glisser » sur le côté) ;
- le bouton ☰ ouvre le menu, la croix ✕ le ferme, et les sous-menus se déplient ;
- les textes sont lisibles et les boutons assez grands pour un doigt.

### Sur ton vrai téléphone
Branche-toi sur le **même Wi-Fi** que l'ordinateur, lance le serveur ci-dessus, puis
ouvre `http://<adresse IP de ton Mac>:8080` sur le téléphone (l'adresse s'obtient avec
`ipconfig getifaddr en0`). Cela ne marche pas sur tous les réseaux : certains Wi-Fi
(entreprise, invités, hôtel) empêchent les appareils de se parler.

### Au clavier
Appuie sur **Tab** à plusieurs reprises : le premier lien est « Aller au contenu »,
puis tous les éléments doivent s'entourer d'un contour visible dans l'ordre logique.

---

## 8. Les formulaires (contact et newsletter)

Ils envoient les messages à l'adresse écrite dans l'attribut `action="https://formsubmit.co/…"`
du formulaire, via le service gratuit **formsubmit.co**.

- La **première fois**, `formsubmit.co` envoie un e-mail « Activate Form » à cette adresse :
  il faut cliquer sur le lien dedans, sinon les messages ne sont pas livrés. Cela se
  fait une seule fois par adresse.
- Pour changer l'adresse de réception, modifie `action="…"` (dans `contact.html`
  et dans le bandeau newsletter de chaque page).
- Pour ajouter un formulaire sur une autre page, copie celui de `contact.html` :
  la balise `<form>` doit porter `data-success="Message de réussite"` et contenir
  `<p class="form-status" role="status"></p>`. Le script `js/formulaires.js` fait le reste.
- **Après chaque mise en ligne, fais un envoi de test.** Si tu vois « Oops ! Une erreur
  est survenue » alors que le message arrive bien, il faut passer l'adresse en version
  `https://formsubmit.co/ajax/…`.

---

## 9. Mettre le site en ligne

Le site n'a besoin que d'un **hébergement statique** (GitHub Pages, Netlify, OVH…) :
dépose tout le dossier tel quel. Le fichier `CNAME` contient le nom de domaine
`grainedebaobabong.eu` ; ne le supprime pas.

Avant une mise en ligne, vérifie :
- toutes les pages à 375 px, 768 px et 1280 px (voir partie 7) ;
- les liens du menu et les boutons ;
- un envoi de formulaire.

---

## 10. Les règles à garder en tête

1. **Une couleur ou une taille = une variable** dans `variables.css`.
2. **Pas de style écrit dans le HTML** (`style="…"`), sauf cas déjà cités (graphique, cadrage de photo).
3. **Une page = un seul `<h1>`** ; chaque image a un `alt`.
4. **Le menu est recopié dans chaque page** : si tu le modifies, modifie-le partout.
5. **Allège toujours les images** avant de les ajouter.
6. En cas de doute, **copie un exemple existant** plutôt que d'inventer.
