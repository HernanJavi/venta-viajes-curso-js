import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM

//del documento,hacemos una consulta de todos los selectores "a" y lo guardamos
//enlaces ahora es una lista de nodos
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento=document.getElementById('precio')

//Recorremos cada nodo y le asignamos el evento click
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {

        //REMOVER ACTIVO de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        })
        //agregar la clase "active" al enlace que hizimos click
        this.classList.add('active')

        //Obtener el contenido correspondiente al enlace que hizimos click

        let contenido = obtenerContenido(this.textContent)

        //MOSTRAR EL CONTENIDO EN EL DOM

        tituloElemento.innerHTML=contenido.titulo
        subtituloElemento.innerHTML=contenido.subtitulo
        parrafoElemento.innerHTML=contenido.parrafo
        precioElemento.innerHTML=contenido.precio

        
    })    
})

//Funcion para traer la informacion correcta desde ciudades.js 

function obtenerContenido(enlace) {

    let contenido = {

        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    //retorno el elemento que cumpla con el enlace
    return contenido[enlace]
    

}