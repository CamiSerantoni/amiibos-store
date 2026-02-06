import "./CartElements.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../amiibo/productSlice";

const CartElements = () => {
  const { products = {} } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const addToCart = (id, name, price, image) => {
    dispatch(addProduct({ id, name, price, image }));
  };

  const deleteCart = (id) => {
    dispatch(deleteProduct({ id: id }));
  };

  return (
    <div className="cart-list">
      {Object.keys(products).map((element) => {
        return (
          <div className="cart-item" key={products[element].id}>
            <div className="cart-item-media">
              <img
                alt={products[element].name}
                src={products[element].image}
              />
            </div>
            <div className="cart-item-info">
              <h3>{products[element].name}</h3>
              <div className="cart-item-meta">
                <span className="cart-item-price">
                  ${products[element].price}
                </span>
                <span className="cart-item-qty">
                  Cantidad: {products[element].cantidad}
                </span>
              </div>
              <div className="cart-item-actions">
                <button
                  className="card-button-quitar"
                  onClick={() => deleteCart(products[element].id)}
                >
                  -
                </button>
                <button
                  className="card-button"
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
            <div className="cart-item-total">
              <span>Total</span>
              <strong>
                ${products[element].price * products[element].cantidad}
              </strong>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartElements;
