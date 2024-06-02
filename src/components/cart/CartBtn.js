import React from "react";
import classes from "./CartBtn.module.css";

const CartBtn = (props) => {
  return (
    <button onClick={props.clickHandler} className={classes.cartBtn}>
      <span>장바구니</span>
    </button>
  );
};

export default CartBtn;
