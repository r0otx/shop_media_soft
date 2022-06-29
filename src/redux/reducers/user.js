import {SET_USER_DATA} from "../constants";

const initialState = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        comment: ''
    }
}

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_DATA: {
            return {
                ...state,
                user: {...state.user, ...payload}
            }
        }
        default:
            return state;
    }
}

export default userReducer;