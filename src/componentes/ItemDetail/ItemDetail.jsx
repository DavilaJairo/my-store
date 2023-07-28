import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import Swal from "sweetalert2";

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const { agregarProducto } = useContext(CarritoContext);

  const finalizarCompra = () => {
    if (stock === 0) {
      Swal.fire({
        title: "Error",
        text: "No hay stock disponible para este producto.",
        icon: "error",
        confirmButtonColor: "#007BFF",
        background: "#000",
        iconColor: "#fff",
        customClass: {
          icon: "swal2-error-icon",
        },
      });
    } else {
      setCompraFinalizada(true);
      Swal.fire({
        title: "¡Compra Finalizada!",
        text: "¡Gracias por tu compra!",
        icon: "success",
        confirmButtonColor: "#007BFF",
        background: "#000",
        iconColor: "#fff",
        customClass: {
          icon: "swal2-success-icon",
        },
      });
    }
  };

  const agregarAlCarrito = (cantidad) => {
    agregarProducto({ id, nombre, precio, img }, cantidad); // Agregamos "img" a los datos del producto
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
    <div className= 'itemDetail'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />

      <p className= 'itemDetail__descripcion'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!
      </p>

      {compraFinalizada ? (
        <p>¡Compra Finalizada!</p>
      ) : (
        <>
          <div className= 'itemDetail__contador'>
            <p className= 'itemDetail__cantidad'>Cantidad: {stock > 0 ? <ItemCount inicial={1} stock={stock} funcionAgregar={agregarAlCarrito} /> : 0}</p>
          </div>
          <div className= 'itemDetail__buttons'>
            {stock > 0 && <button className= 'itemDetail__button' onClick={finalizarCompra}>Terminar compra</button>}
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetail;

