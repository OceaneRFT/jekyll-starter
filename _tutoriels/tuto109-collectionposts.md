---
layout: tutoriels
title: La collection _posts
tags: collection posts tags catégories
order: 9
part: 1
---



# La collection _posts
Jekyll est orienté vers le blogging. Il utilise donc une collection (un dossier) prédéfinie pour gérer des pages de posts : c'est la collection ... `_posts` ! 

Mais si, souvenez-vous, on vous a même fait créer un dossier qui porte le même nom au [début du tutoriel]({{ '/tutoriels/tuto102-dossiers.html' | relative_url }}){:target="_blank"} ! 

Vous l'avez peut-être remarqué, mais notre site Jekyll n'est pas vraiment un blog qui utilise des posts. Pour vous expliquer ce qu'est la collection `_posts`, nous allons donc prendre en exemple le [très bon site réalisé par nos collègues](AJOUTER LIEN). 

Pour que les fichiers dans votre dossier `_posts` soient correctement compilés par Jekyll, vous devez respecter une nomenclature bien précise pour les nommer : la date de publication, puis le titre de l'article, puis l'extension du fichier (la plupart du temps, vos fichiers seront en Markdown car il s'agit de fichier de contenu, et non de structure). 

**ATTENTION !!!** Jekyll reconnaîtra uniquement les dates au format `année-mois-jour`. 

Voici un exemple de nom de fichier :

[![arborescence fichier _posts]({{ '/assets/images/capture_fichierposts.png' | relative_url }})]({{ '/assets/images/capture_fichierposts.png' | relative_url }}){: .screenshot}

Tous vos fichiers doivent également commencer par du Front Matter (ne serait-ce que pour indiquer le layout que vous souhaitez appliquer). 

Prenons comme exemple cette page de site :

[![code d'un post]({{ '/assets/images/capture_article.png' | relative_url }})]({{ '/assets/images/capture_article.png' | relative_url }}){: .screenshot}

Vous pouvez ajouter des **tags** et des **catégories** pour référencer vos articles de blogs (attention, on ne parle pas de tags Liquid ici hein !).

## Les tags

Les tags sont des mots-clés que vous pouvez associer à vos articles. Un article peut donc avoir plusieurs tags. 
Les tags sont définies dans le Front Matter de vos fichiers de contenu. Il y a deux façons de les indiquer :
- Vous pouvez utiliser la clé `tag`  au singulier. Tout ce que vous écrivez comme sera considéré comme **une seule entrée**. Par exemple,si nous écrivons `tag: débutant html`, le tag créé sera "débutant html". 

- Vous pouvez utiliser  la clé `tags` au pluriel. Tout ce que vous écrivez et séparez par un espace sera alors considéré comme **plusieurs entrées**. C'est la méthode qui a été utilisée pour la page que nous avons vue plus haut :

[![Front matter avec les tags]({{ '/assets/images/capture_tags.png' | relative_url }})]({{ '/assets/images/capture_tags.png' | relative_url }}){: .screenshot}

Cette page a donc 2 tags : "html" et "débutant".

Jekyll enregistre automatiquement tous vos tags et pour pouvoir utiliser ensuite ces tags, il suffit d'y faire référence en écrivant `site.tags`. 
Maintenant, imaginons que vous souhaitiez avoir une page qui recense tous vos tags et avec les liens vers les articles auxquels ils sont associés. Rien de plus facile !

Commencez par créer une page `tags.html` à la racine de votre dossier (nous avons choisi le nom `tags` pour l'exemple, mais vous pouvez appeler cette page comme vous voulez).

[![Arborescence avec la page tags.html]({{ '/assets/images/capture_pagetags.png' | relative_url }})]({{ '/assets/images/capture_pagetags.png' | relative_url }}){: .screenshot}

N'oubliez pas d'indiquer dans le Front Matter le layout que vous souhaitez utiliser sur cette page. Dans notre exemple, nous utiliserons le layout `default`.
Nous créons ensuite une boucle qui permettra d'afficher tous les tags et tous les articles s'y référant :

[![Boucle pour créer les tags]({{ '/assets/images/capture_boucletags.png' | relative_url }})]({{ '/assets/images/capture_boucletags.png' | relative_url }}){: .screenshot}

La première ligne indique que la boucle va s'appliquer pour chaque **tag**. 
La deuxième indique que, pour chaque tag, nous allons créer un titre `<h3>` ainsi qu'une liste `<ul>`. Dans cette ligne, `tag[0]` nous permettra d'afficher le nom de chaque tags.

Il y a ensuite une deuxième boucle, qui permettra de générer les éléments `<li>` de chaque liste : [![Ligne 1 de la boucle <li>]({{ '/assets/images/capture_boucletags-ligne1.png' | relative_url }})]({{ '/assets/images/capture_boucletags-ligne1.png' | relative_url }}) . Cette ligne indique que la boucle va s'appliquer pour chaque post associé au tag en titre.  `tag[1]` fait référence à la série de posts associés à ce tag.

Ensuite, on demande simplement de créer un lien vers l'url du post, avec le titre du post. 

Une fois compilée par Jekyll et mis en ligne, ça donne ça :

[![Capture d'écran de la page tags du site]({{ '/assets/images/capture_sitetags.png' | relative_url }})]({{ '/assets/images/capture_sitetags.png' | relative_url }}){: .screenshot}

Alors, c'était pas si dur, non ? Et ce qui est bien, c'est que, grâce à cette boucle, chaque nouveau tag sera automatiquement ajouté à cette page, pendant que vous êtes tranquillement en train de boire un mojito en terrasse. 

## Les catégories
Comme les tags, les catégories permettent de référencer vos articles. La différence, c'est qu'un article n'aura qu'une seule catégorie (alors qu'il peut avoir plusieurs tags). Mais une catégorie peut évidemment correspondre à plusieurs articles.

Comme pour les tags :
- Les catégories sont également renseignées dans le Front Matter :

[![code d'un post, catégorie encadrée dans le front matter]({{ '/assets/images/capture_frontmatter-categorie.png' | relative_url }})]({{ '/assets/images/capture_fontmatter-categorie.png' | relative_url }}){: .screenshot}

- Jekyll enregistre toutes les catégories que vous créez dans `site.categories`.

Mais, les catégories peuvent aussi être générées d'après le chemin de votre article. 
Un article avec le chemin suivant : `html/cours/_posts/2020-07-10-premier-cours-html` aura automatiquement deux catégories,

correspondant au deux dossiers au-dessus de `_posts` : `html` et `cours`. 

Les catégories peuvent aussi faire partie de l'URL qui sera généré pour l'article (contrairement aux tags). Si on reprend notre exemple d'article de ci-dessus, l'URL généré sera : 

`html/cours/html%cours/2020/07/10/-premier-cours-html.html`.