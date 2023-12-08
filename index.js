

function pruebaTecnica(nombre){
    let nombreFraccionado = [];

    for(let i = nombre.length -1; i>  -1; i--){
        nombreFraccionado.push(nombre[i]);
    }

    console.log(nombreFraccionado);
    let nombreReves = nombreFraccionado.join("");
    console.log(nombreReves);

    return console.log(nombre === nombreReves? true : false);
}


pruebaTecnica("hola")
pruebaTecnica("otto")

let titulo = document.getElementById("titulo");
console.log(titulo);

titulo.innerHTML="Adios";

titulo.classList.toggle("titulo2")
titulo.classList.add("grande")