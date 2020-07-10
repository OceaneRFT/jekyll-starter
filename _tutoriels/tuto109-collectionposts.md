---
layout: tutoriels
order: 9
title: La collection _posts
part: 1
---
# La collection _posts
Jekyll est orienté vers le blogging. Il utilise donc une collection (un dossier) prédéfinie pour gérer des pages de posts : c'est la collection ... `_posts` ! Mais si, souvenez-vous, on vous a même fait créer un dossier qui porte le même nom au [début du tutoriel]({{ '/tutoriels/tuto102-dossiers.html' | relative_url }}){:target="_blank"}) ! Vous l'avez peut-être remarqué, mais notre site Jekyll n'est pas vraiment un blog qui utilise des posts. Pour vous expliquer ce qu'est la collection `_posts`, nous allons donc prendre en exemple le [très bon site réalisé par nos collègues](AJOUTER LIEN) ^^.

Pour que les fichiers dans votre dossier `_posts` soient correctement compilés par Jekyll, vous devez respecter une nomenclature bien précise pour les nommer : la date de publication, puis le titre de l'article, puis l'extension du fichier (la plupart du temps, vos fichiers seront en Markdown car il s'agit de fichier de contenu, et non de structure). **Attention** Jekyll reconnaîtra uniquement les dates au format `année-mois-jour`. Voici un exemple de nom de fichier :

[![arborescence fichier _posts]({{ '/assets/images/capture_fichierposts.png' | relative_url }})]({{ '/assets/images/capture_fichierposts.png' | relative_url }})

Tous vos fichiers doivent également commencer par du Front Matter (ne serait-ce que pour indiquer le layout que vous souhaitez appliquer) :

[![code d'un post]({{ '/assets/images/capture_article.png' | relative_url }})]({{ '/assets/images/capture_article.png' | relative_url }})


