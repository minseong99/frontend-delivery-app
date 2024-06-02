import React from "react";
import classes from "./ProductBox.module.css";

const ProductBox = (props) => {
  return (
    <form className={classes.productBox}>
      <header className={classes.productHeader}>
        <h3>{props.name}</h3>
        <div>
          <label for="quantity">수량</label>
          <input type="text" id="quantity" value="" />
        </div>
      </header>
      <main className={classes.productMain}>
        <span>{`${props.price}원`}</span>
        <button>추가하기</button>
      </main>
    </form>
  );
};

export default ProductBox;
