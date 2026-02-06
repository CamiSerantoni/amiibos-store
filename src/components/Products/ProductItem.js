import "./Products.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { priceSimulator } from "../../helper/priceSimulator";
import { addProduct } from "../../amiibo/productSlice";

const ProductItem = ({ name, image, type, release, tail, head, amiiboSeries  }) => {
  const price = priceSimulator(release.na);

  const id = tail + head;

  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    dispatch(addProduct({ id, name, price, image, }));
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 1400);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <div className="card">
      <div className="card__content">
        <div className="card-media">
          <img alt={name} className="card-img-top" src={image} />
        </div>
        <div className="card-body">
          <div className="card-header">
            <span className="card-chip">{amiiboSeries}</span>
            <span className="card-chip secondary">{type}</span>
          </div>
          <h3 className="card-title">{name}</h3>
          <div className="card-meta">
            <span className="card-price">${price}</span>
            <span className="card-release">
              Lanzamiento: {release?.na || "N/D"}
            </span>
          </div>

          <button className="card-button" onClick={() => addToCart()}>
            Agregar al carrito
          </button>
          {showToast && (
            <div className="toast-success" role="status" aria-live="polite">
              Agregado al carrito
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
