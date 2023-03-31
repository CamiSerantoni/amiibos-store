import "./CartTotal.css";

const CartTotal = ({ precioTotal }) => {
  return (
    <>
      <div className="cardTotal">
        <div className="cartTotal">
          <h3> Total a pagar: {precioTotal}💰 </h3>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
