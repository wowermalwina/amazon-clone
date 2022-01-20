export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //we are returning what the state originally was, but we going to change the basket.The basket will be now whatever it was + the action
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
