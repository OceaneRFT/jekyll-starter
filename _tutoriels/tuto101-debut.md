---
layout: tutoriels
order: 1
title: Premières pierres
part: 1
---
<!-- Balise order qui nous permet ici d'indexer les tutos afin de faire fonctionner la pagination
-->

# Jekyll - Premières pierres

Pour commencer :

Créez un dossier pour héberger le projet. Dans ce dossier, créez un fichier `index.md`.
Ouvrez le terminal (astuce : raccourci sur VSCode pour ouvrir le terminal : `ctrl + ù`).


Dans le terminal : tapez la commande `bundle init`.

[![ligne de commande bundle init]({{ '/assets/images/capture_bundle.png' | relative_url }})]({{ '/assets/images/capture_bundle.png' | relative_url }}){: .screenshot .img-fluid}

Éditez le nouveau fichier `Gemfile` apparu à la racine de votre dossier : ajoutez `Gem "Jekyll"`.

[![arborescence du dossier]({{ '/assets/images/capture_gem.png' | relative_url }})]({{ '/assets/images/capture_gem.png' | relative_url }}){: .screenshot}

[![fichier gem ouvert dans VSCode]({{ '/assets/images/capture_gem_file.png' | relative_url }})]({{ '/assets/images/capture_gem_file.png' | relative_url }}){: .screenshot}


Dans le terminal, tapez la commande `jekyll serve` : Jekyll se met en marche et commence à compiler vos fichiers !

[![commande Jekyll serve]({{ '/assets/images/capture_jekyll-serve.png' | relative_url }})]({{ '/assets/images/capture_jekyll-serve.png' | relative_url }}){: .screenshot}

Jekyll compile vos fichiers dans un dossier `_site` généré automatiquement lorsque vous lancez la compilation. 


Jekyll génére également automatiquement un dossier `.jekyll-cache`.
