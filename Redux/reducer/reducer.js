import {
    GET_LOGIN_DETAILS
} from '../action/actionType';

const initialState = {
    LoginData: [],
}

function updateStatus(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN_DETAILS:
            return {
                ...state,
                LoginData: action.payload,
            }
        default:
            return state;
    }
}
export default updateStatus;