//  external imports
const { default: axios } = require('axios');
const { createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk');

//  defining todos constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
const API_URI = 'https://jsonplaceholder.typicode.com/todos';
// const API_URI = 'https://jsonplaceholder.typicode.com/tods'; // for checking error status

//  todos state
const intialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

//  actions [object => (type => must be include, payload => payload uses for transfering or receiving data) ]
//  get todos req
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

//  get todos success
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

//  get todos failure
const getTodosFailure = (error) => {
  return {
    type: GET_TODOS_FAILURE,
    payload: error,
  };
};

//  todo reducer
const todosReducer = (state = intialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };

    case GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//  async action creators
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URI)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getTodosFailure(err.message));
      });
  };
};

//  create store
const store = createStore(todosReducer, applyMiddleware(thunk));

//  subscribing store
store.subscribe(() => {
  console.log(store.getState());
});

//  dispatching actions
store.dispatch(fetchData());

//  redux in a nutshell
//  1. states
//  2. dispatch actions
//  3. reducer (is pure function, who will handle all the logics based on action types)
//  4. store ((holding all the states), getState() => to watch the condition of the states , dispatch() => to dispatch actions , subscribe() => to subscribe the stores with the views )
