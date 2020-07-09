---
layout: default
title: Les collections personnalisées
---
# Créer une collection personnalisée
Les posts de blog, c'est bien, mais parfois on a besoin de nos propres collections.
Pour cela, commencez par créer un dossier dans votre dossier racine : `_nom-collection`.
*insérer capture d'écran*.
Dans ce dossier, vous pourrez créer autant de fichiers Markdown ou HTML que de pages souhaitées.

Il faut ensuite indiquer à Jekyll que vous avez créé cette collection. Dans votre fichier `_config.yml`, ajoutez :
``` 
collection:
    nom-collection:
        output: true
``` 

`output: true` indique à Jekyll qu'il doit compiler tous les fichiers de cette collection en autant de fichiers HTML.
Attention, quand vous utilisez YAML, faites bien attention à l'indentation, YAML y est sensible (comme Jekyll pour la nomenclature des fichiers & dossiers).
