import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../helpers";
import changeDeposit from '../actionCreators/changeDeposit'
import changeWithdraw from '../actionCreators/changeWithdraw'

class Transactions extends Component {
  render() {
    let transactions = (
      <Table>
        {this.props.trans}
        {this.props.transactions
          .sort((a, b) => b - a)
          .map((transaction, index) => (
            <div key={index} className="transactionContainer">
              <div>
                {transaction.transactionType === "deposit" ? (
                  <div className="amount">
                    DEPOSIT: {formatPrice(transaction.amount)}
                  </div>
                ) : (
                  <div className="amount">
                    WITHDRAWAL: - {formatPrice(transaction.amount)}
                  </div>
                )}
                <div className="date">
                  {" "}
                  Date: {transaction.date.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
      </Table>
    );
    return <>{transactions}</>;
  }
}

const Table = styled.div`
  .transactionContainer {
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 45%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     deposit: (amount, desc) =>
//       dispatch({ type: "deposit", value: amount, desc: desc })
//   };
// };

const mapDispatchToProps = dispatch => ({
  setDeposit(amount, description) {
    dispatch(changeDeposit(amount, description))
  },
  setWithdraw(amount, description) {
    dispatch(changeWithdraw(amount, description))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
