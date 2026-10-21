let piezasSeleccionadas = [];

function agregarPieza(nombre, imagen){

    piezasSeleccionadas.push({
        nombre:nombre,
        imagen:imagen
    });

    renderizarCollar();
}

function renderizarCollar(){

    const preview =
    document.getElementById("collarPreview");

    preview.innerHTML = "";

    piezasSeleccionadas.forEach(pieza => {

        const img =
        document.createElement("img");

        img.src = pieza.imagen;

        preview.appendChild(img);

    });

}

function borrarUltima(){

    piezasSeleccionadas.pop();

    renderizarCollar();
}

function vaciarCollar(){

    piezasSeleccionadas = [];

    renderizarCollar();
}

function cotizar(){

    if(piezasSeleccionadas.length === 0){

        alert("Agregá al menos una pieza");

        return;
    }

    let mensaje =
    "Hola Mavera.%0A%0AQuiero cotizar este diseño:%0A%0A";

    piezasSeleccionadas.forEach((pieza,index)=>{

        mensaje +=
        (index + 1) + ". " +
        pieza.nombre + "%0A";

    });

    const numero =
    "598XXXXXXXX";

    window.open(

        `https://wa.me/${numero}?text=${mensaje}`,

        "_blank"

    );

}
