import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'
import Transactions from './Transactions'

export default function History() {
    const { transactions }  = useContext(GlobalContext)

    return (
        <>
            <h3>HISTORY</h3>
            <ul className="list">
               {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))} 
            </ul>
        </>
    )
}
