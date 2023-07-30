import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const { agregarProducto } = useContext(CarritoContext);

  const finalizarCompra = () => {
    if (stock === 0) {
      alert("No hay stock disponible para este producto.");
    } else {
      setCompraFinalizada(true);
    }
  };

  const agregarAlCarrito = (cantidad) => {
    agregarProducto({ id, nombre, precio, img }, cantidad); // Agregamos "img" a los datos del producto
    alert("Tu producto ha sido agregado al carrito correctamente.");
  };

  return (
    <div className= "itemDetail">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} className= "itemDetail__image" />

      <p className= "itemDetail__descripcion">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!
      </p>

      {compraFinalizada ? (
        <>
          <p>¡Compra Finalizada!</p>
          <Link to="/cart" className= "itemDetail__link">
            Ir al carrito
          </Link>
        </>
      ) : (
        <>
          <div className= "itemDetail__contador">
            <p className= "itemDetail__cantidad"> Cantidad: {stock > 0 ? <ItemCount inicial={1} stock={stock} funcionAgregar={agregarAlCarrito} /> : 0}</p>
          </div>
          
        </>
      )}
    </div>
  );
};

export default ItemDetail;





