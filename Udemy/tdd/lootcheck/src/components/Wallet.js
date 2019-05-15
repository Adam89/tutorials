import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/Balance';

export class Wallet extends Component {
  constructor() {
    super();
      this.state = { balance: undefined }
  }

  updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })


  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    const { balance } = this.props
    return (
      <div>
        <h3 className='balance'>Wallet Balance: { balance }</h3>
        <br/>
        <input 
          className='input-wallet'
          onChange={this.updateBalance}/>
        <button 
          className='btn-deposit'
          onClick={this.deposit}>DEPOSIT
        </button>
        <button
          className='btn-withdraw'
          onClick={this.withdraw}>WITHDRAW
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);
