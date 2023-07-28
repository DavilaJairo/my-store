import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  const agregarAlCarrito = () => {
    funcionAgregar(contador);
  }

  return (
    <div>
      <button className= "itemDetail__button" onClick={decrementar}>-</button>
      <p>{contador}</p>
      <button className= "itemDetail__button" onClick={incrementar}>+</button>
      <button className= "itemDetail__button" onClick={agregarAlCarrito}>Añadir al carrito</button>
    </div>
  );
}  

export default ItemCount;

