import React from "react";
import products from "../../util/productsInfo";
import ProductBox from "./ProductBox";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <ui className={classes.productUI}>
      {products.map((product) => (
        <ProductBox
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </ui>
  );
};

export default Products;
