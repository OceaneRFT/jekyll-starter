---
layout: tutoriels
order: 6
title: Liquid
part: 1
---
# Liquid

[Liquid](https://shopify.github.io/liquid/){:target="_blank"} est un langage de templating (qui permet d'écrire des modèles ou des patrons, comme en couture) qui fonctionne avec des "objects", des "tags" et des "filters". 

Les **objects** indiquent à Liquid où ajouter du contenu. Ils sont entourés de doubles accolades. Par exemple, l'objet ci-dessous permettra d'afficher le titre de la page :

[![objects Liquid]({{ '/assets/images/capture_liquidobjects.png' | relative_url }})]({{ '/assets/images/capture_liquidobjects.png' | relative_url }}){: .screenshot}{:target="_blank"}

Les **tags** sont utilisés pour créer des boucles (*FOR*) et des conditions (*IF*). Ils sont entourés d'accolades et de pourcentages. **ATTENTION**, n'oubliez pas de fermer votre condition ou votre boucle avec `endfor` ou `endif`.

[![boucle Liquid]({{ '/assets/images/capture_boucle.png' | relative_url }})]({{ '/assets/images/capture_boucle.png' | relative_url }}){: .screenshot}{:target="_blank"}

Dans l'exemple ci-dessus, la boucle nous permet de créer un lien pour chaque tutoriel dans la collection tutoriels (notez bien la différence singulier / pluriel, c'est important !). 

L'output du lien sera le titre du tutoriel. C'est la boucle que nous avons utilisée pour l'onglet *TUTORIELS* de notre barre de navigation et notre menu latéral : dès qu'on ajoute un document à notre collection tutoriels, un lien est généré et ajouté automatiquement au menu. Plutôt sympa !

[![Dropdown menu Tutoriels déroulé]({{ '/assets/images/capture_menututo.png' | relative_url }})]({{ '/assets/images/capture_menututo.png' | relative_url }}){: .screenshot}{:target="_blank"}

Les **filters** sont indiqué par un **pipe** (AltGr + 6). Ils permettent de modifier l'output d'un object. Vous connaissez déjà le filtre `| relative_url`. Dans l'exemple ci-dessous, le filtre `| capitalize` permet d'afficher l'object en lettres capitales : [![filter Liquid]({{ '/assets/images/capture_liquidfilter.png' | relative_url }})]({{ '/assets/images/capture_liquidfilter.png' | relative_url }}) => HI.

Ici le texte affichera "HI". Il y a plein de filtres qui permettent de faire beaucoup (vraiment beaucoup) de choses. Vous allez en voir quelques-uns dans ce tuto, mais n'hésitez pas à consulter [la documentation de Liquid](https://shopify.github.io/liquid/){:target="_blank"} pour vous y retrouver !

On a commencé à parler de [**collections**]({{ '/tutoriels/tuto110-collecperso.html' | relative_url }}){:target="_blank"} ici. Vous ne savez peut-être pas encore à quoi cela correspond, mais on vous explique tout cela dans les étapes qui arrivent !

