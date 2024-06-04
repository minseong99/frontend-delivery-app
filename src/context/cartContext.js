import { createContext, useReducer, useState } from "react";
import cartInfoReducer from "../reducer/cartReducer";

const cartContext = createContext({
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  cartDispatch: (object) => {},
  isShow: false,
  setIsShow: (flag) => {},
});

const CartProvider = (props) => {
  const [cartInfo, cartInfoDispacth] = useReducer(cartInfoReducer, {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [cartIsShow, setCartIsShow] = useState(false);

  //cartContext에 있는 값들을 전역적으로 사용하기 위한 Provider
  return (
    <cartContext.Provider
      value={{
        items: cartInfo.items,
        totalQuantity: cartInfo.totalQuantity,
        totalPrice: cartInfo.totalPrice,
        cartDispatch: cartInfoDispacth,
        isShow: cartIsShow,
        setIsShow: setCartIsShow,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;

export { CartProvider };
