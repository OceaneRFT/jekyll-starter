---
layout: tutoriels
order: 4
title: Les layouts
---
# Les layouts

Souvenez-vous, on a dit que Jekyll fonctionnait sur le principe de séparation du contenu et de la structure. Les layout sont du côté structure de la force ! Ce sont des fichiers HTML qui contiennent la structure des pages de votre site. 

"Donc, j'ai trois pages dans mon site : l'accueil, les articles, à propos, j'aurai trois layouts ?". On pourrait. Mais, avouez-le, ce ne serait pas vraiment DRY tout cela. Dans chaque layout, il y a forcément quelques éléments répétés, à minima le doctype. Il vaut mieux donc créer un layout de base avec tous ces éléments communs :

[![code layout de base]({{ '/assets/images/capture_layoutbase.png' | relative_url }})]({{ '/assets/images/capture_layoutbase.png' | relative_url }})

On remarque plusieurs choses ici :

- Le lien interne pour le fichier style est un peu différent de ce que l'on a l'habitude de voir. En effet, pour pouvoir publier votre site sur Github Pages, vous devez utiliser des adresses relatives (relative url) pour vos liens internes, afin d'indiquer le chemin complet de vos différents fichiers. Vous devez donc indiquer vos liens internes (vers vos images, vos scripts js, votre css...) ainsi : 

[![lien vers le fichier style]({{ '/assets/images/capture_relativeurl.png' | relative_url }})]({{ '/assets/images/capture_relativeurl.png' | relative_url }})

Et pour que Jekyll sache à quoi corresponde ce mystérieux "relative-url", il faut l'indiquer dans votre fichier `_config.ym` : `baseurl: /nom-repository`. Par exemple, pour créer ce site, nous avons indiqué :

[![fichier config, base url]({{ '/assets/images/capture_configurl.png' | relative_url }})]({{ '/assets/images/capture_configurl.png' | relative_url }})


- On remarque une seconde nouveauté :

[![content]({{ '/assets/images/capture_content.png' | relative_url }})]({{ '/assets/images/capture_content.png' | relative_url }})

Comme son nom l'indique, la balise `content` (contenu en français) permet d'indiquer où vous souhaitez insérer votre contenu dans cette page. Quand Jekyll compilera vos fichiers Markdown dans lesquels le layout de base est indiqué, le contenu prendra la place de cette balise. 

Prenons un exemple. Voici à quoi peut ressembler le contenu de votre index (fichier Markdown, donc) :

[![index]({{ '/assets/images/capture_index.png' | relative_url }})]({{ '/assets/images/capture_index.png' | relative_url }})

Le layout de base est bien indiqué. Je lance le serveur pour que Jekyll compile ces fichiers. Dans le dossier `_site`, vous trouverez votre index compilé par Jekyll. Il s'est transformé en fichier HTML et a appliqué le layout `base` à votre contenu ! Magie !

[![index compilé]({{ '/assets/images/capture_indexcompile.png' | relative_url }})]({{ '/assets/images/capture_indexcompile.png' | relative_url }})

Vous pouvez utiliser des layouts dans les layouts (Inception !). Par exemple, pour notre site Jekyll, nous avons trois layouts :
- le layout `base` (doctype, scripts, barre de navigation et footer).
- le layout `default`, qui applique le layout base, mais ajoute dans le body une div dans laquelle s'insère le contenu :

[![layout default]({{ '/assets/images/capture_layoutdefault.png' | relative_url }})]({{ '/assets/images/capture_layoutdefault.png' | relative_url }})

- le layout `tutoriels`, qui applique le layout base, mais ajoute la div du body et le menu de navigation à droite :

[![layout tutoriels]({{ '/assets/images/capture_layouttuto.png' | relative_url }})]({{ '/assets/images/capture_layouttuto.png' | relative_url }})

Nous utilisons donc le layout `base` dans nos deux autres fichiers de layout. Dans les pages de notre site, nous utilisons soit le layout `tutoriels` (pour les pages du tutoriel), soit le layout `default` (pour les autres pages.)