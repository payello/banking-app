import { totalBalance } from "../helpers";

const handleTransaction = (e, context, type) => {
  e.preventDefault();
  if (type === "withdraw") {
    if (
      context.state.number <=
      totalBalance(context.props.overdraftLimit, context.props.balance)
    ) {
      context.props.withdraw(parseFloat(context.state.number) * 100);
      context.setState({
        refusedPayment: false
      });
    } else {
      context.setState({
        refusedPayment: true
      });
    }
  } else if (type === "deposit") {
    context.props.deposit(parseFloat(context.state.amount) * 100);
  }

  e.currentTarget.reset();
};

export default handleTransaction;
