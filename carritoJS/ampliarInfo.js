export function ampliarInfoTablas(event){
    let producto= {}

    // event.target.classList("boton")
    // if(event.target.classList.contains("btn"))
    if(event.target.classList.contains("btn")){
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            texto:event.target.parentElement.querySelector("p").textContent,
            precio:event.target.parentElement.querySelector("h3").textContent,
        }
        console.log(producto)

        let foto = document.getElementById("fotoinfo")
        foto.src = producto.foto
        let texto = document.getElementById("textoinfo")
        texto.textContent = producto.texto
        let precio = document.getElementById("precioinfo")
        precio.textContent = producto.precio
    }
}

export function ampliarInfoTrucks(event){
    let producto= {}

    // event.target.document.getElementById("boton")
    // if(event.target.classList.contains("btn"))
    if(event.target.classList.contains("btn")){
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            texto:event.target.parentElement.querySelector("p").textContent,
            precio:event.target.parentElement.querySelector("h3").textContent,
        }
        console.log(producto)

        let foto = document.getElementById("fotoinfo1")
        foto.src = producto.foto
        let texto = document.getElementById("textoinfo1")
        texto.textContent = producto.texto
        let precio = document.getElementById("precioinfo1")
        precio.textContent = producto.precio
    }
}


