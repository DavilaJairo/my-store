import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const MAX_CARD_NUMBER_LENGTH = 16;
  const MAX_CARD_CVV_LENGTH = 3;

  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailConfirmChange = (e) => {
    setEmailConfirm(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_CARD_NUMBER_LENGTH) {
      setCardNumber(value);
    }
  };

  const handleCardExpiryChange = (e) => {
    const value = e.target.value;
    if (value.length <= 5) {
      // Insertar "/" después del segundo dígito del año
      if (value.length === 2 && !value.includes("/")) {
        setCardExpiry(value + "/");
      } else {
        setCardExpiry(value);
      }
    }
  };

  const handleCardCvvChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_CARD_CVV_LENGTH) {
      setCardCvv(value);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (email !== emailConfirm) {
      setEmailError("Los correos electrónicos no coinciden.");
      return;
    }

    if (!paymentMethod) {
      setError("Por favor selecciona un método de pago.");
      return;
    }

    try {
      // Crear una nueva orden en la colección "ordenes" de Firebase
      const nuevaOrdenRef = await addDoc(collection(db, "ordenes"), {
        nombre,
        apellido,
        telefono,
        email,
        carrito,
        total,
        cantidadTotal,
        fecha: serverTimestamp(), // Utilizamos serverTimestamp para obtener la fecha y hora actual del servidor
        estado: "generada",
      });

      setOrdenId(nuevaOrdenRef.id);
      vaciarCarrito();

      // Limpiamos los campos del formulario después de enviar la orden
      setNombre("");
      setApellido("");
      setTelefono("");
      setEmail("");
      setEmailConfirm("");
      setCardNumber("");
      setCardExpiry("");
      setCardCvv("");
      setPaymentMethod("");
      setError("");
    } catch (error) {
      console.error("Error al guardar la orden en Firebase:", error);
    }
  };

  return (
    <div className= "checkout">
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map(producto => (
          <div key={producto.item.id}>
            <p>{producto.item.nombre} x {producto.cantidad}</p>
            <p>{producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <strong>Cantidad Total: {cantidadTotal}</strong>
        <hr />

        <div className= "form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>

        <div className= "form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>

        <div className= "form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>

        <div className= "form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        </div>

        <div className= "form-group">
          <label htmlFor="emailConfirm">Confirmar correo electrónico:</label>
          <input type="email" id="emailConfirm" name="emailConfirm" value={emailConfirm} onChange={handleEmailConfirmChange} required />
          {emailError && <p className= "error-msg">{emailError}</p>}
        </div>

        <div className= "form-group">
          <label htmlFor="payment">Método de pago:</label>
          <select id="payment" name="payment" value={paymentMethod} onChange={handlePaymentMethodChange} required>
            <option value="">Seleccione un método de pago</option>
            <option value="credit-card">Tarjeta de crédito</option>
            <option value="debit-card">Tarjeta de débito</option>
            <option value="paypal">PayPal</option>
            <option value="mercado-pago">Mercado Pago</option>
          </select>
        </div>

        <div className= "form-group">
          <label htmlFor="card-number">Número de tarjeta:</label>
          <input
            type="text"
            id="card-number"
            name="card-number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={MAX_CARD_NUMBER_LENGTH}
          />
        </div>

        <div className= "form-group">
          <label htmlFor="card-expiry">Fecha de vencimiento:</label>
          <input type="text" id="card-expiry" name="card-expiry" className= "miInput" value={cardExpiry} onChange={handleCardExpiryChange} maxLength="5" placeholder="MM/YY" />
        </div>

        <div className= "form-group">
          <label htmlFor="card-cvv">CVV:</label>
          <input type="text" id="card-cvv" name="card-cvv" className= "miInput" value={cardCvv} onChange={handleCardCvvChange} maxLength="3" />
        </div>

        {error && <p className= "error-msg">{error}</p>}

        <button type="submit" className= "miBtn">Finalizar Compra</button>
      </form>
      {ordenId && (
        <strong>¡Gracias por tu compra! Tu número de orden es {ordenId}</strong>
      )}
    </div>
  );
};

export default Checkout;
