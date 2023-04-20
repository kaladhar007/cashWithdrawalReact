// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickWithdrawAmount = withdrawAmount => {
    this.setState(prevState => ({
      amount: prevState.amount - parseInt(withdrawAmount),
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="page">
        <div className="cardContainer">
          <div className="nameDiv">
            <p className="S_para">s</p>
            <h1 className="mainHeading">Sarah Williams</h1>
          </div>
          <div className="balanceDiv">
            <p className="balancePara">Your Balance</p>
            <div className="amountDiv">
              <p className="amount">{amount}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <div className="withdrawDiv">
            <p className="withdrawHeading">Withdraw</p>
            <p className="chooseSUM">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttonsDiv">
            {denominationsList.map(item => (
              <DenominationItem
                onClickWithdrawAmount={this.onClickWithdrawAmount}
                key={item.id}
                details={item}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
