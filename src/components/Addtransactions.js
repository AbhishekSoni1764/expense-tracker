import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'

export default function Addtransactions() {

    const [text,setText] = React.useState('')
    const [amount,setAmount] = React.useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e =>{
        e.preventDefault();

        const newExchange = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newExchange)
    }

    return (
        <div>
            <h3>ADD NEW TRANSACTION</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Record" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (Negative - Expense, Positive - Income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
