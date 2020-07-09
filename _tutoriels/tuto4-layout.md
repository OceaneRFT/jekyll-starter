---
layout: tutoriels
order: 2
title: Les layout
---
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

ajouter possibilité de faire des layout dans les layouts
