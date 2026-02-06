import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../amiibo/productSlice";
import { removeAllCart } from "../../amiibo";
import amiiboLogo from "../../assetsProject/toppng.com-amiibo-logo-1280x292.png";

const Navbar = () => {
  const dispatch = useDispatch();
  let { precioTotal = 0 } = useSelector((state) => state.products);
  const { products = {} } = useSelector((state) => state.products);
  const cartCount = Object.values(products).reduce(
    (acc, item) => acc + (item?.cantidad || 0),
    0
  );
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (id, name, price, image) => {
    dispatch(addProduct({ id, name, price, image }));
  };

  const deleteCart = (id) => {
    dispatch(deleteProduct({ id: id }));
  };

  const deleteAll = () => {
    dispatch(removeAllCart());
  };

  const showCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link className="navStyles" to={"/"}>

          
            <span className="brand-text">Amiibo Store</span>
         
        </Link>

        <div
          className={`cart-products ${isOpen ? "open" : ""}`}
          id="products-id"
          onMouseLeave={closeCart}
        >
          <div className="mini-cart-header">
            <h3>Mini carrito</h3>
            <button className="mini-cart-close" onClick={closeCart}>
              ×
            </button>
          </div>

          {Object.keys(products).length === 0 ? (
            <div className="mini-cart-empty">
              <p>Tu carrito está vacío.</p>
              <Link to={"/"} onClick={closeCart}>
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              <div className="mini-cart-list">
                {Object.keys(products).map((element) => (
                  <div className="mini-cart-item" key={products[element].id}>
                    <img
                      className="mini-cart-image"
                      alt={products[element].name}
                      src={products[element].image}
                    />
                    <div className="mini-cart-info">
                      <span className="mini-cart-title">
                        {products[element].name}
                      </span>
                      <span className="mini-cart-price">
                        ${products[element].price}
                      </span>
                      <div className="mini-cart-actions">
                        <button
                          className="mini-cart-btn minus"
                          onClick={() => deleteCart(products[element].id)}
                        >
                          -
                        </button>
                        <span className="mini-cart-qty">
                          {products[element].cantidad}
                        </span>
                        <button
                          className="mini-cart-btn plus"
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
                    </div>
                    <div className="mini-cart-total">
                      ${products[element].price * products[element].cantidad}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mini-cart-footer">
                <div className="mini-cart-subtotal">
                  Sub-Total <strong>{precioTotal} 💰</strong>
                </div>
                <div className="accionesMiniCarrito">
                  <button
                    className="card-button-clean"
                    onClick={() => deleteAll()}
                  >
                    🧹 Limpiar carrito
                  </button>
                  <Link to={"/carrito"} className="verCarritoCheckout">
                    <button className="card-button-more">
                      🛒 Finalizar compra
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="seeCarrito">
          <button
            type="button"
            className="cart-button"
            onMouseEnter={showCart}
            onClick={toggleCart}
            aria-label="Ver mini carrito"
          >
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span className="cart-text">Total: {precioTotal} 💰</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
