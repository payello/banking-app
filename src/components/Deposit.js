import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./styles/Form";
import FormContainer from "./styles/FormContainer";

class Deposit extends Component {
  submitDeposit = e => {
    e.preventDefault();
    this.props.deposit(parseInt(this.state.amount) * 100);

    e.currentTarget.reset();
  };

  render() {
    return (
      <FormContainer>
        <Form action="" onSubmit={this.submitDeposit}>
          <label htmlFor="deposit">Make a deposit</label>
          <input
            type="number"
            onChange={e => this.setState({ amount: e.target.value })}
            placeholder="£0.00"
            step="0.01"
            required
          />
          <button type="submit">Save</button>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
    transactions: state.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: amount => dispatch({ type: "deposit", value: amount })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
