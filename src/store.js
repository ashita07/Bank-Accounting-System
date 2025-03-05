import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/CustomerSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
// store.dispatch({ type: "account/deposit", payload: 500 });

// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     loan: 1000,
//     purpose: "For edu",
//   },
// });
// console.log(store.getState());
