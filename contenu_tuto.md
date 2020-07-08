# Jekyll - Premières pierres

<<<<<<< HEAD
Créez un dossier pour héberger le projet. Dans ce dossier, créez un fichier `index.md`
Ouvrez le terminal (astuce : raccourci sur VSCode pour ouvrir le terminal : *ctrl + ù*).
Dans le terminal :
1. Tapez la commande `bundle init`.
2. Editez le nouveau fichier `Gemfile` apparu à la racine de votre dossier : ajoutez `Gem "Jekyll"`.
3. Dans le terminal, tapez la commande `jekyll serve` : Jekyll se met en marche et commence à compiler vos fichiers !

Ajoutez concept de base de jekyll => séparation structure / contenu (ici ou sur la page d'accueil).

# Préparer un beau dossier bien structuré
Liste des dossiers et fichiers dont on aura besoin :
- `_layout`
- `_includes`
- `_data`
- `_posts`
- `_sass` => fichier `main.scss`
- `assets`
    - `images`
    - `css` => fichier `styles.scss`
    - `js` (si vous utilisez du js bien sûr :) )
- fichier `.gitignore`
- fichier `_config.yml`

Dans le dossier `_sass`, créez un fichier `main.scss`. C'est dans ce fichier que vous pourrez écrire votre sass. Si vous utilisez plusieurs fichiers scss (par exemple, un fichier pour le body, un fichier pour la barre de navigation...), n'oubliez pas de tous les importer dans le fichier `styles.scss`.

Dans le dossier `assets/css`, créez un fichier `styles.scss`. C'est ce fichier que Jekyll compilera pour faire le css. Dans ce fichier, il faudra importer tout vos codes scss. N'oubliez pas d'écrire styleS (Jekyll et la nomeclature des fichiers...).

*=> insertion image "importsass"*
Dans le fichier `styles.scss`, n'oubliez pas d'ajouter le Front Matter. Comme c'est un fichier `.scss`, sass ne reconnaîtra pas les trois tirets indiquant le Front Matter, mais ils sont obligatoires pour que Jekyll sache que c'est un fichier à compiler.

**ATTENTION !** Jekyll est sensible, il faut faire attention aux noms des dossiers et bien respecter leur nomenclature. Bannissez également majuscules et accents de vos noms de fichiers et dossiers.

Dans votre dossier racine, créez un fichier txt `.gitignore`. Ce fichier servira à indiquer les dossiers et fichiers qu'il n'est pas nécessaire de tracker car ce ne sont pas des fichiers de travail :
- le dossier des [caches](https://www.youtube.com/watch?v=XoDY9vFAaG8) : `.jekyll-cache`
- le dossier `_site`, car il ne s'agit pas du dossier où on travaille, mais du dossier où sont compilés nos fichiers de travail.

Vous aurez aussi sûrement besoin d'un fichier `_config.yml`, qu'il faut créer à la racine de votre dossier (comme le fichier `.gitignore`). Ce fichier nous servira, entre autres, pour créer des collections personnalisés (on en reparle un peu plus tard).

Ouhlala ! Ca fait vraiment beaucoup de dossiers tout ça ! Ne vous inquiétez pas, on va voir tout cela en détails.

=======
Créer un dossier pour héberger le projet. Dans ce dossier, créer un fichier `index.md`
Ouvrir le terminal (astuce : raccourci sur VSCode pour ouvrir le terminal : *ctrl + ù*).
Dans le terminal, taper la commande `jekyll serve` : Jekyll se met en marche et commence à compiler vos fichiers !
>>>>>>> a3e955fe8ece02efa5ef00519c023df587034454

# Créer son layout par défaut
Dans votre dossier `_layout`, créez un fichier HTML que nous appellerons ici "default" (par défaut, en anglais) : `default.html`.
Ce fichier nous permet de créer la **structure** de notre site, c'est pourquoi il est en HTML. Le contenu sera stocké dans des fichiers Markdown.

Le layout "default" contient les éléments de structure communs à toutes les pages de votre site (par exemple, le doctype, les scripts Bootstrap, etc.). 

*insérer image doctype*
On remarque que le lien interne pour le fichier style est un peu différent de ce que l'on a l'habitude de voir. En effet, pour pouvoir publier votre site sur Github Pages, vous devez utiliser des adresses relatives (relative url) pour vos liens internes, afin d'indiquer le chemin complet de vos différents fichiers. 
Vous devez donc indiquer vos liens internes (vers vos images, vos scripts js, votre css...) ainsi :
`<a href="{{ '/assets/css/styles.css' | relative_url }}">`

Et pour que Jekyll sache à quoi corresponde ce mystérieux "relative-url", il faut l'indiquer dans votre fichier `_config.ym` : 
``` 
baseurl: /nom-repository
```  

Par exemple, pour créer ce site, nous avons indiqué `baseurl: /jekyll-starter`.

Oui, bon, c'est bien beau tout ça, mais comment je fais pour mettre du contenu dans mon site ???

Pas de panique Monique, Jekyll a tout prévu, il suffit d'ajouter {{ content }} là où vous souhaitez insérer du contenu (contenu qui sera récupéré... dans un fichier Markdown... Sorcellerie !).

# Utiliser le Front Matter
Le Front Matter (matière en avant), doit, comme son nom l'indique, apparaître en premier dans un fichier : 
``` 
---
FRONT MATTER ICI
--- 
```
Le Front Matter permet à Jekyll :
- de savoir quels fichiers il doit compiler
- de stocker des variables prédéfinies.

# Les includes
Le but de Jekyll, souvenez-vous, c'est de séparer le maximum de responsabilités dans votre code. Il sépare donc le contenu de la structure, mais, au sein de la structure, on peut encore faire des séparations, et avoir un fichier HTML pour la structure du footer, un autre pour la structure de la barre de navigation, etc. Cela nous permet de retoucher plus facilement notre code (plus besoin de scroller pour retrouver quelques lignes de codes bien précises !).

Pour stocker ces bouts de code, utilisez votre dossier `_includes`. Vous pourrez ensuite les utiliser avec la commande Liquid suivante : `{% include nom-fichier %}`.

Par exemple, sur ce site, nous avons dans notre arborescence les includes suivants :
*insérer capture d'écran*.

# Créer une collection personnalisée
Les posts de blog, c'est bien, mais parfois on a besoin de nos propres collections.
Pour cela, commencez par créer un dossier dans votre dossier racine : `_nom-collection`.
*insérer capture d'écran*.
Dans ce dossier, vous pourrez créer autant de fichiers Markdown ou HTML que de pages souhaitées.

Il faut ensuite indiquer à Jekyll que vous avez créé cette collection. Dans votre fichier `_config.yml`, ajoutez :
``` 
collection:
    nom-collection:
        output: true
``` 

`output: true` indique à Jekyll qu'il doit compiler tous les fichiers de cette collection en autant de fichiers HTML.
Attention, quand vous utilisez YAML, faites bien attention à l'indentation, YAML y est sensible (comme Jekyll pour la nomenclature des fichiers & dossiers).
