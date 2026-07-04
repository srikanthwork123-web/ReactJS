import {combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Deposit":
      return { ...state,balance: state.balance + +action.payload};
    case "Withdraw":
      return { ...state,balance: state.balance - +action.payload};
    case "UPDATE_NAME":
      return { ...state,fullName: action.payload};
    case "UPDATE_MOBILE":
      return { ...state,mobile: action.payload};
    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, {amount: action.payload.amount, type: action.payload.type, date: action.payload.date}];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  transactions: transactionReducer,
  
});

const store = createStore(rootReducer);

export default store;