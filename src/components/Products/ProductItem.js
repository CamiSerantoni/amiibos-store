import "./Products.css";
import { useDispatch } from "react-redux";
import { priceSimulator } from "../../helper/priceSimulator";
import { addProduct } from "../../amiibo/productSlice";

const ProductItem = ({ name, image, type, release, tail, head, amiiboSeries  }) => {
  const price = priceSimulator(release.na);

  const id = tail + head;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct({ id, name, price, image, }));
  };

  return (
    <div className="card">
      {" "}
      <div className="card__content">
        <img alt={name} className="card-img-top" src={image} />{" "}
        <div className="card-body">
          <h3 className="card-title"> {name}</h3>   <h4 className="card-title">{amiiboSeries}   </h4>
          <h4 className="card-title"> Tipo: {type}</h4>
          <h4 className="card-title"> Precio: ${price}</h4>
       

          <div>
            <h3 className="card-title"> </h3>
          </div>

          <button className="card-button" onClick={() => addToCart()}>
            Agregar al carrito
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductItem;
