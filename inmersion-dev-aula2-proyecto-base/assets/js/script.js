let botonAgregar = document.getElementById('botonFormulario');
let ListaNombreGastos = [];
let ListaValorGastos = [];
let ListaDescripcion = [];
let editarPosicion = -1;


function clickBoton (){

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let DescripcionGasto = document.getElementById('DescripcionGasto').value;

   
    console.log(ListaDescripcion);
    console.log(ListaNombreGastos);


    if (editarPosicion === -1) { // Aquí compruebas si no estás editando, para agregar un nuevo gasto
        ListaNombreGastos.push(nombreGasto);
        ListaValorGastos.push(valorGasto);
        ListaDescripcion.push(DescripcionGasto);
    } else { // Si estamos editando, actualizamos el gasto existente
        ListaNombreGastos[editarPosicion] = nombreGasto;
        ListaValorGastos[editarPosicion] = valorGasto;
        ListaDescripcion[editarPosicion] = DescripcionGasto;
        editarPosicion = -1; // Reseteamos la posición de edición
        botonAgregar.innerText = 'Agregar Gasto'; // Cambiamos el texto del botón
    }
    

    if (valorGasto >= 300) {
        alert("Este gasto es grande, cuidado.");
    }


    if (valorGasto >= 300){
    alert("Este gasto es grande, cuidado.")
    }
    

    ActualizarListaGastos();

    
    

}

function ActualizarListaGastos() {
 let htmlLista = "";
let totalGastos = 0;
let totalElementos = document.getElementById('totalGastos')
 const ListaElementos = document.getElementById('listaDeGastos');
 
        ListaNombreGastos.forEach((elemento, Posicion) => {
            const valorGasto = Number(ListaValorGastos [Posicion]);
            const DescripcionGasto = (ListaDescripcion [Posicion]);
            
            htmlLista += `<li>${elemento} - ${DescripcionGasto} - USD ${valorGasto.toFixed(2)}
            <button onclick="EliminarGasto(${Posicion});">Eliminar</button>
            <button onclick="EditarGasto(${Posicion});">Editar</button>
            </li>`;

            totalGastos += Number(valorGasto);

            totalElementos.innerHTML = totalGastos.toFixed(2);

           

        });
        ListaElementos.innerHTML = htmlLista;
         ListaDescripcion.innerHTML = htmlLista;

    Limpiar();
}

function Limpiar (){
    let nombreGasto = document.getElementById('nombreGasto').value = '  ';
    let valorGasto = document.getElementById('valorGasto').value = '';
    let DescripcionGasto = document.getElementById('DescripcionGasto').value = '';


}

function EliminarGasto(Posicion){

ListaNombreGastos.splice(Posicion,1);
ListaValorGastos.splice(Posicion,1);
ListaDescripcion.splice(Posicion,1);

ActualizarListaGastos();

}

function EditarGasto(Posicion){

    document.getElementById('nombreGasto').value = ListaNombreGastos[Posicion];
    document.getElementById('valorGasto').value = ListaValorGastos[Posicion];
    document.getElementById('DescripcionGasto').value = ListaDescripcion[Posicion];

    editarPosicion = Posicion; // Guardamos la posición que estamos editando
    botonAgregar.innerText = 'Actualizar Gasto'; // Cambiamos el texto del botón
}