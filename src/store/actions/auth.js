import {
    LOGIN, LOGOUT
} from './actionTypes';

export const login = payload => {
    return {
        type: LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}