import "./CartTotal.css";

const CartTotal = ({ precioTotal }) => {
  return (
    <div className="cart-total-card">
      <div className="cart-total-row">
        <span>Subtotal</span>
        <strong>{precioTotal} 💰</strong>
      </div>
      <div className="cart-total-row muted">
        <span>Envío</span>
        <span>Gratis</span>
      </div>
      <div className="cart-total-divider" />
      <div className="cart-total-row total">
        <span>Total a pagar</span>
        <strong>{precioTotal} 💰</strong>
      </div>
      <button className="cart-checkout">Finalizar compra</button>
    </div>
  );
};

export default CartTotal;
