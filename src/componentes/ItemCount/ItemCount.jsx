import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleAgregar = () => {
    onAdd(contador);
  };

  return (
    <div className= "itemCount">
      <div className= "itemCount__controls">
        <button className= "itemCount__button" onClick={decrementar}>
          -
        </button>
        <p className= "itemCount__cantidad">{contador}</p>
        <button className= "itemCount__button" onClick={incrementar}>
          +
        </button>
      </div>
      <button className= "itemCount__agregar" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
