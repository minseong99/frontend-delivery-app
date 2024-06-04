import React, { useContext } from "react";
import CartBtn from "../cart/CartBtn";
import classes from "./MainHeader.module.css";
import CartModal from "../cart/CartModal";
import cartContext from "../../context/cartContext";

const MainHeader = () => {
  // cart모달이 보일지 안보일지에 대한 state
  const cartContextInfo = useContext(cartContext);

  return (
    <section className={classes.mainHeader}>
      <h1>Delivery App</h1>
      <CartBtn />
      {/* cart modal */}
      {cartContextInfo.isShow && <CartModal />}
    </section>
  );
};

export default MainHeader;
