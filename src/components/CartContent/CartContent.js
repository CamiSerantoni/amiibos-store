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
    <>
      <h3 className="resume-cart"> Finalizar compra</h3>
    
    <div className="actionButtonsCart">
         <button className="card-button-clean" onClick={() => deleteAll()}>
        🧹Limpiar carrito
      </button>


<Link to={"/"}>
          <button className="card-button-more">
            {" "}
          agrega más⭐ {" "}
          </button>
        </Link>
    </div>
 
      <CartElements />

      
      
      <CartTotal precioTotal={precioTotal} />
    </>
  ) : (
    <div div className="cart-message-center">
      <h3> Tu carrito esta vacío </h3>
      <p>¡Descubre todos los amiibo's que tenemos para ti!</p>
      <div className="cart-container">
        <img
          className="cart-img"
          alt="carrito vacío"
          src="https://stonehouseathenry.ie/images/empty-cart.png"
        />
        <Link to={"/"}>
          <button className="search-products">
            {" "}
            ⭐ Selecciona tu nuevo Amiibo{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartContent;
