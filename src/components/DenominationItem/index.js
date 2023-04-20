// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onClickWithdrawAmount} = props
  const {value} = details

  const onClickDenominationItem = () => {
    console.log('******   onClickDenominationItem   ********')
    onClickWithdrawAmount(value)
  }
  return (
    <li>
      <button onClick={onClickDenominationItem} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
