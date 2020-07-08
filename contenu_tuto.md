

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
