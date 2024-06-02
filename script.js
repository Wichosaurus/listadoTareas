const ingresoTarea = document.getElementById("ingresoTarea");
const listadoTareas = document.getElementById("listadoTareas");

function agregarTarea(){
    if(ingresoTarea.value === ''){
        alert("Agrega una tarea") //Crea una alerta que se mostrara al momento de cumplirse el if
    }
    else{
        let li = document.createElement("li"); //Crea un elemento como LI dentro de html
        li.innerHTML = ingresoTarea.value; //innerHTML guarda el texto que se agredo al li 
        listadoTareas.appendChild(li); //Dice que li se desplegara en el contenedor listadoTareas como parte del mismo
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ingresoTarea.value = ""; //Remueve la tarea que se agrega de la caja de texto al momento de ingresarlo
    guardarTarea();
}

listadoTareas.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //Esta funcion nos dice que si le damos click al elementos LI cambiara a checked
        e.target.classList.toggle("completado");
        guardarTarea();
    }
    else if(e.target.tagName === "SPAN"){ //Esta funcion nos dice que si le damos click al elemento SPAN se borraran los elementos del padre que es el LI
        e.target.parentElement.remove();
        guardarTarea();
    }
}, false);

function guardarTarea(){
    localStorage.setItem("data", listadoTareas.innerHTML); //Dice que se guardara la data en nuestro local storage siguiendo las tareas en el elemento especcificado
}
function mostrarTareas(){
    listadoTareas.innerHTML = localStorage.getItem("data");//Dice que los datos guardados en local storage se llamaran al momento de completar la funcion completa
}
mostrarTareas();