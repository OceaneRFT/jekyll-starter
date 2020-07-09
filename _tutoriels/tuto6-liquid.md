---
layout: tutoriels
order: 6
title: Liquid
---
# Liquid

Liquid est un langage de templating (qui permet d'écrire des modèles ou des patrons, comme en couture) qui fonctionne avec des "objects", des "tags" et des "filters". 

Les objets indiquent à Liquid où ajouter du contenu. Ils sont entourés des doubles accolades. Par exemple, l'objet ci-dessous permettra d'afficher le titre de la page :

[![objects Liquid]({{ '/assets/images/capture_liquidobjects.png' | relative_url }})]({{ '/assets/images/capture_liquidobjects.png' | relative_url }})

Les ***tags sont utilisés pour créer des boucles (FOR) et des conditions (IF). Ils sont entourés d'accolades et de pourcentages. Dans l'exemple ci-dessous, la boucle nous permet de créer un lien pour chaque tutoriel dans la collection tutoriels (notez bien la différence singulier / pluriel, c'est important !). L'output du lien sera le titre du tutoriel. C'est la boucle que nous avons utilisées pour l'onglet de notre barre de navigation : dès qu'on ajoute un document à notre collection tutoriels, le lien est généré et ajouté automatiquement dans le dropdown menu. Plutôt sympa :)

[![boucle Liquid]({{ '/assets/images/capture_boucle.png' | relative_url }})]({{ '/assets/images/capture_boucle.png' | relative_url }})

Les filtres sont indiqué par un pipe (AltGr + 6) :

[![filter Liquid]({{ '/assets/images/capture_liquidfilter.png' | relative_url }})]({{ '/assets/images/capture_liquidfilter.png' | relative_url }})


