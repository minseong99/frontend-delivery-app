import React from "react";
import classes from "./CartBtn.module.css";

const CartBtn = () => {
  return (
    <button className={classes.cartBtn}>
      <span>장바구니</span>
    </button>
  );
};

export default CartBtn;
