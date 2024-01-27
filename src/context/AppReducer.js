const myFunction = (state, action) => {
    switch (action.type) {
        case 'DELETE_EXCHANGE':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_EXCHANGE':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
};

export default myFunction;
