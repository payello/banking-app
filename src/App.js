import React, { Component } from "react";
import Deposit from "./components/Deposit";
import { connect } from "react-redux";
import { formatPrice } from "./helpers";

import handleTransaction from "./components/handleTransaction";
import Overdraft from "./components/Overdraft";
import RefusedPayment from "./components/RefusedPayment";
import Transactions from "./components/Transactions";

import "./App.css";
import Form from "./components/styles/Form";
import FormContainer from "./components/styles/FormContainer";

const type = "withdraw";

class App extends Component {
  // constructor() {
  //   super();
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    return (
      <div className="container">
        <h1>Peter's banking app.</h1>
        <div className="notificationContainer">
          <h3 style={{ color: this.props.balance < 0 ? "red" : "green" }}>
            Balance: {formatPrice(this.props.balance)}
          </h3>
          <p>Overdraft limit: {formatPrice(this.props.overdraftLimit)}</p>
          <p>Account ceiling: {formatPrice(this.props.spendingCeiling)}</p>
        </div>

        <div className="notificationContainer">
          {this.props.balance > this.props.spendingCeiling
            ? `You've saved over ${formatPrice(
                this.props.spendingCeiling
              )}, time to invest!</span>`
            : "Save more, spend less"}
        </div>
        {this.state && this.state.refusedPayment ? <RefusedPayment /> : ""}
        {this.props.balance < 0 ? <Overdraft /> : ""}
        <FormContainer>
          <Form
            action=""
            onSubmit={e => {
              handleTransaction(e, this, type);
            }}
          >
            <label>Withdraw</label>
            <input
              type="number"
              onChange={e => this.setState({ number: e.target.value })}
              placeholder="£0.00"
              step="0.01"
              required
            />
            <input
              type="text"
              onChange={e => this.setState({ desc: e.target.value })}
              placeholder="Transaction description"
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
        value: amount,
        desc: desc
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
