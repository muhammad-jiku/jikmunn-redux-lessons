//  external import
const { createStore } = require('redux');

//  defining constants
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD_USER = 'ADD_USER';

//  state
const intialCounterState = {
  count: 1,
  users: ['Muhammad'],
};

//  actions [object => (type => must be include, payload => payload uses for transfering or receiving data) ]
//  Increment Counter
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

//  Decrement Counter
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

//  Reset Counter
const resetCounter = () => {
  return {
    type: RESET,
  };
};

// increment by value counter
const incerementByValueCounter = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// increment by value counter
const addUserCounter = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//  reducer for counter
const reducerCounter = (state = intialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 1,
      };

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case ADD_USER:
      return {
        count: state.count + 1,
        users: [...state.users, action.payload],
      };

    default:
      state;
  }
};

//  create store
const store = createStore(reducerCounter);

//  subscribing store
store.subscribe(() => {
  console.log(store.getState());
});

//  dispatching actions
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incerementByValueCounter(25));
store.dispatch(resetCounter());
store.dispatch(addUserCounter('Azizul'));
store.dispatch(addUserCounter('Hoque'));
store.dispatch(addUserCounter('Jiku'));

//  redux in a nutshell
//  1. states
//  2. dispatch actions
//  3. reducer (is pure function, who will handle all the logics based on action types)
//  4. store ((holding all the states), getState() => to watch the condition of the states , dispatch() => to dispatch actions , subscribe() => to subscribe the stores with the views )
