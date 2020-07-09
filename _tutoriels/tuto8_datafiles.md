---
layout: tutoriels
order: 8
title: Les Data Files
---
# Les Data Files

Les **data files** sont des fichiers qui nous permettent de stocker des données afin de pouvoir les utiliser facilement, en écrivant `site.data`. Ces fichiers sont stockés dans le dossier `_data` et écrits en YAML. Prenons un exemple concret. Pour notre site Jekyll, nous avons envie d'automatiser la création d'onglets dans notre barre de navigation. Pour cela, on va créer un data file qu'on appellera `navigation.yml`.

[![arborescence du dossier _data]({{ '/assets/images/capture_datanavigation.png' | relative_url }})]({{ '/assets/images/capture_datanavigation.png' | relative_url }})

Dans ce fichier `navigation.yml`, nous renseignons le nom de la page et son lien :

[![fichier navigation]({{ '/assets/images/capture_navigationyml.png' | relative_url }})]({{ '/assets/images/capture_navigationyml.png' | relative_url }})


