import React, { useContext } from "react";
import classes from "./CartBtn.module.css";
import cartContext from "../../context/cartContext";

const CartBtn = () => {
  const cartContextInfo = useContext(cartContext);

  const cartBtnHandler = () => {
    // 카트버튼이 클릭되면 카트가 보이는 상태 변경
    cartContextInfo.setIsShow(!cartContextInfo.isShow);
  };

  return (
    <button onClick={cartBtnHandler} className={classes.cartBtn}>
      <span>
        장바구니
        {cartContext.totalQuantity === 0 ? "" : cartContextInfo.totalQuantity}
      </span>
    </button>
  );
};

export default CartBtn;
