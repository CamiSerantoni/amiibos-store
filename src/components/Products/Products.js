import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { getAmiibos } from "../../amiibo";

import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { amiibos = [] } = useSelector((state) => state.amiibos);

 

  useEffect(() => {
    dispatch(getAmiibos());
  }, []);

  return (
    <div>
      {amiibos.map((amiibo) => {
        return <ProductItem key={amiibo.tail} {...amiibo} />;
      })}
    </div>
  );
};

export default Products;
