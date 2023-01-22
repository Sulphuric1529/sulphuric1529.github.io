window.addEventListener("load", (event) => {
	function reset(defaultName){
		secciones = document.getElementsByClassName("description")
		for(i=0;i<secciones.length;i++) {
			if (secciones[i].id != defaultName) {
				secciones[i].style.display = "none";
			} else {
				secciones[i].style.display = "block";
			}
		}
	}

	reset("Proyectos")

	function toggleOthers(evt){

		if (evt.target.tagName=="path"){
			targetId = evt.target.parentNode.parentNode.id
		} else {
			targetId = evt.target.id
		}

		secciones = document.getElementsByClassName("description")
		for(i=0;i<secciones.length;i++) {
			if (secciones[i].id != targetId) {
				secciones[i].style.display = "none";
			} else {
				secciones[i].style.display = "block";
			}
		}
	}

	buttons = document.getElementsByClassName("button") 
	for(i=0;i<buttons.length;i++) {
		buttons[i].addEventListener("click", toggleOthers)
	}
});


