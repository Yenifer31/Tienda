// Lista de productos con sus precios
const productos = {
  1: { nombre: "Manzana", precio: 50 },
  2: { nombre: "Banana", precio: 30 },
  3: { nombre: "Naranja", precio: 40 },
  manzana: { nombre: "Manzana", precio: 50 },
  banana: { nombre: "Banana", precio: 30 },
  naranja: { nombre: "Naranja", precio: 40 }
};

let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  let productoIngresado = document.getElementById("producto").value.trim().toLowerCase();
  let cantidad = parseInt(document.getElementById("cantidad").value);

  // Convertir a número si el usuario puso 1, 2 o 3
  let clave = isNaN(productoIngresado) ? productoIngresado : parseInt(productoIngresado);

  if (productos[clave]) {
    let producto = productos[clave];
    let total = producto.precio * cantidad;
    console.log(`Producto elegido: ${producto.nombre}`);
    resultado.innerText = `Elegiste ${cantidad} ${producto.nombre}(s). Precio total: $${total}`;
  } else {
    console.log("Producto no encontrado");
    resultado.innerText = "Producto no encontrado";
  }
});