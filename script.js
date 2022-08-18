window.onload = iniciar;
var tareas = [];
//function iniciar(){
    //var btnCalcular = document.getElementById("btnCalcular");
    // btnCalcular.addEventListener("click",clickbtnCalcular);
//}

// function clickbtnCalcular(){
//     var textPeso = document.getElementById("textPeso");
//     var peso = textPeso.value;

//     var textAltura = document.getElementById("textAltura");
//     var altura = textAltura.value;

//     var masa = peso / (altura * altura);
//     alert(masa);
// }
function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",clicbtnAgregar);
}


function clicbtnAgregar()
{
    var txtTarea = document.getElementById("idTarea");
    var tarea = txtTarea.value;    
    tareas.push(tarea);    
    //alert(tareas);
    mostrarTareas();
}

function mostrarTareas(){
    var listado = document.getElementById("listado");
    var html = "";
    debugger;
    for(var tarea of tareas){
        html += tarea+ '<br/>';
        console.log("skdjhasd");
        listado.innerHTML = html;
    }

    
}


// for(var i = 0; i < nombres.length; i++)
// {
//     alert(nombres[i]);
// }

// for(var nombre of nombres)
// {
//     alert(nombre);

// }


