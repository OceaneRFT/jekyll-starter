var $progressBar = document.getElementById('progress-bar');
var $current = $progressBar.querySelector('.current');
var current = $current.getAttribute('data-order');

var progression = {
    1: false, 
    5: false,
    7: false,
};

var entries = Object.entries(progression);

for (var entry of entries){
    if (entry[1]){
        // $progressBar.querySelector("[data-order="+entry[0]+"]" )
        var $progressItem = $progressBar.querySelector(`[data-order="${entry[0]}"]`);
        $progressItem.classList.add("passed");
    };
};

 function validate() {
    localStorage.setItem($progressItem, JSON.stringify(entry[1]));
};
console.log(validate());
// localStorage.setItem('course::progression', JSON.stringify(progression));

// var storedItem = localStorage.getItem('course::progression');
// console.log(storedItem);
// var storedProgression = JSON.parse(storedItem);
// console.log(storedProgression);