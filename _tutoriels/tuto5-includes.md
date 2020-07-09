---
layout: tutoriels
order: 6
title: Les includes
---
# Les includes
Le but de Jekyll, souvenez-vous, c'est de séparer le maximum de responsabilités dans votre code. Il sépare donc le contenu de la structure, mais, au sein de la structure, on peut encore faire des séparations, et avoir un fichier HTML pour la structure du footer, un autre pour la structure de la barre de navigation, etc. Cela nous permet de retoucher plus facilement notre code (plus besoin de scroller pour retrouver quelques lignes de codes bien précises !).

Pour stocker ces bouts de code, utilisez votre dossier `_includes`. Vous pourrez ensuite les utiliser avec la commande Liquid suivante :
Par exemple, sur ce site, nous avons dans notre arborescence les includes suivants :
*insérer capture d'écran*.