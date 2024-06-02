import React, { useState } from "react";
import CartBtn from "../cart/CartBtn";
import classes from "./MainHeader.module.css";
import CartModal from "../cart/CartModal";

const MainHeader = () => {
  // cart모달이 보일지 안보일지에 대한 state
  const [isShowCart, setIsShowCart] = useState(false);

  const cartBtnHandler = () => {
    // 카트버튼이 클릭되면 카트가 보이는 상태 변경
    setIsShowCart(!isShowCart);
  };

  return (
    <section className={classes.mainHeader}>
      <h1>Delivery App</h1>
      <CartBtn clickHandler={cartBtnHandler} />
      {/* cart modal */}
      {isShowCart && <CartModal />}
    </section>
  );
};

export default MainHeader;
