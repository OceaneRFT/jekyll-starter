---
layout: default
title: Les includes
---
# Les includes
Le but de Jekyll, souvenez-vous, c'est de séparer le maximum de responsabilités dans votre code. Il sépare donc le contenu de la structure, mais, au sein de la structure, on peut encore faire des séparations, et avoir un fichier HTML pour la structure du footer, un autre pour la structure de la barre de navigation, etc. C'est un peu comme une recette : pour réaliser une pâte à crêpes, vous avez besoin d'oeufs, de farine, de bières (si si, c'est meilleur) et de lait. Chaque ingrédient correspond à un include : vous les ajouter au besoin pour réaliser votre recette. 

Les includes nous permettent de retoucher plus facilement notre code (plus besoin de scroller pendant des heures pour retrouver quelques lignes de codes bien précises !). De la même façon, si je veux changer de farine dans ma recette, je vais aller directement voir mon pot de farine dans mon placard (essayez de retrouvez votre farine mélangée dans votre pâte sinon !).

Pour stocker ces bouts de code, utilisez votre placard à includes ! Le dossier `_includes`. Pour notre site, nous avons les includes suivants :

[![dossier includes]({{ '/assets/images/capture_dossierincludes.png' | relative_url }})]({{ '/assets/images/capture_dossierincludes.png' | relative_url }})

Vous pouvez remarquer qu'en plus de nos fichiers HTML, nous avons deux fichiers svg. Nous avons fait ce choix pour deux raisons :
- Pour gagner de la place dans nos layouts (les fichiers svg ont tendance à s'étendre sur des lignes... et des lignes... et des lignes... et des lignes... );
- Pour éviter de les manipuler par erreur quand on retouche nos layouts (une virgule mal placée et votre logo disparaît, et vous mettez des heures... et des heures... et des heures... et des heures... à trouver d'où vient l'erreur !).

Ok, mais comment je fais pour assembler tout ça moi ? Ou pour dire que je veux tel include à tel endroit ? 

Et bien, vous vous souvenez de la façon dont on a ajouté du contenu dans nos pages HTML ? C'est un peu le même principe pour les includes. Pour insérer la barre de navigation dans notre layout `base`, nous avons écrit : 

[![insertion include]({{ '/assets/images/capture_include.png' | relative_url }})]({{ '/assets/images/capture_include.png' | relative_url }})

Quand Jekyll compile nos fichiers, il sait qu'à cet endroit, il doit aller chercher l'include correspondant.

Arrêtons-nous d'ailleurs un instant sur ces commandes avec des accolades et des pourcentages et tout le tralala. Pour faire toutes ces insertions, vous utilisez un autre langage, qui s'appelle [Liquid](https://shopify.github.io/liquid/basics/introduction/) (et oui, c'est la magie de Jekyll, on utilise tout un tas de langage sans même s'en apercevoir !). Liquid est un langage qui fonctionne avec des "tags" et des "filters". 

Les tags sont entourés d'accolades et de pourcentages :

[![tag Liquid]({{ '/assets/images/capture_tagliquid.png' | relative_url }})]({{ '/assets/images/capture_tagliquid.png' | relative_url }})

Les filtres sont indiqué par un pipe (AltGr + 6) :

[![filter Liquid]({{ '/assets/images/capture_liquidfilter.png' | relative_url }})]({{ '/assets/images/capture_liquidfilter.png' | relative_url }})










