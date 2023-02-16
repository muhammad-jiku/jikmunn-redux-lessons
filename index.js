//  external import
const { createStore, combineReducers } = require('redux');

//  defining products constants
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';

//  defining carts constants
const ADD_CART = 'ADD_CART';
const GET_CARTS = 'GET_CARTS';

//  products state
const intialProductState = {
  products: ['Milk', 'Sugar', 'Coffee'],
  numOfProducts: 3,
};

//  carts state
const intialCartState = {
  carts: ['Milk', 'Sugar', 'Coffee'],
  numOfCarts: 3,
};

//  actions [object => (type => must be include, payload => payload uses for transfering or receiving data) ]
//  get products
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

// add product
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

//  get carts
const getCarts = () => {
  return {
    type: GET_CARTS,
  };
};

// add product
const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

//  product reducer
const productReducer = (state = intialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numOfProducts: state.numOfProducts + 1,
      };

    default:
      return state;
  }
};

//  cart reducer
const cartReducer = (state = intialCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      };

    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        numOfCarts: state.numOfCarts + 1,
      };

    default:
      return state;
  }
};

//  combining multiple reducers
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

//  create store
const store = createStore(rootReducer);

//  subscribing store
store.subscribe(() => {
  console.log(store.getState());
});

//  dispatching actions
store.dispatch(getProducts());
store.dispatch(addProduct('pen'));
store.dispatch(addProduct('pencil'));
store.dispatch(addProduct('geometry box'));
store.dispatch(getCarts());
store.dispatch(addCart('table'));
store.dispatch(addCart('notebook'));
store.dispatch(addCart('book'));

//  redux in a nutshell
//  1. states
//  2. dispatch actions
//  3. reducer (is pure function, who will handle all the logics based on action types)
//  4. store ((holding all the states), getState() => to watch the condition of the states , dispatch() => to dispatch actions , subscribe() => to subscribe the stores with the views )
