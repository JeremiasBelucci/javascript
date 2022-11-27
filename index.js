const productos = [];

class Prendas {
    constructor() {
        this.id = productos.length + 1;
        this.name = prompt("Ingresa el nombre de tu producto");
        this.precio = parseFloat(prompt("Ingresa un precio"));
        this.quantity = parseInt(prompt("Ingrese la cantidad de productos"))
        this.url = prompt("Ingrese la URL de la imagen del producto")
    }
};

let opciones = prompt("ingrese 1 para agregar productos, 2 para mostrarlos, 3 para borrar un producto y 0 para salir");

const agregarProductos = () => {
    const nuevoProducto = new Prendas();
    productos.push(nuevoProducto)
}

const mostrarProductos = () => {
    alert("Productos mostrados en la consola")
    console.log("Usted solicitó ver sus productos:")
    productos.forEach((producto, index) => {
        console.log((index + 1), producto)
    })
}

const eliminarProductos = () => {
    eliminado = (prompt("Inserte el ID del producto que quiera eliminar"))
    if (isNaN(eliminado)){
        alert("Por favor ingrese un numero")
    }
    productos.splice(eliminado, 1)
}
 
const menu = (opcion) => {
    switch (opcion) {
        case "1":
            agregarProductos();
            break;

        case "2":
            mostrarProductos();
            break

        case "3":
            eliminarProductos();
            break

            
        default:
            alert("Por favor ingrese una opcion correcta");
            break
    }
    opciones = prompt("ingrese 1 para agregar productos, 2 para mostrarlos, 3 para borrar un producto y 0 para salir");
}


while (opciones !== "0") {
    menu(opciones)
}