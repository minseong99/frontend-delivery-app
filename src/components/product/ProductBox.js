import React, { useState } from "react";
import classes from "./ProductBox.module.css";

const ProductBox = (props) => {
  // 제출 수량 상태
  const [enterdQuantity, setEnterdQuantity] = useState("1");
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  // 상품 제출 핸들러
  const productSubmitHandler = (event) => {
    event.preventDefault();
    setEnterdQuantity("1");
    // 바로 공백을 누르고 입력을 했을때 1로 설정해야한다.
    if (!enterdQuantity) {
      console.log(1);
    }
    console.log(enterdQuantity);
  };

  // 수량 변화 핸들러
  const quantityChangeHandler = (event) => {
    setEnterdQuantity(event.value);
    setQuantityIsValid(true);
  };

  // 유효성 검사를 위한 blur handler
  const blurHandler = (event) => {
    const quantity = event.target.value;
    // 유효성 검사
    if (!Number(quantity.trim())) {
      setQuantityIsValid(false);
      return;
    }
  };

  return (
    <form onSubmit={productSubmitHandler} className={classes.productBox}>
      <header className={classes.productHeader}>
        <h3>{props.name}</h3>
        <div>
          <label for="quantity">수량</label>
          <input
            type="text"
            id="quantity"
            onChange={quantityChangeHandler}
            onBlur={blurHandler}
            className={
              quantityIsValid ? "quantity" : `quantity ${classes.invalid}`
            }
            value={enterdQuantity}
          />
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
