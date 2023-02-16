//  defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//  state
const intialCounterState = {
  count: 0,
};

//  actions [object => (type => must be include, payload => payload uses for transfering data) ]
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

    default:
      state;
  }
};

//  redux in a nutshell
//  1. states
//  2. dispatch actions
//  3. reducer (is pure function, who will handle all the logics based on action types)
//  4. store
