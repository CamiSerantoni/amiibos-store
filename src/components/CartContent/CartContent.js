import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import "./CartContent.css";
import { Link } from "react-router-dom";
import "./CartContent.css";
import { useSelector, useDispatch } from "react-redux";
import { removeAllCart } from "../../amiibo";

const CartContent = () => {
  const { products = {} } = useSelector((state) => state.products);
  // let { precioTotal} = useSelector((state) => state.precioTotal);
  let { precioTotal = 0 } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(removeAllCart());
  };

  return Object.keys(products).length > 0 ? (
    <div className="cart-page">
      <div className="cart-header">
        <div>
          <h3 className="resume-cart">Finalizar compra</h3>
          <p className="cart-subtitle">
            Revisa tus productos antes de continuar.
          </p>
        </div>
        <div className="actionButtonsCart">
          <button className="card-button-clean" onClick={() => deleteAll()}>
            🧹 Limpiar carrito
          </button>
          <Link to={"/"}>
            <button className="card-button-more">Agrega más ⭐</button>
          </Link>
        </div>
      </div>

      <CartElements />

      <CartTotal precioTotal={precioTotal} />
    </div>
  ) : (
    <div className="cart-empty">
      <div className="cart-empty-card">
        <img
          className="cart-img"
          alt="carrito vacío"
          src="https://stonehouseathenry.ie/images/empty-cart.png"
        />
        <h3>Tu carrito está vacío</h3>
        <p>¡Descubre todos los Amiibos que tenemos para ti!</p>
        <Link to={"/"}>
          <button className="search-products">
            ⭐ Selecciona tu nuevo Amiibo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartContent;
