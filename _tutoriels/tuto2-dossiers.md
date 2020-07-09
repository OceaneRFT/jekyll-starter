---
layout: tutoriels
order: 4
title: Préparer un beau dossier 
---
# Préparer un beau dossier bien structuré
Liste des dossiers et fichiers dont vous aurez besoin :
- `_layout`
- `_includes`
- `_data`
- `_posts`
- `_sass` => fichier `main.scss`
- `assets`
    - `images`
    - `css` => fichier `styles.scss`
    - `js` (si vous utilisez du js bien sûr :) )
- fichier `.gitignore`
- fichier `_config.yml`

**ATTENTION !** Jekyll est sensible, il faut faire attention aux noms des dossiers et bien respecter leur nomenclature (avec ou sans underscore). Bannissez également majuscules et accents de vos noms de fichiers et dossiers.

Votre dossier devrait donc ressembler à cela :

![arborescence du dossier racine]({{ '/assets/images/capture_arborescence.png' | relative_url }})

Dans le dossier `_sass`, créez un fichier `main.scss`. C'est dans ce fichier que vous pourrez écrire votre sass. Si vous utilisez plusieurs fichiers scss (par exemple, un fichier pour le body, un fichier pour la barre de navigation...), n'oubliez pas de tous les importer dans le fichier `styles.scss`.

![arborescence du dossier _sass]({{ '/assets/images/capture_mainscss.png' | relative_url }})

Dans le dossier `assets/css`, créez un fichier `styles.scss`. C'est ce fichier que Jekyll compilera pour faire le css. Dans ce fichier, il faudra importer tout vos codes scss. N'oubliez pas d'écrire styleS (Jekyll et la nomeclature des fichiers...).

![arborescence du dossier assets/css]({{ '/assets/images/capture_stylesscss.png' | relative_url }})
![import main dans styles.scss]({{ '/assets/images/capture_importmain.png' | relative_url }})


**ATTENTION !** Dans le fichier `styles.scss`, n'oubliez pas d'ajouter le **Front Matter** :
```
---
---
````
 Comme c'est un fichier `.scss`, sass ne reconnaîtra pas les trois tirets indiquant le Front Matter, mais ils sont obligatoires pour que Jekyll sache que c'est un fichier à compiler.

Dans votre dossier racine, créez un fichier txt `.gitignore`. Ce fichier servira à indiquer les dossiers et fichiers qu'il n'est pas nécessaire de tracker car ce ne sont pas des fichiers de travail :
- le dossier des [caches](https://www.youtube.com/watch?v=XoDY9vFAaG8) : `.jekyll-cache`
- le dossier `_site`, car il ne s'agit pas du dossier où on travaille, mais du dossier où sont compilés nos fichiers de travail.

![fichier gitignore]({{ '/assets/images/capture_gitignore.png' | relative_url }})

Vous aurez aussi sûrement besoin d'un fichier `_config.yml`, qu'il faut créer à la racine de votre dossier (comme le fichier `.gitignore`). Ce fichier nous servira, entre autres, pour créer des collections personnalisés (on en reparle un peu plus tard).

Ouhlala ! Ca fait vraiment beaucoup de dossiers tout ça ! Ne vous inquiétez pas, on va voir tout cela en détails.