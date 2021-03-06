const initState = {
  balance: 200000,
  transactions: [],
  overdraftLimit: 25000,
  spendingCeiling: 400000,
  refusedPayment: false,
};

const transaction = (state = initState, action) => {
  const newState = { ...state };
  console.log("action", action);
  switch (action.type) {
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.value,
        transactions: state.transactions.concat({
          date: new Date(),
          transactionType: "withdraw",
          amount: action.value,
          newBalance: state.balance - action.value,
          desc: action.desc,
        }),
        overdraftLimit: state.overdraftLimit,
        spendingCeiling: state.spendingCeiling,
        refusedPayment: state.refusedPayment,
      };
      break;

    case "deposit":
      return {
        ...state,
        balance: state.balance + action.value,
        transactions: state.transactions.concat({
          date: new Date(),
          transactionType: "deposit",
          amount: action.value,
          newBalance: state.balance + action.value,
          desc: action.desc,
        }),
        overdraftLimit: state.overdraftLimit,
        spendingCeiling: state.spendingCeiling,
        refusedPayment: state.refusedPayment,
      };
      break;
    default:
  }
  return newState;
};

export default transaction;
