// Nous permet de cibler la progress-bar
var $progressBar = document.getElementById('progress-bar');
// Nous permet de cibler 
var $current = $progressBar.querySelector('.current');
var current = $current.getAttribute('data-order');

var progression = {
};
var storedItem = localStorage.getItem('course::progression');

if (storedItem != null){
    progression = JSON.parse(storedItem);
}

var entries = Object.entries(progression);

for (var entry of entries){
    if (entry[1]){
        // $progressBar.querySelector("[data-order="+entry[0]+"]" )
        var $progressItem = $progressBar.querySelector(`[data-order="${entry[0]}"]`);
        $progressItem.classList.add("passed");
    };
};

 function validate() {
    progression[current] = true;
    localStorage.setItem("course::progression", JSON.stringify(progression));
};


