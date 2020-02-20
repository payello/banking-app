import React, { Component } from "react";
import Deposit from "./components/Deposit";
import { connect } from "react-redux";
import { formatPrice, totalBalance } from "./helpers";

import Overdraft from "./components/Overdraft";
import RefusedPayment from "./components/RefusedPayment";
import Transactions from "./components/Transactions";

import "./App.css";
import Form from "./components/styles/Form";
import FormContainer from "./components/styles/FormContainer";

class App extends Component {
  submitWithdrawal = e => {
    e.preventDefault();
    if (
      this.state.number <=
      totalBalance(this.props.overdraftLimit, this.props.balance)
    ) {
      this.props.withdraw(parseInt(this.state.number) * 100);
      this.setState({
        refusedPayment: false
      });
    } else {
      console.log("here");
      this.setState({
        refusedPayment: true
      });
    }

    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="container">
        <h1>Peter's banking app.</h1>
        <div className="noticationContainer">
          <h3 style={{ color: this.props.balance < 0 ? "red" : "green" }}>
            Balance: {formatPrice(this.props.balance)}
          </h3>
        </div>

        <div className="noticationContainer">
          {this.props.balance > this.props.spendingCeiling
            ? `You've saved over ${formatPrice(
                this.props.spendingCeiling
              )}, time to invest!</span>`
            : "Save more, spend less"}
        </div>
        {this.state && this.state.refusedPayment ? <RefusedPayment /> : ""}
        {this.props.balance < 0 ? <Overdraft /> : ""}
        <FormContainer>
          <Form action="" onSubmit={this.submitWithdrawal}>
            <label>Withdraw</label>
            <input
              type="number"
              onChange={e => this.setState({ number: e.target.value })}
              placeholder="£0.00"
              step="0.01"
              required
            />
            <button type="submit">Confirm</button>
          </Form>
        </FormContainer>
        <Transactions props={this.props} />
        <div>
          <Deposit />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
    transactions: state.transactions,
    spendingCeiling: state.spendingCeiling,
    overdraftLimit: state.overdraftLimit,
    inOverdraft: state.inOverdraft,
    refusedPayment: state.refusedPayment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    withdraw: (amount, desc) => {
      dispatch({
        type: "withdraw",
        value: amount
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
