import {
    GET_LOGIN_DETAILS
} from './actionType'

export function updateLoginDetails(data){
    return {
        type: GET_LOGIN_DETAILS,
        payload:data
    }
}