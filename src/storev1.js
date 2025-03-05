import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCoustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "s",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.loan,
        balance: state.balance + action.payload.loan,
        loanPurpose: action.payload.purpose,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCoustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createAt: action.payload.createAt,
      };
    case "customer/updateCustomer":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

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

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}
store.dispatch(deposit(500));
console.log(store.getState());

function withdraw(amount) {
  return { type: "account/deposit", payload: amount };
}
store.dispatch(withdraw(100));
console.log(store.getState());

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { loan: amount, purpose },
  };
}
store.dispatch(requestLoan(1000, "ab kya hi batau"));
console.log(store.getState());
function payLoan() {
  return {
    type: "account/payLoan",
  };
}
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateCustomer",
    payload: fullName,
  };
}
store.dispatch(createCustomer("ashita maheshwari", "123456"));
console.log(store.getState());
store.dispatch(updateName("Qunee maheshwari"));
console.log(store.getState());
