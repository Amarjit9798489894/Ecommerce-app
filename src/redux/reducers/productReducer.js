import { ActionTypes } from "../constants/action-type";
const initialState = {
  products: [],
};

// various reducers for various actions

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SORT_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

const initial = {
  array: [],
};

export const addingReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        array: [...state.array, ...payload],
      };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

const cart = [];

export const handleCartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      //check if product is already exists
      const exists = state.find((x) => x.id === product.id);
      if (exists) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case ActionTypes.REMOVE_FROM_CART:
      const exists1 = state.find((x) => x.id === product.id);
      if (exists1.qty === 1) {
        return state.filter((x) => x.id !== exists1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

const initialCount = Array(20).fill(2);

export const manageCountReducer = (state = initialCount, action) => {
  // console.log(action.payload, "getting id ");
  switch (action.type) {
    case ActionTypes.COUNT_DOWN:
      var current = state[action.payload];
      state.splice(action.payload, 1);
      state.splice(action.payload, 0, --current);

      return state;
    case ActionTypes.COUNT_UP:
      var currentTwo = state[action.payload];
      state.splice(action.payload, 1);
      state.splice(action.payload, 0, ++currentTwo);

      return state;
    default:
      return state;
  }
};
