import actionTypes from "./actionTypes";

/**
 * action creator
 * @param id
 * @returns {{payload: {id: *}, type: string}}
 */

export const counterIncrement = (id) => {
    return {
        type: actionTypes.INCREMENT_COUNTER_ACTION,
        payload: {id}
    }
}

export const counterDecrement = (id) => {
    return {
        type: actionTypes.DECREMENT_COUNTER_ACTION,
        payload: {id}
    }
}



