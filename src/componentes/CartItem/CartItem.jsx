// CartItem.jsx
import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className= "cartItem">
      <img src={item.img} alt={item.nombre} style={{ width: "100px" }} />
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {item.precio}</p>
      <button className= "cartItem__button" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
      <hr />
    </div>
  );
};

export default CartItem;
