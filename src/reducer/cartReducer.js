const cartInfoReducer = (state, action) => {
  //아이템이 추가되었을때
  if (action.type === "add") {
    // action에 payload로 id, name, price, quantity등을 받음
    const newItem = action.item;
    // items에 추가할 아이템이 있는지 확인
    const exsitingItem = state.items?.find((item) => item.id === newItem.id);

    // 추가할 아이템이 items에 존재하지 않을경우
    if (!exsitingItem) {
      return {
        ...state,
        items: [...state.items, newItem],
        totalQuantity: state.totalQuantity + newItem.quantity,
        totalPrice: state.totalPrice + newItem.price * newItem.quantity,
      };
    }
    // 추가할 아이템이 items에 존재할 경우
    else {
      // 존재하는 아이템의 수량을 하나만 더해준다.
      exsitingItem.quantity += newItem.quantity;
      const items = state.items.filter((item) => item.id !== exsitingItem.id);
      items.push(exsitingItem);

      return {
        ...state,
        items: items,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + newItem.price,
      };
    }
  }
  // 아이템 제거
  if (action.type === "remove") {
    // 아이템 제거 로직

    const targetId = action.id;
    // action으로 받은 id에 해당하는 아이템이 있는지 찾기
    const exsitingItem = state.items.find((item) => item.id === targetId);

    // 지울 아이템이 있으면
    if (exsitingItem) {
      // 수량이 1개남았으면 items배열에서 완전히 삭제
      if (exsitingItem.quantity === 1) {
        const newItems = state.items.filter(
          (item) => item.id !== exsitingItem.id
        );
        return {
          ...state,
          items: newItems,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - exsitingItem.price,
        };
      }
      // 수량이 여러개 있으면 수량과 총수량, 총가격 업데이트
      else {
        exsitingItem.quantity -= 1;
        const newItems = state.items.filter(
          (item) => item.id !== exsitingItem.id
        );
        newItems.push(exsitingItem);
        return {
          ...state,
          items: newItems,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - exsitingItem.price,
        };
      }
    }
    // not exist
    else {
      return {
        ...state,
      };
    }
  }
};

export default cartInfoReducer;
