// Nous permet de cibler la progress-bar.
var $progressBar = document.getElementById('progress-bar');

// Nous permet de cibler la classe current (la page actuelle).
var $current = $progressBar.querySelector('.current');

// Nous récupérons ici, le "data-order" de chaques pages.
var current = $current.getAttribute('data-order');

// Nous déclarons un tableau pour y stocker les données de progression.
var progression = {};

// Nous déclarons une variable qui nous permet de garder en mémoire les données récuperées de progression.
var storedItem = localStorage.getItem('course::progression');

// Ici nous regardons si le tableau progression est vide afin d'anticiper un éventuel bug.
if (storedItem != null){
    progression = JSON.parse(storedItem); // "parse" transforme une chaine de caractères au format Json pour l'interpréter en javascript.
}

// Nous stockons les paires clés - valeur contenues dans le tableau.
var entries = Object.entries(progression);

// Nous créons une boucle qui dit que pour chaque paire clé - valeur si la valeur est true alors nous stockons dans $progressItem le numéro de la page et nous lui ajoutons la classe passed.
for (var entry of entries){
    if (entry[1]){
        var $progressItem = $progressBar.querySelector(`[data-order="${entry[0]}"]`);
        // $progressBar.querySelector("[data-order="+entry[0]+"]" ) // manière différente d'écrire la même expression que la ligne précédente.
        $progressItem.classList.add("passed");
    };
};

// Nous créons la fontions validate() qui s'active en cliquant sur le bouton validator et qui permet de faire passer la valeur de la page courante en true.
 function validate() {
    progression[current] = true;
    localStorage.setItem("course::progression", JSON.stringify(progression)); // "stringnify" c'est pour transformer un objet javascript dans sa représentation textuel.
};


