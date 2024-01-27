const myFunction = (state, action) => {
    switch (action.type) {
        case 'DELETE_EXCHANGE':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state
    }
};

export default myFunction;