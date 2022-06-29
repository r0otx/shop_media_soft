import {SET_ADDRESS} from "../constants"

const initialState = {
    country: '',
    city: '',
    street: '',
    building: '',
    apt: '',
    zip: ''
}

const addressReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ADDRESS: {
            return {
                ...state,
                ...payload
            }
        }
        default:
            return state;
    }

}

export default addressReducer;