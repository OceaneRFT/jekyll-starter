---
layout: tutoriels
order: 3
title: Utiliser le Front Matter
---
# Utiliser le Front Matter
Le Front Matter (matière en avant), doit, comme son nom l'indique, apparaître en premier dans un fichier : 

[![front matter vide]({{ '/assets/images/capture_frontmattervide.png' | relative_url }})]({{ '/assets/images/capture_frontmattervide.png' | relative_url }})

Le Front Matter permet à Jekyll :
- de savoir quels fichiers il doit compiler
- de stocker des variables prédéfinies.

Par exemple, pour cette page, nous avons le Front Matter suivant :

[![front matter de la page]({{ '/assets/images/capture_frontmatter.png' | relative_url }})]({{ '/assets/images/capture_frontmatter.png' | relative_url }})

Ce Front Matter contient deux informations (ou variables) que nous avons définies pour les besoins du site :
- le layout (on en parle juste après)
- le titre que nous souhaitons donner à la page.

On ne dirait pas comme ça, mais le Front Matter n'est pas écrit en Markdown, il est écrit en YAML. C'est un langage utilisé pour écrire les fichiers qui concerne les données (le fichier `_config.yml` et les fichiers contenus dans notre dossier `_data`).

Ok, et donc, stocker ces variables, ça sert à... ? A pouvoir les réutiliser facilement quand on en aura besoin ! Pour afficher le titre de la page (et ce, peu importe la page affichée), on pourra indiquer :

[![commande liquide page.title]({{ '/assets/images/capture_liquid.png' | relative_url }})]({{ '/assets/images/capture_liquid.png' | relative_url }})

Cela sera très pratique quand vous aurez besoin de faire des boucles et des conditions.

