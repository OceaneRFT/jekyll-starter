


// document.addEventListener("contextmenu", affiche () ) {
//  var elem = document.getElementById(exampleModal);
//  elem.style.visibility = "hidden";
//  $("#exampleModal").modal("hide");
//   });

// var id = localStorage.(0);

  // document.addEventListener("contextmenu", function(e) {
//   e.preventDefault();
//   var targetModal = document.getElementById("exampleModal");
//   $(targetModal).modal("show");
// })

$("[data-toggle='modal']").on("contextmenu", function(e) {
  e.preventDefault();
  var targetModal = $(this).data('exampleModal');
  $(targetModal).modal("show");
})