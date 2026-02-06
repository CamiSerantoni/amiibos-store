import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { fetchAmiibos } from "../../amiibo";

import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { amiibos = [], isLoading = false, error = null } = useSelector(
    (state) => state.amiibos
  );

  useEffect(() => {
    dispatch(fetchAmiibos());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchAmiibos());
  };

  return (
    <div id="productos" className="product-card-container">
      {isLoading && (
        <>
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="card skeleton-card" key={`skeleton-${index}`}>
              <div className="card__content">
                <div className="skeleton-image" />
                <div className="skeleton-lines">
                  <div className="skeleton-line" />
                  <div className="skeleton-line short" />
                  <div className="skeleton-line" />
                  <div className="skeleton-button" />
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {!isLoading && error && (
        <div className="product-state">
          <h3>Ocurrió un error al cargar los productos.</h3>
          <p>{error}</p>
          <button className="card-button" onClick={handleRetry}>
            Reintentar
          </button>
        </div>
      )}

      {!isLoading && !error && amiibos.length === 0 && (
        <div className="product-state">
          <h3>No hay productos para mostrar.</h3>
          <button className="card-button" onClick={handleRetry}>
            Recargar
          </button>
        </div>
      )}

      {!isLoading &&
        !error &&
        amiibos.map((amiibo) => (
          <ProductItem key={amiibo.tail} {...amiibo} />
        ))}
    </div>
  );
};

export default Products;
