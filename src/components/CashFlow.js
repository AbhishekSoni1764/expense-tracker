import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'

export default function CashFlow() {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const pays = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(2)
  
  const costs = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(2)

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4> Income</h4>
          <p  className="money plus">$ {pays}</p>
        </div>
        <div>
          <h4> Expense</h4>
          <p  className="money minus">$ {costs}</p>
        </div>
      </div>
    </div>
  )
}
