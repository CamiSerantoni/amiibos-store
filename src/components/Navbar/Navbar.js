import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../amiibo/productSlice";
import { removeAllCart } from "../../amiibo";

const Navbar = () => {
  const dispatch = useDispatch();
  let { precioTotal = 0 } = useSelector((state) => state.products);
  const { products = {} } = useSelector((state) => state.products);

  const addToCart = (id, name, price, image) => {
    dispatch(addProduct({ id, name, price, image }));
  };

  const deleteCart = (id) => {
    dispatch(deleteProduct({ id: id }));
  };

  const deleteAll = () => {
    dispatch(removeAllCart());
  };

  function showCart(x) {
    document.getElementById("products-id").style.display = "block";
  }
  function closeBtn() {
    document.getElementById("products-id").style.display = "none";
  }

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link className="navStyles" to={"/"}>
          <h1 className="amiiboTitle"> Amiib⭐</h1>
        </Link>

        <div className="cart-products" id="products-id">
          <p className="close-btn" onClick={closeBtn}>
            X
          </p>
          <h3>Mini carrito</h3>
          <div className="card-items">
            <div>
              {Object.keys(products).map((element) => {
                return (
                  //
                  <div>
                    <div className="miniCartContent">
                      {/* <div className="card-body"> */}
                      <div className="miniCartCaracter">
                        <h5 className="miniCartTitle">
                          {" "}
                          {products[element].name}
                        </h5>
                        <h6 className="miniCartSubTitle">
                          Precio: ${products[element].price}
                        </h6>{" "}
                      </div>
                    </div>
                    <div className="cantidad-container">
                      <button
                        className="card-button-quitar-MiniCarrito"
                        onClick={() => deleteCart(products[element].id)}
                      >
                        -
                      </button>{" "}
                      {products[element].cantidad}
                      <button
                        className="card-button-agregar-MiniCarrito"
                        onClick={() =>
                          addToCart(
                            products[element].id,
                            products[element].name,
                            products[element].price,
                            products[element].image
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    {/* </div> */}
                  </div>
                );
              })}
            </div>
          </div>

          <h2 className="totalTitle">
            Sub-Total: <strong class="price-total">{precioTotal} 💰</strong>
          </h2>

          <div className="accionesMiniCarrito">
            <button className="card-button-clean" onClick={() => deleteAll()}>
             🧹  Limpiar carrito
            </button>

            <Link to={"/carrito"} className="verCarritoCheckout">
              <button className="card-button-more"> 🛒 Finalizar compra</button>{" "}
            </Link>
          </div>
        </div>

        <div className="seeCarrito">
          <span onMouseOver={showCart} className="cart">
            {" "}
            🛒
          </span>{" "}
           Total en carrito: <span>{precioTotal} 💰</span>{" "}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
