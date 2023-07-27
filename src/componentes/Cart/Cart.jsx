import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'; // Agrega la hoja de estilos para Cart

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito. Compra o vete </h2>
                <Link className= "miBtn cart__button" to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div className= "cart">
            {carrito.map(producto => <CartItem key={producto.id}  {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button className= "miBtn cart__button" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className= "miBtn cart__button" to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart;
