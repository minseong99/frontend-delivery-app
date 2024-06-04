import React, { Fragment, useContext } from "react";
import classes from "./CartModal.module.css";
import cartContext from "../../context/cartContext";
import CartItem from "./CartItem";
import ReactDOM from "react-dom";

const Backdrop = () => {
  const cartContextInfo = useContext(cartContext);
  const backdropHandler = () => {
    cartContextInfo.setIsShow(false);
  };

  return <div className={classes.backdrop} onClick={backdropHandler} />;
};

const Overlay = () => {
  const cartContextInfo = useContext(cartContext);

  // 카트 모달없애는 로직
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

const CartModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default CartModal;
