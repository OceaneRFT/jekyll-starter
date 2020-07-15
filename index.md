---
layout: default 
title: Jekyll Starter Kit ++
---
<!--
Ne pas oublier le "front-matter" défini par les tirets ci-dessous, cela permet à Jekyll de définir des variables
prédéfinies ou même de créer les siennes
Nous indiquons dans le front-matter que nous appliquons au fichier index.html le layout (theme) par defaut.
--> 

# Welcome to Jekyll Starter ++

![LOgo]({{ '/assets/images/logo2.svg' | relative_url }}){: .beautiful-icon .icon-home}

## Qu'est ce que Jekyll ? 

Jekyll est un générateur de site statique (ce qui veut dire qu'il ne possède pas de back-end) qui permet un développement... dynamique ! Attention, ne pas confondre un site dynamique avec un développement dynamique. 

Développement dynamique : un développement basé sur la séparation des responsabilités. Grosso modo, vous écrivez des bouts de code correspondant à des éléments précis (la barre de navigation, le footer...), et vous assemblez ces bouts de code grâce à la moulinette Jekyll (on appelle cela la **compilation**).

Le but est de simplifier votre code : au lieu de répéter le doctype dans les 120 pages de votre site, vous pourrez l'indiquer une seule fois. Si vous avez besoin de changer un élément dans votre doctype, vous n'avez à le modifier qu'à un seul endroit (au lieu de faire 120 copiés-collés).

Prêt à créer un blog statique avec ce fantastique Jekyll ? [Suivez-nous !]({{ '/tutoriels/tuto101-debut.html' | relative_url }})
