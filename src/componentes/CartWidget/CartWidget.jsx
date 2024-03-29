import { useContext } from 'react';
import { CarritoContext } from '../../CarritoContext/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";

    return (
        <div className= "cart-widget">
            <Link to="/cart">
                <img className= "imgCarrito" src={imgCarrito} alt="carrito de compras" />
                {cantidadTotal > 0 && <span className= "item-count">{cantidadTotal}</span>}
            </Link>
        </div>
    );
}

export default CartWidget;

