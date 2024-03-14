function agregarUsuarios() {
    const nombres = document.getElementById("nombreUsuario").value.split("\n");
    const tbodyUsuarios = document.getElementById("tbodyUsuarios");
    tbodyUsuarios.innerHTML = ""; // Limpiar tabla antes de agregar nuevos usuarios

    nombres.forEach(nombre => {
        const nombreUsuario = nombre.trim();
        if (nombreUsuario !== "") {
            const iniciales = obtenerIniciales(nombreUsuario);
            const expediente = `EXPEDIENTE DE ${iniciales}`;
            const descripcion = `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN BREVE DEL USUARIO ${iniciales}`;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${nombreUsuario}</td>
                <td>${expediente}</td>
                <td>${descripcion}</td>
                <td>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="1">1🧠</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="2">2🌿</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="3">3🚬</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="4">4🍺</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="5">5⭐️</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="6">6PIBA</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="7">7OTRAS INTERVENCIONES</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="8">8CONSEJERÍA BREVE</button>
                    <button class="opcion-btn" data-iniciales="${iniciales}" data-opcion="9">9COCAINA</button>
                </td>
            `;
            tbodyUsuarios.appendChild(tr);
        }
    });

    // Limpiar el cuadro de texto después de agregar los usuarios
    document.getElementById("nombreUsuario").value = "";
}

function obtenerIniciales(nombre) {
    const palabras = nombre.split(" ");
    const iniciales = palabras.map(palabra => palabra.charAt(0).toUpperCase() + ".").join("");
    return iniciales;
}

function actualizarDescripcion(iniciales, opcion) {
    switch (opcion) {
        case 1:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN DE SATISFACTORES COTIDIANOS DEL USUARIO ${iniciales}`;
        case 2:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN BREVE DE CANNABINOIDES DEL USUARIO ${iniciales}`;
        case 3:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN BREVE DE TABACO DEL USUARIO ${iniciales}`;
        case 4:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN BREVE DE ALCOHOL DEL USUARIO ${iniciales}`;
        case 5:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN BREVE DE MULTIPLES SUSTANCIAS DEL USUARIO ${iniciales}`;
        case 6:
            return `ESTE EXPEDIENTE CONTIENE EL PIBA DEL USUARIO ${iniciales}`;
        case 7:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE OTRAS INTERVENCIONES DEL USUARIO ${iniciales}`;
        case 8:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE CONSEJERÍA BREVE DEL USUARIO ${iniciales}`;
        case 9:
            return `ESTE EXPEDIENTE CONTIENE EL PROGRAMA DE INTERVENCIÓN BREVE DE COCAINA DEL USUARIO ${iniciales}`;
        default:
            return '';
    }
}

function copiarTabla() {
    const tabla = document.getElementById("tablaUsuarios");
    const rango = document.createRange();
    const filas = tabla.getElementsByTagName("tr");
    
    // Crear un nuevo rango de selección
    rango.setStart(filas[1].cells[0], 0); // Comenzar desde la segunda fila, primera celda
    rango.setEnd(filas[filas.length - 1].cells[3], 0); // Seleccionar hasta la última fila, tercera celda
    
    // Eliminar cualquier selección anterior y agregar el nuevo rango
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rango);
    
    // Copiar el contenido seleccionado al portapapeles
    document.execCommand('copy');
    
    // Limpiar la selección
    window.getSelection().removeAllRanges();
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('opcion-btn')) {
        const iniciales = e.target.getAttribute('data-iniciales');
        const opcion = parseInt(e.target.getAttribute('data-opcion'));
        const descripcion = actualizarDescripcion(iniciales, opcion);
        e.target.parentElement.previousElementSibling.textContent = descripcion;
    }
});