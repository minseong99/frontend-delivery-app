import React from "react";
import CartBtn from "../cart/CartBtn";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <section className={classes.mainHeader}>
      <h1>Delibery App</h1>
      <CartBtn />
    </section>
  );
};

export default MainHeader;
