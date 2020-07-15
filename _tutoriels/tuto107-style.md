---
layout: tutoriels
title: Le style
order: 7
part: 1
---
# Style de page

Votre site a un style particulier mais ce style s'applique sur toutes les pages par défaut.

Oui mais comment faire si je souhaite faire des pages avec des styles différents ?

Lors que nous souhaitons donner des styles pour chaque page, nous devons spécifier dans notre fichier `base.html` quelle variable utiliser.

La première étape est d'attribuer un "CSS" définit à une page "HTML", dans notre exemple `tutoriels.html` prendra le style `tutoriel.css`

Dans notre image ci-dessous `style_name`, "style_name" correspond au nom de la variable, que nous avons déterminé dans notre 
"front-matter", afin que Jekyll récupère l'information. Vous pouvez lui attribuer n'importe quel nom, ici elle se nomme `style_name`.


[![objects style ]({{ '/assets/images/capture_frontmatter-tuto.png' | relative_url }})]({{ '/assets/images/capture_frontmatter-tuto.png' | relative_url }}){: .screenshot}

Nous passons à la seconde étape ! Retournons à notre fichier `base.html` 

[![objects style]({{ '/assets/images/capture_bouclestyle.png' | relative_url }})]({{ '/assets/images/capture_bouclestyle.png' | relative_url }}){: .screenshot}

Une minute, cette longue ligne de code me semble incompréhensible, je n'y arriverai jamais ...

Pas de panique, nous avons une configuration un peu spéciale dans notre exemple.

Nous ne pouvons pas insérer des accolades dans des accolades car le code inscrit ne sera pas pris en compte. C'est pour cela que nous utilisons la propriétée `| append:` qui permet de séparer les élèments au sein de cette expression (une expression correspond à l'ensemble des valeurs comprises entre les `{ }`).

Nous donnons une condition, si dans notre "front-matter" nous insérons une variable, alors la page sélectionnera le style définit sinon, il prendra le style défini par défault.

Voila, vous avez maintenant, toutes les clefs en mains pour créer des styles par milliers !!!



