//  external import
const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

//  defining products constants
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';

//  products state
const intialProductState = {
  products: ['Milk', 'Sugar', 'Coffee'],
  numOfProducts: 3,
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

//  create store
const store = createStore(productReducer, applyMiddleware(logger));

//  subscribing store
store.subscribe(() => {
  console.log(store.getState());
});

//  dispatching actions
store.dispatch(getProducts());
store.dispatch(addProduct('pen'));
store.dispatch(addProduct('pencil'));
store.dispatch(addProduct('geometry box'));

//  redux in a nutshell
//  1. states
//  2. dispatch actions
//  3. reducer (is pure function, who will handle all the logics based on action types)
//  4. store ((holding all the states), getState() => to watch the condition of the states , dispatch() => to dispatch actions , subscribe() => to subscribe the stores with the views )
