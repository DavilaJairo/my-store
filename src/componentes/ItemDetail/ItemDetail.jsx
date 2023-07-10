import "./ItemDetail.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  const [contador, setContador] = useState(1);
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const incrementar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const finalizarCompra = () => {
    setCompraFinalizada(true);
    Swal.fire({
      title: "¡Compra Finalizada!",
      icon: "success",
      confirmButtonColor: "#007BFF",
      background: "#000",
      iconColor: "#fff",
      customClass: {
        icon: "swal2-success-icon",
      },
    });
  };

  const agregarAlCarrito = () => {
    setCantidadCarrito((prevCantidad) => prevCantidad + contador);
    Swal.fire({
      title: "¡Producto Agregado!",
      text: "Tu producto ha sido agregado al carrito correctamente.",
      icon: "success",
      confirmButtonColor: "#007BFF",
      background: "#000",
      iconColor: "#fff",
      customClass: {
        icon: "swal2-success-icon",
      },
    });
  };

  return (
    <div className= "itemDetail">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <p>ID: {id}</p>
      <img src={img} alt={nombre} style={{ maxWidth: "35%" }} />

      <p className= "itemDetail__descripcion">
        Descripción: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, autem. Explicabo commodi molestiae soluta eaque quos nostrum voluptatibus quam, laudantium impedit! Quaerat excepturi deserunt sed illo soluta necessitatibus placeat similique. {descripcion}
      </p>

      {compraFinalizada ? (
        <p>¡Compra Finalizada!</p>
      ) : (
        <div className= "itemDetail__contador">
          <p className= "itemDetail__cantidad">Cantidad: {contador}</p>
          <button className= "itemDetail__button" onClick={decrementar}>
            -
          </button>
          <button className= "itemDetail__button" onClick={incrementar}>
            +
          </button>
          <button className= "itemDetail__button" onClick={agregarAlCarrito}>
            Agregar al carrito
          </button>
          <button className= "itemDetail__button" onClick={finalizarCompra}>
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
