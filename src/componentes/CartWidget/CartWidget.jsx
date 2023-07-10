import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <img style={{ width: '3rem' }} src="../img/carrito.png" alt="carrito de compras" />
      <span className="cart-widget__item-count">{itemCount}</span>
      
    </div>
  );
};

export default CartWidget;
