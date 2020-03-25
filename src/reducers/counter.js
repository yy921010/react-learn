import actionTypes from '../actions/actionTypes'

const initState = [
    {
        id: 1,
        title: 'iphone',
        counter: 2
    },
    {
        id: 2,
        title: 'iphone11',
        counter: 2
    },
    {
        id: 3,
        title: 'iphone7',
        counter: 2
    }
]

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER_ACTION:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.counter += 1
                }
                return item
            })
        case actionTypes.DECREMENT_COUNTER_ACTION:
            console.log(state);
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.counter -= 1
                }
                return item
            })
        default:
            return state;
    }
}
