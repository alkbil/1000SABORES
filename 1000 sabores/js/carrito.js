// Función para obtener carrito de localStorage
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

// Función para guardar carrito en localStorage
function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Detectar clicks en productos.html
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".agregar");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const id = boton.dataset.id;
      const nombre = boton.dataset.nombre;
      const precio = parseFloat(boton.dataset.precio);

      let carrito = obtenerCarrito();

      // Buscar si ya existe
      const productoExistente = carrito.find(p => p.id === id);
      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
      }

      guardarCarrito(carrito);
      Swal.fire({
        title: '¡Producto agregado!',
        text: `"${nombre}" se añadió al carrito 🛒`,
        icon: 'success',
        confirmButtonText: 'Genial 😍'
        });

    });
  });

  // Mostrar carrito en carrito.html
  const listaCarrito = document.getElementById("listaCarrito");
  const totalTexto = document.getElementById("total");
  const vaciarBtn = document.getElementById("vaciarCarrito");

  if (listaCarrito) {
    const carrito = obtenerCarrito();
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
      listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
      totalTexto.textContent = "";
      return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
      const item = document.createElement("div");
      item.innerHTML = `
        <p>${producto.nombre} (x${producto.cantidad}) - $${(producto.precio * producto.cantidad).toFixed(2)}
        <button class="eliminar" data-index="${index}">❌</button></p>
      `;
      listaCarrito.appendChild(item);
      total += producto.precio * producto.cantidad;
    });

    totalTexto.textContent = `Total: $${total.toFixed(2)}`;

    // Botón eliminar producto
    document.querySelectorAll(".eliminar").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        let carrito = obtenerCarrito();
        carrito.splice(index, 1);
        guardarCarrito(carrito);
        location.reload();
      });
    });

    // Vaciar carrito
    vaciarBtn.addEventListener("click", () => {
      localStorage.removeItem("carrito");
      location.reload();
    });
  }
});
