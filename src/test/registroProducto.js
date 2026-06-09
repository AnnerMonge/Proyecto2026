function registroProducto(producto) {
  const { id_categoria, nombre_producto, descripcion, precio_venta, stock } =
    producto;

  // Campos obligatorios
  if (
    !nombre_producto ||
    !id_categoria ||
    precio_venta === "" ||
    stock === ""
  ) {
    return { valido: false, mensaje: "Completa todos los campos requeridos." };
  }

  //Validar que el nombre solo tenga letras y espacios
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!regexNombre.test(nombre_producto)) {
    return {
      valido: false,
      mensaje: "El nombre del producto solo puede contener letras.",
    };
  }

  // Precio Positivo
  if (isNaN(precio_venta) || Number(precio_venta) <= 0) {
    return {
      valido: false,
      mensaje: "El precio  debe ser un número positivo.",
    };
  }

  // Stock Positivo
  if (isNaN(stock) || Number(stock) <= 0) {
    return { valido: false, mensaje: "El stock debe ser un número positivo." };
  }

  //Descripcion es opcional (solo si existe)
  if (descripcion && descripcion.length > 255) {
    return {
      valido: false,
      mensaje: "La descripción no puede exceder los 255 caracteres.",
    };
  }

  return { valido: true };
}
module.exports = registroProducto;
