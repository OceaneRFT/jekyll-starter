# Jekyll - Premières pierres

Créer un dossier pour héberger le projet. Dans ce dossier, créer un fichier `index.md`
Ouvrir le terminal (astuce : raccourci sur VSCode pour ouvrir le terminal : *ctrl + %*).
Dans le terminal, taper la commande `jekyll serve` : Jekyll se met en marche et commence à compiler vos fichiers !

# Créer son layout par défaut
Créer un dossier `_layout`. 

Créer un fichier, que nous appellerons ici "default" (par défaut, en anglais) : `default.html`
Cette page nous permet de créer la **structure** de notre site, c'est pourquoi elle est en HTML. Le contenu sera lui stocké dans des fichiers en Markdown.

Le layout "default" contient les éléments communs à toutes les pages de votre site (par exemple, le doctype, les scripts Bootstrap, etc.).

Mais, c'est bien beau tout ça, mais comment je fais pour mettre du contenu dans mon site ???

Pas de panique Monique, Jekyll a tout prévu, il suffit d'ajouter {{ content }} là où vous souhaitez insérer du contenu (contenu qui sera récupéré... dans un fichier Markdown.. Sorcellerie !).

# Utiliser le Front Matter
Le Front Matter (matière en avant), doit, comme son nom l'indique, apparaître en premier dans le fichier : 
``` 
---
FRONT MATTER ICI
--- 
```

# Les includes


# Préparer un beau dossier bien structuré
Liste des dossiers dont on aura besoin :
- `_layout`
- `_incudes`
- `assets`
    - `images`
    - `css`
    - `js` (si vous utilisez du js bien sûr :) )

**ATTENTION !** Jekyll est sensible, il faut faire attention aux noms des dossiers et bien respecter leur nomenclature. Banissez également majuscules et accents de vos noms de fichiers et dossiers.

Créer également un fichier **.gitignore**. Ce fichier servira à indiquer les dossiers et fichiers qu'il n'est pas nécessaire de tracker car ce ne sont pas des fichiers de travail :
- le dossier des [caches](https://www.youtube.com/watch?v=XoDY9vFAaG8) : `.jekyll-cache`
- le dossier `_site`, car il ne s'agit pas du dossier où on travaille, mais du dossier où sont compilés nos fichiers de travail
