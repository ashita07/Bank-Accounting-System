const initialStateCoustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "s",
};

export default function customerReducer(state = initialStateCoustomer, action) {
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
export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateCustomer",
    payload: fullName,
  };
}
