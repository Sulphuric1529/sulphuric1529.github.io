window.addEventListener("load", (event) => {

	//Funcion para esconder todos los elementos con la clase "description", excepto el que tenga el ID suministrado 
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

	//Funcion para esconder todos los elementos con la clase "description" excepto el que tenga el mismo ID que el boton que fue clickeado
	function toggleOthers(evt){

		//Este condicional es para evitar bugs cuando el usuario clickea en el icono de FontAwesome en vez de clickear en el texto
		if (evt.target.tagName=="path"){
			targetId = evt.target.parentNode.parentNode.id
		} else if (evt.target.tagName=="svg") {
			targetId = evt.target.parentNode.id
		} else {
			targetId = evt.target.id
		}

		//Actualizar el hash de la pagina
		document.location.hash = targetId

		//Esconder las "description" como corresponda
		secciones = document.getElementsByClassName("description")
		for(i=0;i<secciones.length;i++) {
			if (secciones[i].id != targetId) {
				secciones[i].style.display = "none";
			} else {
				secciones[i].style.display = "block";
			}
		}
	}

	//Cargar el texto correspondiente dependiendo del hash que tenga la pagina
	if(document.location.hash.length == 0 ){
		//Ocultar todos los "description" excepto el de "Proyectos"
		reset("Proyectos")
	} else {
		reset(document.location.hash.substring(1))
	}
	

	//Añadir eventListeners
	buttons = document.getElementsByClassName("button") 
	for(i=0;i<buttons.length;i++) {
		buttons[i].addEventListener("click", toggleOthers)
	}
});


