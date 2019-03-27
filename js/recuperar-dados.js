document.addEventListener("DOMContentLoaded", function(e) {
  var dragDrop = document.querySelectorAll(".drag-drop");

	for (var i = 0; i < dragDrop.length; i++) {
		var aux_transform = localStorage.getItem("dragDrop_"+i+"_transform");
		var aux_classList = localStorage.getItem("dragDrop_"+i+"_classList");
		var aux_height = localStorage.getItem("dragDrop_"+i+"_height");
		var aux_width = localStorage.getItem("dragDrop_"+i+"_width");
		var aux_innerHTML = localStorage.getItem("dragDrop_"+i+"_innerHTML");
		
		if (aux_transform!=null) {
			dragDrop[i].style.transform = aux_transform;
		}
		if (aux_classList!=null) {
			dragDrop[i].classList = aux_classList;
		}
	    if (aux_height!=null) {
			dragDrop[i].style.height = aux_height;
		}
	    if (aux_width!=null) {
	      	dragDrop[i].style.width = aux_width;
	    }
	    if (aux_innerHTML!=null) {
	      	dragDrop[i].innerHTML = aux_innerHTML;
	    }

	}
});