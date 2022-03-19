// importamos modulo

import {llenarProductosTablas} from "./productos.js";
    llenarProductosTablas();

import { llenarProductosTrucks } from "./productos.js";
    llenarProductosTrucks();

import { ampliarInfoTablas } from "./ampliarInfo.js";
    let contenedorTablas = document.getElementById("filaTablas")
    contenedorTablas.addEventListener("click", function(event){
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('infoproductoTablas'))
        ampliarInfoTablas(event)
        modalinfoproducto.show()
})

import { ampliarInfoTrucks } from "./ampliarInfo.js";
    let contenedorTrucks = document.getElementById("filaTrucks")
    contenedorTrucks.addEventListener("click", function(event){
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('infoproductoTrucks'))
        ampliarInfoTrucks(event)
        modalinfoproducto.show()
})

