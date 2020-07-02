import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./styles/Form";

import FormContainer from "./styles/FormContainer";
import handleTransaction from "./handleTransaction";

import changeWithdraw from "../actionCreators/changeWithdraw";
import changeDeposit from "../actionCreators/changeDeposit";

const type = "deposit";

class Deposit extends Component {
  render() {
    return (
      <FormContainer>
        <Form
          action=""
          onSubmit={(e) => {
            handleTransaction(e, this, type);
          }}
        >
          <label htmlFor="deposit">Make a deposit</label>
          <input
            type="number"
            onChange={(e) => this.setState({ amount: e.target.value })}
            placeholder="£0.00"
            step="0.01"
            required
          />
          <input
            type="text"
            onChange={(e) => this.setState({ desc: e.target.value })}
            placeholder="Description"
            required
          />
          <button type="submit">Save</button>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = ({ amount, description }) => ({
  amount,
  description,
});

const mapDispatchToProps = (dispatch) => ({
  setAmount(amount) {
    dispatch(changeWithdraw(amount));
  },

  setDescription(amount) {
    dispatch(changeDeposit(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
