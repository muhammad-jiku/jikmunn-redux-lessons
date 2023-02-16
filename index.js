//  defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

//  states
const intialCounterState = {
  count: 0,
};

const intialUsersState = {
  users: [
    {
      name: 'Jiku',
    },
  ],
};

//  actions [object => type => must be include, payload => payload uses for transfering data ]
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

//  add user Counter
const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      name: 'Muhammad Azizul Hoque Jiku',
    },
  };
};

//  redux in a nutshell
//  1. states
//  2. dispatch actions
//  3. reducers
//  4. store
