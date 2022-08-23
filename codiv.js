window.onload = iniciar;

function iniciar(){
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click',clickboton);
}

async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickboton(){
    let json = await cargarUrl('https://jsonplaceholder.typicode.com/todos/1');
    console.log(json);
}

