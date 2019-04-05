window.addEventListener("DOMContentLoaded", function(e) {
  var dragDrop = document.querySelectorAll(".drag-drop");

	for (var i = 0; i < dragDrop.length; i++) {
		var aux_transform = localStorage.getItem(dragDrop[i].id+"_transform");
		var aux_classList = localStorage.getItem(dragDrop[i].id+"_classList");
		var aux_height = localStorage.getItem(dragDrop[i].id+"_height");
		var aux_width = localStorage.getItem(dragDrop[i].id+"_width");
		var aux_innerHTML = localStorage.getItem(dragDrop[i].id+"_innerHTML");

		if(localStorage.getItem(dragDrop[i].id+"_criado")=="sim"){
			dragDrop[i].style.transform = aux_transform;
			dragDrop[i].classList = aux_classList;
			dragDrop[i].style.height = aux_height;
			dragDrop[i].style.width = aux_width;
			dragDrop[i].innerHTMLL = aux_innerHTML;
			dragDrop[i].style.display = "block";
			console.log(dragDrop[i].id+"   "+dragDrop[i].innerHTMLL);
		}else{
			dragDrop[i].style.display = "none";
		}
	}
});
