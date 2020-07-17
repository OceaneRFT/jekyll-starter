---
layout: tutoriels
order: 8
title: Les Data Files
part: 1
---
# Les Data Files

Les **data files** sont des fichiers qui nous permettent de stocker des données afin de pouvoir les utiliser facilement, en écrivant `site.data`. Ces fichiers sont stockés dans le dossier `_data` et écrits en YAML. Prenons un exemple concret. Pour notre site Jekyll, nous avons envie d'automatiser la création d'onglets dans notre barre de navigation. Pour cela, on va créer un data file qu'on appellera `navigation.yml`.

[![arborescence du dossier _data]({{ '/assets/images/capture_datanavigation.png' | relative_url }})]({{ '/assets/images/capture_datanavigation.png' | relative_url }}){: .screenshot}

Dans ce fichier `navigation.yml`, nous renseignons le nom de la page et son lien :

[![fichier navigation]({{ '/assets/images/capture_navigationyml.png' | relative_url }})]({{ '/assets/images/capture_navigationyml.png' | relative_url }}){: .screenshot}

Un groupe de données relatif à une page s'appelle un **item**. Si on demande l'affichage du nom de la page, on peut ainsi écrire :

[![expression item.name]({{ '/assets/images/capture_item.png' | relative_url }})]({{ '/assets/images/capture_item.png' | relative_url }}){: .screenshot}


Maintenant, nous allons pouvoir utiliser ces informations dans notre barre de navigation. Ouvrons notre include `navigation.html` (notre fichier contenant la structure de notre barre de navigation). 

Pour l'instant, le code de notre barre de navigation ressemble à cela : 

[![code de la barre de navigation]({{ '/assets/images/capture_codenavigation.png' | relative_url }})]({{ '/assets/images/capture_codenavigation.png' | relative_url }}){: .screenshot}

Nous allons ajouter dans ce code une petite boucle nous permettant d'ajouter automatiquement des onglets contenant le lien vers nos pages *Ressources* et *A propos* :

[![code de la boucle qui génère les onglets dans la barre de navigation]({{ '/assets/images/capture_navigationboucle-onglet.png' | relative_url }})]({{ '/assets/images/capture_navigationboucle-onglet.png' | relative_url }}){: .screenshot}

Humm... oui... et en français, ça donne quoi ?

[![première ligne de la boucle]({{ '/assets/images/capture_navigationfor.png' | relative_url }})]({{ '/assets/images/capture_navigationfor.png' | relative_url }}){: .screenshot}

Cette première expression indique à Jekyll qu'il doit aller chercher les informations de chaque item contenu dans le fichier `site.data.navigation`. 

Pour chacun de ces items, il doit effectuer les procédures indiquées dans notre boucle *FOR* :

[![code de la boucle qui génère les onglets dans la barre de navigation]({{ '/assets/images/capture_navigationli.png' | relative_url }})]({{ '/assets/images/capture_navigationli.png' | relative_url }}){: .screenshot}

Ici, on indique à Jekyll qu'on souhaite créer un élément `<li>` (chaque `<li>` correspond à un onglet). Dans cet élément, on veut insérer le lien de nos pages, on utilise donc `item.link` (sans oublier de préciser qu'on veut l'url relative, bien sûr). On veut également que chaque onglet affiche le nom de la page, on précise donc `item.name` comme contenu à afficher.

Dans notre boucle, on a ajouté une condition avec *IF* :

[![condition pour ajouter la classe "active" au lien]({{ '/assets/images/capture_navigationboucle-if.png' | relative_url }})]({{ '/assets/images/capture_navigationboucle-if.png' | relative_url }}){: .screenshot}

Si vous lisez bien, vous constaterez que cette condition est insérée dans la classe de notre lien. C'est normal, puisqu'elle nous permet d'ajouter la classe `active` à l'onglet si l'url de la page est strictement égal au lien de l'item (renseigné dans notre data file).

On n'oublie pas d'ajouter `endfor` à la fin et hop, notre boucle est bouclée ! 

Si nous voulons ajouter des pages à notre site, il nous suffit d'ajouter un item dans notre data file `navigation.yml` et Jekyll créera l'onglet automatiquement. C'est fou.


