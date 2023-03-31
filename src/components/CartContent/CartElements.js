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
    <div>
      {Object.keys(products).map((element) => {
        return (
          //
          <div>
            <div className="cartContent">
              <div className="card-body">
                <img src={products[element].image} />
                <h3> {products[element].name}</h3>
                <h4>Precio: ${products[element].price}</h4>
                <button
                  className="card-button-quitar"
                  onClick={() => deleteCart(products[element].id)}
                >
                  Remover producto
                </button>
                <h4>Cantidad: {products[element].cantidad}</h4>{" "}
                <button
                  className="card-button"
                  onClick={() =>
                    addToCart(
                      products[element].id,
                      products[element].name,
                      products[element].price,
                      products[element].image,
                    )
                  }
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartElements;
