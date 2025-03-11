//Variables
const carrito = document.getElementById("carrito"),
    listaProductos = document.getElementById("lista-productos"),
    contenedorCarrito = document.querySelector('.buy-cart .lista_de_productos'),
    vaciaCarritoBtn = document.querySelector('#vaciar_carrito');

let articulosCarrito = []

registrarEventsListeners()

    function registrarEventsListeners() {
        //cuando le de click al carrito de compras
        listaProductos.addEventListener('click', agregarProducto);

        //Eliminar Producto del carrito
        carrito.addEventListener('click' , eliminarProducto);

        //Vaciar productos del carrito
        vaciaCarritoBtn.addEventListener('click', e =>{
            articulosCarrito = [];
            limpiarHTML()
        })

    }

    function agregarProducto(e) {
        if (e.target.classList.contains("agregar-productos")) {
            const productoSeleccionado = e.target.parentElement.parentElement;
            leerInfo(productoSeleccionado)
        }
    }

    //Elimina un producto del carrito
    function eliminarProducto(e) {
        if (e.target.classList.contains("borrar-producto")) {
            const productoId = e.target.getAttribute('data-id');
    
            // Encuentra el índice del producto en el carrito
            const productoIndex = articulosCarrito.findIndex(producto => producto.id === productoId);
    
            if (productoIndex !== -1) {
                // Reduce la cantidad del producto en 1
                articulosCarrito[productoIndex].cantidad--;
    
                // Si la cantidad es 0, elimina el producto del carrito
                if (articulosCarrito[productoIndex].cantidad === 0) {
                    articulosCarrito.splice(productoIndex, 1);
                }
            }
    
            // Actualiza el HTML del carrito
            carritoHTML();
        }
    }    

    //Leer el contenido de nuestro HTML al que le dimos click y extrae la info del curso
 function leerInfo(producto) {
    //Crear un objeto con el contenido del curso actual
    const infoProductos = {
        imagen : producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio p').textContent,
        id : producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe
    const existe = articulosCarrito.some(producto => producto.id === infoProductos.id)

    if (existe) {
        //Actualiza la cantidad
        const producto = articulosCarrito.map(producto =>{
            if (producto.id === infoProductos.id){
                producto.cantidad++;
                return producto
            } else {
                return producto;
            }
        });
        [...articulosCarrito,infoProductos]
    } else {
     //Agregamos elementos al carrito de compras
     articulosCarrito = [...articulosCarrito,infoProductos]
    }
    carritoHTML()
}

//Muestra el carrito en el HTML

function carritoHTML() {
    limpiarHTML()
    //Recorre el carrito de compras y genera el HTML
    articulosCarrito.forEach(producto =>{
        const fila= document.createElement('div');
        fila.innerHTML = `
            <img src="${producto.imagen}"></img>
            <p>${producto.titulo}</p>
            <p>${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <p><span class="borrar-producto" data-id="${producto.id}">X</span></p>
        `;
            
        contenedorCarrito.appendChild(fila)
    });
}
 
//Elimina los productos de la lista_de_productos
function limpiarHTML(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
