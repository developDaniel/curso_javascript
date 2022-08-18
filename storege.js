window.onload = iniciar;

function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",clickbtnagregar);    

    var btnLimpiar = document.getElementById("btnLimpiar");
    btnLimpiar.addEventListener("click",clickbtnLimpiar);    

    mostrarnotas();
}

function clickbtnLimpiar(){
    localStorage.clear();
    mostrarnotas();
}

function clickbtnagregar(){
    var txtnota = document.getElementById("txtNota").value;

    var notas = [];
    if(localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    }
    

    notas.push(txtnota);
    localStorage.notas = JSON.stringify(notas);


    localStorage.nota = txtnota;
    mostrarnotas();        
}

function mostrarnotas(){
    //trae div notas
    var lnotas = document.getElementById("lnotas");

    var notas = [];
    if(localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    }
    //asigna las notas
    var html = "";
    for(var nota of notas){
        html += nota + "<br/>";
    }

    lnotas.innerHTML = html;
}