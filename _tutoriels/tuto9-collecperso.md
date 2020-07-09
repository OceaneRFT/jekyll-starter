---
layout: tutoriels
order: 9
title: Les collections personnalisées
---
# Utiliser des collections personnalisées
Les posts de blog, c'est bien, mais parfois on a besoin d'utiliser des collections personnalisées, qui ne fonctionnent pas selon la date de publication des fichiers qu'elles contiennent.

Pour cela, commencez par créer un dossier dans votre dossier racine : `_nom-collection`. Dans ce site, nous avons ainsi créé une collection `_tutoriels` pour stocker les fichiers markdown de nos pages tutoriels.

[![arborescence avec le dossier _tutoriels ouvert]({{ '/assets/images/capture_collectuto.png' | relative_url }})]({{ '/assets/images/capture_collectuto.png' | relative_url }})

Notez bien l'utilisation du pluriel dans le nom de votre dossier de collection : **_tutoriels**. 

Il faut ensuite indiquer à Jekyll que vous avez créé cette collection. Pour cela, ajouter au fichier `_config.yml` le nom de votre collection. Voici ce que nous avons pour notre site Jeykll :

[![fichier config]({{ '/assets/images/capture_configcollec.png' | relative_url }})]({{ '/assets/images/capture_configcollec.png' | relative_url }})

`output: true` indique à Jekyll qu'il doit compiler tous les fichiers de cette collection en autant de fichiers HTML.
**Attention**, quand vous utilisez YAML, faites bien attention à l'indentation !! Un espace en trop ou en moins, et rien ne va plus !

**Attention (encore)**, quand vous modifiez un fichier config, il vaut mieux stopper et relancer Jekyll pour voir si vos modifications ont été compilées correctement.
