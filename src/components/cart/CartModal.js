import React, { useContext } from "react";
import classes from "./CartModal.module.css";
import cartContext from "../../context/cartContext";
import CartItem from "./CartItem";

const CartModal = () => {
  const cartContextInfo = useContext(cartContext);

  // 카트를 리셋시킨다.
  const cancelHandler = () => {
    cartContextInfo.setIsShow(false);
  };

  return (
    <div className={classes.cartModal}>
      {cartContextInfo.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
      <nav className={classes.cartNav}>
        <span>전체 금액</span>

        <div>
          <span
            className={classes.totalPrice}
          >{`${cartContextInfo.totalPrice}원`}</span>
          <div className={classes.cartNavBtns}>
            <button onClick={cancelHandler}>취소</button>
            <button>결제</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CartModal;
